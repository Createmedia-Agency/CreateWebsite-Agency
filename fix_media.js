const fs = require('fs');

// ==========================================
// 1. UPDATE src/app/page.tsx (HOMEPAGE)
// ==========================================
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
      reels: [
        "https://www.instagram.com/reel/DdEaYGZJtdM/embed",
        "https://www.instagram.com/reel/DdHNNxMhDTi/embed",
        "https://www.instagram.com/reel/DdEfxbtgt2B/embed",
        "https://www.instagram.com/reel/DdMcOrNOzeM/embed"
      ],
      image: "",
      slug: "shiv-immersive"
    }
  ];
`;

homeContent = homeContent.replace(/const portfolio = \[[\s\S]*?\];/, newHomePortfolio.trim());

const renderMediaBlockHome = `
                    <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#111] overflow-hidden mb-8 relative border border-white/10 group-hover:border-brand-red transition-colors duration-500">
                      {(project as any).youtubeUrl ? (() => {
                        const match = (project as any).youtubeUrl.match(/^.*(youtu.be\\/|v\\/|u\\/\\w\\/|embed\\/|watch\\?v=|&v=)([^#&?]*).*/);
                        const ytId = (match && match[2].length === 11) ? match[2] : null;
                        return ytId ? (
                          <>
                            <img src={\`https://img.youtube.com/vi/\${ytId}/maxresdefault.jpg\`} alt={project.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center pl-1 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                              </div>
                            </div>
                          </>
                        ) : null;
                      })() : (project as any).reels ? (
                         <div className="absolute inset-0 grid grid-cols-4 gap-1 p-4 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                           {(project as any).reels.slice(0,4).map((r: string, i: number) => (
                             <div key={i} className="bg-[#222] h-full w-full rounded-md overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white/30"><path d="M8 5v14l11-7z"/></svg></div>
                             </div>
                           ))}
                         </div>
                      ) : (project as any).image ? (
                        <img src={(project as any).image} alt={project.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                      ) : null}
`;

homeContent = homeContent.replace(
  /<div className="w-full aspect-\[16\/9\] md:aspect-\[21\/9\] bg-\[#111\] overflow-hidden mb-8 relative border border-white\/10 group-hover:border-brand-red transition-colors duration-500">[\s\S]*?Media Placeholder\s*<\/div>\s*<\/div>/,
  renderMediaBlockHome.trim() + '\n                    </div>'
);
fs.writeFileSync(homePath, homeContent, 'utf8');
console.log("Updated Home");


// ==========================================
// 2. UPDATE src/app/work/page.tsx (WORK INDEX)
// ==========================================
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
    reels: [
      "https://www.instagram.com/reel/DdEaYGZJtdM/embed",
      "https://www.instagram.com/reel/DdHNNxMhDTi/embed",
      "https://www.instagram.com/reel/DdEfxbtgt2B/embed",
      "https://www.instagram.com/reel/DdMcOrNOzeM/embed"
    ],
    aspectRatio: "aspect-[21/9]",
  }
];
`;

workContent = workContent.replace(/const portfolio = \[[\s\S]*?\];/, newWorkPortfolio.trim());

const renderMediaBlockWork = `
                <div className={\`w-full \${project.aspectRatio} bg-[#111] overflow-hidden relative border border-white/5 group-hover:border-brand-red transition-colors duration-500\`}>
                  {(project as any).youtubeUrl ? (() => {
                    const match = (project as any).youtubeUrl.match(/^.*(youtu.be\\/|v\\/|u\\/\\w\\/|embed\\/|watch\\?v=|&v=)([^#&?]*).*/);
                    const ytId = (match && match[2].length === 11) ? match[2] : null;
                    return ytId ? (
                      <>
                        <img src={\`https://img.youtube.com/vi/\${ytId}/maxresdefault.jpg\`} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center pl-1 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                        </div>
                      </>
                    ) : null;
                  })() : (project as any).reels ? (
                     <div className="absolute inset-0 grid grid-cols-4 gap-1 p-4 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105">
                       {(project as any).reels.slice(0,4).map((r: string, i: number) => (
                         <div key={i} className="bg-[#222] h-full w-full rounded-md overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white/30"><path d="M8 5v14l11-7z"/></svg></div>
                         </div>
                       ))}
                     </div>
                  ) : (project as any).image ? (
                    <img src={(project as any).image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
                  ) : null}
`;

workContent = workContent.replace(
  /<div className=\{\`w-full \$\{project\.aspectRatio\} bg-\[#111\] overflow-hidden relative border border-white\/5 group-hover:border-brand-red transition-colors duration-500\`\}>[\s\S]*?Media Placeholder\s*<\/div>\s*<\/div>/,
  renderMediaBlockWork.trim() + '\n                </div>'
);
fs.writeFileSync(workPath, workContent, 'utf8');
console.log("Updated Work Index");


// ==========================================
// 3. UPDATE src/app/work/[slug]/page.tsx (DETAIL)
// ==========================================
const detailPath = 'src/app/work/[slug]/page.tsx';
let detailContent = fs.readFileSync(detailPath, 'utf8');

const detailMediaBlock = `
      {/* Cinematic Video Player or Reels */}
      {(project as any).reels ? (
        <div className="container mx-auto px-6 md:px-12 mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {(project as any).reels.map((url: string, i: number) => (
              <div key={i} className="aspect-[9/16] w-full bg-[#111] border border-white/10 rounded-xl overflow-hidden relative shadow-2xl">
                <iframe src={url} className="absolute inset-0 w-full h-full border-0" allow="encrypted-media" scrolling="no"></iframe>
              </div>
            ))}
          </div>
        </div>
      ) : project.youtubeUrl ? (
        <div className="w-full relative bg-[#050505] mb-32 flex items-center justify-center aspect-[16/9] md:aspect-[21/9] border-y border-white/5 overflow-hidden">
          {(() => {
            const match = project.youtubeUrl.match(/^.*(youtu.be\\/|v\\/|u\\/\\w\\/|embed\\/|watch\\?v=|&v=)([^#&?]*).*/);
            const ytId = (match && match[2].length === 11) ? match[2] : null;
            return ytId ? (
              <iframe 
                src={\`https://www.youtube.com/embed/\${ytId}?autoplay=0&rel=0\`} 
                title={\`\${project.title} Video Player\`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0 absolute inset-0"
              ></iframe>
            ) : null;
          })()}
        </div>
      ) : (project as any).image ? (
        <div className="w-full relative bg-[#050505] mb-32 flex items-center justify-center aspect-[16/9] md:aspect-[21/9] border-y border-white/5 overflow-hidden">
          <img src={(project as any).image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      ) : null}
`;

detailContent = detailContent.replace(
  /\{\/\* Cinematic Video Player \*\/\}([\s\S]*?)\{\/\* Case Study Sections \*\/\}/,
  detailMediaBlock.trim() + '\n\n      {/* Case Study Sections */}'
);

// We should also remove the duplicate reels block I injected previously at the bottom
detailContent = detailContent.replace(/\{\/\* Reels Grid \(if applicable\) \*\/\}([\s\S]*?)\{\/\* Case Study Sections \*\/\}/, '{/* Case Study Sections */}');

fs.writeFileSync(detailPath, detailContent, 'utf8');
console.log("Updated Detail Page");
