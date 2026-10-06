const fs = require('fs');
const https = require('https');
const path = require('path');

const images = {
  "brand-visual-design": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&fm=webp&fit=crop&sat=-100", 
  "branded-content": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1600&fm=webp&fit=crop&sat=-100", 
  "campaign-production": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1600&fm=webp&fit=crop&sat=-100", 
  "commercial-production": "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1600&fm=webp&fit=crop&sat=-100", 
  "content-marketing": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&fm=webp&fit=crop&sat=-100", 
  "creative-direction": "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?q=80&w=1600&fm=webp&fit=crop&sat=-100", 
  "performance-marketing": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&fm=webp&fit=crop&sat=-100", 
  "post-production": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1600&fm=webp&fit=crop&sat=-100", 
  "social-media-marketing": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600&fm=webp&fit=crop&sat=-100", 
  "visual-storytelling": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&fm=webp&fit=crop&sat=-100", 
  "website-development": "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&fm=webp&fit=crop&sat=-100" 
};

const outDir = path.join(__dirname, 'public', 'images', 'services');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Handle redirects
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  for (const [slug, url] of Object.entries(images)) {
    console.log(`Downloading ${slug}...`);
    try {
      await download(url, path.join(outDir, `${slug}.webp`));
      console.log(`Success: ${slug}`);
    } catch (e) {
      console.error(`Error downloading ${slug}:`, e);
    }
  }
}

main();
