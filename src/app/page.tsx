import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Terminal from "@/components/sections/Terminal";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Process />
      <Services />
      <Projects />
      <Terminal />
      <Contact />
    </>
  );
}
