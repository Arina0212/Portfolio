import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  // Явно типизируем анимированную кнопку, чтобы корректно работал onClick и aria-* пропсы
  const MotionButton = motion.button as React.ComponentType<
    React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps
  >;

  if (!mounted) return null;

  return (
    <MotionButton
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-gray-200 dark:bg-gray-700 
                 hover:bg-gray-300 dark:hover:bg-gray-600 
                 transition-colors duration-200 focus:outline-none 
                 focus:ring-2 focus:ring-blue-500"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <FaSun className="w-5 h-5 text-yellow-500" />
        ) : (
          <FaMoon className="w-5 h-5 text-gray-700" />
        )}
      </motion.div>
    </MotionButton>
  );
};