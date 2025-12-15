import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { IProject } from '../../types';
import { TechnologyTag } from './Tag';
import { Button } from './Button';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from 'react-icons/fa';
import { formatDate } from '../../utils/helpers';
import { fadeInUp, buttonHover } from '../../utils/animations';

interface ProjectCardProps {
  project: IProject;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                 overflow-hidden hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Status badge */}
      {project.status === 'in-progress' && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
            В разработке
          </span>
        </div>
      )}

      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.images.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Links overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          className="absolute bottom-4 right-4 flex gap-2"
        >
          {project.links.github && (
            <motion.a
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg"
              aria-label="View code on GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
          )}
          {project.links.live && (
            <motion.a
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full shadow-lg"
              aria-label="View live demo"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {formatDate(project.completionDate)} • {project.role}
            </p>
          </div>
          {project.status === 'completed' && (
            <FaStar className="text-yellow-500 mt-1" />
          )}
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map(tech => (
              <TechnologyTag key={tech} name={tech} />
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Ключевые возможности:
            </h4>
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          {/* <Button
            variant="ghost"
            size="sm"
            className="group/btn"
            onClick={() => {
              // Здесь будет навигация на страницу проекта
              console.log('View project details:', project.id);
            }}
          >
            <FaCode className="mr-2 group-hover/btn:rotate-12 transition-transform" />
            Детали
          </Button> */}
          
          <div className="text-sm text-gray-500">
            {project.category?.join(' • ')}
          </div>
        </div>
      </div>
    </motion.article>
  );
};