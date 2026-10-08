const fs = require('fs');
let content = fs.readFileSync('src/app/api/contact/route.ts', 'utf8');

// Add consent check
if (!content.includes('body.consent !== true')) {
  content = content.replace(
    /if \(!name \|\| !email \|\| !message\) \{/,
    `if (body.consent !== true) {
      return NextResponse.json({ error: "You must consent to the privacy policy." }, { status: 400 });
    }

    if (!name || !email || !message) {`
  );
}

// Enhance IP rate limiting
content = content.replace(
  /const ip = forwarded\?\.split\(\",\"\)\[0\]\?\.trim\(\) \|\| \"unknown\";/,
  `const ip = forwarded?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";`
);

fs.writeFileSync('src/app/api/contact/route.ts', content);
