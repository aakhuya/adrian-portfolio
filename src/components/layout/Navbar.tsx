"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map(l => l.href.replace("#", "")));

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-onyx/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl md:text-2xl font-heading font-bold text-text-primary hover:text-candy-blue transition-colors">
          adrian<span className="text-candy-blue">.</span>dev
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className={cn(
              "relative text-sm font-medium transition-colors hover:text-candy-blue",
              activeSection === link.href.replace("#", "") ? "text-candy-blue" : "text-text-secondary"
            )}>
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <motion.span layoutId="active-section" className="absolute -bottom-1 left-0 right-0 h-px bg-candy-blue" />
              )}
            </a>
          ))}
        </div>

        <button className="md:hidden text-text-secondary hover:text-candy-blue p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-onyx/95 backdrop-blur-md border-b border-border/30 overflow-hidden">
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className={cn(
                  "text-sm font-medium transition-colors hover:text-candy-blue",
                  activeSection === link.href.replace("#", "") ? "text-candy-blue" : "text-text-secondary"
                )}>{link.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
