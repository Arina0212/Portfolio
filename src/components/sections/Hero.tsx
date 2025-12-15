import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { Button } from '../ui/Button';
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const Hero: React.FC = () => {
  // Типизированный MotionDiv, чтобы className и другие HTML-пропсы корректно воспринимались TypeScript
  const MotionDiv = motion.div as React.ComponentType<
    React.HTMLAttributes<HTMLDivElement> & MotionProps
  >;
  const MotionH1 = motion.h1 as React.ComponentType<
    React.HTMLAttributes<HTMLHeadingElement> & MotionProps
  >;
  const MotionP = motion.p as React.ComponentType<
    React.HTMLAttributes<HTMLParagraphElement> & MotionProps
  >;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:to-gray-800" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          <MotionDiv variants={fadeInUp} className="mb-6">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
              👋 Привет, я фронтенд разработчик
            </span>
          </MotionDiv>

          <MotionH1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Создаю{' '}
            <span className="gradient-text">современные</span>
            <br />
            веб-приложения
          </MotionH1>

          <MotionP 
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Специализируюсь на React, Vue, TypeScript и создании интуитивных пользовательских интерфейсов. 
            Превращаю сложные задачи в элегантные решения.
          </MotionP>

          <MotionDiv 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              variant="primary" 
              size="lg"
              icon={<FaGithub />}
              onClick={() => window.open('https://github.com/Arina0212', '_blank')}
            >
              GitHub
            </Button>
            <a href="#projects" className="btn-outline px-8 py-4">
              Смотреть проекты
            </a>
          </MotionDiv>

          {/* Stats */}
          <MotionDiv 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">10+</div>
              <div className="text-gray-600 dark:text-gray-400">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">3+</div>
              <div className="text-gray-600 dark:text-gray-400">Года опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Качество</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">∞</div>
              <div className="text-gray-600 dark:text-gray-400">Кода</div>
            </div>
          </MotionDiv>

          {/* Scroll indicator */}
          <MotionDiv
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <a href="#projects" aria-label="Scroll to projects">
              <FaArrowDown className="w-6 h-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
            </a>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};
