const fs = require('fs');

const files = [
  'src/app/about/page.tsx',
  'src/app/industries/page.tsx',
  'src/app/page.tsx',
  'src/app/services/page.tsx',
  'src/app/work/[slug]/page.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('import { ArrowIcon }')) {
    if (content.startsWith('"use client"') || content.startsWith("'use client'")) {
      content = content.replace(/^(["']use client["'];?)/, '$1\nimport { ArrowIcon } from "@/components/ArrowIcon";');
    } else {
      content = 'import { ArrowIcon } from "@/components/ArrowIcon";\n' + content;
    }
    fs.writeFileSync(file, content, 'utf8');
    console.log('Added import to ' + file);
  }
}
