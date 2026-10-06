const fs = require('fs');

// Fix contact form frontend
const contactPage = 'src/app/contact/page.tsx';
let content = fs.readFileSync(contactPage, 'utf8');

content = content.replace(
  'const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");',
  'const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");\n  const [errorMessage, setErrorMessage] = useState("");'
);

content = content.replace(
  'if (!response.ok) throw new Error("Submission failed");',
  'if (!response.ok) {\n          const errData = await response.json();\n          throw new Error(errData.error || "Submission failed");\n        }'
);

content = content.replace(
  'setStatus("ERROR");\n    };',
  'setStatus("ERROR");\n        setErrorMessage(error instanceof Error ? error.message : "We encountered an issue submitting your request. Please email us directly at createforbrands@gmail.com.");\n    };'
);

content = content.replace(
  'We encountered an issue submitting your request. Please email us directly at createforbrands@gmail.com.',
  '{errorMessage || "We encountered an issue submitting your request. Please email us directly at createforbrands@gmail.com."}'
);

fs.writeFileSync(contactPage, content);

// Fix API Route backend
const apiRoute = 'src/app/api/contact/route.ts';
let apiContent = fs.readFileSync(apiRoute, 'utf8');

const missingEnvCheck = `
    // 1. BACKEND CONFIGURATION CHECK
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.RESEND_API_KEY) {
      console.error("[CONTACT_BACKEND_NOT_CONFIGURED] Missing required environment variables.");
      return NextResponse.json({ error: "Backend services are not properly configured to process requests. Please email us directly at createforbrands@gmail.com." }, { status: 503 });
    }
`;

apiContent = apiContent.replace(
  '// Parse body',
  missingEnvCheck + '\n    // Parse body'
);

apiContent = apiContent.replace(
  '// Do NOT expose database error details to the client',
  '// Do NOT expose database error details to the client'
);

// We need to replace the try catch block for resend
const oldResendBlock = `      try {
        const result = await resend.emails.send({
          from: senderEmail,
          to: recipientEmail,
          subject: \`New Website Lead - \${escapeHtml(name)} - \${escapeHtml(company || "No Company")}\`,
          html: \`
            <div style="font-family: Arial, sans-serif; max-width: 600px;">
              <h2 style="border-bottom: 2px solid #D90429; padding-bottom: 8px;">NEW WEBSITE LEAD</h2>
              <p><strong>Name:</strong> \${escapeHtml(name)}</p>
              <p><strong>Company:</strong> \${escapeHtml(company || "N/A")}</p>
              <p><strong>Email:</strong> \${escapeHtml(email)}</p>
              <p><strong>Phone:</strong> \${escapeHtml(phone || "N/A")}</p>
              <p><strong>Website:</strong> \${escapeHtml(website || "N/A")}</p>
              <hr/>
              <p><strong>Service Interested In:</strong> \${escapeHtml(service || "N/A")}</p>
              <p><strong>Project Type:</strong> \${escapeHtml(projectType || "N/A")}</p>
              <p><strong>Budget:</strong> \${escapeHtml(budget || "N/A")}</p>
              <hr/>
              <p><strong>Message:</strong></p>
              <p>\${escapeHtml(message).replace(/\\n/g, "<br/>")}</p>
              <hr/>
              <p style="color: #999;"><strong>Source:</strong> CREATE Website</p>
              <p style="color: #999;"><strong>Submitted:</strong> \${new Date().toISOString()}</p>
            </div>
          \`,
        });

        // Resend SDK v4+ returns { data, error }
        if ("error" in result && result.error) {
          throw result.error;
        }

        emailStatus = "SENT";
        console.log("[CONTACT] Email sent successfully to", recipientEmail);
      } catch (err: unknown) {
        emailStatus = "FAILED";
        const errMsg = err instanceof Error ? err.message : String(err);
        console.error("[CONTACT] Email send failed:", errMsg);
        // DO NOT fail the entire request - the lead is already saved
      }`;

const newResendBlock = `      try {
        const result = await resend.emails.send({
          from: senderEmail,
          to: recipientEmail,
          subject: \`New Website Lead - \${escapeHtml(name)} - \${escapeHtml(company || "No Company")}\`,
          html: \`
            <div style="font-family: Arial, sans-serif; max-width: 600px;">
              <h2 style="border-bottom: 2px solid #D90429; padding-bottom: 8px;">NEW WEBSITE LEAD</h2>
              <p><strong>Name:</strong> \${escapeHtml(name)}</p>
              <p><strong>Company:</strong> \${escapeHtml(company || "N/A")}</p>
              <p><strong>Email:</strong> \${escapeHtml(email)}</p>
              <p><strong>Phone:</strong> \${escapeHtml(phone || "N/A")}</p>
              <p><strong>Website:</strong> \${escapeHtml(website || "N/A")}</p>
              <hr/>
              <p><strong>Service Interested In:</strong> \${escapeHtml(service || "N/A")}</p>
              <p><strong>Project Type:</strong> \${escapeHtml(projectType || "N/A")}</p>
              <p><strong>Budget:</strong> \${escapeHtml(budget || "N/A")}</p>
              <hr/>
              <p><strong>Message:</strong></p>
              <p>\${escapeHtml(message).replace(/\\n/g, "<br/>")}</p>
              <hr/>
              <p style="color: #999;"><strong>Source:</strong> CREATE Website</p>
              <p style="color: #999;"><strong>Submitted:</strong> \${new Date().toISOString()}</p>
            </div>
          \`,
        });

        // Resend SDK v4+ returns { data, error }
        if ("error" in result && result.error) {
          throw result.error;
        }

        emailStatus = "SENT";
        
        // Update database with success
        await supabase.from("leads").update({ email_status: "SENT" }).eq("email", email);
        console.log("[CONTACT] Email sent successfully to", recipientEmail);
      } catch (err: unknown) {
        emailStatus = "FAILED";
        const errMsg = err instanceof Error ? err.message : String(err);
        console.error("[CONTACT] Email send failed:", errMsg);
        
        // Update database with failure
        await supabase.from("leads").update({ email_status: "FAILED" }).eq("email", email);
        return NextResponse.json({ error: "Your request was saved to our system, but we encountered an issue sending the confirmation email. Please also email us directly at createforbrands@gmail.com." }, { status: 500 });
      }`;

apiContent = apiContent.replace(oldResendBlock, newResendBlock);

fs.writeFileSync(apiRoute, apiContent);
console.log("Updated both files successfully.");
