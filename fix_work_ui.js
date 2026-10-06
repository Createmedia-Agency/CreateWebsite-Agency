const fs = require('fs');

const workPath = 'src/app/work/page.tsx';
let workContent = fs.readFileSync(workPath, 'utf8');

const oldBlockRegex = /<div className=\{\`w-full \$\{i === 0 \? 'aspect-\[21\/9\]' : 'aspect-\[4\/3\]'\} relative overflow-hidden\`\}>[\s\S]*?<div className="absolute inset-0 bg-black\/0 group-hover:bg-black\/20 transition-colors duration-500"><\/div>\s*<\/div>/g;

const renderMediaBlockWork = `
                <div className={\`w-full \${i === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'} relative overflow-hidden bg-[#111]\`}>
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>
`;

if (!oldBlockRegex.test(workContent)) {
  console.log("Could not find block to replace in work/page.tsx!");
} else {
  workContent = workContent.replace(oldBlockRegex, renderMediaBlockWork.trim());
  fs.writeFileSync(workPath, workContent, 'utf8');
  console.log("Updated Work Index UI successfully");
}
