import React, { useState } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { copyToClipboard } from '../../utils/helpers';

const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>;

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'arina.shubina.02@mail.ru',
    color: 'text-blue-500',
    copyable: true,
  },
  {
    icon: <FaPhone />,
    label: 'Телефон',
    value: '+7 (922) 343-42-29',
    color: 'text-green-500',
    copyable: true,
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Локация',
    value: 'Екатеринбург, Россия',
    color: 'text-red-500',
    copyable: false,
  },
];

export const Contact: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopy = async (text: string, label: string) => {
    const success = await copyToClipboard(text);
    setCopyStatus(success ? `✓ ${label} скопирован` : 'Ошибка копирования');
    setTimeout(() => setCopyStatus(''), 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <MotionDiv variants={fadeInUp} className="text-center mb-10">
            <h2 className="section-title">
              Свяжитесь <span className="gradient-text">со мной</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Открыта к сотрудничеству и новым проектам
            </p>
          </MotionDiv>

          <MotionDiv variants={fadeInUp} className="space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors${info.copyable ? ' cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/60' : ''}`}
                onClick={() => info.copyable && handleCopy(info.value, info.label)}
                title={info.copyable ? 'Нажмите, чтобы скопировать' : undefined}
              >
                <div className={`text-xl ${info.color} shrink-0`}>{info.icon}</div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide">{info.label}</p>
                  <p className="font-medium text-gray-900 dark:text-white">{info.value}</p>
                </div>
                {info.copyable && (
                  <span className="ml-auto text-xs text-gray-400 dark:text-gray-500">копировать</span>
                )}
              </div>
            ))}
          </MotionDiv>

          {copyStatus && (
            <MotionDiv
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg text-sm text-center"
            >
              {copyStatus}
            </MotionDiv>
          )}

          <MotionDiv variants={fadeInUp} className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Отвечаю в течение нескольких часов · Пн–Пт, 9:00–18:00
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};
