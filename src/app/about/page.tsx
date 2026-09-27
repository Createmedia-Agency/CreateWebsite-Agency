import { Metadata } from "next";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-48 pb-24 min-h-screen bg-brand-bg text-brand-ink overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* WHO WE ARE */}
        <section className="mb-48">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-12">Who We Are</h2>
          <h1 className="text-5xl md:text-[7rem] font-display font-extrabold leading-[0.85] max-w-6xl uppercase">
            We are a creative agency that thinks like a design studio and executes like a growth team.
          </h1>
        </section>

        {/* WHAT WE BELIEVE */}
        <section className="mb-48 border-t-4 border-brand-ink pt-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-12">What We Believe</h2>
          <div className="grid md:grid-cols-2 gap-16 md:gap-32">
            <div>
              <h3 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8">Normal is invisible.</h3>
            </div>
            <div className="text-2xl md:text-3xl font-medium leading-tight max-w-xl">
              Generic marketing is a waste of budget. The algorithms filter out the boring. We believe the only sustainable growth strategy is creating work that people cannot ignore.
            </div>
          </div>
        </section>

        {/* HOW WE THINK */}
        <section className="mb-48 py-32 px-6 md:px-16 bg-brand-ink text-brand-bg rounded-none -mx-6 md:mx-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-24 opacity-50">How We Think</h2>
          
          <div className="space-y-32">
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-baseline">
              <span className="text-4xl md:text-6xl font-display font-bold text-brand-blue">01</span>
              <div>
                <h3 className="text-5xl md:text-7xl font-display font-extrabold uppercase mb-6">Strategy Before Art.</h3>
                <p className="text-2xl max-w-2xl font-medium">Beautiful design without strategic positioning is just decoration. We don't guess. We position.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-baseline">
              <span className="text-4xl md:text-6xl font-display font-bold text-brand-orange">02</span>
              <div>
                <h3 className="text-5xl md:text-7xl font-display font-extrabold uppercase mb-6">Friction Creates Memory.</h3>
                <p className="text-2xl max-w-2xl font-medium">Perfectly smooth, predictable content slides right off the brain. We introduce intentional friction to create memory structures.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-baseline">
              <span className="text-4xl md:text-6xl font-display font-bold">03</span>
              <div>
                <h3 className="text-5xl md:text-7xl font-display font-extrabold uppercase mb-6">No Silos.</h3>
                <p className="text-2xl max-w-2xl font-medium">Brand, content, and performance are not separate departments. They are one unified creative system.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-32">
          <h2 className="text-[12vw] font-display font-extrabold leading-[0.8] mb-16 uppercase">
            WHY IT<br/><span className="text-brand-orange">MATTERS.</span>
          </h2>
          <Link 
            href="/work" 
            className="text-3xl font-sans font-bold uppercase tracking-widest border-b-4 border-brand-ink pb-2 hover:text-brand-blue hover:border-brand-blue transition-colors inline-block"
            data-cursor="SEE"
          >
            EXPLORE THE LAB →
          </Link>
        </section>

      </div>
    </div>
  );
}
