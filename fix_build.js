const fs = require('fs');

// Fix Services
const svcPath = 'src/app/services/[slug]/page.tsx';
let svcContent = fs.readFileSync(svcPath, 'utf8');
svcContent = svcContent.replace(
  /export async function generateMetadata\(\{ params \}: Props\): Promise<Metadata> \{/,
  'export async function generateMetadata({ params }: Props): Promise<Metadata> {\n  const resolvedParams = await params;'
);
fs.writeFileSync(svcPath, svcContent, 'utf8');

// Fix Work
const workPath = 'src/app/work/[slug]/page.tsx';
let workContent = fs.readFileSync(workPath, 'utf8');
workContent = workContent.replace(/\{project\.category\}/g, '{(project as any).category}');
fs.writeFileSync(workPath, workContent, 'utf8');

console.log('Fixed TypeScript errors');
