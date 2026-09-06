export interface Project { title: string; description: string; status: string; tech: string[]; }
export const projectsData: Project[] = [
  {
    title: "TinyNest",
    description: "An interactive early learning platform for children aged 2–6, built with Flutter, Flask, and PostgreSQL. Designed to make foundational learning engaging through games, audio, and playful activities.",
    status: "In Development",
    tech: ["Flutter", "Dart", "Flask", "PostgreSQL"],
  },
  {
    title: "Bug Hunter",
    description: "A game that will be available on both mobile & desktop. You're a developer inside a virtual system. You encounter bugs, identify the problem, and fix it. Teaches basic programming concepts while being entertaining.",
    status: "In Development",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Portfolio Website",
    description: "The very site you're viewing — a personal brand built with Next.js, TypeScript, and Tailwind CSS.",
    status: "In Development",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];
