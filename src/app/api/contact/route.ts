import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!process.env.RESEND_API_KEY) {
      return new NextResponse("Missing RESEND_API_KEY", { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["support@josiah-williams.com"],
      replyTo: email,
      subject: subject ? `Portfolio: ${subject}` : "Portfolio: New message",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true, result });
  } catch (err: any) {
    // ✅ show the actual error
    console.error("CONTACT ROUTE ERROR:", err);
    return new NextResponse(err?.message || "Server error", { status: 500 });
  }
}