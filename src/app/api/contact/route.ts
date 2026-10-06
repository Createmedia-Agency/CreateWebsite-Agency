import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

// ──────────────────────────────────────────────
// Initialise services LAZILY to avoid crashes
// when env vars are not set at module load time
// ──────────────────────────────────────────────
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

// ──────────────────────────────────────────────
// HTML-escape utility to prevent email injection
// ──────────────────────────────────────────────
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ──────────────────────────────────────────────
// Basic in-memory rate limiter (per-IP, 5 req / 10 min)
// ──────────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) return true;
  return false;
}

// Periodically clean up stale entries (every 5 min)
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of rateLimitMap) {
      if (now > entry.resetAt) rateLimitMap.delete(ip);
    }
  }, 5 * 60 * 1000);
}

// ──────────────────────────────────────────────
// Input validation helpers
// ──────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;

function sanitizeString(val: unknown, maxLen: number = MAX_FIELD_LENGTH): string {
  if (typeof val !== "string") return "";
  return val.trim().slice(0, maxLen);
}

function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email) && email.length <= 254;
}

// ──────────────────────────────────────────────
// POST /api/contact
// ──────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    // Rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    
    // 1. BACKEND CONFIGURATION CHECK
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.RESEND_API_KEY) {
      console.error("[CONTACT_BACKEND_NOT_CONFIGURED] Missing required environment variables.");
      return NextResponse.json({ error: "Backend services are not properly configured to process requests. Please email us directly at createforbrands@gmail.com." }, { status: 503 });
    }

    // Parse body
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    // Validate & sanitise inputs
    const name = sanitizeString(body.name);
    const company = sanitizeString(body.company);
    const email = sanitizeString(body.email, 254);
    const phone = sanitizeString(body.phone, 30);
    const website = sanitizeString(body.website);
    const service = sanitizeString(body.service);
    const projectType = sanitizeString(body.projectType);
    const budget = sanitizeString(body.budget);
    const message = sanitizeString(body.message, MAX_MESSAGE_LENGTH);

    // Honeypot field — if filled, silently succeed (bot trap)
    const honeypot = sanitizeString(body._gotcha);
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Lead submitted successfully." });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    // ── Database Insert ──
    let dbSaved = false;
    let emailStatus = "PENDING"; // PENDING | SENT | FAILED | SKIPPED

    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from("leads").insert([{
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
        status: "NEW",
        email_status: "PENDING"
      }]);

      if (error) {
        console.error("[CONTACT] Database insert failed:", error.message);
        // Do NOT expose database error details to the client
        return NextResponse.json({ error: "Failed to process your submission." }, { status: 500 });
      }
      dbSaved = true;
    } else {
      console.warn("[CONTACT] Supabase not configured — database save skipped.");
    }

    // ── Send Email ──
    const resend = getResend();
    if (resend) {
      const recipientEmail = process.env.LEAD_RECIPIENT_EMAIL || "createforbrands@gmail.com";
      const senderEmail = process.env.EMAIL_FROM || "onboarding@resend.dev";

      try {
        const result = await resend.emails.send({
          from: senderEmail,
          to: recipientEmail,
          subject: `New Website Lead — ${escapeHtml(name)} — ${escapeHtml(company || "No Company")}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px;">
              <h2 style="border-bottom: 2px solid #D90429; padding-bottom: 8px;">NEW WEBSITE LEAD</h2>
              <p><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p><strong>Company:</strong> ${escapeHtml(company || "N/A")}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              <p><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</p>
              <p><strong>Website:</strong> ${escapeHtml(website || "N/A")}</p>
              <hr/>
              <p><strong>Service Interested In:</strong> ${escapeHtml(service || "N/A")}</p>
              <p><strong>Project Type:</strong> ${escapeHtml(projectType || "N/A")}</p>
              <p><strong>Budget:</strong> ${escapeHtml(budget || "N/A")}</p>
              <hr/>
              <p><strong>Message:</strong></p>
              <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
              <hr/>
              <p style="color: #999;"><strong>Source:</strong> CREATE Website</p>
              <p style="color: #999;"><strong>Submitted:</strong> ${new Date().toISOString()}</p>
            </div>
          `,
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
        // DO NOT fail the entire request — the lead is already saved
      }
    } else {
      emailStatus = "SKIPPED";
      console.warn("[CONTACT] Resend not configured — email skipped.");
    }

    // Update email_status in DB if possible
    if (dbSaved && supabase && emailStatus !== "PENDING") {
      await supabase
        .from("leads")
        .update({ email_status: emailStatus })
        .eq("email", email)
        .eq("status", "NEW")
        .order("created_at", { ascending: false })
        .limit(1)
        .then(({ error }) => {
          if (error) console.error("[CONTACT] Failed to update email_status:", error.message);
        });
    }

    // Return success — lead is saved regardless of email outcome
    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully.",
      emailDelivered: emailStatus === "SENT"
    });

  } catch (error) {
    console.error("[CONTACT] Unexpected error:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
