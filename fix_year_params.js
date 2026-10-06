const fs = require('fs');

// Fix year in src/app/work/page.tsx
const workIndex = 'src/app/work/page.tsx';
let workContent = fs.readFileSync(workIndex, 'utf8');
workContent = workContent.replace(/year: "2024"/, 'year: "2026"');
fs.writeFileSync(workIndex, workContent);

// Fix params in src/app/work/[slug]/page.tsx
const path = 'src/app/work/[slug]/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  'export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {',
  'export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {\n  const resolvedParams = await params;'
);

content = content.replace(/portfolioDb\[params\.slug/g, 'portfolioDb[resolvedParams.slug');

content = content.replace(
  'export default function ProjectPage({ params }: { params: { slug: string } }) {',
  'export default async function ProjectPage({ params }: { params: { slug: string } }) {\n  const resolvedParams = await params;'
);

fs.writeFileSync(path, content, 'utf8');
console.log("Fixed year and params");
