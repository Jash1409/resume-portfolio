
export interface Education {
  institution: string;
  location: string;
  degree: string;
  cgpa: string;
  expectedDate: string;
  coursework: string[];
}

export interface SkillCategory {
  label: string;
  items: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  technologies: string;
  highlights: string[];
}

export interface ResumeData {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  education: Education[];
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
}
