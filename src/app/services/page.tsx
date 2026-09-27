import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Creative Agency Services | CREATE",
  description: "Explore our creative agency services including digital marketing, paid advertising, social media, branding, design, and website development.",
};

const services = [
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Data-driven marketing strategies to accelerate your brand's digital growth.",
  },
  {
    title: "Creative Advertising",
    slug: "creative-advertising",
    description: "Campaign strategy, ad creative, and performance advertising that gets attention.",
  },
  {
    title: "Branding & Design",
    slug: "branding",
    description: "Brand strategy, visual identity, and campaign design that builds recognition.",
  },
  {
    title: "Social Media",
    slug: "social-media",
    description: "Creative content and communication strategies for modern social platforms.",
  },
  {
    title: "Content Marketing",
    slug: "content-marketing",
    description: "Editorial and creative content that drives organic growth and authority.",
  },
  {
    title: "Website Development",
    slug: "website-development",
    description: "High-performance digital experiences and creative marketing websites.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl md:text-8xl font-display font-extrabold mb-8">
          Our Services.
        </h1>
        <p className="text-xl md:text-3xl max-w-3xl text-gray-600 mb-20 text-balance">
          We provide full-service creative marketing solutions for brands that want to stand out and scale up.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <Link 
              href={`/services/${service.slug}`} 
              key={service.slug}
              className="group block"
            >
              <div className="border-t border-brand-charcoal/20 pt-8">
                <div className="text-sm font-mono text-gray-400 mb-4">0{index + 1}</div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-sm">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 font-medium text-brand-black group-hover:text-brand-accent transition-colors">
                  Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
