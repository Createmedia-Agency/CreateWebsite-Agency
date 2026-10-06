const fs = require('fs');

const workPath = 'src/app/work/page.tsx';
let workContent = fs.readFileSync(workPath, 'utf8');

// 1. Make Client component
workContent = '"use client";\nimport { useState } from "react";\nimport { VideoModal } from "@/components/VideoModal";\n' 
  + workContent.replace(/import \{ Metadata \} from "next";\n/, '').replace(/export const metadata: Metadata = \{[\s\S]*?\};\n/, '');

// 2. Add State
workContent = workContent.replace(
  /export default function WorkPage\(\) \{/,
  `export default function WorkPage() {
  const [activeVideo, setActiveVideo] = useState<{type: 'youtube' | 'drive' | 'url', idOrUrl: string} | null>(null);

  const openVideo = (project: any) => {
    if (project.youtubeUrl) {
      const match = project.youtubeUrl.match(/^.*(youtu.be\\/|v\\/|u\\/\\w\\/|embed\\/|watch\\?v=|&v=)([^#&?]*).*/);
      if (match && match[2].length === 11) {
        setActiveVideo({ type: 'youtube', idOrUrl: match[2] });
      }
    } else if (project.googleDriveId) {
      setActiveVideo({ type: 'drive', idOrUrl: project.googleDriveId });
    }
  };`
);

// 3. Add Modal Context inside return
workContent = workContent.replace(
  /return \(\s*<main className="bg-brand-bg min-h-screen text-brand-ink">/,
  `return (
    <>
      <VideoModal isOpen={!!activeVideo} onClose={() => setActiveVideo(null)} video={activeVideo} />
      <main className="bg-brand-bg min-h-screen text-brand-ink">`
);
workContent = workContent.replace(/<\/main>\s*\);/, '</main>\n    </>\n  );');


const newGrid = `
        {/* Clean Editorial Gallery */}
        <div className="flex flex-col gap-32">
          {portfolio.map((project, i) => (
            <div key={project.slug} className="group flex flex-col gap-8">
              {/* Media Section */}
              {(project as any).reels ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {(project as any).reels.map((reel: any, idx: number) => (
                    <div 
                      key={idx} 
                      onClick={() => setActiveVideo({ type: 'url', idOrUrl: reel.url })}
                      className="aspect-[9/16] relative overflow-hidden bg-[#111] cursor-pointer group/reel rounded-xl border border-white/10 shadow-2xl"
                    >
                      <img src={reel.thumbnail} alt={reel.title || "Reel"} className="w-full h-full object-cover opacity-80 group-hover/reel:opacity-100 transition-all duration-700 scale-100 group-hover/reel:scale-105" />
                      <div className="absolute inset-0 bg-black/0 group-hover/reel:bg-black/20 transition-colors duration-500"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 border border-white/30 backdrop-blur-sm text-white rounded-full flex items-center justify-center pl-1 group-hover/reel:bg-brand-red group-hover/reel:border-brand-red transition-all duration-300 shadow-xl">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div 
                  onClick={() => openVideo(project)} 
                  className={\`w-full aspect-[16/9] md:aspect-[21/9] relative overflow-hidden bg-[#111] cursor-pointer border border-white/5 group-hover:border-brand-red transition-colors duration-500\`}
                >
                  {(() => {
                    let thumbUrl = (project as any).image;
                    if ((project as any).youtubeUrl) {
                      const match = (project as any).youtubeUrl.match(/^.*(youtu.be\\/|v\\/|u\\/\\w\\/|embed\\/|watch\\?v=|&v=)([^#&?]*).*/);
                      if (match && match[2].length === 11) thumbUrl = \`https://img.youtube.com/vi/\${match[2]}/maxresdefault.jpg\`;
                    } else if ((project as any).googleDriveId) {
                      thumbUrl = \`https://drive.google.com/thumbnail?id=\${(project as any).googleDriveId}&sz=w1280\`;
                    }
                    if (!thumbUrl) return null;
                    return (
                      <>
                        <img src={thumbUrl} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 border border-white/30 backdrop-blur-sm text-white rounded-full flex items-center justify-center pl-1 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 shadow-xl">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}
              
              {/* Minimal Info */}
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-display font-bold group-hover:text-brand-red transition-colors duration-300">
                  {project.title}
                </h2>
                <div className="text-white/60 font-medium uppercase tracking-widest text-sm flex gap-4">
                  <span>{project.client}</span>
                  <span className="text-brand-red">•</span>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
`;

// Replace the old grid.
workContent = workContent.replace(/<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-32">[\s\S]*?(?=<\/div>\s*<\/section>)/, newGrid);

fs.writeFileSync(workPath, workContent, 'utf8');
console.log('Updated Work Page');
