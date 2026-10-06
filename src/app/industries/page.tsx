import { ArrowIcon } from "@/components/ArrowIcon";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creative Production for Brands Across Industries",
  description: "CREATE develops commercials, branded content, campaigns, and visual storytelling for brands across selected industries.",
  keywords: ["creative production agency", "commercial production", "branded content", "visual storytelling"]
};

const industries = [
  "Real Estate",
  "E-commerce",
  "Healthcare",
  "Education",
  "Hospitality",
  "Technology",
  "Finance",
  "Startups",
  "Professional Services"
];

export default function IndustriesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg text-brand-ink">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pt-16">
        
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
            Creative Work Built Around Your Industry
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-3xl">
            Every industry has different audiences, problems, language, and creative needs. CREATE adapts its production process to the brand and the audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {industries.map((industry, i) => (
            <div key={i} className="p-10 bg-[#050505] border border-white/5 hover:border-brand-red transition-colors duration-300 flex items-center justify-between group">
              <h2 className="text-2xl font-display font-bold group-hover:text-brand-red transition-colors">{industry}</h2>
              <ArrowIcon className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          ))}
        </div>

        <div className="bg-[#050505] p-12 md:p-24 text-center border border-white/5">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Don't see your industry?</h2>
          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto font-medium">
            Great creative principles apply anywhere. Tell us about your market and let's build something that stands out.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-black px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-brand-red hover:text-white transition-colors rounded-full"
          >
            Start a Conversation
          </Link>
        </div>

      </div>
    </div>
  );
}
