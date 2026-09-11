"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { heroData } from "@/data/hero";
import TypingText from "@/components/ui/TypingText";
import Button from "@/components/ui/Button";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Hero() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col overflow-hidden bg-onyx">
      {/* Desktop background */}
      {!isMobile && (
        <div className="absolute top-0 left-0 w-full h-screen z-0">
          <Image
            src="/images/ME.png"
            alt="Adrian Akhuya"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
      )}

      {!isMobile && <div className="absolute inset-0 bg-black/40 z-[1]" />}

      {isMobile ? (
        <div className="relative flex flex-col min-h-screen z-10">
          {/* Binary code texture overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] font-mono text-[10px] text-candy-blue select-none overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="whitespace-nowrap leading-4">
                01010110 01100101 01110010 01101110 01101111 01101110 00100000 01000001 01100100 01110010 01101001 01100001 01101110
              </div>
            ))}
          </div>

          {/* Top half: cd.png with portrait */}
          <div className="relative h-[45vh] flex items-center justify-center">
            <div className="absolute inset-0">
              <Image
                src="/images/cd.png"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-onyx" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[240px]"
            >
              <div className="rounded-2xl overflow-hidden border-2 border-candy-blue/40">
                <Image
                  src="/images/Potrait.png"
                  alt="Adrian Akhuya"
                  width={480}
                  height={640}
                  priority
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom half: compact intro */}
          <div className="flex-1 px-6 pt-2 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center w-full max-w-sm mx-auto"
            >
              <p className="text-candy-blue text-xs font-mono tracking-widest mb-2">
                Hello I&apos;m
              </p>

              <h1 className="text-4xl leading-[0.9] font-heading font-bold">
                <span className="text-text-primary">{heroData.name.split(" ")[0]}</span><br />
                <span className="text-candy-blue">{heroData.name.split(" ")[1]}</span>
              </h1>

              <div className="w-16 h-0.5 bg-candy-blue/50 mt-4 mb-4 mx-auto rounded-full" />

              <p className="text-base text-text-secondary font-medium leading-snug">
                {heroData.title}
              </p>

              <div className="mt-2 h-6 flex justify-center">
                <TypingText
                  words={heroData.typingWords}
                  className="text-sm font-heading text-candy-blue"
                />
              </div>

              <p className="mt-2 text-text-secondary text-sm leading-relaxed max-w-xs mx-auto">
                {heroData.description}
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {heroData.buttons.map((btn) => (
                  <Button
                    key={btn.label}
                    href={btn.href}
                    primary={btn.primary}
                    className="min-h-[48px] px-6 py-3 w-full text-sm font-semibold rounded-xl"
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex-1 flex items-center px-8 lg:px-12 py-24">
          <div className="w-full max-w-7xl mx-auto text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
            >
              <p className="text-text-secondary text-base font-mono tracking-wider mb-3">
                Hello I&apos;m
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-text-primary leading-[0.9]">
                {heroData.name.split(" ")[0]}<br />
                <span className="text-candy-blue">{heroData.name.split(" ")[1]}</span>
              </h1>
              <div className="h-1 w-24 bg-candy-blue/70 mt-6 mb-8" />
              <p className="text-xl md:text-2xl text-text-secondary font-medium">{heroData.title}</p>
              <div className="mt-4 h-8">
                <TypingText
                  words={heroData.typingWords}
                  className="text-lg md:text-xl font-heading text-candy-blue"
                />
              </div>
              <p className="mt-6 text-text-secondary leading-relaxed max-w-xl text-base">
                {heroData.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-5">
                {heroData.buttons.map((btn) => (
                  <Button
                    key={btn.label}
                    href={btn.href}
                    primary={btn.primary}
                    className="min-h-[48px] px-6 py-3 text-base font-medium rounded-xl"
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}
