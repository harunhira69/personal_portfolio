export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  featured: boolean;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
};