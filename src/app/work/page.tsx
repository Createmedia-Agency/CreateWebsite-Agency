import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creative Production Portfolio | Commercials, Campaigns & Branded Content",
  description: "Explore CREATE's portfolio of commercials, branded content, campaigns, films, and visual storytelling projects.",
};

const portfolio = [
  {
    title: "Bhagat Singh Memorial Day",
    slug: "balidaan-diwas",
    client: "PWD Delhi",
    category: "Commercials", // Museum Inauguration Video maps to Commercials/Brand Film
    aspectRatio: "aspect-[21/9]",
  },
  {
    title: "IIAC Promotional Video",
    slug: "iiac-promo",
    client: "India International Arbitration Centre",
    category: "Campaigns",
    aspectRatio: "aspect-[16/9]",
  },
  {
    title: "Laut Aaye Budhu",
    slug: "laut-aaye",
    client: "Naash",
    category: "Films",
    aspectRatio: "aspect-[16/9]",
  },
  {
    title: "An Effulgence Production",
    slug: "effulgence",
    client: "Effulgence",
    category: "Branded Content",
    aspectRatio: "aspect-[16/9]",
  }
];

const filters = ["All", "Commercials", "Branded Content", "Campaigns", "Films", "Social", "Design"];

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-brand-bg text-brand-ink">
      <div className="container mx-auto max-w-7xl">
        
        <div className="mb-24 md:mb-32 max-w-4xl pt-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 text-balance">
            Work Created by CREATE
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-2xl">
            Explore commercials, branded content, campaigns, films, and visual stories created from idea to final frame.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 md:gap-8 mb-24 border-b border-white/10 pb-8">
          {filters.map((filter, i) => (
            <button 
              key={i} 
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${i === 0 ? 'text-brand-red' : 'text-white/40 hover:text-white'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Clean Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-32">
          {portfolio.map((project, i) => (
            <div key={project.slug} className={`group ${i === 0 ? "md:col-span-2" : ""}`}>
              <Link href={`/work/${project.slug}`} className="block mb-8 relative overflow-hidden bg-[#111] rounded-sm">
                <div className={`w-full ${i === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display text-2xl uppercase tracking-widest group-hover:scale-105 transition-transform duration-1000 ease-out">
                    MEDIA PLACEHOLDER
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>
              </Link>
              
              <div className="flex flex-col gap-2">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  {project.category}
                </div>
                <h2 className="text-3xl font-display font-bold group-hover:text-brand-red transition-colors duration-300">
                  {project.title}
                </h2>
                <div className="text-white/60 font-medium">
                  {project.client}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
