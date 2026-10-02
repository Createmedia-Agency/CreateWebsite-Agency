import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const title = params.slug.split('-').map(w => w.toUpperCase()).join(' ');
  return {
    title: `${title} | CREATE.`,
    description: `Creative production case study for ${title}.`,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const title = params.slug.split('-').map(w => w.toUpperCase()).join(' ');

  // Dummy data. Will be replaced by Supabase fetch
  const project = {
    title: title,
    client: "Client Name",
    budget: "₹1,20,000",
    timeline: "21st–23rd March 2026",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Demo
    description: "Offered by Prime Minister's Office. Played in 145 embassies across the globe.",
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg text-brand-ink">
      <div className="container mx-auto px-6 md:px-12">
        <Link href="/work" className="text-sm font-bold uppercase tracking-widest hover:text-brand-red transition-colors inline-block mb-12">
          ← BACK TO WORK
        </Link>

        <h1 className="text-[clamp(4rem,8vw,12rem)] font-display font-extrabold leading-[0.85] mb-12 break-words uppercase">
          {project.title}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y-2 border-white/20 py-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Client</div>
            <div className="font-display font-bold text-2xl uppercase">{project.client}</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Budget</div>
            <div className="font-display font-bold text-2xl uppercase">{project.budget || "N/A"}</div>
          </div>
          <div className="col-span-2">
            <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Timeline</div>
            <div className="font-display font-bold text-2xl uppercase">{project.timeline || "N/A"}</div>
          </div>
        </div>
      </div>

      {/* Hero Video / Image Area */}
      <div className="w-full relative bg-[#111] mb-32 flex items-center justify-center aspect-[16/9] md:aspect-[21/9]">
        {project.youtubeUrl ? (
          <iframe 
            src={`${project.youtubeUrl}?autoplay=0&rel=0`} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0 absolute inset-0"
          ></iframe>
        ) : (
          <div className="text-white/20 font-display text-4xl uppercase tracking-widest">
            MEDIA PLACEHOLDER
          </div>
        )}
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-16 mb-32">
          <div className="md:col-span-4 text-sm font-bold uppercase tracking-widest text-brand-red">
            The Brief
          </div>
          <div className="md:col-span-8 text-2xl md:text-4xl font-display font-bold leading-tight uppercase text-balance">
            {project.description}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-[#111] text-white py-48">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-[clamp(4rem,8vw,10rem)] font-display font-extrabold leading-[0.8] mb-16 uppercase">
            START<br/><span className="text-brand-red">SOMETHING.</span>
          </h2>
          <Link 
            href="/contact" 
            className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-widest border-b-8 border-brand-red pb-2 hover:text-white transition-colors"
            data-cursor="CONTACT"
          >
            WORK WITH CREATE
          </Link>
        </div>
      </div>
    </div>
  );
}
