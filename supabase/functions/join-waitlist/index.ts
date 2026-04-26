const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";
const SPREADSHEET_ID = "1zc356yO95lxH6_f1I1VVsM8PlJDDj0I9mZ4oM7hVIHo";
const PREFERRED_TAB = "Waitlist";
const HEADER_ROW = ["Email", "Signed up at", "Source"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GOOGLE_SHEETS_API_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    if (!GOOGLE_SHEETS_API_KEY) throw new Error("GOOGLE_SHEETS_API_KEY is not configured");

    let body: { email?: unknown };
    try {
      body = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
      return new Response(JSON.stringify({ error: "Please enter a valid email address." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const gwHeaders = {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GOOGLE_SHEETS_API_KEY,
      "Content-Type": "application/json",
    };

    // 1. Look up sheet tabs to find the right one (or fall back to the first tab)
    const metaRes = await fetch(
      `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}?fields=sheets.properties(title)`,
      { headers: gwHeaders },
    );
    const metaText = await metaRes.text();
    if (!metaRes.ok) {
      console.error("Google Sheets metadata fetch failed", metaRes.status, metaText);
      throw new Error(`Sheets metadata failed [${metaRes.status}]: ${metaText}`);
    }
    const meta = JSON.parse(metaText) as { sheets?: { properties?: { title?: string } }[] };
    const tabs = (meta.sheets ?? []).map((s) => s.properties?.title).filter((t): t is string => !!t);
    const tab = tabs.find((t) => t === PREFERRED_TAB) ?? tabs[0];
    if (!tab) throw new Error("Spreadsheet has no sheets");
    const range = `${tab}!A:C`;

    // 2. If the sheet is empty, write a header row first
    const valuesRes = await fetch(
      `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${tab}!A1:C1`,
      { headers: gwHeaders },
    );
    const valuesJson = (await valuesRes.json()) as { values?: string[][] };
    const hasHeader = !!valuesJson.values && valuesJson.values.length > 0;

    if (!hasHeader) {
      const headerRes = await fetch(
        `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${tab}!A1:C1?valueInputOption=USER_ENTERED`,
        {
          method: "PUT",
          headers: gwHeaders,
          body: JSON.stringify({ values: [HEADER_ROW] }),
        },
      );
      if (!headerRes.ok) {
        const t = await headerRes.text();
        console.error("Header write failed", headerRes.status, t);
      } else {
        await headerRes.text();
      }
    }

    // 3. Append the new row
    const appendUrl = `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    const sheetsRes = await fetch(appendUrl, {
      method: "POST",
      headers: gwHeaders,
      body: JSON.stringify({
        values: [[email, new Date().toISOString(), "vitalscore-landing"]],
      }),
    });
    const text = await sheetsRes.text();
    if (!sheetsRes.ok) {
      console.error("Google Sheets append failed", sheetsRes.status, text);
      throw new Error(`Sheets API failed [${sheetsRes.status}]: ${text}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("join-waitlist error:", message);
    return new Response(
      JSON.stringify({ success: false, error: "Something went wrong. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
