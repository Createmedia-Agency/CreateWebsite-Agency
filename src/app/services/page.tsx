import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Creative Production Studio | CREATE.",
  description: "CREATE. is a creative marketing agency and production studio offering commercials, campaigns, branded content, and visual storytelling.",
};

const services = [
  {
    title: "Creative Production",
    items: ["Commercials", "Brand Films", "Promotional Content", "Reels", "UGC", "Visual Storytelling"],
    href: "/studio"
  },
  {
    title: "Advertising & Campaigns",
    items: ["Campaign Strategy", "Video Advertising", "Ad Creative", "Visual Identity"],
    href: "/advertising"
  },
  {
    title: "Branding & Design",
    items: ["Brand Strategy", "Logo Design", "Brand Guidelines", "Social Media Design"],
    href: "/branding"
  },
  {
    title: "Digital & Social",
    items: ["Social Marketing", "Performance", "Analytics"],
    href: "/social"
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg text-brand-ink">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="max-w-4xl mb-32 pt-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
            Creative Agency Services.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl">
            We are a creative production studio bridging the gap between high-end visual storytelling and effective marketing performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {services.map((service, i) => (
            <div key={i} className="border-t border-white/10 pt-8 group">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-8">
                {service.title}
              </h2>
              <ul className="flex flex-col gap-4 mb-12">
                {service.items.map((item, j) => (
                  <li key={j} className="text-lg font-sans font-medium text-white/70 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href={service.href}
                className="text-sm font-bold uppercase tracking-widest text-brand-red group-hover:text-white transition-colors flex items-center gap-2"
              >
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
