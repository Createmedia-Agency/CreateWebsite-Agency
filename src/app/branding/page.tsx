import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Branding | Marketing Design Agency | CREATE.",
  description: "CREATE is a marketing design agency offering brand strategy, visual identity, and campaign design.",
};

export default function BrandingPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg text-brand-ink">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pt-16">
        
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
            Branding & Identity.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl">
            A branding and advertising agency approach to building identities that are impossible to ignore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-display font-bold mb-6 tracking-tight">Identities with gravity.</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              We design visual systems that carry weight. By merging deep brand strategy with high-end execution, we create brands that dominate their space.
            </p>
            <div>
              <Link href="/contact" className="inline-block border-b border-brand-red text-brand-red font-bold uppercase tracking-widest text-sm pb-1 hover:text-white hover:border-white transition-colors">
                Build Your Brand
              </Link>
            </div>
          </div>

          <div className="bg-[#050505] p-12 border border-white/5">
            <h2 className="text-2xl font-display font-bold mb-6">Capabilities</h2>
            <ul className="space-y-4 text-white/70 font-medium text-lg">
              <li>Brand Strategy</li>
              <li>Visual Identity & Logos</li>
              <li>Brand Guidelines</li>
              <li>Social Media Design</li>
              <li>Campaign Design</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
