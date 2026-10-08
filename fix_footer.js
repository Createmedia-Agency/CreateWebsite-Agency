const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');
content = content.replace(/<Link href="\/admin".*?Admin Login<\/Link>/, '');
fs.writeFileSync('src/components/Footer.tsx', content);
