const fs = require('fs');
let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');

// 1. Fix useState initial value
content = content.replace(
  /_gotcha: "",\n    consent: false,/,
  '_gotcha: "", consent: false,'
);
// In case the initial replace failed to add it to the useState generic, let's just regex replace the whole useState line.
content = content.replace(
  /const \[formData, setFormData\] = useState\(\{([\s\S]*?)\}\);/,
  `const [formData, setFormData] = useState({$1, consent: false });`
);

// Actually, the previous replace was `_gotcha: "",\n    consent: false,` which worked for the object, but maybe it missed the type inference if there was an explicit interface? 
// Let's check if there's an interface.
// If it's just `useState({ ... })`, adding consent: false should fix inference. Let's just do a clean replace.

// 2. Fix Link import
if (!content.includes('import Link from "next/link"')) {
  content = 'import Link from "next/link";\n' + content;
}

fs.writeFileSync('src/app/contact/page.tsx', content);
