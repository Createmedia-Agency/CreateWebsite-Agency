"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);



  const portfolio = [
    { 
      id: "01", 
      name: "BALIDAAN DIWAS FINAL", 
      client: "Naash",
      category: "Memorial Day Video",
      image: "/work/balidaan.jpg",
      slug: "balidaan-diwas"
    },
    { 
      id: "02", 
      name: "IIAC PROMOTIONAL VIDEO", 
      client: "India International Arbitration Centre",
      category: "Promotional Video",
      image: "/work/iiac.jpg",
      slug: "iiac-promo"
    },
    { 
      id: "03", 
      name: "LAUT AAYE BUDHU", 
      client: "Naash",
      category: "Lyrical Video",
      image: "/work/laut.jpg",
      slug: "laut-aaye"
    },
  ];

  return (
    <div ref={containerRef} className="relative bg-brand-bg text-brand-ink selection:bg-brand-red">
      
      {/* Cinematic Hero */}
      <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto w-full max-w-7xl flex flex-col items-center text-center relative z-10">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="w-full">
            <h1 className="text-[clamp(2.5rem,5vw,6rem)] font-display font-bold tracking-tight mb-6 text-balance leading-tight">
              Creative Marketing Agency <br/>
              <span className="text-brand-ink/50">That Makes Brands Stand Out.</span>
            </h1>
            <p className="text-xl md:text-2xl font-sans font-medium text-brand-red tracking-wide mb-12">
              Branding so effective, it feels illegal.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest font-bold opacity-60">
              <span>Commercials</span>
              <span>•</span>
              <span>Branded Content</span>
              <span>•</span>
              <span>Campaigns</span>
              <span>•</span>
              <span>Visual Storytelling</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Work (Editorial Layout) */}
      <section className="py-32 bg-brand-bg px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-end mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
              Selected Work.
            </h2>
            <Link href="/work" className="text-sm font-medium tracking-widest uppercase hover:text-brand-red transition-colors">
              View All Work →
            </Link>
          </div>

          <div className="flex flex-col gap-32">
            {portfolio.map((project, index) => (
              <motion.div 
                key={project.id}
                className="group flex flex-col md:flex-row gap-12 md:gap-24 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Image takes 60% */}
                <Link href={`/work/${project.slug}`} className={`w-full md:w-[60%] aspect-[16/9] relative overflow-hidden bg-[#111] ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display text-2xl uppercase tracking-widest group-hover:scale-105 transition-transform duration-1000 ease-out">
                    MEDIA PLACEHOLDER
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                </Link>
                
                {/* Text takes 40% */}
                <div className={`w-full md:w-[40%] flex flex-col ${index % 2 !== 0 ? 'md:order-1 items-start md:items-end md:text-right' : 'items-start'}`}>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 group-hover:text-brand-red transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-brand-ink/60 font-medium">
                    Client: {project.client}
                  </p>
                  <Link href={`/work/${project.slug}`} className="mt-8 text-sm uppercase tracking-widest font-bold border-b border-white/20 pb-1 hover:border-brand-red hover:text-brand-red transition-all">
                    Explore Project
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Powerful Statement */}
      <section className="py-32 bg-brand-red text-white text-center px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-tight uppercase">
            We do NOT SELL content.<br/>
            We CREATE. BRANDS that SELL.
          </h2>
        </div>
      </section>

      {/* Philosophy (Detailed grid) */}
      <section className="py-32 bg-[#050505] px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-brand-red text-sm font-bold uppercase tracking-widest mb-4">Our Philosophy</h2>
            <p className="text-3xl md:text-5xl font-display font-bold max-w-3xl mx-auto text-balance leading-tight">
              A systematic approach to creative production.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-y-16 gap-x-16 max-w-5xl mx-auto">
            {[
              { letter: "C", word: "CONNECT", desc: "With the brand, audience & culture" },
              { letter: "R", word: "RESEARCH", desc: "The market before touching the camera" },
              { letter: "E", word: "EXECUTE", desc: "Production of content built for attention" },
              { letter: "A", word: "AMPLIFY", desc: "Through culture, creators & campaigns" },
              { letter: "T", word: "TRANSFORM", desc: "Businesses into brands" },
              { letter: "E", word: "ELEVATE", desc: "Brands into experiences" },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="flex items-start gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="text-5xl md:text-7xl font-display font-bold text-brand-red leading-none">{item.letter}</div>
                <div>
                  <div className="text-2xl font-display font-bold uppercase tracking-widest mb-2">{item.word}.</div>
                  <div className="text-white/60 font-sans font-medium text-lg">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-32 bg-brand-bg px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-24 text-center">
            CREATE. Ecosystem
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "STUDIO", focus: "Commercials, Reels, UGC", href: "/studio" },
              { title: "LABS", focus: "Experimental & AI Content", href: "/labs" },
              { title: "SOCIAL", focus: "Marketing, Performance", href: "/social" },
              { title: "EVENTS", focus: "Live Experiences", href: "/events" },
            ].map((div, i) => (
              <Link key={i} href={div.href} className="group block p-8 border border-white/10 hover:border-brand-red hover:bg-[#0a0a0a] transition-all duration-300">
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-red transition-colors">
                  CREATE. <br/>{div.title}
                </h3>
                <p className="text-sm font-sans text-white/60 mb-8">{div.focus}</p>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 bg-[#050505] text-center px-6 md:px-12 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl z-10 relative">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
            Start a project.
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto">
            Ready to build something exceptional? Tell us about your brand and what you're looking to create.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-black px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-brand-red hover:text-white transition-colors rounded-full"
          >
            Work With CREATE
          </Link>
        </div>
      </section>
    </div>
  );
}
