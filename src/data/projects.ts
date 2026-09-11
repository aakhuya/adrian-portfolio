export interface Project { 
  title: string; 
  description: string; 
  status: string; 
  tech: string[];
  tagline?: string;
  live?: string;
  code?: string;
}

export const projectsData: Project[] = [
  {
    title: "Apointli",
    tagline: "Book. Manage. Grow.",
    description: "Multi-tenant appointment scheduling platform for service businesses — booking pages, staff management, and a smart availability engine.",
    status: "In Development",
    tech: ["Next.js", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Tailwind CSS"],
    live: "apointli.com",
    code: "https://github.com/aakhuya/apointli",
  },
  {
    title: "Portfolio Website",
    description: "The very site you're viewing — a personal brand built with Next.js, TypeScript, and Tailwind CSS.",
    status: "Completed",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];
