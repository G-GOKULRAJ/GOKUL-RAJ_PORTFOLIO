import { ReactNode } from 'react';

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

export interface SkillItem {
  name: string;
  icon: ReactNode;
}

export interface ProjectItem {
  title: string;
  description: string;
  tools: string[];
  imageUrl: string;
}