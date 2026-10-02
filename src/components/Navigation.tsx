"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Studio", href: "/studio" },
    { name: "Labs", href: "/labs" },
    { name: "Social", href: "/social" },
    { name: "Events", href: "/events" },
    { name: "Insights", href: "/insights" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-xl' : 'py-8 md:py-12'} px-6 md:px-12 pointer-events-none flex justify-between items-center`}>
        <Link 
          href="/" 
          className="pointer-events-auto relative w-32 md:w-48 h-16 md:h-20 mix-blend-difference opacity-90 hover:opacity-100 transition-opacity"
          data-cursor="HOME"
        >
          <Image 
            src="/create-logo-transparent.png" 
            alt="CREATE. Logo" 
            fill 
            className="object-contain object-left"
            priority
          />
        </Link>
        
        <div className="flex items-center pointer-events-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group flex flex-col items-end gap-[5px] p-2 mix-blend-difference"
            data-cursor={isOpen ? "CLOSE" : "MENU"}
          >
            <motion.div 
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }} 
              className="w-8 h-[2px] bg-white transition-colors"
            />
            <motion.div 
              animate={{ opacity: isOpen ? 0 : 1 }} 
              className="w-6 h-[2px] bg-white group-hover:w-8 group-hover:bg-brand-red transition-all"
            />
            <motion.div 
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0, width: isOpen ? 32 : 16 }} 
              className="w-4 h-[2px] bg-white group-hover:w-8 transition-all"
            />
          </button>
        </div>
      </header>

      {/* Elegant Floating CTA */}
      <motion.div 
        className="fixed bottom-8 right-8 z-40 pointer-events-auto hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          href="/contact"
          className="bg-brand-red text-white px-8 py-4 font-sans font-medium tracking-wide text-sm hover:bg-white hover:text-black transition-all duration-300 rounded-full shadow-2xl"
          data-cursor="LET'S TALK"
        >
          Start a Project
        </Link>
      </motion.div>

      {/* Cinematic Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-black text-white flex flex-col justify-center px-12 md:px-24"
          >
            <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ delay: 0.1 * i, duration: 0.6, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      className="text-4xl md:text-6xl font-display font-bold hover:text-brand-red transition-colors tracking-tight inline-block"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="hidden md:flex flex-col gap-8 border-l border-white/10 pl-16"
              >
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">Start Something</h4>
                  <Link
                    href="/contact"
                    className="text-2xl font-sans text-white hover:text-brand-red transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Let's Talk →
                  </Link>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">Social</h4>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:text-brand-red transition-colors">Instagram</a>
                    <a href="#" className="hover:text-brand-red transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-brand-red transition-colors">Vimeo</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
