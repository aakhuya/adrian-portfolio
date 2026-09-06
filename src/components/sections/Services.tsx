"use client";
import TiltCard from "@/components/ui/TiltCard";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { servicesData } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 relative z-10 bg-onyx/80">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title="Services" subtitle="How I can help you bring your vision to life." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, i) => {
              const Icon = (Icons as any)[service.iconName] || Icons.Code;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <TiltCard className="h-full">
                    <Card className="h-full flex flex-col">
                      <div className="mb-4 text-candy-blue"><Icon size={32} strokeWidth={1.5} /></div>
                      <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">{service.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
                    </Card>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
