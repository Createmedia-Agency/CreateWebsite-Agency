const fs = require('fs');

let content = fs.readFileSync('src/app/api/contact/route.ts', 'utf8');

// Update DB insert to include server-controlled consent fields
content = content.replace(
  'message,\n        source: "CREATE Website",\n        status: "NEW",\n        email_status: "PENDING"\n      }]);',
  `message,
        source: "CREATE Website",
        status: "NEW",
        email_status: "PENDING",
        consent_given: true,
        consent_timestamp: new Date().toISOString(),
        consent_policy_version: "v1"
      }]);`
);

// Update rate limiting comment
content = content.replace(
  '// Rate limiting',
  `// BEST-EFFORT LOCAL RATE LIMITING
    // In a serverless environment (Vercel), this Map resets frequently on cold starts.
    // Production abuse protection is UNVERIFIED until a distributed cache (e.g. Vercel KV) is implemented.`
);

fs.writeFileSync('src/app/api/contact/route.ts', content);
