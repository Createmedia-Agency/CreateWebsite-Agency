const fs = require('fs');
const homePath = 'src/app/page.tsx';
let homeContent = fs.readFileSync(homePath, 'utf8');

// 1. Import VideoModal
if (!homeContent.includes('VideoModal')) {
  homeContent = homeContent.replace(
    /import Link from "next\/link";/,
    `import Link from "next/link";\nimport { useState } from "react";\nimport { VideoModal } from "@/components/VideoModal";`
  );
}

// 2. Add State
if (!homeContent.includes('activeVideo')) {
  homeContent = homeContent.replace(
    /export default function Home\(\) \{/,
    `export default function Home() {
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
}

// 3. Add Modal Context inside return
if (!homeContent.includes('<VideoModal')) {
  homeContent = homeContent.replace(
    /return \(\s*<div ref=\{containerRef\} className="relative bg-brand-bg text-brand-ink selection:bg-brand-red">/,
    `return (
    <>
      <VideoModal isOpen={!!activeVideo} onClose={() => setActiveVideo(null)} video={activeVideo} />
      <div ref={containerRef} className="relative bg-brand-bg text-brand-ink selection:bg-brand-red">`
  );
  homeContent = homeContent.replace(/<\/div>\s*\);\s*\}\s*$/, '</div>\n    </>\n  );\n}');
}

// 4. Update the portfolio mapping in Homepage to use openVideo instead of <Link>
// The homepage currently renders <Link href={`/work/${project.slug}`}>...
const newHomeMediaBlock = `
              {portfolio.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="group relative cursor-pointer"
                  onClick={() => openVideo(project)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#111] overflow-hidden mb-8 relative border border-white/10 group-hover:border-brand-red transition-colors duration-500">
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
                          <img src={thumbUrl} alt={project.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105" />
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
                  
                  <div className="flex flex-col gap-2 relative z-10">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                      {project.category}
                    </div>
                    <div className="flex justify-between items-end">
                      <h3 className="text-3xl md:text-5xl font-display font-bold group-hover:text-brand-red transition-colors duration-300">
                        {project.name}
                      </h3>
                    </div>
                    <div className="text-white/60 font-medium">
                      {project.client}
                    </div>
                  </div>
                </motion.div>
              ))}
`;

homeContent = homeContent.replace(/\{portfolio\.map\(\(project, index\) => \([\s\S]*?<\/motion\.div>\s*\)\)\}/, newHomeMediaBlock.trim());

fs.writeFileSync(homePath, homeContent, 'utf8');
console.log('Updated Home Page');
