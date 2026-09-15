export interface Skill { name: string; icon: string; proficiency: string; }
export interface SkillCategory { category: string; items: Skill[]; }
export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: "python", proficiency: "Advanced" },
      { name: "JavaScript", icon: "javascript", proficiency: "Advanced" },
      { name: "TypeScript", icon: "typescript", proficiency: "Advanced" },
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
      { name: "Flask", icon: "flask", proficiency: "Advanced" },
      { name: "FastAPI", icon: "fastapi", proficiency: "Advanced" },
      { name: "SQLAlchemy", icon: "sqlalchemy", proficiency: "Advanced" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: "flutter", proficiency: "Intermediate" },
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
];
