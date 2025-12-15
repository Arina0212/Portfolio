import React, { useState } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { projects } from '../../data/projects.data';
import type { IProject } from '../../types';
import { ProjectCard } from '../ui/ProjectCard';
import { Tag, TechnologyTag } from '../ui/Tag';
import { Button } from '../ui/Button';
import { staggerContainer, fadeInUp } from '../../utils/animations';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState(9);

  // Типизированный MotionDiv, чтобы className и другие HTML-пропсы корректно воспринимались TypeScript
  const MotionDiv = motion.div as React.ComponentType<
    React.HTMLAttributes<HTMLDivElement> & MotionProps
  >;

  // Get all unique technologies
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  // Filter projects
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        ) || 
        project.category?.includes(filter.toLowerCase())
      );

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <MotionDiv variants={fadeInUp} className="text-center mb-12">
            <h2 className="section-title">
              Мои <span className="gradient-text">проекты</span>
            </h2>
            
          </MotionDiv>

          {/* Technology filter */}
          <MotionDiv variants={fadeInUp} className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {allTechnologies.slice(0, 8).map(tech => (
                <Tag
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={` ${
                    filter === tech.toLowerCase() ? 'bg-blue-600 text-white' : ''
                  }`}
                >
                  {tech}
                </Tag>
              ))}
              {allTechnologies.length > 8 && (
                <Tag className="bg-gray-200 dark:bg-gray-700">
                  +{allTechnologies.length - 8}
                </Tag>
              )}
            </div>
          </MotionDiv>

          {/* Projects grid */}
          <MotionDiv 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visibleProjects.map((project: IProject, index: number) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </MotionDiv>

          {/* Load more button */}
          {visibleCount < filteredProjects.length && (
            <MotionDiv
              variants={fadeInUp}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                onClick={() => setVisibleCount(prev => prev + 3)}
              >
                Показать еще проекты
              </Button>
            </MotionDiv>
          )}

          {/* Projects summary */}
          <MotionDiv 
            variants={fadeInUp}
            className="mt-16 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                       rounded-2xl border border-blue-500/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold gradient-text">{projects.length}</div>
                <div className="text-gray-600 dark:text-gray-400">Всего проектов</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">
                  {projects.filter(p => p.status === 'completed').length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Завершено</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">
                  {allTechnologies.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Технологий</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-gray-600 dark:text-gray-400">Качество кода</div>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};