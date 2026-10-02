import { Metadata } from "next";
import Link from "next/link";
import * as motion from "framer-motion/client";

export const metadata: Metadata = {
  title: "Why Choose CREATE | Creative Production Studio",
  description: "Why brands choose CREATE for commercials, branded content, campaigns, and visual storytelling.",
  keywords: ["why choose a creative agency", "creative agency services", "creative production studio"]
};

export default function WhyChooseUsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg text-brand-ink">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Hero Section */}
        <div className="max-w-4xl mb-32 pt-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
            Why Choose CREATE.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-3xl mb-8">
            We believe that good creative starts with understanding. Every project we take on is driven by a deep understanding of the brand, the audience, the brief, and the reason behind the work.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24 mb-32 border-t border-white/5 pt-24">
          
          <motion.div 
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-6">01 / Research Before Execution</h2>
            <h3 className="text-3xl font-display font-bold tracking-tight mb-4 group-hover:text-brand-red transition-colors">Strategic Foundation</h3>
            <p className="text-lg font-sans text-white/60 leading-relaxed">
              We connect first and research the context before we ever develop the creative. Ideas need more than a starting point—they need a foundation. We ensure the creative direction serves the actual goal.
            </p>
          </motion.div>
          
          <motion.div 
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-6">02 / End-to-End Execution</h2>
            <h3 className="text-3xl font-display font-bold tracking-tight mb-4 group-hover:text-brand-red transition-colors">Complete Production Capability</h3>
            <p className="text-lg font-sans text-white/60 leading-relaxed">
              We execute the work, assemble the moving parts, and transform the idea into a finished experience. From concept and scriptwriting to direction, editing, colour grading, and final delivery, we manage the entire process.
            </p>
          </motion.div>

          <motion.div 
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-6">03 / Creative Thinking</h2>
            <h3 className="text-3xl font-display font-bold tracking-tight mb-4 group-hover:text-brand-red transition-colors">Unified Creative Direction</h3>
            <p className="text-lg font-sans text-white/60 leading-relaxed">
              Creative direction gives the work a clear point of view. We shape the visual language, story, tone, composition, and execution so that every single part of a project feels connected and intentional.
            </p>
          </motion.div>

          <motion.div 
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-6">04 / Visual Storytelling</h2>
            <h3 className="text-3xl font-display font-bold tracking-tight mb-4 group-hover:text-brand-red transition-colors">Stories People Can See</h3>
            <p className="text-lg font-sans text-white/60 leading-relaxed">
              A commercial has seconds to make an impression. Branded content needs to feel like content first and advertising second. We build stories that communicate clearly, connect with the audience, and leave a lasting mark.
            </p>
          </motion.div>

        </div>

        {/* Proof / Work Link */}
        <div className="mb-32">
          <div className="bg-[#111] p-12 md:p-16 border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-display font-bold mb-4">Don't just take our word for it.</h2>
              <p className="text-white/60 text-lg">
                Explore our portfolio to see how we apply this approach to real campaigns, branded content, and commercial productions.
              </p>
            </div>
            <Link 
              href="/work"
              className="inline-block bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-brand-red hover:text-white transition-colors rounded-full shrink-0"
            >
              Explore Our Work
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="border-t border-white/5 pt-32 pb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to create?</h2>
          <p className="text-xl text-white/60 mb-12">
            Let's discuss how CREATE can bring your next campaign or commercial project to life.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-brand-red text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors rounded-full"
          >
            Start a Conversation
          </Link>
        </div>

      </div>
    </div>
  );
}
