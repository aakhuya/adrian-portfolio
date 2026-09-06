"use client";
import { useEffect } from "react";
export function useSectionGlow(selector: string = "section[id]") {
  useEffect(() => {
    const sections = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("section-glow");
          else entry.target.classList.remove("section-glow");
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [selector]);
}
