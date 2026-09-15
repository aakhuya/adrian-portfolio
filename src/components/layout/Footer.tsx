import { Github } from "lucide-react";
import { socialLinks } from "@/data/social";

export default function Footer() {
  const github = socialLinks.find((l) => l.label === "GitHub");

  return (
    <footer className="relative z-10 border-t border-border/30 bg-onyx py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm text-center md:text-left">
          Designed and developed by Adrian Akhuya — curiosity, clean code, thoughtful digital experiences.
        </p>
        {github && (
          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-secondary hover:text-candy-blue transition-colors"
          >
            <Github size={20} />
          </a>
        )}
      </div>
    </footer>
  );
}
