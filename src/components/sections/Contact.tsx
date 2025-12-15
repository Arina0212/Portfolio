import React, { useState } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { copyToClipboard } from '../../utils/helpers';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  // Явно типизированный div для корректной работы className и других HTML-пропсов
  const MotionDiv = motion.div as React.ComponentType<
    React.HTMLAttributes<HTMLDivElement> & MotionProps
  >;

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Автоматически определит правильный URL
    const apiUrl = import.meta.env.PROD 
      ? '/api/send-to-telegram'  // На Vercel
      : 'http://localhost:3000/api/send-to-telegram';  // Для локальной разработки

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert('✅ Сообщение отправлено! Скоро с вами свяжусь.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('❌ Ошибка отправки: ' + result.error);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('🌐 Ошибка сети. Пожалуйста, попробуйте ещё раз.');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleCopy = async (text: string, label: string) => {
    const success = await copyToClipboard(text);
    setCopyStatus(success ? `✓ ${label} скопирован` : 'Ошибка копирования');
    setTimeout(() => setCopyStatus(''), 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'arina.shubina.02@mail.ru',
      color: 'text-blue-500'
    },
    {
      icon: <FaPhone />,
      label: 'Телефон',
      value: '+7 (922) 343-42-29',
      color: 'text-green-500'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Локация',
      value: 'Екатеринбург, Россия',
      color: 'text-red-500'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <MotionDiv variants={fadeInUp} className="text-center mb-12">
            <h2 className="section-title">
              Свяжитесь <span className="gradient-text">со мной</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Есть проект в разработке или хотите обсудить сотрудничество? 
              Буду рада помочь!
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div>
              <Card className="h-full">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Контактная информация
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <MotionDiv
                      key={index}
                      variants={fadeInUp}
                      custom={index}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                      onClick={() => handleCopy(info.value, info.label)}
                    >
                      <div className={`text-2xl ${info.color}`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {info.label}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {info.value}
                        </p>
                      </div>
                    </MotionDiv>
                  ))}
                </div>

                {copyStatus && (
                  <MotionDiv
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg text-sm"
                  >
                    {copyStatus}
                  </MotionDiv>
                )}

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Обычно отвечаю в течение нескольких часов
                  </p>
                  <p className="text-sm text-gray-500">
                    Рабочие часы: Пн-Пт, 9:00-18:00
                  </p>
                </div>
              </Card>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <Card>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Напишите мне
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Имя *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Тема *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="О чем хотите поговорить?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Расскажите о вашем проекте или идее..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    icon={<FaPaperPlane />}
                    fullWidth
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};
