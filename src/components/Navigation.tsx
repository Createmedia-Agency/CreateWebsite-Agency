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
    { name: "WORK", href: "/work" },
    { name: "SERVICES", href: "/services" },
    { name: "STUDIO", href: "/studio" },
    { name: "LABS", href: "/labs" },
    { name: "SOCIAL", href: "/social" },
    { name: "EVENTS", href: "/events" },
    { name: "INSIGHTS", href: "/insights" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 pointer-events-none flex justify-between items-start">
        <Link 
          href="/" 
          className="pointer-events-auto mix-blend-difference group flex items-baseline gap-1"
          data-cursor="HOME"
        >
          {/* We use text representing the brand identity until the user drops the actual logo.svg into public/ */}
          <span className="text-3xl md:text-4xl font-display font-extrabold tracking-tighter text-white">
            CREATE<span className="text-brand-red">.</span>
          </span>
        </Link>
        
        <div className="flex flex-col items-end gap-4 pointer-events-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group flex flex-col items-end gap-1.5 p-4 mix-blend-difference"
            data-cursor={isOpen ? "CLOSE" : "MENU"}
          >
            <motion.div 
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} 
              className="w-8 h-1 bg-white"
            />
            <motion.div 
              animate={{ opacity: isOpen ? 0 : 1 }} 
              className="w-6 h-1 bg-brand-red transition-all group-hover:w-8"
            />
            <motion.div 
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0, width: isOpen ? 32 : 16 }} 
              className="w-4 h-1 bg-white transition-all group-hover:w-8"
            />
          </button>
        </div>
      </header>

      {/* Floating CTA (Bottom Right) */}
      <motion.div 
        className="fixed bottom-8 right-8 z-40 pointer-events-auto hidden md:block"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : 50 }}
      >
        <Link 
          href="/contact"
          className="bg-brand-red text-white px-8 py-4 font-display font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors flex items-center justify-center shadow-2xl"
          data-cursor="LET'S TALK"
        >
          START A PROJECT
        </Link>
      </motion.div>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-black text-white flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col space-y-4 md:space-y-6 text-center max-h-screen overflow-y-auto py-24">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ delay: 0.05 * i, duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    className="text-5xl md:text-[6rem] font-display font-extrabold hover:text-brand-red transition-colors leading-none"
                    onClick={() => setIsOpen(false)}
                    data-cursor="EXPLORE"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ delay: 0.05 * navLinks.length, duration: 0.5, ease: "easeOut" }}
                className="pt-12"
              >
                <Link
                  href="/contact"
                  className="text-2xl md:text-3xl font-sans text-brand-red uppercase tracking-widest font-bold underline underline-offset-8 decoration-2 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                  data-cursor="HI!"
                >
                  LET'S TALK
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
