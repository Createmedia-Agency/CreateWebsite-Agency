const fs = require('fs');

// --- 1. REWRITE `src/app/page.tsx` ---
const homePath = 'src/app/page.tsx';
let homeContent = fs.readFileSync(homePath, 'utf8');

const newHomePortfolio = `
  const portfolio = [
    { 
      id: "01", 
      name: "Bhagat Singh Memorial Day", 
      client: "PWD Delhi",
      category: "Museum Inauguration Video",
      youtubeUrl: "https://www.youtube.com/watch?v=4kR-PMhCSc8",
      image: "",
      slug: "balidaan-diwas"
    },
    { 
      id: "02", 
      name: "IIAC Promotional Video", 
      client: "India International Arbitration Centre",
      category: "Promotional Video",
      youtubeUrl: "",
      googleDriveId: "1h5IsPFCKi4eMrLAhvO8kskZGv3Lr0XTL",
      image: "/images/services/commercial-production.webp",
      slug: "iiac-promo"
    },
    { 
      id: "03", 
      name: "Laut Aaye Budhu", 
      client: "Naash",
      category: "Lyrical Video",
      youtubeUrl: "https://youtu.be/a4S9Q-Tchs4?si=HV1OzDyV0M9cy3NE",
      image: "",
      slug: "laut-aaye"
    },
    { 
      id: "04", 
      name: "Shiv Immersive Reels", 
      client: "Shiv Immersive",
      category: "Reels / Social Video",
      youtubeUrl: "",
      image: "/images/services/social-media-marketing.webp",
      slug: "shiv-immersive"
    }
  ];
`;
homeContent = homeContent.replace(/const portfolio = \[[\s\S]*?\];/, newHomePortfolio.trim());

const homeRegex = /<div className="w-full aspect-\[16\/9\] md:aspect-\[21\/9\] bg-\[#111\] overflow-hidden mb-8 relative border border-white\/10 group-hover:border-brand-red transition-colors duration-500">[\s\S]*?<\/div>\s*<\/div>\s*<\/Link>/;
const homeReplacement = `
                    <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#111] overflow-hidden mb-8 relative border border-white/10 group-hover:border-brand-red transition-colors duration-500">
                      {(() => {
                        let thumbUrl = (project as any).image;
                        let showPlay = true;

                        if ((project as any).youtubeUrl) {
                          const match = (project as any).youtubeUrl.match(/^.*(youtu.be\\/|v\\/|u\\/\\w\\/|embed\\/|watch\\?v=|&v=)([^#&?]*).*/);
                          if (match && match[2].length === 11) {
                            thumbUrl = \`https://img.youtube.com/vi/\${match[2]}/maxresdefault.jpg\`;
                          }
                        } else if ((project as any).googleDriveId) {
                          thumbUrl = \`https://drive.google.com/thumbnail?id=\${(project as any).googleDriveId}&sz=w1280\`;
                        }

                        if (!thumbUrl) return null;

                        return (
                          <>
                            <img src={thumbUrl} alt={project.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105" />
                            {showPlay && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 border border-white/30 backdrop-blur-sm text-white rounded-full flex items-center justify-center pl-1 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 shadow-xl">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                                </div>
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  </Link>`;
homeContent = homeContent.replace(homeRegex, homeReplacement.trim());
fs.writeFileSync(homePath, homeContent, 'utf8');
console.log('Updated Home');


// --- 2. REWRITE `src/app/work/page.tsx` ---
const workPath = 'src/app/work/page.tsx';
let workContent = fs.readFileSync(workPath, 'utf8');

const newWorkPortfolio = `
const portfolio = [
  {
    title: "Bhagat Singh Memorial Day",
    slug: "balidaan-diwas",
    client: "PWD Delhi",
    category: "Museum Inauguration Video",
    youtubeUrl: "https://www.youtube.com/watch?v=4kR-PMhCSc8",
    aspectRatio: "aspect-[21/9]",
  },
  {
    title: "IIAC Promotional Video",
    slug: "iiac-promo",
    client: "India International Arbitration Centre",
    category: "Promotional Video",
    googleDriveId: "1h5IsPFCKi4eMrLAhvO8kskZGv3Lr0XTL",
    image: "/images/services/commercial-production.webp",
    aspectRatio: "aspect-[16/9]",
  },
  {
    title: "Laut Aaye Budhu",
    slug: "laut-aaye",
    client: "Naash",
    category: "Lyrical Video",
    youtubeUrl: "https://youtu.be/a4S9Q-Tchs4?si=HV1OzDyV0M9cy3NE",
    aspectRatio: "aspect-[16/9]",
  },
  {
    title: "Shiv Immersive Reels",
    slug: "shiv-immersive",
    client: "Shiv Immersive",
    category: "Reels / Social Video",
    image: "/images/services/social-media-marketing.webp",
    aspectRatio: "aspect-[21/9]",
  }
];
`;
workContent = workContent.replace(/const portfolio = \[[\s\S]*?\];/, newWorkPortfolio.trim());

const workRegex = /<div className=\{\`w-full \$\{i === 0 \? 'aspect-\[21\/9\]' : 'aspect-\[4\/3\]'\} relative overflow-hidden bg-\[#111\]\`\}>[\s\S]*?<\/div>\s*<\/Link>/;
const workReplacement = `
                <div className={\`w-full \${i === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'} relative overflow-hidden bg-[#111]\`}>
                  {(() => {
                    let thumbUrl = (project as any).image;
                    let showPlay = true;

                    if ((project as any).youtubeUrl) {
                      const match = (project as any).youtubeUrl.match(/^.*(youtu.be\\/|v\\/|u\\/\\w\\/|embed\\/|watch\\?v=|&v=)([^#&?]*).*/);
                      if (match && match[2].length === 11) {
                        thumbUrl = \`https://img.youtube.com/vi/\${match[2]}/maxresdefault.jpg\`;
                      }
                    } else if ((project as any).googleDriveId) {
                      thumbUrl = \`https://drive.google.com/thumbnail?id=\${(project as any).googleDriveId}&sz=w1280\`;
                    }

                    if (!thumbUrl) return null;

                    return (
                      <>
                        <img src={thumbUrl} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105" />
                        {showPlay && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 border border-white/30 backdrop-blur-sm text-white rounded-full flex items-center justify-center pl-1 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 shadow-xl">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })()}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>
              </Link>`;
if (workContent.match(workRegex)) {
  workContent = workContent.replace(workRegex, workReplacement.trim());
}
fs.writeFileSync(workPath, workContent, 'utf8');
console.log('Updated Work Index');


// --- 3. REWRITE `src/app/work/[slug]/page.tsx` ---
const detailPath = 'src/app/work/[slug]/page.tsx';
let detailContent = fs.readFileSync(detailPath, 'utf8');

const newShivData = `
  "shiv-immersive": {
    title: "Shiv Immersive Reels",
    client: "Shiv Immersive",
    category: "Reels / Social Video",
    projectType: "REEL_COLLECTION",
    reels: [
      { url: "https://www.instagram.com/reel/DdEaYGZJtdM/embed", thumbnail: "/images/services/social-media-marketing.webp", title: "Reel 1" },
      { url: "https://www.instagram.com/reel/DdHNNxMhDTi/embed", thumbnail: "/images/services/content-marketing.webp", title: "Reel 2" },
      { url: "https://www.instagram.com/reel/DdEfxbtgt2B/embed", thumbnail: "/images/services/commercial-production.webp", title: "Reel 3" },
      { url: "https://www.instagram.com/reel/DdMcOrNOzeM/embed", thumbnail: "/images/services/visual-storytelling.webp", title: "Reel 4" }
    ],
    year: "2026",
    services: ["Social Media", "Video Production", "Editing"]
  }
`;
detailContent = detailContent.replace(/"shiv-immersive":\s*\{[\s\S]*?services:\s*\["Social Media",\s*"Video Production",\s*"Editing"\]\s*\}/, newShivData.trim());


const headerRegex = /<div className="pt-32 pb-24 min-h-screen bg-brand-bg text-brand-ink">[\s\S]*?\{\/\* Cinematic Video Player or Reels \*\/\}/;
const newHeader = `
  <div className="pt-32 pb-24 min-h-screen bg-brand-bg text-brand-ink">
    <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-16 text-center">
      <div className="text-sm font-bold uppercase tracking-widest text-brand-red mb-4">{project.category}</div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-4 text-balance">
        {project.title}
      </h1>
      <div className="text-xl text-white/60 font-medium uppercase tracking-widest">{project.client}</div>
    </div>

    {/* Cinematic Video Player or Reels */}
    {(project as any).projectType === "REEL_COLLECTION" ? (
      <div className="container mx-auto px-6 md:px-12 mb-32 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
          {(project as any).reels.map((reel: any, i: number) => (
            <div key={i} className="aspect-[9/16] w-full relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <img src={reel.thumbnail} alt={reel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              
              {/* Premium Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border border-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red text-white transition-all duration-300 shadow-xl">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>

              {/* Lightbox / Video Modal trigger overlay */}
              <a href={reel.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
                <span className="sr-only">Play Reel</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    ) : (project as any).googleDriveId ? (
`;

if (detailContent.match(headerRegex)) {
  detailContent = detailContent.replace(headerRegex, newHeader.trim());
}

// Strip out the old reels logic since it's now handled by the block above
detailContent = detailContent.replace(
  /\{\(project as any\)\.reels \? \([\s\S]*?\) : project\.youtubeUrl \? \(/,
  `{ project.youtubeUrl ? (`
);

// If projectType === REEL_COLLECTION, don't show standard case study sections
const caseStudyRegex = /\{\/\* Case Study Sections \*\/\}([\s\S]*?)\{\/\* Navigation \*\/\}/;
const oldCaseStudy = detailContent.match(caseStudyRegex);
if (oldCaseStudy) {
  detailContent = detailContent.replace(caseStudyRegex, 
    `{/* Case Study Sections */}\n    {(project as any).projectType !== "REEL_COLLECTION" && (\n      <>\n      ${oldCaseStudy[1]}\n      </>\n    )}\n    {/* Navigation */}`
  );
}

fs.writeFileSync(detailPath, detailContent, 'utf8');
console.log('Updated Detail Page');
