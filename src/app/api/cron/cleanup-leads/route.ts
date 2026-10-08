import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("[CRON_CLEANUP] Missing Supabase environment variables.");
      return NextResponse.json({ error: "Configuration Error" }, { status: 500 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Business-configured retention period. Requires periodic review.
    // NOTE: Deleting the Supabase record does not automatically delete copies already present in email (Gmail) or Resend logs.
    const retentionYears = 2;
    const dateLimit = new Date();
    dateLimit.setFullYear(dateLimit.getFullYear() - retentionYears);
    const dateLimitIso = dateLimit.toISOString();

    const { data, error } = await supabase
      .from("leads")
      .delete()
      .lt("created_at", dateLimitIso)
      .select("id"); // Select IDs just to get a count without exposing personal data

    if (error) {
      console.error("[CRON_CLEANUP] Supabase deletion failed:", error.message);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }

    const deletedCount = data ? data.length : 0;
    console.log(`[CRON_CLEANUP] Successfully deleted ${deletedCount} leads older than ${retentionYears} years.`);

    return NextResponse.json({
      success: true,
      message: `Cleaned up ${deletedCount} outdated leads.`,
    });
  } catch (error) {
    console.error("[CRON_CLEANUP] Unexpected error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
