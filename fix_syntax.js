const fs = require('fs');

const path = 'src/app/work/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /year: "2026",`n      aspectRatio: "aspect-\[9\/16\]",`n      image: ""/g,
  'year: "2026",\n      aspectRatio: "aspect-[9/16]",\n      image: ""'
);

fs.writeFileSync(path, content, 'utf8');
console.log("Fixed syntax");
