import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT_EMAIL } from "@/lib/content";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const stripHeaderInjection = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export async function POST(req: NextRequest) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailPass) {
    console.error("Contact form: GMAIL_USER / GMAIL_APP_PASSWORD are not configured");
    return NextResponse.json({ error: "Email is not configured" }, { status: 500 });
  }

  const body = await req.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  const lang = body?.lang === "en" ? "en" : "sk";

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const safeName = stripHeaderInjection(name);
  const subjectPrefix = lang === "en" ? "Collaboration" : "Spolupráca";

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  try {
    await transporter.sendMail({
      from: `"${safeName} (cez blog)" <${gmailUser}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `${subjectPrefix} — ${safeName}`,
      text: `${message}\n\n— ${safeName} (${email})`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
