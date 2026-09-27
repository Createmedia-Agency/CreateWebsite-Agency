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

  const services = [
    { id: "01", name: "STRATEGY", color: "#FFE600", visual: "Grid Pattern" },
    { id: "02", name: "SOCIAL", color: "#FF0033", visual: "Collage" },
    { id: "03", name: "PERFORMANCE", color: "#FFFFFF", visual: "Graphs" },
    { id: "04", name: "BRANDING", color: "#FFE600", visual: "Typography" },
  ];

  const concepts = [
    { 
      id: "01", 
      name: "NOVA", 
      category: "Concept Identity / Fashion",
      image: "/nova.jpg",
      className: "md:col-span-12 w-full",
      aspectRatio: "aspect-[16/9] md:aspect-[21/9]"
    },
    { 
      id: "02", 
      name: "MOTION HOUSE", 
      category: "Brand Campaign / Entertainment",
      image: "/motion.jpg",
      className: "md:col-span-5 md:mt-32",
      aspectRatio: "aspect-[3/4]"
    },
    { 
      id: "03", 
      name: "FORM", 
      category: "Digital Product / Technology",
      image: "/form.jpg",
      className: "md:col-span-7",
      aspectRatio: "aspect-[4/3]"
    },
    { 
      id: "04", 
      name: "OFFBEAT", 
      category: "Brand Identity / Food",
      image: "/offbeat.jpg",
      className: "md:col-span-10 md:col-start-2",
      aspectRatio: "aspect-[16/9]"
    },
  ];

  return (
    <div ref={containerRef} className="relative bg-brand-bg text-brand-ink">
      
      {/* SECTION 01 & 02: RESPONSIVE HERO WITH VISUAL */}
      <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto w-full h-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          
          {/* Typography Left Side */}
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }} 
            className="w-full md:w-1/2 flex flex-col items-start z-10"
          >
            <h1 className="text-[clamp(4rem,10vw,12rem)] font-display font-extrabold leading-[0.85] tracking-tighter mb-8 break-words uppercase">
              CREATE
              <motion.span 
                className="block text-[clamp(2.5rem,6vw,8rem)] text-brand-orange mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                IS A VERB.
              </motion.span>
            </h1>
            <p className="text-xl md:text-3xl font-sans font-bold uppercase tracking-widest max-w-xl text-balance opacity-80">
              We create brands people remember.
            </p>
            <div className="mt-12 flex gap-6">
              <Link href="/work" className="px-8 py-4 bg-brand-ink text-brand-bg font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors">
                Explore Lab
              </Link>
            </div>
          </motion.div>

          {/* Visual Right Side */}
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="w-full md:w-1/2 relative flex justify-end"
          >
            <div className="relative w-full max-w-lg aspect-[3/4] md:aspect-[4/5] overflow-hidden group">
              <Image 
                src="/nova.jpg" 
                alt="Create Studio Aesthetic" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-brand-blue mix-blend-color opacity-20"></div>
              <div className="absolute bottom-6 left-6 bg-brand-bg text-brand-ink px-3 py-1 text-xs font-bold uppercase tracking-widest">
                Art Direction
              </div>
            </div>
            
            {/* Floating typography element */}
            <motion.div 
              className="absolute -left-12 bottom-24 text-[clamp(2rem,5vw,6rem)] font-display font-extrabold mix-blend-difference text-brand-ink pointer-events-none"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              MAKE.
            </motion.div>
          </motion.div>
          
        </div>
      </section>

      {/* SECTION 03: WHAT WE DO */}
      <section className="min-h-screen py-32 px-6 md:px-12 relative transition-colors duration-700" 
        style={{ 
          backgroundColor: hoveredService !== null ? services[hoveredService].color : 'var(--color-brand-ink)',
          color: hoveredService !== null ? '#050505' : '#050505'
        }}>
        <div className="container mx-auto relative z-10">
          <h2 className="text-sm font-sans font-bold uppercase tracking-widest mb-24 opacity-50">What We Do</h2>
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
                <span className="text-xl md:text-3xl font-sans opacity-50 group-hover:opacity-100 transition-opacity">
                  {service.id}
                </span>
                <span className="text-[clamp(3rem,8vw,9rem)] font-display font-extrabold group-hover:pl-4 md:group-hover:pl-8 transition-all duration-500 break-words">
                  {service.name}
                </span>
              </Link>
            ))}
            <div className="border-t border-black/20"></div>
          </div>
        </div>
      </section>

      {/* SECTION 04: THE CREATE LAB & SECTION 09: CONCEPT PORTFOLIO */}
      <section className="py-32 md:py-48 bg-brand-bg px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-32 grid md:grid-cols-2 gap-12 items-end">
            <h2 className="text-[clamp(4rem,10vw,8rem)] font-display font-extrabold leading-[0.85] uppercase">
              THE<br/>CREATE<br/>LAB
            </h2>
            <div className="md:text-right pb-4">
              <p className="text-xl font-bold uppercase text-brand-orange mb-2">
                CREATE CONCEPT / EXPERIMENT.
              </p>
              <p className="text-lg font-sans font-bold uppercase opacity-60">
                Not real clients. Just pure creative vision.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-x-16">
            {concepts.map((concept) => (
              <motion.div 
                key={concept.id}
                className={`group cursor-pointer ${concept.className}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                data-cursor="VIEW CONCEPT"
              >
                <div className={`w-full ${concept.aspectRatio} relative overflow-hidden mb-8`}>
                  <Image 
                    src={concept.image} 
                    alt={concept.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                  <div className="absolute inset-0 bg-brand-bg opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-difference"></div>
                  
                  {/* Hover enhancement label */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100 bg-brand-orange text-brand-bg font-bold px-6 py-3 uppercase tracking-widest text-sm whitespace-nowrap z-10">
                    View Concept
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-t-2 border-brand-ink pt-6">
                  <div>
                    <div className="text-brand-orange font-bold font-sans text-sm mb-2 uppercase">{concept.id}</div>
                    <h3 className="text-3xl md:text-5xl font-display font-extrabold uppercase group-hover:text-brand-orange transition-colors">{concept.name}</h3>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-sm font-sans font-bold uppercase tracking-widest opacity-80">
                      {concept.category}
                    </p>
                    <p className="text-xs font-bold uppercase opacity-50 mt-1">Create Concept</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: CREATIVE PLAYGROUND */}
      <section className="py-48 px-6 md:px-12 bg-brand-orange text-brand-bg flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-xl font-bold uppercase tracking-widest mb-16 text-center text-brand-bg">TRY TO BREAK THIS.</h2>
        <motion.div 
          drag
          dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
          whileDrag={{ scale: 1.05, rotate: 2 }}
          className="cursor-grab active:cursor-grabbing max-w-full"
          data-cursor="DRAG"
        >
          <h1 className="text-[clamp(5rem,15vw,20rem)] font-display font-extrabold leading-none mix-blend-difference text-brand-bg text-center break-all md:break-normal">
            CREATE
          </h1>
        </motion.div>
        <p className="text-xl font-bold uppercase tracking-widest mt-16 text-center opacity-70 text-brand-bg">
          That's what we mean by CREATE.
        </p>
      </section>

      {/* SECTION 06: RESULTS */}
      <section className="py-48 bg-brand-ink text-brand-bg overflow-hidden border-t border-brand-bg/20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-24 opacity-50">
            The Output
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 flex-wrap">
            {["ATTENTION", "INTEREST", "ACTION", "GROWTH"].map((word, i) => (
              <div key={word} className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                <span className="text-[clamp(3rem,6vw,6rem)] font-display font-extrabold hover:text-brand-orange transition-colors">
                  {word}
                </span>
                {i < 3 && <span className="hidden md:block text-brand-blue text-4xl">→</span>}
                {i < 3 && <span className="md:hidden text-brand-blue text-4xl">↓</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: INSIGHTS */}
      <section className="py-32 md:py-48 bg-brand-bg text-brand-ink px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-[clamp(4rem,10vw,12rem)] font-display font-extrabold leading-[0.8] mb-24 uppercase">
            INSIGHTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              { id: "01", title: "What Is a Creative & Marketing Agency?", cat: "Strategy" },
              { id: "02", title: "How Creative Marketing Helps Brands Grow", cat: "Growth" },
              { id: "03", title: "Advertising Creative vs Performance", cat: "Advertising" }
            ].map(article => (
              <Link href="/insights" key={article.id} className="group flex flex-col h-full" data-cursor="READ">
                <div className="border-t-4 border-brand-ink pt-8 flex-grow">
                  <span className="text-brand-blue font-bold uppercase tracking-widest mb-4 block">
                    {article.id} / {article.cat}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-display font-extrabold mb-8 group-hover:text-brand-orange transition-colors uppercase leading-tight">
                    {article.title}
                  </h3>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-blue font-bold uppercase mt-8 border-t border-brand-ink/10 pt-4">
                  Read Article →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="min-h-screen bg-brand-orange text-brand-bg flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl z-10 flex flex-col justify-center">
          <h2 className="text-[clamp(4rem,12vw,14rem)] font-display font-extrabold leading-[0.85] mb-16 uppercase break-words w-full">
            WHAT<br/>SHOULD<br/>WE<br/><span className="text-brand-blue">CREATE?</span>
          </h2>
          <div>
            <Link 
              href="/contact" 
              className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-widest border-b-8 border-brand-bg pb-2 hover:text-brand-ink hover:border-brand-ink transition-colors inline-block text-brand-bg"
              data-cursor="START"
            >
              LET'S TALK →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
