const fs = require('fs');

// 1. UPDATE DETAIL PAGE
const detailPath = 'src/app/work/[slug]/page.tsx';
let detailContent = fs.readFileSync(detailPath, 'utf8');

detailContent = detailContent.replace(
  /"iiac-promo":\s*\{[\s\S]*?services:\s*\["Production",\s*"Editing",\s*"Visual Storytelling"\]\s*\}/,
  `"iiac-promo": {
    title: "IIAC Promotional Video",
    client: "India International Arbitration Centre",
    budget: "₹2,45,000",
    timeline: "15 Days",
    youtubeUrl: null, 
    googleDriveId: "1h5IsPFCKi4eMrLAhvO8kskZGv3Lr0XTL",
    brief: "Offered By Prime Minister's Office. Promotional Video played in 145 Embassies across the globe.",
    services: ["Production", "Editing", "Visual Storytelling"]
  }`
);

const detailMediaBlockRegex = /\{\/\* Cinematic Video Player or Reels \*\/\}([\s\S]*?)\{\/\* Case Study Sections \*\/\}/;
const oldDetailMediaBlockMatch = detailContent.match(detailMediaBlockRegex);

if (oldDetailMediaBlockMatch) {
  let mediaBlock = oldDetailMediaBlockMatch[1];
  // Insert googleDriveId logic right before youtubeUrl logic
  mediaBlock = mediaBlock.replace(
    /: project\.youtubeUrl \? \(/,
    `: (project as any).googleDriveId ? (
        <div className="w-full relative bg-[#050505] mb-32 flex items-center justify-center aspect-[16/9] md:aspect-[21/9] border-y border-white/5 overflow-hidden">
          <iframe 
            src={\`https://drive.google.com/file/d/\${(project as any).googleDriveId}/preview\`} 
            title={\`\${project.title} Video Player\`}
            allow="autoplay" 
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0 absolute inset-0"
          ></iframe>
        </div>
      ) : project.youtubeUrl ? (`
  );
  detailContent = detailContent.replace(detailMediaBlockRegex, `{/* Cinematic Video Player or Reels */}${mediaBlock}{/* Case Study Sections */}`);
}

fs.writeFileSync(detailPath, detailContent, 'utf8');
console.log('Updated Detail Page');

// 2. UPDATE HOMEPAGE
const homePath = 'src/app/page.tsx';
let homeContent = fs.readFileSync(homePath, 'utf8');

homeContent = homeContent.replace(
  /slug: "iiac-promo"/,
  'googleDriveId: "1h5IsPFCKi4eMrLAhvO8kskZGv3Lr0XTL",\n      slug: "iiac-promo"'
);

const homeMediaRegex = /\{\(project as any\)\.youtubeUrl \? \(\(\) => \{/;
if (homeContent.match(homeMediaRegex)) {
  const gdriveLogicHome = `{(project as any).googleDriveId ? (
                          <>
                            <img src={\`https://drive.google.com/thumbnail?id=\${(project as any).googleDriveId}&sz=w1280\`} onError={(e) => { e.currentTarget.src = (project as any).image || '/images/services/commercial-production.webp' }} alt={project.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center pl-1 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                              </div>
                            </div>
                          </>
                        ) : (project as any).youtubeUrl ? (() => {`;
  homeContent = homeContent.replace(homeMediaRegex, gdriveLogicHome);
}
fs.writeFileSync(homePath, homeContent, 'utf8');
console.log('Updated Homepage');

// 3. UPDATE WORK PAGE
const workPath = 'src/app/work/page.tsx';
let workContent = fs.readFileSync(workPath, 'utf8');

workContent = workContent.replace(
  /slug: "iiac-promo"/,
  'googleDriveId: "1h5IsPFCKi4eMrLAhvO8kskZGv3Lr0XTL",\n    slug: "iiac-promo"'
);

const workMediaRegex = /\{\(project as any\)\.youtubeUrl \? \(\(\) => \{/;
if (workContent.match(workMediaRegex)) {
  const gdriveLogicWork = `{(project as any).googleDriveId ? (
                      <>
                        <img src={\`https://drive.google.com/thumbnail?id=\${(project as any).googleDriveId}&sz=w1280\`} onError={(e) => { e.currentTarget.src = (project as any).image || '/images/services/commercial-production.webp' }} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center pl-1 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                        </div>
                      </>
                    ) : (project as any).youtubeUrl ? (() => {`;
  workContent = workContent.replace(workMediaRegex, gdriveLogicWork);
}
fs.writeFileSync(workPath, workContent, 'utf8');
console.log('Updated Work Index');
