import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key");

// Initialize Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dummy.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "dummy_key";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, website, service, projectType, budget, message } = body;

    // 1. Validate Input (Basic validation)
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    // 2. Save Lead to Database
    let dbError = null;
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const { error } = await supabase
        .from("leads")
        .insert([{
          name,
          company,
          email,
          phone,
          website,
          service,
          project_type: projectType,
          budget,
          message,
          source: "CREATE Website",
          status: "NEW"
        }]);
      dbError = error;
    } else {
      console.warn("Supabase credentials missing. Database save skipped in local dev.");
    }

    if (dbError) {
      console.error("Database Error:", dbError);
      return NextResponse.json({ error: "Failed to save lead." }, { status: 500 });
    }

    // 3. Send Email Notification
    let emailError = null;
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: process.env.EMAIL_FROM || "hello@createforbrands.com",
          to: process.env.LEAD_RECIPIENT_EMAIL || "createforbrands@gmail.com",
          subject: `New Website Lead - ${name} - ${company || 'No Company'}`,
          html: `
            <h2>NEW WEBSITE LEAD</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Website:</strong> ${website || "N/A"}</p>
            <br/>
            <p><strong>Service Interested In:</strong> ${service || "N/A"}</p>
            <p><strong>Project Type:</strong> ${projectType || "N/A"}</p>
            <p><strong>Budget:</strong> ${budget || "N/A"}</p>
            <br/>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br/>')}</p>
            <br/>
            <p><strong>Source:</strong> CREATE Website</p>
            <p><strong>Submitted At:</strong> ${new Date().toISOString()}</p>
          `,
        });
      } catch (err) {
        emailError = err;
      }
    } else {
      console.warn("Resend API key missing. Email skipped in local dev.");
    }

    if (emailError) {
      console.error("Email Error:", emailError);
      return NextResponse.json({ error: "Failed to send email notification." }, { status: 500 });
    }

    // 4. Return Success
    return NextResponse.json({ success: true, message: "Lead submitted successfully." });

  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
