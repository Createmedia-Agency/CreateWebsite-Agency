"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink flex items-center justify-center px-6 md:px-12 relative overflow-hidden pt-24 pb-24">
      
      {/* Intro Transition Sequence */}
      <AnimatePresence>
        {!showForm && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center bg-brand-ink text-brand-bg z-20"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.h1 
              className="text-[12vw] font-display font-extrabold leading-[0.8] text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              CREATE<br/>
              <span className="text-brand-orange">SOMETHING</span><br/>
              TOGETHER.
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Form Section */}
      <motion.div 
        className="w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showForm ? 1 : 0, y: showForm ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          
          <div>
            <h2 className="text-6xl md:text-[8rem] font-display font-extrabold mb-8 leading-[0.8] uppercase">
              Let's Talk.
            </h2>
            <p className="text-2xl font-bold uppercase tracking-widest text-brand-blue mb-16">
              Tell us what you're building.
            </p>

            <div className="space-y-12">
              <div>
                <div className="text-sm font-sans font-bold uppercase tracking-widest text-brand-orange mb-2">Email</div>
                <a href="mailto:hello@createagency.example.com" className="text-3xl font-display font-bold hover:text-brand-blue transition-colors">
                  HELLO@CREATE.COM
                </a>
              </div>
            </div>
          </div>

          <div className="bg-brand-ink p-8 md:p-12 text-brand-bg relative">
            {/* Design detail */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-orange"></div>
            
            <form className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Name</label>
                  <input type="text" className="w-full border-b-2 border-brand-bg/20 py-2 focus:outline-none focus:border-brand-orange transition-colors bg-transparent text-xl font-display font-bold uppercase" placeholder="JOHN DOE" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Company</label>
                  <input type="text" className="w-full border-b-2 border-brand-bg/20 py-2 focus:outline-none focus:border-brand-orange transition-colors bg-transparent text-xl font-display font-bold uppercase" placeholder="ACME CORP" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Email</label>
                  <input type="email" className="w-full border-b-2 border-brand-bg/20 py-2 focus:outline-none focus:border-brand-orange transition-colors bg-transparent text-xl font-display font-bold uppercase" placeholder="JOHN@ACME.COM" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Website</label>
                  <input type="url" className="w-full border-b-2 border-brand-bg/20 py-2 focus:outline-none focus:border-brand-orange transition-colors bg-transparent text-xl font-display font-bold uppercase" placeholder="ACME.COM" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Service</label>
                  <select className="w-full border-b-2 border-brand-bg/20 py-2 focus:outline-none focus:border-brand-orange transition-colors bg-brand-ink text-brand-bg text-xl font-display font-bold uppercase appearance-none">
                    <option>DIGITAL MARKETING</option>
                    <option>CREATIVE ADVERTISING</option>
                    <option>BRANDING & DESIGN</option>
                    <option>CONTENT</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Budget</label>
                  <select className="w-full border-b-2 border-brand-bg/20 py-2 focus:outline-none focus:border-brand-orange transition-colors bg-brand-ink text-brand-bg text-xl font-display font-bold uppercase appearance-none">
                    <option>$10K - $25K</option>
                    <option>$25K - $50K</option>
                    <option>$50K+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Project Details</label>
                <textarea rows={3} className="w-full border-b-2 border-brand-bg/20 py-2 focus:outline-none focus:border-brand-orange transition-colors bg-transparent resize-none text-xl font-display font-bold uppercase" placeholder="WE NEED TO CREATE..."></textarea>
              </div>

              <button 
                type="button" 
                className="w-full py-6 bg-brand-orange text-brand-ink font-display font-extrabold text-2xl uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-colors mt-8"
                data-cursor="SEND"
              >
                SUBMIT REQUEST
              </button>
            </form>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
