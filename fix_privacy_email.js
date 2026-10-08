const fs = require('fs');
let content = fs.readFileSync('src/app/privacy/page.tsx', 'utf8');
content = content.replace(
  '<strong>privacy@createforbrands.com</strong> (subject to business configuration) or <strong>createforbrands@gmail.com</strong>',
  '<strong>createforbrands@gmail.com</strong>'
);
fs.writeFileSync('src/app/privacy/page.tsx', content);
