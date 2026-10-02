import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creative Production Insights",
  description: "Read CREATE's insights on creative production, commercials, branded content, campaigns, visual storytelling, and advertising.",
  keywords: ["creative production", "commercial production", "branded content", "visual storytelling"]
};

// These are recommended topics from the SEO strategy.
// In a real CMS implementation, only published articles will be fetched and displayed.
const articles = [
  {
    title: "What Does a Creative Production Studio Do?",
    category: "Creative Production",
    readTime: "5 min read",
  },
  {
    title: "Commercial Production: From Brief to Final Film",
    category: "Commercials",
    readTime: "6 min read",
  },
  {
    title: "What Is Branded Content?",
    category: "Branded Content",
    readTime: "4 min read",
  },
  {
    title: "How Research Can Lead to Better Creative Ideas",
    category: "Strategy",
    readTime: "5 min read",
  },
  {
    title: "Commercial vs Branded Content: What's the Difference?",
    category: "Production",
    readTime: "6 min read",
  },
  {
    title: "How Visual Storytelling Helps Brands Communicate",
    category: "Visual Storytelling",
    readTime: "5 min read",
  }
];

export default function InsightsPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-brand-bg text-brand-ink">
      <div className="container mx-auto max-w-7xl pt-16">
        
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
            Ideas Worth Sharing.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-3xl">
            Explore thoughts, lessons, research, and observations around creative production, commercials, branded content, campaigns, and visual storytelling.
          </p>
        </div>

        <div className="mb-16 border-b border-white/10 pb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red">
            Recommended Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {articles.map((article, i) => (
            <Link href="#" key={i} className="group block">
              <div className="w-full aspect-[4/3] bg-[#050505] border border-white/5 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/10 font-display text-xl uppercase tracking-widest group-hover:scale-105 transition-transform duration-700 ease-out">
                  CMS Placeholder
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                <span className="text-brand-red">{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="text-2xl font-display font-bold group-hover:text-brand-red transition-colors leading-tight">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
