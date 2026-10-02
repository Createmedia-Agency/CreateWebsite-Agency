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
    }, 1500); // Faster intro for premium feel
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
    <div className="min-h-screen bg-brand-bg text-brand-ink flex items-center justify-center px-6 md:px-12 relative overflow-hidden pt-32 pb-24">
      
      {/* Intro Transition */}
      <AnimatePresence>
        {!showForm && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center bg-black z-20"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold text-center tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Let's Create <span className="text-brand-red">Something Great.</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Form Section */}
      <motion.div 
        className="w-full max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: showForm ? 1 : 0, y: showForm ? 0 : 40 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            Tell us what you're building.
          </h1>
          <p className="text-white/60 text-lg">
            Or email us directly at <a href="mailto:createforbrands@gmail.com" className="text-white hover:text-brand-red transition-colors">createforbrands@gmail.com</a>
          </p>
        </div>

        <div className="bg-[#050505] p-8 md:p-16 rounded-2xl border border-white/10 shadow-2xl relative">
          
          {status === "SUCCESS" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} 
              className="flex flex-col items-center justify-center text-center py-24"
            >
              <div className="w-20 h-20 bg-brand-red text-white rounded-full flex items-center justify-center text-3xl mb-8 shadow-lg shadow-brand-red/20">✓</div>
              <h3 className="text-3xl font-display font-bold tracking-tight mb-4">Got it. Your project is with us.</h3>
              <p className="text-lg text-white/60">We'll be in touch soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {status === "ERROR" && (
                <div className="p-4 bg-brand-red/10 border border-brand-red/50 text-brand-red rounded-lg text-sm text-center">
                  We encountered an issue submitting your request. Please email us directly.
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50">Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50">Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-white" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50">Email *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-white" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50">Service</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-white appearance-none">
                    <option>Commercials</option>
                    <option>Brand Films</option>
                    <option>Promotional Content</option>
                    <option>Reels / UGC</option>
                    <option>Visual Storytelling</option>
                    <option>Labs / Experimental</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50">Budget</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-white appearance-none">
                    <option>Not Specified</option>
                    <option>Under ₹1,00,000</option>
                    <option>₹1,00,000 - ₹2,50,000</option>
                    <option>₹2,50,000 - ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50">Project Details *</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-white resize-none" placeholder="Tell us about the goals and creative direction..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "SUBMITTING"}
                className="w-full py-4 bg-brand-red text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 mt-4"
              >
                {status === "SUBMITTING" ? "Sending Request..." : "Submit Request"}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
