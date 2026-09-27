import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Mock CMS data for services based on the PDF
const serviceData = {
  "creative-advertising": {
    title: "Creative Advertising That Gets Attention",
    seoTitle: "Creative Advertising Agency | Ad Campaigns & Strategy",
    description: "Full-funnel creative advertising campaigns designed to capture attention and drive measurable performance.",
    keywords: ["creative advertising agency", "advertising creative agency", "creative advertising services", "creative advertising company", "creative advertising firms", "creative ad agency", "ad creative agency", "advertising and design agency"],
    problem: "Most ads are ignored. In a saturated digital landscape, generic creative wastes budget and damages brand perception.",
    solution: "We build creative advertising campaigns that interrupt the feed, resonate emotionally, and convert efficiently.",
    deliverables: [
      "Campaign Strategy",
      "Ad Creative",
      "Meta Advertising",
      "Google Advertising",
      "Video Advertising",
      "Retargeting",
      "Campaign Optimization",
      "Performance Reporting"
    ],
    results: [
      { metric: "3x", label: "ROAS Improvement" },
      { metric: "-40%", label: "CPA Reduction" }
    ]
  },
  "branding": {
    title: "Branding, Design & Creative That Builds Recognition",
    seoTitle: "Marketing Design & Branding Agency | Visual Identity",
    description: "Strategic branding and visual identity design that differentiates your company in the market.",
    keywords: ["marketing design agency", "advertising and design agency", "branding and advertising agency", "advertising and branding agency"],
    problem: "Brands without a clear visual identity and strategy struggle to build trust and command premium pricing.",
    solution: "We develop comprehensive brand systems that are visually striking and strategically aligned with your business goals.",
    deliverables: [
      "Brand Strategy",
      "Visual Identity",
      "Logo Design",
      "Brand Guidelines",
      "Campaign Design",
      "Social Media Design",
      "Advertising Creative"
    ],
    results: [
      { metric: "100%", label: "Brand Consistency" },
      { metric: "New", label: "Market Positioning" }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing That Accelerates Growth",
    seoTitle: "Creative Digital Marketing Agency | Growth Strategy",
    description: "Integrated digital marketing strategies combining performance, content, and creative.",
    keywords: ["digital marketing creative agency", "creative digital marketing agencies", "creative digital marketing agency", "marketing agency company"],
    problem: "Siloed marketing efforts lead to disjointed customer experiences and inefficient spend.",
    solution: "A unified digital marketing approach that aligns creative output with performance data.",
    deliverables: [
      "Digital Strategy",
      "Funnel Optimization",
      "Analytics & Tracking",
      "Multi-channel Campaigns",
      "Conversion Rate Optimization"
    ],
    results: [
      { metric: "200+", label: "Leads Generated" },
      { metric: "₹5", label: "CPL Achieved" }
    ]
  }
};

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = serviceData[params.slug as keyof typeof serviceData];
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.seoTitle} | CREATE`,
    description: service.description,
    keywords: service.keywords.join(", "),
  };
}

export default function ServicePage({ params }: Props) {
  const service = serviceData[params.slug as keyof typeof serviceData];
  
  if (!service) {
    // If we haven't mocked it yet, show a generic one or 404
    // For this implementation we will fallback to a generic version
  }

  const data = service || {
    title: `${params.slug.replace("-", " ").toUpperCase()}`,
    description: "Premium creative marketing services for growing brands.",
    problem: "Generic marketing fails to capture attention.",
    solution: "Strategic, creative-led approaches that drive results.",
    deliverables: ["Strategy", "Execution", "Optimization", "Reporting"],
    results: [{ metric: "10x", label: "ROI" }]
  };

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-12 mb-24 container mx-auto">
        <div className="max-w-4xl">
          <Link href="/services" className="text-brand-accent font-medium mb-8 inline-block hover:underline">
            ← All Services
          </Link>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.1] mb-8 text-balance">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl text-balance">
            {data.description}
          </p>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="px-6 md:px-12 mb-32 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">The Challenge</h3>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              {data.problem}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-mono text-brand-accent uppercase tracking-widest mb-4">Our Approach</h3>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              {data.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="px-6 md:px-12 py-32 bg-brand-black text-brand-offwhite mb-32">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-16">Deliverables.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.deliverables.map((item, i) => (
              <div key={i} className="border-t border-gray-800 pt-6">
                <div className="text-brand-accent font-mono text-sm mb-4">0{i + 1}</div>
                <div className="text-xl font-bold">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-12 mb-32 container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16">The Impact.</h2>
        <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32">
          {data.results.map((res, i) => (
            <div key={i}>
              <div className="text-7xl md:text-9xl font-display font-extrabold text-brand-accent mb-4">
                {res.metric}
              </div>
              <div className="text-xl font-bold uppercase tracking-widest">
                {res.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 container mx-auto text-center">
        <div className="bg-brand-cream py-24 px-8 rounded-3xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to start?</h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-4 px-10 py-5 bg-brand-black text-white rounded-full text-lg font-bold hover:bg-brand-accent transition-colors"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
