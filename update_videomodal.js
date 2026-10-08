const fs = require('fs');
let content = fs.readFileSync('src/components/VideoModal.tsx', 'utf8');

// We need to add a safe URL validation function
const validationCode = `
function getSafeUrl(url: string, type: 'youtube' | 'drive' | 'url'): string {
  try {
    if (type === 'youtube') {
      // Validate that the ID is strictly alphanumeric/underscores/hyphens
      if (!/^[a-zA-Z0-9_-]{11}$/.test(url)) return '';
      return \`https://www.youtube.com/embed/\${url}?autoplay=1&rel=0\`;
    }
    if (type === 'drive') {
      if (!/^[a-zA-Z0-9_-]+$/.test(url)) return '';
      return \`https://drive.google.com/file/d/\${url}/preview\`;
    }
    if (type === 'url') {
      const parsed = new URL(url);
      if (parsed.protocol !== 'https:') return '';
      const allowedDomains = ['www.youtube.com', 'youtube.com', 'www.instagram.com', 'instagram.com', 'drive.google.com'];
      if (!allowedDomains.includes(parsed.hostname)) return '';
      return parsed.toString();
    }
  } catch (e) {
    return '';
  }
  return '';
}
`;

if (!content.includes('getSafeUrl')) {
  content = content.replace(
    /export function VideoModal/,
    validationCode + '\nexport function VideoModal'
  );

  content = content.replace(
    /src={\`https:\/\/www.youtube.com\/embed\/\${video.idOrUrl}\?autoplay=1&rel=0\`}/,
    'src={getSafeUrl(video.idOrUrl, "youtube")}'
  );
  content = content.replace(
    /src={\`https:\/\/drive.google.com\/file\/d\/\${video.idOrUrl}\/preview\`}/,
    'src={getSafeUrl(video.idOrUrl, "drive")}'
  );
  content = content.replace(
    /src={video.idOrUrl}/,
    'src={getSafeUrl(video.idOrUrl, "url")}'
  );

  fs.writeFileSync('src/components/VideoModal.tsx', content);
}
