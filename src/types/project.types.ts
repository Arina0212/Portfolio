export interface IProject {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  features?: string[];
  images: {
    thumbnail: string;
    desktop?: string;
    mobile?: string;
  };
  links: {
    live?: string;
    github?: string;
    figma?: string;
  };
  status: 'completed' | 'in-progress' | 'archived';
  completionDate: Date;
  role: string;
  challenges?: string[];
  category?: string[];
}

