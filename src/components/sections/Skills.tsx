"use client";
import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import SkillIcon from "@/components/ui/SkillIcon";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  // Flatten all skills with their category
  const allSkills = skillsData.flatMap(cat => 
    cat.items.map(item => ({ ...item, category: cat.category }))
  );

  return (
    <section id="skills" className="py-16 md:py-20 px-5 sm:px-8 lg:px-12 relative z-10 bg-onyx/80">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title="Tech Stacks I love working with" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {allSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="group relative flex items-center gap-3 p-4 bg-card border border-border rounded-xl transition-all hover:border-candy-blue/40 hover:shadow-lg hover:shadow-candy-blue/5"
              >
                <div className="flex-shrink-0">
                  <SkillIcon name={skill.icon} className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-text-primary group-hover:text-candy-blue transition-colors truncate">
                    {skill.name}
                  </p>
                  <p className="text-[10px] text-text-secondary/60 font-mono uppercase tracking-wider truncate">
                    {skill.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
