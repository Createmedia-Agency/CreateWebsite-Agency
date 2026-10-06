const fs = require('fs');

const workPage = 'src/app/work/page.tsx';
let workContent = fs.readFileSync(workPage, 'utf8');

if (!workContent.includes('shiv-immersive')) {
  workContent = workContent.replace(
    /const portfolio = \[\s*\{/,
    `const portfolio = [
    {
      title: "Shiv Immersive Reels",
      slug: "shiv-immersive",
      client: "Shiv Immersive",
      category: "Reels / Social",
      year: "2024",
      image: ""
    },
    {`
  );
  fs.writeFileSync(workPage, workContent);
  console.log("Added to work/page.tsx");
}

const detailPage = 'src/app/work/[slug]/page.tsx';
let detailContent = fs.readFileSync(detailPage, 'utf8');

// Update Balidaan Diwas
detailContent = detailContent.replace(
  /"balidaan-diwas": \{[\s\S]*?youtubeUrl: null,/,
  `"balidaan-diwas": {
    title: "Bhagat Singh Memorial Day",
    client: "PWD Delhi",
    budget: "₹11,20,000",
    timeline: "21st–23rd March 2026",
    youtubeUrl: "https://www.youtube.com/embed/4kR-PMhCSc8",`
);

// Update Laut Aaye Budhu
detailContent = detailContent.replace(
  /"laut-aaye": \{[\s\S]*?youtubeUrl: null,/,
  `"laut-aaye": {
    title: "Laut Aaye Budhu",
    client: "Naash",
    budget: null,
    timeline: null,
    youtubeUrl: "https://www.youtube.com/embed/a4S9Q-Tchs4",`
);

if (!detailContent.includes('shiv-immersive')) {
  // Add Shiv Immersive
  detailContent = detailContent.replace(
    /const portfolioDb = \{/,
    `const portfolioDb = {
  "shiv-immersive": {
    title: "Shiv Immersive Reels",
    client: "Shiv Immersive",
    budget: null,
    timeline: null,
    youtubeUrl: null,
    reels: [
      "https://www.instagram.com/reel/DdEaYGZJtdM/embed",
      "https://www.instagram.com/reel/DdHNNxMhDTi/embed",
      "https://www.instagram.com/reel/DdEfxbtgt2B/embed",
      "https://www.instagram.com/reel/DdMcOrNOzeM/embed"
    ],
    brief: "A series of immersive Instagram reels produced for Shiv Immersive.",
    services: ["Production", "Social Media", "Post-Production"]
  },`
  );
  
  // Inject the Reels rendering block below the youtube block
  const reelsBlock = `
      {/* Reels Grid (if applicable) */}
      {(project as any).reels && (project as any).reels.length > 0 && (
        <div className="container mx-auto px-6 md:px-12 mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {(project as any).reels.map((url: string, i: number) => (
              <div key={i} className="aspect-[9/16] w-full bg-[#111] border border-white/10 rounded-xl overflow-hidden relative">
                <iframe src={url} className="absolute inset-0 w-full h-full border-0" allow="encrypted-media" scrolling="no"></iframe>
              </div>
            ))}
          </div>
        </div>
      )}
  `;

  detailContent = detailContent.replace(
    /\{\/\* Case Study Sections \*\/\}/,
    reelsBlock + '\n      {/* Case Study Sections */}'
  );
  
  fs.writeFileSync(detailPage, detailContent);
  console.log("Updated detail page");
}
