"use client";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiFlask,
  SiFastapi,
  SiSqlalchemy,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiFlutter,
} from "react-icons/si";

interface Props {
  name: string;
  className?: string;
}

const iconMap: Record<string, React.ElementType> = {
  python: SiPython,
  javascript: SiJavascript,
  typescript: SiTypescript,
  dart: SiDart,
  react: SiReact,
  nextjs: SiNextdotjs,
  bootstrap: SiBootstrap,
  tailwindcss: SiTailwindcss,
  nodejs: SiNodedotjs,
  flask: SiFlask,
  fastapi: SiFastapi,
  sqlalchemy: SiSqlalchemy,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  sqlite: SiSqlite,
  flutter: SiFlutter,
};

const colorMap: Record<string, string> = {
  python: "#3776AB",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  dart: "#0175C2",
  react: "#61DAFB",
  nextjs: "#FFFFFF",
  bootstrap: "#7952B3",
  tailwindcss: "#06B6D4",
  nodejs: "#339933",
  flask: "#FFFFFF",
  fastapi: "#009688",
  sqlalchemy: "#D71F00",
  postgresql: "#336791",
  mongodb: "#47A248",
  sqlite: "#003B57",
  flutter: "#02569B",
};

export default function SkillIcon({ name, className = "w-8 h-8" }: Props) {
  const Icon = iconMap[name] || SiReact;
  const brandColor = colorMap[name] || "#FFFFFF";
  return <Icon className={className} style={{ color: brandColor }} />;
}
