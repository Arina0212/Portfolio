import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  padding = 'md'
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  // Типизированный MotionDiv для корректной поддержки className и HTML-пропсов
  const MotionDiv = motion.div as React.ComponentType<
    React.HTMLAttributes<HTMLDivElement> & MotionProps
  >;

  return (
    <MotionDiv
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`card ${paddingClasses[padding]} ${hoverable ? 'hover:shadow-xl' : ''} ${className}`}
    >
      {children}
    </MotionDiv>
  );
};

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ title, subtitle, action }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-300 mt-1">{subtitle}</p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};