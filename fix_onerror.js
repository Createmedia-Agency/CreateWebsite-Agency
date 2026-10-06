const fs = require('fs');

const removeOnError = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/onError=\{\(e\) => \{ e\.currentTarget\.src = \(project as any\)\.image \|\| '\/images\/services\/commercial-production\.webp' \}\}/g, "");
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed:', filePath);
};

removeOnError('src/app/page.tsx');
removeOnError('src/app/work/page.tsx');
