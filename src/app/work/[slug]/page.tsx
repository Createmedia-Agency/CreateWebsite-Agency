import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const title = params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
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
    description: "Offered by Prime Minister's Office. Played in 145 embassies across the globe. A visual exploration of history and modern memorial architecture.",
    services: ["Concept", "Production", "Post-Production"],
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg text-brand-ink">
      
      {/* Hero Header */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-16">
        <Link href="/work" className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-brand-red transition-colors inline-block mb-12">
          ← Back to Portfolio
        </Link>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold tracking-tight mb-16 max-w-5xl leading-tight">
          {project.title}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Client</div>
            <div className="text-lg font-medium">{project.client}</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Timeline</div>
            <div className="text-lg font-medium">{project.timeline || "N/A"}</div>
          </div>
          <div className="col-span-2">
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Services</div>
            <div className="text-lg font-medium">{project.services.join(", ")}</div>
          </div>
        </div>
      </div>

      {/* Cinematic Video Player */}
      <div className="w-full relative bg-[#050505] mb-32 flex items-center justify-center aspect-[16/9] md:aspect-[21/9] border-y border-white/5">
        {project.youtubeUrl ? (
          <iframe 
            src={`${project.youtubeUrl}?autoplay=0&rel=0`} 
            title={`${project.title} Video Player`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0 absolute inset-0"
          ></iframe>
        ) : (
          <div className="text-white/20 font-sans text-lg uppercase tracking-widest flex flex-col items-center gap-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
            Media Placeholder
          </div>
        )}
      </div>

      {/* Brief & Execution */}
      <div className="container mx-auto px-6 md:px-12 max-w-5xl mb-48">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4 text-xs font-bold uppercase tracking-widest text-brand-red">
            The Brief
          </div>
          <div className="md:col-span-8 text-2xl md:text-3xl font-sans font-medium leading-relaxed text-white/90">
            {project.description}
          </div>
        </div>
      </div>

      {/* Next Project / CTA */}
      <div className="bg-[#050505] py-32 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-8">Ready to Start?</h2>
          <Link 
            href="/contact" 
            className="text-4xl md:text-6xl font-display font-bold tracking-tight hover:text-brand-red transition-colors inline-block"
            data-cursor="CONTACT"
          >
            Work With CREATE →
          </Link>
        </div>
      </div>
    </div>
  );
}
