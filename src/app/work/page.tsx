import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concept Portfolio | CREATE",
  description: "Explore our creative concepts, fictional brand projects, and digital experiments.",
  keywords: "creative marketing agencies, creative advertising agencies, creative marketing firms"
};

const concepts = [
  {
    title: "NOVA",
    slug: "nova",
    client: "Fictional Concept",
    industry: "Fashion",
    services: "Brand Identity, Campaign",
    aspectRatio: "aspect-[3/4]"
  },
  {
    title: "MOTION HOUSE",
    slug: "motion-house",
    client: "Fictional Concept",
    industry: "Entertainment",
    services: "Digital Experience",
    aspectRatio: "aspect-[16/9]"
  },
  {
    title: "FORM",
    slug: "form",
    client: "Fictional Concept",
    industry: "Technology",
    services: "Product Campaign",
    aspectRatio: "aspect-square"
  },
  {
    title: "OFFBEAT",
    slug: "offbeat",
    client: "Fictional Concept",
    industry: "Food & Beverage",
    services: "Identity, Packaging",
    aspectRatio: "aspect-[4/3]"
  }
];

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-brand-bg text-brand-ink">
      <div className="container mx-auto">
        
        <div className="mb-24">
          <h1 className="text-[12vw] font-display font-extrabold leading-[0.8] mb-8">
            CONCEPT<br/>PORTFOLIO.
          </h1>
          <p className="text-xl font-bold uppercase tracking-widest text-brand-orange max-w-2xl">
            These are fictional concept projects created to demonstrate our art direction and strategic thinking. No real clients. Just pure creative vision.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-24">
          {['ALL', 'BRANDING', 'ADVERTISING', 'DIGITAL', 'EXPERIMENTS'].map(filter => (
            <button key={filter} className={`px-6 py-2 border-2 border-brand-ink font-bold uppercase tracking-widest text-sm transition-colors ${filter === 'ALL' ? 'bg-brand-ink text-brand-bg' : 'hover:bg-brand-orange hover:border-brand-orange hover:text-brand-bg'}`}>
              {filter}
            </button>
          ))}
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-x-16">
          {concepts.map((concept, i) => (
            <div 
              key={concept.slug} 
              className={`group cursor-pointer ${
                i === 0 ? "md:col-span-12" : 
                i === 1 ? "md:col-span-5" : 
                i === 2 ? "md:col-span-7 mt-0 md:mt-32" : 
                "md:col-span-10 md:col-start-2"
              }`}
            >
              <Link href={`/work/${concept.slug}`} className="block mb-8 relative overflow-hidden bg-brand-ink" data-cursor="EXPLORE">
                <div className={`w-full ${concept.aspectRatio} relative`}>
                  <div className="absolute inset-0 bg-brand-blue mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
                  {/* Fictional imagery placeholder */}
                  <div className="w-full h-full flex items-center justify-center bg-brand-ink text-white/5 text-[15vw] font-display group-hover:scale-105 transition-transform duration-1000">
                    {concept.title}
                  </div>
                </div>
              </Link>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-t-2 border-brand-ink pt-4">
                <div>
                  <h3 className="text-4xl md:text-6xl font-display font-extrabold mb-2 uppercase">{concept.title}</h3>
                  <div className="inline-block px-2 py-1 bg-brand-ink text-brand-bg text-[10px] font-bold uppercase tracking-widest mb-2">CREATE CONCEPT</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-sans font-bold uppercase tracking-widest text-brand-orange">{concept.industry}</div>
                  <div className="text-sm font-sans font-bold uppercase tracking-widest opacity-50">{concept.services}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
