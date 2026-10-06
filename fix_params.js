const fs = require('fs');
const path = 'src/app/services/[slug]/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace slugs
content = content.replace(/"brand-visual-design": {/g, '"brand-and-visual-design": {');

// Fix Metadata
content = content.replace(/export function generateMetadata\(\{ params \}: Props\): Metadata \{/g, 'export async function generateMetadata({ params }: Props): Promise<Metadata> {\n  const resolvedParams = await params;');

// Fix ServicePage
content = content.replace(/export default function ServicePage\(\{ params \}: Props\) \{/g, 'export default async function ServicePage({ params }: Props) {\n  const resolvedParams = await params;');

// Replace params.slug with resolvedParams.slug globally in the file (carefully)
content = content.replace(/params\.slug/g, 'resolvedParams.slug');

// Also fix the sitemap slugs!
const sitemapPath = 'src/app/sitemap.ts';
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
sitemapContent = sitemapContent.replace(/"brand-visual-design"/g, '"brand-and-visual-design"');
fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

fs.writeFileSync(path, content, 'utf8');
console.log("Fixed slugs and params");
