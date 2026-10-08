const fs = require('fs');
let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');
content = content.replace('import Link from "next/link";\n"use client";', '"use client";\nimport Link from "next/link";');
fs.writeFileSync('src/app/contact/page.tsx', content);
