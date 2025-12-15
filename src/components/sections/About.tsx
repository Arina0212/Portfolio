import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { FaUser, FaRocket, FaLightbulb, FaHandshake } from 'react-icons/fa';

export const About: React.FC = () => {
  const principles = [
    {
      icon: <FaUser />,
      title: 'User-Centric',
      description: 'Пользователь всегда на первом месте'
    },
    {
      icon: <FaRocket />,
      title: 'Performance',
      description: 'Быстрота и оптимизация'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Современные решения'
    },
    {
      icon: <FaHandshake />,
      title: 'Collaboration',
      description: 'Командная работа'
    }
  ];

  // Типизированный MotionDiv, чтобы className и другие HTML-пропсы корректно воспринимались TypeScript
  const MotionDiv = motion.div as React.ComponentType<
    React.HTMLAttributes<HTMLDivElement> & MotionProps
  >;

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left column - Image and intro */}
          <MotionDiv variants={fadeInUp}>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800">
                  {/* Placeholder for photo */}
                  <div className="w-full h-full flex items-center justify-center">
                    <img className='rounded-2xl' src='./assets/me.jpg'/>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl rotate-12 -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full -z-10" />
            </div>
          </MotionDiv>

          {/* Right column - Text content */}
          <MotionDiv variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Немного <span className="gradient-text">обо мне</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 dark:text-gray-300">
                Привет! Я фронтенд разработчик с более чем 3-летним опытом создания современных веб-приложений. 
                Моя страсть — превращать сложные задачи в элегантные и интуитивно понятные интерфейсы.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Специализируюсь на React, Vue и TypeScript, но всегда открыта для изучения новых технологий. 
                Верю в чистый, поддерживаемый код и ориентированный на пользователя дизайн.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Закончила бакалавриат в Уральском Федеральном Университете по направлению 09.03.04
                "Программная инженерия".
                Поступила в магистратуру в Уральском Федеральном Университете по направлению
                09.03.02 "Прикладной анализ данных".
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                В свободное время участвую в хактонах, изучаю новые фреймворки 
                и экспериментирую с современными веб-технологиями.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Кроме этого занимаюсь совремнной хореографией(Jazz, Modern, Contemporary), плаванием и игрой на скрипке.
              </p>
            </div>

            {/* Principles
            <div className="grid grid-cols-2 gap-4 mb-8">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-blue-600 dark:text-blue-400 text-2xl mb-2">
                    {principle.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {principle.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div> */}

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary"
                onClick={() => window.open('assets/Шубина Арина Николаевна.pdf', '_blank')}
              >
                Скачать резюме
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '#contact'}
              >
                Связаться со мной
              </Button>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};
