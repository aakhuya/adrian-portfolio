"use client";
import TiltCard from "@/components/ui/TiltCard";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { Github, Globe } from "lucide-react";

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
            title="Projects"
            subtitle="Real projects I've built — solving problems with modern technologies."
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
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]"
              >
                <TiltCard className="h-full">
                  <Card className="h-full flex flex-col">
                    {/* Logo / Brand */}
                    <div className="mb-4">
                      {project.title === "Apointli" ? (
                        <div className="flex items-baseline gap-0.5">
                          <span
                            className="text-2xl font-extrabold tracking-tight"
                            style={{
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              color: "#2a44e8",
                            }}
                          >
                            apointli
                          </span>
                          <span style={{ color: "#2a44e8" }} className="text-2xl font-extrabold">
                            .
                          </span>
                        </div>
                      ) : (
                        <h3 className="text-xl font-heading font-semibold text-text-primary">
                          {project.title}
                        </h3>
                      )}
                      {project.tagline && (
                        <p
                          className="text-xs font-medium mt-1 tracking-wide"
                          style={{ color: "#2a44e8" }}
                        >
                          {project.tagline}
                        </p>
                      )}
                    </div>

                    <p className="text-text-secondary text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono bg-onyx text-candy-blue px-2 py-1 rounded border border-candy-blue/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-candy-blue/70 text-xs inline-flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-candy-blue animate-pulse" />{" "}
                        {project.status}
                      </span>
                      <div className="flex items-center gap-3">
                        {project.live && (
                          <a
                            href={`https://${project.live}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-candy-blue transition-colors text-xs inline-flex items-center gap-1"
                          >
                            <Globe size={14} />
                            {project.live}
                          </a>
                        )}
                        {project.code && (
                          <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-candy-blue transition-colors"
                            aria-label="View code"
                          >
                            <Github size={16} />
                          </a>
                        )}
                      </div>
                    </div>
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
