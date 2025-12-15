import React from 'react';
import { motion } from 'framer-motion';
import { skills, experiences } from '../../data/skills.data';
import { Card, CardHeader } from '../ui/Card';
import { groupSkillsByCategory } from '../../utils/helpers';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { FaCode, FaServer, FaTools, FaPaintBrush, FaUsers } from 'react-icons/fa';

export const Skills: React.FC = () => {
  const skillsByCategory = groupSkillsByCategory(skills);
  
  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <FaCode className="text-blue-500" />,
    backend: <FaServer className="text-green-500" />,
    tools: <FaTools className="text-yellow-500" />,
    design: <FaPaintBrush className="text-purple-500" />,
    soft: <FaUsers className="text-pink-500" />
  };

  const levelColors: Record<string, string> = {
    beginner: 'from-gray-400 to-gray-300',
    intermediate: 'from-yellow-400 to-yellow-300',
    advanced: 'from-blue-500 to-blue-400',
    expert: 'from-purple-600 to-purple-500'
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="section-title">
              Мои <span className="gradient-text">навыки</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Технологии и инструменты, которые я использую для создания современных веб-приложений
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Skills by category */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardHeader title="Технические навыки" />
                <div className="space-y-8">
                  {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                    <div key={category}>
                      <div className="flex items-center gap-3 mb-4">
                        {categoryIcons[category]}
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
                          {category === 'frontend' ? 'Frontend' : 
                           category === 'backend' ? 'Backend' : 
                           category === 'tools' ? 'Инструменты' : 
                           category === 'design' ? 'Дизайн' : 'Soft Skills'}
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {categorySkills.map(skill => (
                          <div 
                            key={skill.id} 
                            className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-gray-900 dark:text-white">
                                {skill.name}
                              </span>
                              
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Experience */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader title="Опыт работы" />
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      variants={fadeInUp}
                      custom={index}
                      className="relative pl-8 before:absolute before:left-0 before:top-0 
                                 before:bottom-0 before:w-0.5 before:bg-gradient-to-b 
                                 before:from-blue-500 before:to-purple-500"
                    >
                      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-500 
                                    transform -translate-x-1.5" />
                      <div className="mb-2">
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                        <p className="text-sm text-gray-500">{exp.period}</p>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-300">
                            • {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.technologies.map(tech => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 
                                     text-blue-800 dark:text-blue-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};