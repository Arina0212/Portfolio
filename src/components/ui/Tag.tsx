import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface TagProps {
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
  removable?: boolean;
  className?: string;
  style?: React.CSSProperties; // Добавляем проп style
}

export const Tag: React.FC<TagProps> = ({
  children,
  color,
  onClick,
  removable = false,
  className = '',
  style // Добавляем style в деструктуризацию
}) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200';
  
  const tagStyle: React.CSSProperties = {
    ...(color ? { 
      backgroundColor: `${color}20`, 
      color 
    } : {}),
    ...style // Объединяем с переданным style
  };

  // Типизированный MotionSpan, чтобы className и style корректно воспринимались TypeScript
  const MotionSpan = motion.span as React.ComponentType<
    React.HTMLAttributes<HTMLSpanElement> & MotionProps
  >;

  return (
    <MotionSpan
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`${baseClasses} ${className}`}
      style={tagStyle} // Используем объединенный стиль
    >
      {children}
      {removable && (
        <button
          onClick={onClick}
          className="ml-2 hover:opacity-70 transition-opacity"
          aria-label="Remove tag"
        >
          ×
        </button>
      )}
    </MotionSpan>
  );
};

export const TechnologyTag: React.FC<{ name: string }> = ({ name }) => {
  const colorMap: Record<string, string> = {
    'react': '#61dafb',
    'typescript': '#3178c6',
    'javascript': '#f7df1e',
    'vue': '#42b883',
    'node': '#339933',
    'python': '#3776ab',
    'tailwind': '#06b6d4',
    'redux': '#764abc',
    'graphql': '#e10098',
    'mongodb': '#47a248'
  };

  const color = colorMap[name.toLowerCase()] || '#6b7280';

  return (
    <Tag
      className="mr-2 mb-2"
      color={color}
      style={{
        backgroundColor: `${color}15`,
        border: `1px solid ${color}30`
      }}
    >
      {name}
    </Tag>
  );
};
