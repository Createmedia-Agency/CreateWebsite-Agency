const http = require('http');

const routes = [
  'brand-and-visual-design', 'branded-content', 'campaign-production', 
  'commercial-production', 'content-marketing', 'creative-direction', 
  'performance-marketing', 'post-production', 'social-media-marketing', 
  'visual-storytelling', 'website-development'
];

async function fetchRoute(route) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000/services/${route}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, data }));
    }).on('error', () => resolve({ statusCode: 500, data: '' }));
  });
}

async function testAll() {
  for (const route of routes) {
    const { statusCode, data } = await fetchRoute(route);
    if (statusCode !== 200) {
      console.log(`[FAIL] ${route} - Status: ${statusCode}`);
      continue;
    }
    const hasH1 = data.includes('<h1');
    const hasImage = data.includes(`<img`) && (data.includes(`${route}.webp`) || data.includes(`${route}.jpg`) || data.includes(`brand-visual-design.webp`));
    
    if (hasH1 && hasImage) {
      console.log(`[PASS] ${route}`);
    } else {
      console.log(`[FAIL] ${route} - H1: ${hasH1}, Image: ${hasImage}`);
    }
  }
}
testAll();
