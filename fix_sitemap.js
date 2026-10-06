const fs = require('fs');

const sitemapPath = 'src/app/sitemap.ts';
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

sitemapContent = sitemapContent.replace(
  /'brand-visual-design',/,
  "'brand-and-visual-design',"
);

fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
console.log('Fixed sitemap.ts');
