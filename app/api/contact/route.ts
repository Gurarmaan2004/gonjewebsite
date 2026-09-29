import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactRouting } from "@/lib/site";

/** Needs the Node runtime — nodemailer's SMTP transport doesn't run on Edge. */
export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  business?: string;
  email?: string;
  message?: string;
  subjectPrefix?: string;
  /** Honeypot — real visitors never fill this in; bots that autofill every field do. */
  company_website?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = (payload.name ?? "").trim();
  const business = (payload.business ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();
  const subjectPrefix = (payload.subjectPrefix ?? "Enquiry").trim();

  // Honeypot tripped — pretend success so the bot doesn't learn anything, but drop it.
  if (payload.company_website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !business || !email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Name, business and a valid email are required." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.error("Contact form submitted but SMTP_HOST/SMTP_USER/SMTP_PASS are not configured.");
    return NextResponse.json(
      { ok: false, error: "Email isn't configured on the server yet." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: { user, pass },
  });

  const subject = `${subjectPrefix} — ${business || name}`;
  const text = [
    `Name: ${name}`,
    `Business: ${business}`,
    `Email: ${email}`,
    "",
    message || "(no message provided)",
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"${contactRouting.fromName}" <${contactRouting.fromAddress}>`,
      to: [...contactRouting.toAddresses],
      replyTo: email,
      subject,
      text,
    });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json(
      { ok: false, error: "Couldn't send that just now — please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
