import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  to: string;
}

export interface SkillGroup {
  category: string;
  skills: {
    name: string;
    level: number; // 0-100
  }[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  role: string;
  highlights: string[];
  image: string;
  links: {
    demo?: string;
    github?: string;
    video?: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience' | 'achievement';
}
