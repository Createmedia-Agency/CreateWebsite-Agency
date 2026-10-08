const fs = require('fs');

let content = fs.readFileSync('src/app/api/cron/cleanup-leads/route.ts', 'utf8');

content = content.replace(
  '// Calculate the date 2 years ago',
  `// Business-configured retention period. Requires periodic review.
    // NOTE: Deleting the Supabase record does not automatically delete copies already present in email (Gmail) or Resend logs.`
);

fs.writeFileSync('src/app/api/cron/cleanup-leads/route.ts', content);
