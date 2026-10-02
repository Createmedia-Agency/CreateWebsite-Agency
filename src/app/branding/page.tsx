import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creative Design Studio | Brand & Campaign Design",
  description: "CREATE develops visual identity and campaign design that supports commercials, branded content, advertising, and brand communication.",
  keywords: ["creative design studio", "campaign design agency", "visual identity design", "advertising creative", "brand design"]
};

const capabilities = [
  "Campaign Design",
  "Key Visuals",
  "Advertising Creative",
  "Social Media Design",
  "Motion Design",
  "Visual Identity",
  "Brand Guidelines"
];

export default function BrandingPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg text-brand-ink">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pt-16">
        
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
            Visual Design That Supports the Story
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-3xl mb-8">
            Design should help an idea communicate. CREATE develops visual systems for campaigns, content, advertising, and brand communication.
          </p>
          <p className="text-lg md:text-xl text-brand-red font-medium leading-relaxed max-w-3xl">
            Brand and visual design is a supporting capability within CREATE's wider creative production offering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          
          <div className="bg-[#050505] p-12 border border-white/5">
            <h2 className="text-2xl font-display font-bold mb-8">Capabilities</h2>
            <ul className="space-y-4">
              {capabilities.map((item, i) => (
                <li key={i} className="text-lg font-sans font-medium text-white/70 flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center items-start">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-tight">Ready to shape your visual identity?</h2>
            <Link 
              href="/contact"
              className="inline-block bg-white text-black px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-brand-red hover:text-white transition-colors rounded-full"
            >
              Build the Visual Direction
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
