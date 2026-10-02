"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);
  
  // Form State
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", website: "",
    service: "COMMERCIALS", projectType: "", budget: "", message: ""
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SUBMITTING");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Submission failed");
      
      setStatus("SUCCESS");
    } catch (error) {
      console.error(error);
      setStatus("ERROR");
    }
  };

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
              className="text-[clamp(4rem,10vw,12rem)] font-display font-extrabold leading-[0.8] text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              START<br/>
              <span className="text-brand-red">SOMETHING.</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Form Section */}
      <motion.div 
        className="w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showForm ? 1 : 0, y: showForm ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          
          <div>
            <h2 className="text-[clamp(3rem,8vw,8rem)] font-display font-extrabold mb-8 leading-[0.8] uppercase">
              Let's Talk.
            </h2>
            <p className="text-xl md:text-2xl font-bold uppercase tracking-widest text-brand-red mb-16">
              Tell us what you're building.
            </p>

            <div className="space-y-12">
              <div>
                <div className="text-sm font-sans font-bold uppercase tracking-widest opacity-50 mb-2">Email</div>
                <a href="mailto:createforbrands@gmail.com" className="text-2xl md:text-3xl font-display font-bold hover:text-brand-red transition-colors">
                  createforbrands@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-8 md:p-12 text-white relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-red"></div>
            
            {status === "SUCCESS" ? (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                className="h-full flex flex-col items-center justify-center text-center py-32"
              >
                <div className="w-24 h-24 bg-brand-red text-white rounded-full flex items-center justify-center text-4xl mb-8">✓</div>
                <h3 className="text-4xl font-display font-bold uppercase mb-4">Got it. Your project is with us.</h3>
                <p className="text-xl font-medium opacity-70">We'll be in touch soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                {status === "ERROR" && (
                  <div className="p-4 bg-brand-red/20 border border-brand-red text-white text-sm font-bold uppercase">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border-b-2 border-white/20 py-2 focus:outline-none focus:border-brand-red transition-colors bg-transparent text-xl font-display font-bold uppercase" placeholder="JOHN DOE" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full border-b-2 border-white/20 py-2 focus:outline-none focus:border-brand-red transition-colors bg-transparent text-xl font-display font-bold uppercase" placeholder="ACME CORP" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Email *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-b-2 border-white/20 py-2 focus:outline-none focus:border-brand-red transition-colors bg-transparent text-xl font-display font-bold uppercase" placeholder="JOHN@ACME.COM" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border-b-2 border-white/20 py-2 focus:outline-none focus:border-brand-red transition-colors bg-transparent text-xl font-display font-bold uppercase" placeholder="+1 234 567 8900" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Service</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full border-b-2 border-white/20 py-2 focus:outline-none focus:border-brand-red transition-colors bg-[#111] text-white text-lg font-display font-bold uppercase appearance-none">
                      <option>COMMERCIALS</option>
                      <option>BRAND FILMS</option>
                      <option>PROMOTIONAL CONTENT</option>
                      <option>REELS / UGC</option>
                      <option>VISUAL STORYTELLING</option>
                      <option>LABS / EXPERIMENTAL</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full border-b-2 border-white/20 py-2 focus:outline-none focus:border-brand-red transition-colors bg-[#111] text-white text-lg font-display font-bold uppercase appearance-none">
                      <option>Not Specified</option>
                      <option>Under ₹1,00,000</option>
                      <option>₹1,00,000 - ₹2,50,000</option>
                      <option>₹2,50,000 - ₹5,00,000</option>
                      <option>₹5,00,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Project Details *</label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full border-b-2 border-white/20 py-2 focus:outline-none focus:border-brand-red transition-colors bg-transparent resize-none text-xl font-display font-bold uppercase" placeholder="WE NEED TO CREATE..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === "SUBMITTING"}
                  className="w-full py-6 bg-brand-red text-white font-display font-extrabold text-2xl uppercase tracking-widest hover:bg-white hover:text-black transition-colors mt-8 disabled:opacity-50"
                  data-cursor="SEND"
                >
                  {status === "SUBMITTING" ? "SENDING..." : "SUBMIT REQUEST"}
                </button>
              </form>
            )}
          </div>

        </div>
      </motion.div>
    </div>
  );
}
