import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertising | Creative Advertising Agency | CREATE.",
  description: "CREATE is a creative advertising agency specializing in campaign strategy, ad creative, and video advertising.",
};

export default function AdvertisingPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg text-brand-ink">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pt-16">
        
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
            Creative Advertising.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl">
            As a creative advertising agency, we produce visually striking campaigns that command attention and drive performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div className="bg-[#050505] p-12 border border-white/5">
            <h2 className="text-2xl font-display font-bold mb-6">Capabilities</h2>
            <ul className="space-y-4 text-white/70 font-medium text-lg">
              <li>Campaign Strategy</li>
              <li>Video Advertising</li>
              <li>Ad Creative & Production</li>
              <li>Social Media Campaigns</li>
            </ul>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-display font-bold mb-6 tracking-tight">Campaigns that feel illegal.</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              We don't just make ads; we build creative ecosystems. From the first storyboard to the final render, every frame is designed to elevate your brand's perception.
            </p>
            <div>
              <Link href="/contact" className="inline-block border-b border-brand-red text-brand-red font-bold uppercase tracking-widest text-sm pb-1 hover:text-white hover:border-white transition-colors">
                Start a Campaign
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
