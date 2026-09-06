"use client";
import { motion } from "framer-motion";
import { aboutData } from "@/data/about";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title={aboutData.title} />
          <div className="space-y-5 text-text-secondary leading-relaxed border-l-2 border-candy-blue/30 pl-6 ml-6">
            {aboutData.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-candy-blue font-medium">Currently Learning:</span>
              <span className="bg-candy-blue/10 text-candy-blue px-3 py-1 rounded-full text-sm">{aboutData.currentlyLearning}</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-candy-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-candy-blue"></span>
              </span>
              <span className="text-candy-blue font-medium">Available for Freelance Work</span>
            </div>
            <blockquote className="border-l-4 border-candy-blue pl-4 italic text-text-secondary mt-4">
              &ldquo;{aboutData.quote}&rdquo;
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
