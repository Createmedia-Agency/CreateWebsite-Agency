import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const title = params.slug.split('-').map(w => w.toUpperCase()).join(' ');
  return {
    title: `${title} | Concept Project by CREATE`,
    description: `Explore the fictional creative concept and art direction for ${title}.`,
  };
}

export default function ConceptProjectPage({ params }: { params: { slug: string } }) {
  const title = params.slug.split('-').map(w => w.toUpperCase()).join(' ');

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg text-brand-ink">
      <div className="container mx-auto px-6 md:px-12">
        <Link href="/work" className="text-sm font-bold uppercase tracking-widest hover:text-brand-orange transition-colors inline-block mb-12">
          ← BACK TO LAB
        </Link>
        
        <div className="mb-12 inline-block px-3 py-1 bg-brand-orange text-brand-bg text-xs font-bold uppercase tracking-widest">
          FICTIONAL CONCEPT PROJECT
        </div>

        <h1 className="text-[15vw] font-display font-extrabold leading-[0.8] mb-12 break-words">
          {title}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y-4 border-brand-ink py-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Category</div>
            <div className="font-display font-bold text-2xl uppercase">Fictional</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Industry</div>
            <div className="font-display font-bold text-2xl uppercase">Exploration</div>
          </div>
          <div className="col-span-2">
            <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Focus</div>
            <div className="font-display font-bold text-2xl uppercase">Art Direction, Identity</div>
          </div>
        </div>
      </div>

      {/* Hero Experimental Image Area */}
      <div className="w-full h-[80vh] bg-brand-ink flex items-center justify-center relative overflow-hidden mb-32 group" data-cursor="DRAG">
        <div className="absolute inset-0 bg-brand-blue mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div className="text-[30vw] font-display font-extrabold text-white/5 whitespace-nowrap group-hover:scale-110 transition-transform duration-1000">
          {title}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-16 mb-32">
          <div className="md:col-span-4 text-sm font-bold uppercase tracking-widest text-brand-orange">
            The Premise
          </div>
          <div className="md:col-span-8 text-3xl md:text-5xl font-display font-bold leading-tight uppercase">
            What if a brand could visually communicate speed without ever showing movement? This concept explores typography as physical tension.
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-16 mb-32">
          <div className="md:col-span-4 text-sm font-bold uppercase tracking-widest text-brand-blue">
            Creative Direction
          </div>
          <div className="md:col-span-8 space-y-8 text-xl font-medium leading-relaxed max-w-2xl">
            <p>We designed a brutalist typographic system that intentionally feels incomplete, forcing the viewer's brain to finish the shapes. It's an exercise in reduction.</p>
            <p>The color palette is restricted to only pure CMYK values to represent a digital-first origin, intentionally creating harsh, uncomfortable contrast.</p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-brand-ink text-brand-bg py-48">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-[10vw] font-display font-extrabold leading-[0.8] mb-16 uppercase">
            WANT REAL<br/><span className="text-brand-orange">RESULTS?</span>
          </h2>
          <Link 
            href="/contact" 
            className="text-4xl font-sans font-bold uppercase tracking-widest border-b-4 border-brand-bg pb-2 hover:text-brand-blue hover:border-brand-blue transition-colors"
            data-cursor="YES"
          >
            HIRE US FOR YOUR BRAND
          </Link>
        </div>
      </div>
    </div>
  );
}
