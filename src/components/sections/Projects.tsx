"use client";
import TiltCard from "@/components/ui/TiltCard";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="What I'm Building"
            subtitle="Projects in progress — solving real problems with modern technologies."
          />
          <div className="flex flex-wrap justify-center gap-6">
            {projectsData.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <TiltCard className="h-full">
                  <Card className="h-full flex flex-col">
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-mono bg-onyx text-candy-blue px-2 py-1 rounded border border-candy-blue/30">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-candy-blue/70 text-xs mt-4 inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-candy-blue animate-pulse" />{" "}
                      {project.status}
                    </span>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
