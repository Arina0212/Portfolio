import type { IProject } from '../types';

export const projects: IProject[] = [
  {
    id: 'CarsApp',
    title: 'Аренда премиальных автомобилей',
    description: 'Учебный проект. Сайт для аренды автомобитей',
    detailedDescription: 'Сайт с каталогом доступных машин и возможностью оставить заявку',
    technologies: ['Angular', 'TypeScript'],
    features: [
      'Отправка формы заявок'
    ],
    images: {
      thumbnail: '/assets/CarsApp.png',
      desktop: '/assets/CarsApp.png',
      mobile: '/assets/CarsApp.png'
    },
    links: {
      live: 'https://arina0212.github.io/cars-hw/',
      github: 'https://github.com/Arina0212/CarsAngular',
    },
    status: 'completed',
    completionDate: new Date('2023-04-11'),
    role: 'Frontend разработчик',
    category: [ 'Учебный проект', 'Angular', 'typescript']
  },
  {
    id: 'IritTube',
    title: 'Видео хостинг IritTube',
    description: 'Учебный проект. Видео хостинг',
    detailedDescription: 'Учебный проект. Верстка веб-хостинга',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Загрузка и просмотр видео',
      'Комментарии'
    ],
    images: {
      thumbnail: '../assets/IritTube.jpg',
      desktop: '../assets/IritTubePlayer.jpg'
    },
    links: {
      live: 'https://arina0212.github.io/IritTube/',
      github: 'https://github.com/Arina0212/IritTube',
      figma: 'https://www.figma.com/design/DbdJhg9zbMy6LbNxHtzB54/IritTube?node-id=0-1&t=SyA2FJMEEX1sMzVQ-1'
    },
    status: 'completed',
    completionDate: new Date('2023-06-13'),
    role: 'Frontend разработчик',
    category: ['Учебный проект', 'HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'TableForKids',
    title: 'Приложения для обучения детей таблице умножения',
    description: 'Учебный проект. Приложения для обучения детей таблице умножения',
    detailedDescription: 'Красочное веб-приложение для обучения детей таблице умножения',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Теория умножения',
      'Тренажер примеров',
      'Награда - сказка'
    ],
    images: {
      thumbnail: '/assets/TableForKids.png'
    },
    links: {
      live: 'https://arina0212.github.io/TableForKids/',
      github: 'https://github.com/Arina0212/TableForKids',
    },
    status: 'completed',
    completionDate: new Date('2023-06-21'),
    role: 'Frontend разработчик',
    category: ['Учебный проект', 'HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'WhatToWhatch',
    title: 'Онлайн кинотеатр "What To Watch"',
    description: 'Учебный проект. Онлайн кинотеатр',
    detailedDescription: '',
    technologies: ['React', 'TypeScript', 'Redux'],
    features: [
      'Предпросмотр фильма',
      'Оценка и комментарии',
      'Добавление в избранное'
    ],
    images: {
      thumbnail: '/assets/WWW.jpg'
    },
    links: {
      github: 'https://github.com/Arina0212/what-to-watch',
    },
    status: 'completed',
    completionDate: new Date('2023-12-24'),
    role: 'Frontend разработчик',
    category: ['Учебный проект', 'React', 'TypeScript', 'Redux']
  },
  {
    id: 'LEHAIM',
    title: 'LE HA IM',
    description: 'Сервис для оценки риска возможного метастазирования онкологических заболевай по иммунологическим показателям',
    detailedDescription: '',
    technologies: ['React', 'TypeScript', 'Redux'],
    features: [
      'Печать анализов',
      'Корректировка информации о пользователе и анализах',
      'Построение графиков', 
      'Формирование рекомендаций'
    ],
    images: {
      thumbnail: '/assets/LEHAIM.png'
    },
    links: {
      github: 'https://github.com/Arina0212/Oncology_pp',
    },
    status: 'completed',
    completionDate: new Date('2024-06-23'),
    role: 'Frontend разработчик',
    category: ['Учебный проект', 'React', 'TypeScript', 'Redux']
  },
  {
    id: 'BoockingService',
    title: 'Веб-сервис динамического бронирования по календарным датам',
    description: 'Учебный проект. Веб-сервис бронирования по календарным датам',
    detailedDescription: '',
    technologies: ['React', 'TypeScript', 'Redux'],
    features: [
      'Создание мероприятия',
      'Поздняя регистрация',
      'Выгрузка списков участников', 
      'Автоудаление данных'
    ],
    images: {
      thumbnail: '/assets/Boocking.png'
    },
    links: {
      github: 'https://github.com/Arina0212/Booking_service',
    },
    status: 'completed',
    completionDate: new Date('2024-12-23'),
    role: 'Frontend разработчик',
    category: ['Учебный проект', 'React', 'TypeScript', 'Redux']
  },
  {
    id: 'ScarabeyKo',
    title: 'Мебельный онлайн магазин',
    description: 'Мебельный онлайн магазин. Создание заказов.',
    detailedDescription: 'Мебельный онлайн магазин.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stoorybook'],
    features: [
      'Просмотр каталога',
      'Сохренение корзины и избранного при входе',
    ],
    images: {
      thumbnail: '/assets/scarabey.png'
    },
    links: {
      live: 'https://gk-udom.ru/',
    },
    status: 'completed',
    completionDate: new Date('2025-01-20'),
    role: 'Frontend разработчик',
    category: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stoorybook']
  },
  
];