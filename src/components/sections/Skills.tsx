"use client";
import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import SkillIcon from "@/components/ui/SkillIcon";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 px-5 sm:px-8 lg:px-12 relative z-10 bg-onyx/80">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title="Technologies I Love Working With" />
          <div className="space-y-12">
            {skillsData.map((category) => (
              <div key={category.category} className="flex flex-col items-center">
                <h3 className="text-base sm:text-lg font-heading font-semibold text-candy-blue mb-5">
                  {category.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
                  {category.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group relative flex flex-col items-center justify-center p-3 bg-card border border-border rounded-xl transition-all hover:border-candy-blue/40 hover:shadow-lg hover:shadow-candy-blue/10 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28"
                    >
                      <SkillIcon name={skill.icon} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-2" />
                      <span className="text-[10px] sm:text-xs md:text-sm text-text-secondary group-hover:text-candy-blue transition-colors text-center leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
