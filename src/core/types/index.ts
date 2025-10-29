export interface HeroContent {
  name: string;
  title: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  image?: string;
}

export interface AboutContent {
  title: string;
  content: string;
}

export interface ContactContent {
  title: string;
  description: string;
  cta: string;
}

export interface ContentData {
  hero: HeroContent;
  about: AboutContent;
  skills: Record<string, string[]>;
  contact: {
    title: string;
    description: string;
    cta: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  year: string;
}

export interface ProjectsData {
  projects: Project[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  companyLink?: string;
}
