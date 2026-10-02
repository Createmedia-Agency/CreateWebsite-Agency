import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertising & Campaign Production Agency",
  description: "CREATE develops and produces advertising campaigns, commercials, branded content, and creative assets from concept through final execution.",
  keywords: ["advertising campaign production", "commercial production company", "campaign production agency", "advertising production company"]
};

const phases = [
  { title: "Research", desc: "Understand the brand, audience, context, and brief." },
  { title: "Concept", desc: "Develop the central creative idea." },
  { title: "Story", desc: "Build the narrative, script, storyboard, and visual direction." },
  { title: "Production", desc: "Turn the concept into real creative work." },
  { title: "Content", desc: "Create the formats and variations required by the campaign." },
  { title: "Execution", desc: "Finish and deliver the approved campaign assets." }
];

export default function AdvertisingPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg text-brand-ink">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pt-16">
        
        <div className="max-w-4xl mb-32">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
            Campaigns Built From Idea to Execution
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-3xl mb-8">
            A campaign starts with an idea. That idea then needs a clear story, visual direction, production plan, and set of final assets.
          </p>
          <p className="text-lg md:text-xl text-white/50 font-medium leading-relaxed max-w-3xl">
            CREATE develops and produces creative work for campaigns across film, branded content, social content, digital assets, and supporting visual communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {phases.map((phase, i) => (
            <div key={i} className="p-10 bg-[#050505] border border-white/5 hover:border-brand-red transition-colors duration-300">
              <div className="text-xs font-bold text-white/20 mb-4 tracking-widest">0{i+1}</div>
              <h2 className="text-2xl font-display font-bold mb-4">{phase.title}</h2>
              <p className="text-white/60 text-lg leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-brand-red text-white p-12 md:p-24 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to start?</h2>
          <Link 
            href="/contact"
            className="inline-block bg-white text-black px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors rounded-full"
          >
            Start a Campaign Project
          </Link>
        </div>

      </div>
    </div>
  );
}
