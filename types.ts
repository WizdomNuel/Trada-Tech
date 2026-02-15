export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface SolutionLevel {
  title: string;
  description: string;
}

export interface SolutionPillar {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  levels: string[]; // Simplification for UI
  icon: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Metric {
  label: string;
  value: number; // 0 to 100 representing percentage width
  displayValue: string; // The text shown (e.g. "22%", "$50k")
}

export interface CaseStudy {
  id: number;
  title: string;
  clientType: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  keyMetric: string;
  icon: string;
  metricsData?: Metric[];
}

export type ProjectStatus = 'completed' | 'ongoing' | 'upcoming';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  client: string;
  status: ProjectStatus;
  tags: string[];
  image: string; // Background/Card image URL
  longDescription: string;
  challenge: string;
  techStack: string[];
  testimonial?: Testimonial;
}

export interface ServiceOption {
  id: string;
  label: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TechCategory {
  category: string;
  items: string[];
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}