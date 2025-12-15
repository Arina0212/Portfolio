import { ISkill } from '../types';

export const skills: ISkill[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 'advanced',
    yearsOfExperience: 3,
    icon: 'react',
    description: 'SPA, хуки, контекст, оптимизация'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 'advanced',
    yearsOfExperience: 3,
    icon: 'typescript',
    description: 'Типизация, дженерики, утилитарные типы'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    level: 'intermediate',
    yearsOfExperience: 2,
    icon: 'nextjs',
    description: 'SSR, SSG, API Routes'
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'frontend',
    level: 'intermediate',
    yearsOfExperience: 2,
    icon: 'vue',
    description: 'Composition API, Vuex, Pinia, Vue Router'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'advanced',
    yearsOfExperience: 3,
    icon: 'tailwind',
    description: 'Утилитарный CSS, кастомные компоненты'
  },

  // Tools
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    level: 'advanced',
    yearsOfExperience: 4,
    icon: 'git',
    description: 'GitFlow, CI/CD, rebase'
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'tools',
    level: 'intermediate',
    yearsOfExperience: 2,
    icon: 'docker',
    description: 'Контейнеризация, Docker Compose'
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    level: 'intermediate',
    yearsOfExperience: 3,
    icon: 'figma',
    description: 'Прототипирование, дизайн-системы'
  }
];

export const experiences = [
  {
    id: 'exp1',
    company: 'Уральский федеральный университет имени первого Президента России Б.Н. Ельцина',
    position: 'Frontend Developer',
    period: '2023 - настоящее время',
    description: [
      'Верстка страниц по готовому дизайну',
      'Создание анимации',
      'Разработка SPA приложений на React и TypeScript',
      'Оптимизация производительности веб-приложений',
      'Интеграция с REST API',
      'Работа в команде по методологии Agile/Scrum'
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'Next.js', 'Tailwind CSS']
  },
  {
    id: 'exp2',
    company: 'ООО «Европейско-Азиатская Медицинская Компания»',
    position: 'Junior Frontend Developer',
    period: '2025 - настоящее время',
    description: [
      'Создание компонентов на Vue и TypeScript',
      'Сворачивание веб-приложения в Desktop App',
      'Верстка по макетам из Figma',
      'Рефакторинг кода',
      'Интеграция с REST API',
      'Испоьзование WebSocket соединения',
      'Разворачивание frontend-приложений в Docker'
    ],
    technologies: ['Vue', 'TypeScript', 'SCSS', 'Quasar', 'Electron', 'Docker', 'Vuex', 'Pinia']
  }
];