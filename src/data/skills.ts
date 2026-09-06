export interface Skill { name: string; icon: string; proficiency: string; }
export interface SkillCategory { category: string; items: Skill[]; }
export const skillsData: SkillCategory[] = [
  {
    category: "Languages & Core",
    items: [
      { name: "Python", icon: "python", proficiency: "Advanced" },
      { name: "JavaScript", icon: "javascript", proficiency: "Advanced" },
      { name: "TypeScript", icon: "typescript", proficiency: "Advanced" },
      { name: "HTML5", icon: "html5", proficiency: "Advanced" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react", proficiency: "Advanced" },
      { name: "Next.js", icon: "nextjs", proficiency: "Advanced" },
      { name: "Bootstrap", icon: "bootstrap", proficiency: "Advanced" },
      { name: "Tailwind CSS", icon: "tailwindcss", proficiency: "Advanced" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs", proficiency: "Advanced" },
      { name: "Flask", icon: "flask", proficiency: "Intermediate" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: "postgresql", proficiency: "Advanced" },
      { name: "MongoDB", icon: "mongodb", proficiency: "Advanced" },
      { name: "SQLite", icon: "sqlite", proficiency: "Advanced" },
    ],
  },
  {
    category: "Mobile",
    items: [{ name: "Flutter", icon: "flutter", proficiency: "Intermediate" }],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "git", proficiency: "Advanced" },
      { name: "GitHub", icon: "github", proficiency: "Advanced" },
      { name: "VS Code", icon: "vscode", proficiency: "Advanced" },
      { name: "Postman", icon: "postman", proficiency: "Advanced" },
    ],
  },
];
