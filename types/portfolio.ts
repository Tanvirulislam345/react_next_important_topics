export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface PortfolioConfig {
  name: string;
  title: string;
  description: string;
  avatar: string;
  email: string;
  location: string;
  socialLinks: SocialLink[];
  navigation: NavItem[];
}
