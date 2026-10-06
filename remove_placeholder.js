const fs = require('fs');

const workPath = 'src/app/work/page.tsx';
let workContent = fs.readFileSync(workPath, 'utf8');

const regex = /<div className="absolute inset-0 flex items-center justify-center text-white\/20 font-display text-2xl uppercase tracking-widest group-hover:scale-105 transition-transform duration-1000 ease-out">\s*MEDIA PLACEHOLDER\s*<\/div>/g;

workContent = workContent.replace(regex, '');

fs.writeFileSync(workPath, workContent, 'utf8');
console.log("Removed remaining MEDIA PLACEHOLDER from work index");
