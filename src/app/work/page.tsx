import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Work | CREATE.",
  description: "Creative production studio portfolio. Commercials, campaigns, and visual storytelling.",
};

// This will eventually be fetched from Supabase
const portfolio = [
  {
    title: "BALIDAAN DIWAS FINAL",
    slug: "balidaan-diwas",
    client: "Naash",
    category: "Memorial Day Video / PWD Delhi museum inauguration",
    aspectRatio: "aspect-[21/9]",
    thumbnail: "/work/balidaan.jpg",
    hasVideo: true,
  },
  {
    title: "IIAC PROMOTIONAL VIDEO",
    slug: "iiac-promo",
    client: "India International Arbitration Centre",
    category: "Promotional Video",
    aspectRatio: "aspect-[16/9]",
    thumbnail: "/work/iiac.jpg",
    hasVideo: true,
  },
  {
    title: "LAUT AAYE BUDHU",
    slug: "laut-aaye",
    client: "Naash",
    category: "Lyrical Video",
    aspectRatio: "aspect-square",
    thumbnail: "/work/laut.jpg",
    hasVideo: true,
  },
  {
    title: "AN EFFULGENCE PRODUCTION",
    slug: "effulgence",
    client: "Effulgence",
    category: "Production",
    aspectRatio: "aspect-[4/3]",
    thumbnail: "/work/effulgence.jpg",
    hasVideo: false,
  }
];

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-brand-bg text-brand-ink">
      <div className="container mx-auto">
        
        <div className="mb-24">
          <h1 className="text-[clamp(4rem,10vw,12rem)] font-display font-extrabold leading-[0.85] mb-8">
            SELECTED<br/>WORK.
          </h1>
          <p className="text-xl md:text-2xl font-bold uppercase tracking-widest text-brand-red max-w-2xl">
            Commercials, branded content, campaigns and visual storytelling.
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-x-16">
          {portfolio.map((project, i) => (
            <div 
              key={project.slug} 
              className={`group cursor-pointer ${
                i === 0 ? "md:col-span-12" : 
                i === 1 ? "md:col-span-7" : 
                i === 2 ? "md:col-span-5 mt-0 md:mt-32" : 
                "md:col-span-10 md:col-start-2"
              }`}
            >
              <Link href={`/work/${project.slug}`} className="block mb-8 relative overflow-hidden bg-[#111]" data-cursor={project.hasVideo ? "PLAY" : "EXPLORE"}>
                <div className={`w-full ${project.aspectRatio} relative`}>
                  <div className="absolute inset-0 bg-brand-red mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10 pointer-events-none"></div>
                  {/* Placeholder until real thumbnails are uploaded */}
                  <div className="w-full h-full flex items-center justify-center bg-[#111] text-white/20 font-display text-4xl group-hover:scale-105 transition-transform duration-1000 uppercase text-center p-8">
                    {project.title}
                  </div>
                </div>
              </Link>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-t-2 border-white/20 pt-4">
                <div>
                  <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-2 uppercase group-hover:text-brand-red transition-colors">{project.title}</h3>
                  <div className="inline-block px-2 py-1 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest mb-2">Client: {project.client}</div>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-sm font-sans font-bold uppercase tracking-widest opacity-70">{project.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
