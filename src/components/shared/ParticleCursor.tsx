import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  life: number;
}

export const ParticleCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [enabled, setEnabled] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  // Не показывать эффект на мобильных/тач-устройствах и на узких экранах
  useEffect(() => {
    const checkSupport = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isWide = window.innerWidth >= 768;
      setEnabled(isWide && !isTouch);
    };
    checkSupport();
    window.addEventListener('resize', checkSupport);
    return () => window.removeEventListener('resize', checkSupport);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Установка размеров canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Отслеживание мыши
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Создаем новые частицы
      const newParticles: Particle[] = [];
      for (let i = 0; i < 3; i++) {
        newParticles.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 3 + 1,
          color: `hsl(${Math.random() * 60 + 200}, 100%, 70%)`,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          life: 1,
        });
      }
      setParticles(prev => [...prev, ...newParticles]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Анимация
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Рисуем основной курсор
      ctx.beginPath();
      ctx.arc(position.x, position.y, 15, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(position.x, position.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.6)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(position.x, position.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.fill();

      // Обновляем и рисуем частицы
      setParticles(prev => {
        return prev
          .map(p => ({
            ...p,
            x: p.x + p.speedX,
            y: p.y + p.speedY,
            life: p.life - 0.02,
          }))
          .filter(p => p.life > 0);
      });

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `, ${particle.life})`);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [position, particles, enabled]);

  return (
    enabled ? (
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{ opacity: 0.8 }}
      />
    ) : null
  );
};
