import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { buttonHover } from '../../utils/animations';

// Исключаем конфликтующие пропсы
type ButtonHTMLProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type MotionButtonProps = MotionProps & Omit<ButtonHTMLProps, keyof MotionProps>;

interface ButtonProps extends MotionButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode; // Явно указываем тип для children
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'btn inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 dark:focus:ring-offset-gray-900',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-400',
    outline: 'border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-400',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-400'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  // MotionButton с ослабленной типизацией, чтобы избежать конфликтов типов MotionStyle/CSSProperties
  const MotionButton = motion.button as React.ComponentType<any>;

  return (
    <MotionButton
      variants={buttonHover}
      whileHover="hover"
      whileTap="tap"
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </MotionButton>
  );
};