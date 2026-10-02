"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const philosophy = [
    { letter: "C", word: "CONNECT" },
    { letter: "R", word: "RESEARCH" },
    { letter: "E", word: "EXECUTE" },
    { letter: "A", word: "ASSEMBLE" },
    { letter: "T", word: "TRANSFORM" },
    { letter: "E", word: "ELEVATE" },
  ];

  const services = [
    { id: "01", name: "COMMERCIALS", color: "#B90000" },
    { id: "02", name: "CAMPAIGNS", color: "#B90000" },
    { id: "03", name: "BRAND FILMS", color: "#B90000" },
    { id: "04", name: "VISUAL STORYTELLING", color: "#B90000" },
  ];

  const portfolio = [
    { 
      id: "01", 
      name: "BALIDAAN DIWAS FINAL", 
      client: "Naash",
      category: "Memorial Day Video",
      className: "md:col-span-12 w-full",
      aspectRatio: "aspect-[16/9] md:aspect-[21/9]"
    },
    { 
      id: "02", 
      name: "IIAC PROMOTIONAL VIDEO", 
      client: "India International Arbitration Centre",
      category: "Promotional Video",
      className: "md:col-span-6 md:mt-32",
      aspectRatio: "aspect-[16/9]"
    },
    { 
      id: "03", 
      name: "LAUT AAYE BUDHU", 
      client: "Naash",
      category: "Lyrical Video",
      className: "md:col-span-6",
      aspectRatio: "aspect-[16/9]"
    },
    { 
      id: "04", 
      name: "AN EFFULGENCE PRODUCTION", 
      client: "Effulgence",
      category: "Production",
      className: "md:col-span-10 md:col-start-2",
      aspectRatio: "aspect-[16/9]"
    },
  ];

  return (
    <div ref={containerRef} className="relative bg-brand-bg text-brand-ink">
      
      {/* SECTION 01 & 02: HERO */}
      <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto w-full h-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }} 
            className="w-full flex flex-col items-start z-10"
          >
            <h1 className="text-[clamp(4rem,10vw,12rem)] font-display font-extrabold leading-[0.85] tracking-tighter mb-8 break-words uppercase">
              CREATE.
              <motion.span 
                className="block text-[clamp(2.5rem,6vw,8rem)] text-brand-red mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                STUDIO.
              </motion.span>
            </h1>
            <p className="text-xl md:text-3xl font-sans font-bold uppercase tracking-widest max-w-xl text-balance opacity-80">
              Branding so effective, it feels illegal.
            </p>
            <div className="mt-12 flex gap-6">
              <Link href="/work" className="px-8 py-4 bg-brand-ink text-brand-bg font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors">
                View Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-32 bg-brand-ink text-brand-bg px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-sm font-sans font-bold uppercase tracking-widest mb-24 opacity-50">Our Approach</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {philosophy.map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[clamp(4rem,8vw,10rem)] font-display font-extrabold text-brand-red leading-none mb-4">{item.letter}</span>
                <span className="text-2xl md:text-4xl font-display font-bold uppercase">{item.word}.</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-32 md:py-48 bg-brand-bg px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-32 grid md:grid-cols-2 gap-12 items-end">
            <h2 className="text-[clamp(4rem,10vw,8rem)] font-display font-extrabold leading-[0.85] uppercase">
              SELECTED<br/>WORK
            </h2>
            <div className="md:text-right pb-4">
              <p className="text-xl font-bold uppercase text-brand-red mb-2">
                CREATE. STUDIO
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-x-16">
            {portfolio.map((project) => (
              <motion.div 
                key={project.id}
                className={`group cursor-pointer ${project.className}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                data-cursor="VIEW PROJECT"
              >
                <div className={`w-full ${project.aspectRatio} relative overflow-hidden mb-8 bg-[#111]`}>
                  {/* Placeholder for real portfolio media */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display text-4xl group-hover:scale-105 transition-transform duration-1000">
                    MEDIA PLACEHOLDER
                  </div>
                  
                  {/* Hover enhancement label */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100 bg-brand-red text-white font-bold px-6 py-3 uppercase tracking-widest text-sm whitespace-nowrap z-10">
                    View Project
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-t-2 border-brand-ink/20 pt-6">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-display font-extrabold uppercase group-hover:text-brand-red transition-colors">{project.name}</h3>
                    <div className="text-brand-ink/60 font-bold font-sans text-sm mt-2 uppercase">Client: {project.client}</div>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-sm font-sans font-bold uppercase tracking-widest text-brand-red">
                      {project.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="min-h-screen py-32 px-6 md:px-12 relative transition-colors duration-700" 
        style={{ 
          backgroundColor: hoveredService !== null ? services[hoveredService].color : 'var(--color-brand-ink)',
          color: hoveredService !== null ? '#FFFFFF' : '#000000'
        }}>
        <div className="container mx-auto relative z-10">
          <h2 className="text-sm font-sans font-bold uppercase tracking-widest mb-24 opacity-50">Creative Capabilities</h2>
          <div className="flex flex-col">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href="/services"
                className="group border-t border-black/20 py-8 md:py-12 flex items-baseline gap-8"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                data-cursor="DISCOVER"
              >
                <span className="text-[clamp(3rem,8vw,9rem)] font-display font-extrabold group-hover:pl-4 md:group-hover:pl-8 transition-all duration-500 break-words">
                  {service.name}
                </span>
              </Link>
            ))}
            <div className="border-t border-black/20"></div>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="py-32 bg-brand-bg px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-16">
            
            <div className="border-t-4 border-brand-red pt-8">
              <h3 className="text-4xl font-display font-extrabold mb-4">CREATE. LABS</h3>
              <p className="font-sans font-bold opacity-70 mb-8 uppercase text-sm leading-relaxed">Experimental Content<br/>AI Videos<br/>Concept Productions</p>
              <Link href="/labs" className="text-brand-red font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">Explore Labs →</Link>
            </div>

            <div className="border-t-4 border-brand-ink/20 pt-8">
              <h3 className="text-4xl font-display font-extrabold mb-4">CREATE. SOCIAL</h3>
              <p className="font-sans font-bold opacity-70 mb-8 uppercase text-sm leading-relaxed">Marketing<br/>Performance<br/>Analytics</p>
              <Link href="/social" className="text-brand-red font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">Explore Social →</Link>
            </div>

            <div className="border-t-4 border-brand-ink/20 pt-8">
              <h3 className="text-4xl font-display font-extrabold mb-4">CREATE. EVENTS</h3>
              <p className="font-sans font-bold opacity-70 mb-8 uppercase text-sm leading-relaxed">Experiences<br/>Live Productions<br/>Brand Activations</p>
              <Link href="/events" className="text-brand-red font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">Explore Events →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="min-h-screen bg-brand-red text-white flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl z-10 flex flex-col justify-center">
          <h2 className="text-[clamp(4rem,12vw,14rem)] font-display font-extrabold leading-[0.85] mb-16 uppercase break-words w-full">
            START<br/>A<br/>PROJECT.
          </h2>
          <div>
            <Link 
              href="/contact" 
              className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-widest border-b-8 border-white pb-2 hover:text-black hover:border-black transition-colors inline-block"
              data-cursor="CONTACT"
            >
              LET'S TALK →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
