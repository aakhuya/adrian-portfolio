"use client";
import { motion } from "framer-motion";
import { contactData } from "@/data/contact";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 md:px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            {contactData.title}
          </h2>
          <p className="text-text-secondary text-base md:text-lg mb-8 max-w-xl mx-auto">
            {contactData.description}
          </p>
          <div className="flex flex-row justify-center items-start gap-8 sm:gap-12">
            <a
              href={`mailto:${contactData.email}?subject=${contactData.emailSubject}&body=${contactData.emailBody}`}
              className="flex flex-col items-center gap-1 text-text-secondary hover:text-candy-blue transition-colors group"
            >
              <Mail size={22} className="sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-xs md:text-sm">Email</span>
              <span className="text-[11px] md:text-xs text-text-secondary hidden sm:block">akhuya52@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-akhuya-b0326126b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-text-secondary hover:text-candy-blue transition-colors group"
            >
              <Linkedin size={22} className="sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-xs md:text-sm">LinkedIn</span>
              <span className="text-[11px] md:text-xs text-text-secondary hidden sm:block">Adrian Akhuya</span>
            </a>
            <a
              href="tel:+254115962810"
              className="flex flex-col items-center gap-1 text-text-secondary hover:text-candy-blue transition-colors group"
            >
              <Phone size={22} className="sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-xs md:text-sm">Call</span>
              <span className="text-[11px] md:text-xs text-text-secondary hidden sm:block">+254 115 962 810</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
