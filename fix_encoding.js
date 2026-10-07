const fs = require('fs');
const path = require('path');

const files = [
  'src/app/work/page.tsx',
  'src/app/work/[slug]/page.tsx',
  'src/app/page.tsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Fix any mangled A or similar artifacts
    content = content.replace(/Influencer Marketing[^I]*Ideation[^S]*Scripting/g, 'Influencer Marketing · Ideation · Scripting');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed encoding in', file);
  }
}
