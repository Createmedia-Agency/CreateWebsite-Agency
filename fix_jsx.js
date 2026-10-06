const fs = require('fs');
const detailPath = 'src/app/work/[slug]/page.tsx';
let detailContent = fs.readFileSync(detailPath, 'utf8');

detailContent = detailContent.replace(
  /\) : \(project as any\)\.googleDriveId \? \([\s\S]*?\{ project\.youtubeUrl \? \(/,
  `) : project.youtubeUrl ? (`
);

fs.writeFileSync(detailPath, detailContent, 'utf8');
console.log('Fixed JSX syntax in detail page');
