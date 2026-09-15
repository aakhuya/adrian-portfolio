"use client";
import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import SkillIcon from "@/components/ui/SkillIcon";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {skillsData.map((category, catIdx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1, duration: 0.5 }}
                className="flex flex-col"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="text-base sm:text-lg font-heading font-semibold text-candy-blue whitespace-nowrap">
                    {category.category}
                  </h3>
                  <div className="flex-1 h-px bg-candy-blue/20" />
                </div>

                {/* Skills in this category */}
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.1 + idx * 0.04, duration: 0.3 }}
                      whileHover={{ y: -3 }}
                      className="group flex items-center gap-2.5 px-3 py-2 bg-card border border-border rounded-lg transition-all hover:border-candy-blue/40 hover:bg-card/80"
                    >
                      <SkillIcon name={skill.icon} className="w-5 h-5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-text-primary group-hover:text-candy-blue transition-colors whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
