import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Work | CREATE.",
  description: "Creative production studio portfolio. Commercials, campaigns, and visual storytelling.",
};

const portfolio = [
  {
    title: "BALIDAAN DIWAS FINAL",
    slug: "balidaan-diwas",
    client: "Naash",
    category: "Memorial Day Video",
    aspectRatio: "aspect-[21/9]",
    thumbnail: "/work/balidaan.jpg",
  },
  {
    title: "IIAC PROMOTIONAL VIDEO",
    slug: "iiac-promo",
    client: "India International Arbitration Centre",
    category: "Promotional Video",
    aspectRatio: "aspect-[16/9]",
    thumbnail: "/work/iiac.jpg",
  },
  {
    title: "LAUT AAYE BUDHU",
    slug: "laut-aaye",
    client: "Naash",
    category: "Lyrical Video",
    aspectRatio: "aspect-[16/9]",
    thumbnail: "/work/laut.jpg",
  },
  {
    title: "AN EFFULGENCE PRODUCTION",
    slug: "effulgence",
    client: "Effulgence",
    category: "Production",
    aspectRatio: "aspect-[16/9]",
    thumbnail: "/work/effulgence.jpg",
  }
];

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-brand-bg text-brand-ink">
      <div className="container mx-auto max-w-7xl">
        
        <div className="mb-32 md:mb-48 text-center max-w-4xl mx-auto pt-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
            Our Creative Work.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed">
            Commercials, branded content, campaigns and visual storytelling for brands that want to stand out.
          </p>
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
              </Link>
              
              <div className="flex flex-col gap-2">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  {project.category}
                </div>
                <h3 className="text-3xl font-display font-bold group-hover:text-brand-red transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="text-white/60 font-medium">
                  Client: {project.client}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
