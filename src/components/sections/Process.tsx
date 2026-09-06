"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-20 px-5 sm:px-8 lg:px-12 relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title="How I Work" subtitle="My step‑by‑step approach to building reliable software." />

          <div className="relative pl-10 sm:pl-12">
            <div className="absolute left-4 sm:left-5 top-2 bottom-2 w-px bg-candy-blue/30" />

            <div className="space-y-10">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex gap-4"
                >
                  <div className="absolute -left-10 sm:-left-12 w-8 h-8 rounded-full bg-card border border-candy-blue/40 flex items-center justify-center text-candy-blue font-heading font-bold text-sm z-10">
                    {step.number}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-heading font-semibold text-text-primary">{step.title}</h3>
                    <p className="text-text-secondary mt-1 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
