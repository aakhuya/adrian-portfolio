"use client";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiFlutter,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

interface Props {
  name: string;
  className?: string;
}

const iconMap: Record<string, React.ElementType> = {
  python: SiPython,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html5: SiHtml5,
  react: SiReact,
  nextjs: SiNextdotjs,
  bootstrap: SiBootstrap,
  tailwindcss: SiTailwindcss,
  nodejs: SiNodedotjs,
  flask: SiFlask,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  sqlite: SiSqlite,
  flutter: SiFlutter,
  git: SiGit,
  github: SiGithub,
  vscode: VscCode,
  postman: SiPostman,
};

const colorMap: Record<string, string> = {
  python: "#3776AB",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  html5: "#E34F26",
  react: "#61DAFB",
  nextjs: "#FFFFFF",
  bootstrap: "#7952B3",
  tailwindcss: "#06B6D4",
  nodejs: "#339933",
  flask: "#FFFFFF",
  postgresql: "#336791",
  mongodb: "#47A248",
  sqlite: "#003B57",
  flutter: "#02569B",
  git: "#F05032",
  github: "#FFFFFF",
  vscode: "#007ACC",
  postman: "#FF6C37",
};

export default function SkillIcon({ name, className = "w-8 h-8" }: Props) {
  const Icon = iconMap[name] || SiReact;
  const brandColor = colorMap[name] || "#FFFFFF";
  return <Icon className={className} style={{ color: brandColor }} />;
}
