export interface Project { 
  title: string; 
  description: string; 
  status: string; 
  tech: string[];
  link?: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    title: "Portfolio Website",
    description: "The very site you're viewing — a personal brand built with Next.js, TypeScript, and Tailwind CSS.",
    status: "Completed",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];
