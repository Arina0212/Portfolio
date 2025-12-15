import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

/**
 * Форматирует дату в читаемый вид
 */
export const formatDate = (date: Date, formatStr: string = 'MMMM yyyy'): string => {
  return format(date, formatStr, { locale: ru });
};

/**
 * Группирует навыки по категориям
 */
export const groupSkillsByCategory = <T extends { category: string }>(
  skills: T[]
): Record<string, T[]> => {
  return skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, T[]>);
};

/**
 * Фильтрует проекты по технологии
 */
export const filterProjectsByTech = (projects: any[], tech: string) => {
  if (!tech) return projects;
  return projects.filter(project => 
    project.technologies.some((t: string) => 
      t.toLowerCase().includes(tech.toLowerCase())
    )
  );
};

/**
 * Копирует текст в буфер обмена
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback для старых браузеров
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textArea);
    return success;
  }
};

/**
 * Генерирует градиент на основе строки
 */
export const stringToColor = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const hue = hash % 360;
  return `hsl(${hue}, 70%, 60%)`;
};