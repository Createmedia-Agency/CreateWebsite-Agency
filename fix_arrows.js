const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Fix 1: <span ...>â†’</span> or <span ...>→</span>
  content = content.replace(
    /<span[^>]*>(?:â†’|ã†|→|\+')<\/span>/g,
    '<ArrowIcon className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />'
  );

  // Fix 2: Raw → or â†’ or ã† in text
  content = content.replace(
    /(?:â†’|ã†|→|\+')/g,
    '<ArrowIcon className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />'
  );

  if (content !== original) {
    // Inject ArrowIcon import if not present
    if (!content.includes('ArrowIcon')) {
      // Find the last import statement
      const importMatches = [...content.matchAll(/^import.*from.*;/gm)];
      if (importMatches.length > 0) {
        const lastImport = importMatches[importMatches.length - 1];
        const lastImportEnd = lastImport.index + lastImport[0].length;
        content = content.slice(0, lastImportEnd) + '\nimport { ArrowIcon } from "@/components/ArrowIcon";' + content.slice(lastImportEnd);
      } else {
        content = 'import { ArrowIcon } from "@/components/ArrowIcon";\n' + content;
      }
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed arrows in:', filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.next' || file === '.git' || file === 'public' || file.endsWith('.js')) continue;
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

walk('src/app');
