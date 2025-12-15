import React, { useState, useEffect } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { NAV_ITEMS } from '../../data/constants';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map(item => item.href.substring(1)));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Типизированные motion-компоненты для корректной работы className/href и прочих HTML-пропсов
  const MotionHeader = motion.header as React.ComponentType<
    React.HTMLAttributes<HTMLElement> & MotionProps
  >;
  const MotionDiv = motion.div as React.ComponentType<
    React.HTMLAttributes<HTMLDivElement> & MotionProps
  >;
  const MotionAnchor = motion.a as React.ComponentType<
    React.AnchorHTMLAttributes<HTMLAnchorElement> & MotionProps
  >;

  return (
    <MotionHeader
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <MotionDiv
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            Port<span className="text-blue-600 dark:text-blue-400">folio</span>
          </MotionDiv>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  activeId === item.href.substring(1)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
            <MotionAnchor
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn-primary"
            >
              Связаться
            </MotionAnchor>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-700"
          >
            <div className="py-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 font-medium hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <ThemeToggle />
              </div>
            </div>
          </MotionDiv>
        )}
      </div>
    </MotionHeader>
  );
};