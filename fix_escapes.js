const fs = require('fs');

const fixEscapes = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\\\`/g, '`');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed', filePath);
};

fixEscapes('src/app/page.tsx');
fixEscapes('src/app/work/page.tsx');
