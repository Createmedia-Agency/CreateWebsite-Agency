const fs = require('fs');
const detailPath = 'src/app/work/[slug]/page.tsx';
let detailContent = fs.readFileSync(detailPath, 'utf8');

const regex = /\) : project\.youtubeUrl \? \(/;
const replacement = `) : (project as any).googleDriveId ? (
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
      ) : project.youtubeUrl ? (`;

detailContent = detailContent.replace(regex, replacement);

fs.writeFileSync(detailPath, detailContent, 'utf8');
console.log('Restored googleDriveId support');
