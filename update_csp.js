const fs = require('fs');
let content = fs.readFileSync('next.config.ts', 'utf8');

const csp = `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https://drive.google.com https://i.ytimg.com; frame-src 'self' https://www.youtube.com https://drive.google.com https://www.instagram.com; connect-src 'self' https://vitals.vercel-insights.com; object-src 'none'; base-uri 'self'; form-action 'self';`;

if (!content.includes('Content-Security-Policy')) {
  content = content.replace(
    /key: "X-Content-Type-Options",/,
    `key: "Content-Security-Policy",\n            value: "${csp}",\n          },\n          {\n            key: "X-Content-Type-Options",`
  );
  fs.writeFileSync('next.config.ts', content);
}
