import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights & Blog | CREATE",
  description: "Insights on creative marketing, digital strategy, advertising, and branding.",
};

const articles = [
  {
    title: "What Is a Creative and Marketing Agency?",
    category: "Digital Marketing",
    readTime: "5 min read",
    date: "Sep 20, 2026"
  },
  {
    title: "What Does a Creative Agency Do?",
    category: "Branding",
    readTime: "4 min read",
    date: "Sep 15, 2026"
  },
  {
    title: "Creative Agency vs Marketing Agency: What's the Difference?",
    category: "Strategy",
    readTime: "6 min read",
    date: "Sep 10, 2026"
  },
  {
    title: "How Creative Marketing Helps Brands Grow",
    category: "Digital Marketing",
    readTime: "7 min read",
    date: "Sep 05, 2026"
  },
  {
    title: "How Advertising Creative Impacts Campaign Performance",
    category: "Paid Ads",
    readTime: "8 min read",
    date: "Aug 28, 2026"
  }
];

export default function InsightsPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-8xl font-display font-extrabold mb-12">
          Insights.
        </h1>
        
        <div className="flex flex-wrap gap-4 mb-20 pb-8 border-b border-brand-charcoal/20">
          {['All', 'Digital Marketing', 'SEO', 'Paid Ads', 'Social Media', 'Branding', 'Content', 'Case Studies'].map(filter => (
            <button key={filter} className={`px-6 py-2 rounded-full border border-brand-charcoal text-sm font-medium transition-colors ${filter === 'All' ? 'bg-brand-black text-white' : 'hover:bg-gray-100'}`}>
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {articles.map((article, i) => (
            <Link href="#" key={i} className="group block">
              <div className="w-full aspect-[4/3] bg-brand-charcoal mb-6 overflow-hidden">
                <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <div className="flex items-center gap-4 text-sm font-mono text-gray-500 mb-4">
                <span className="text-brand-accent uppercase tracking-widest">{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold group-hover:text-brand-accent transition-colors leading-tight">
                {article.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
