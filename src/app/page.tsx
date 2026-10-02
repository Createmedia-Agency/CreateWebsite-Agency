"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

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
      
      {/* 1. Hero & 2. CREATE Positioning */}
      <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto w-full max-w-7xl flex flex-col items-center text-center relative z-10">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="w-full">
            <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold tracking-tight mb-6 text-balance leading-tight">
              Creative Production Studio <br/>
              <span className="text-brand-ink/50">for Commercials, Branded Content & Campaigns.</span>
            </h1>
            <p className="text-xl md:text-2xl font-sans font-medium text-brand-red tracking-wide mb-12">
              Branding so effective, it feels illegal.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest font-bold opacity-60 mb-12">
              <span>Commercials</span>
              <span>•</span>
              <span>Branded Content</span>
              <span>•</span>
              <span>Campaigns</span>
              <span>•</span>
              <span>Visual Storytelling</span>
            </div>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 font-medium text-balance">
              We connect research, creative thinking, production, and execution to turn ideas into work people can see, feel, and remember.
            </p>
            
            <div className="mt-16 flex items-center justify-center gap-8">
              <Link href="/contact" className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-brand-red hover:text-white transition-colors">
                Start a Project
              </Link>
              <Link href="/work" className="text-sm font-bold uppercase tracking-widest hover:text-brand-red transition-colors">
                Explore Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. What We Create */}
      <section className="py-32 bg-[#050505] px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-24 md:flex justify-between items-end gap-12">
            <div className="max-w-2xl">
              <h2 className="text-brand-red text-sm font-bold uppercase tracking-widest mb-4">What We Create</h2>
              <p className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight">
                Ideas need more than a starting point. They need research, direction, production, and careful execution.
              </p>
            </div>
            <p className="text-white/60 font-medium max-w-md mt-8 md:mt-0 text-lg">
              CREATE builds creative work across commercials, branded content, campaigns, and visual storytelling. Every project begins with understanding the brief, the audience, and the idea behind the work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {[
              { 
                title: "Commercials", 
                desc: "Commercial films built around clear ideas, strong stories, and purposeful visual direction." 
              },
              { 
                title: "Branded Content", 
                desc: "Brand-led stories made to communicate, connect, and give audiences something worth watching." 
              },
              { 
                title: "Campaigns", 
                desc: "Creative campaign work that connects the central idea with the content and visual assets needed to bring it to life." 
              },
              { 
                title: "Visual Storytelling", 
                desc: "Stories shaped through film, design, motion, sound, and creative direction." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="group border-l border-white/10 pl-8 hover:border-brand-red transition-colors duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <h3 className="text-3xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Connect / Research / Execute... */}
      <section className="py-32 px-6 md:px-12 bg-brand-bg relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            {[
              { letter: "C", word: "CONNECT", desc: "The brief, the brand, the audience" },
              { letter: "R", word: "RESEARCH", desc: "The context and the culture" },
              { letter: "E", word: "EXECUTE", desc: "The creative vision" },
              { letter: "A", word: "ASSEMBLE", desc: "The moving parts" },
              { letter: "T", word: "TRANSFORM", desc: "Ideas into output" },
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

      {/* 5. Some of Our Work */}
      <section className="py-32 bg-[#050505] px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-end mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
              Some of Our Work.
            </h2>
            <Link href="/work" className="text-sm font-medium tracking-widest uppercase hover:text-brand-red transition-colors">
              View All Work →
            </Link>
          </div>

          <div className="flex flex-col gap-32">
            {portfolio.map((project, index) => (
              <motion.div 
                key={project.id}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <Link href={`/work/${project.slug}`} className="block">
                  <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#111] overflow-hidden mb-8 relative border border-white/10 group-hover:border-brand-red transition-colors duration-500">
                    <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 font-display uppercase tracking-widest">
                      {/* Placeholder for video/image */}
                      Media Container
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                      <div className="flex items-center gap-6 mb-4">
                        <span className="text-brand-red font-mono font-bold">{project.id}</span>
                        <span className="text-xs uppercase tracking-widest font-bold text-white/50">{project.category}</span>
                      </div>
                      <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tight group-hover:text-brand-red transition-colors duration-300">
                        {project.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-lg text-white/60 mb-2">Client</p>
                      <p className="text-xl font-bold">{project.client}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose CREATE Preview */}
      <section className="py-32 bg-brand-bg px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-red text-sm font-bold uppercase tracking-widest mb-4">Why CREATE?</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">
                Good creative starts with understanding.
              </h3>
              <p className="text-xl text-white/60 leading-relaxed mb-12">
                We connect first and research the context before we ever develop the creative. From end-to-end execution to unified creative direction, we ensure the creative serves the actual goal.
              </p>
              
              <ul className="space-y-4 mb-12">
                {['Research Before Execution', 'Complete Production Capability', 'Unified Creative Direction', 'Stories People Can See'].map((reason, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-lg font-medium text-white/80">
                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span>
                    {reason}
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/why-choose-us"
                className="inline-block bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-brand-red hover:text-white transition-colors rounded-full"
              >
                Explore Why CREATE
              </Link>
            </div>
            <div className="aspect-square bg-[#050505] border border-white/10 flex items-center justify-center relative overflow-hidden group">
               <div className="text-white/10 uppercase tracking-widest text-sm">Visual Composite</div>
               <div className="absolute inset-0 bg-brand-red/5 group-hover:bg-brand-red/10 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Leadership / About preview */}
      <section className="py-32 bg-[#050505] px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-brand-red text-sm font-bold uppercase tracking-widest mb-4">Created By</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-12">
            Built by real people with creative and production experience.
          </h3>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-16">
            CREATE is led by a team whose background spans filmmaking, strategy, and producing work for emerging and established brands.
          </p>
          <Link 
            href="/about"
            className="inline-block text-sm font-bold uppercase tracking-widest hover:text-brand-red transition-colors"
          >
            Meet The Leadership →
          </Link>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 bg-brand-bg border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-12 text-center">
          <h2 className="text-brand-red text-sm font-bold uppercase tracking-widest mb-4">Created For</h2>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <div className="py-8 animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-32 px-8">
            {["Government of Meghalaya", "W.H Warehouse", "Sharda International School", "PWD Delhi", "No Label", "Sabrini", "P&G", "BRB", "Tipsy Tiger", "Troovy", "Wellbeing Nutrition", "Red Bull", "IIAC", "PW", "Protiviti", "AIESEC", "TrustERRA", "Korean Cultural Centre", "JhaJi"].map((client, i) => (
              <span key={i} className="text-2xl md:text-4xl font-display font-bold text-white/20 hover:text-white transition-colors duration-300">
                {client}
              </span>
            ))}
          </div>
          <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap flex items-center gap-16 md:gap-32 px-8">
            {["Government of Meghalaya", "W.H Warehouse", "Sharda International School", "PWD Delhi", "No Label", "Sabrini", "P&G", "BRB", "Tipsy Tiger", "Troovy", "Wellbeing Nutrition", "Red Bull", "IIAC", "PW", "Protiviti", "AIESEC", "TrustERRA", "Korean Cultural Centre", "JhaJi"].map((client, i) => (
              <span key={i} className="text-2xl md:text-4xl font-display font-bold text-white/20 hover:text-white transition-colors duration-300">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Insights Preview */}
      <section className="py-32 bg-[#050505] px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
              Insights & Thinking.
            </h2>
            <Link href="/insights" className="text-sm font-medium tracking-widest uppercase hover:text-brand-red transition-colors">
              Read More →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="border border-white/10 p-8 hover:border-brand-red transition-colors">
                <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-4 block">Production</span>
                <h3 className="text-2xl font-display font-bold mb-4">Why execution is just as important as the idea.</h3>
                <Link href="/insights" className="text-sm font-bold uppercase hover:text-brand-red transition-colors mt-8 inline-block">Read →</Link>
             </div>
             <div className="border border-white/10 p-8 hover:border-brand-red transition-colors">
                <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-4 block">Strategy</span>
                <h3 className="text-2xl font-display font-bold mb-4">Researching the context before developing the creative.</h3>
                <Link href="/insights" className="text-sm font-bold uppercase hover:text-brand-red transition-colors mt-8 inline-block">Read →</Link>
             </div>
             <div className="border border-white/10 p-8 hover:border-brand-red transition-colors">
                <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-4 block">Storytelling</span>
                <h3 className="text-2xl font-display font-bold mb-4">How visual stories shape audience perception.</h3>
                <Link href="/insights" className="text-sm font-bold uppercase hover:text-brand-red transition-colors mt-8 inline-block">Read →</Link>
             </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-48 bg-brand-bg text-center px-6 md:px-12 relative overflow-hidden border-t border-white/5">
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
