export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'design' | 'soft';

export interface ISkill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  yearsOfExperience: number;
  icon?: string;
  description?: string;
}

export interface IExperience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}