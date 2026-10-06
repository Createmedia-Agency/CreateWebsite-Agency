const fs = require('fs');

const navPath = 'src/components/Navigation.tsx';
let content = fs.readFileSync(navPath, 'utf8');

const oldBlockRegex = /<div>\s*<h4 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-4">Start Something<\/h4>\s*<Link\s*href="\/contact"\s*className="text-\[clamp\(1\.5rem,3vw,2rem\)\] font-display font-bold text-white hover:text-brand-red transition-colors tracking-tight flex items-center gap-4 group"\s*onClick=\{\(\) => setIsOpen\(false\)\}\s*>\s*Let's Talk <span className="group-hover:translate-x-2 transition-transform">.*?<\/span>\s*<\/Link>\s*<\/div>/g;

const newBlock = `<div>
                    <h4 className="text-base md:text-lg font-bold uppercase tracking-widest text-brand-red mb-4">START SOMETHING</h4>
                    <Link
                      href="/contact"
                      className="text-4xl md:text-5xl font-display font-bold text-white hover:text-brand-red transition-colors tracking-tight flex items-center gap-4 group"
                      onClick={() => setIsOpen(false)}
                    >
                      Let's Talk 
                      <svg 
                        className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>`;

if (!oldBlockRegex.test(content)) {
  console.log("Could not find block to replace!");
} else {
  content = content.replace(oldBlockRegex, newBlock);
  fs.writeFileSync(navPath, content, 'utf8');
  console.log("Successfully updated CTA!");
}
