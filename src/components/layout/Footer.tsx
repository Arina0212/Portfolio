import React from 'react';
import { FaHeart, FaCoffee, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../data/constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-6 md:mb-0">
            <p className="flex items-center gap-2">
              © {currentYear} Frontend Developer Portfolio 
              <FaHeart className="text-red-500 animate-pulse-slow" />
            </p>
            {/* <p className="text-sm text-gray-500 mt-2">
              Сделано с <FaCoffee className="inline ml-1" /> и современными технологиями
            </p> */}
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="Telegram"
            >
              <FaTelegram size={24} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-6 md:mt-0 px-4 py-2 bg-gray-800 hover:bg-gray-700 
                       rounded-lg transition-colors duration-200"
          >
            Наверх ↑
          </button>
        </div>

        {/* Tech stack */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            Построено с помощью: React · TypeScript · Tailwind CSS · Vite
          </p>
        </div>
      </div>
    </footer>
  );
};