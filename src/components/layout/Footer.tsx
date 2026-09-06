import { Github, Linkedin } from "lucide-react";
import { socialLinks } from "@/data/social";

const iconMap: Record<string, React.ElementType> = { Github, Linkedin };

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/30 bg-onyx py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm text-center md:text-left">
          Designed and developed by Adrian Akhuya — curiosity, clean code, thoughtful digital experiences.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return Icon ? (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-text-secondary hover:text-candy-blue transition-colors">
                <Icon size={20} />
              </a>
            ) : null;
          })}
        </div>
      </div>
    </footer>
  );
}
