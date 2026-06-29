"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { CONTACT, SITE } from "@/lib/content";

export interface KontaktState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
}

// Einfaches In-Memory-Rate-Limit (best effort, pro Serverinstanz)
const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function submitKontakt(
  _prev: KontaktState,
  formData: FormData,
): Promise<KontaktState> {
  // Honeypot — von Bots ausgefüllt, von Menschen nie
  if ((formData.get("company_website") as string)?.trim()) {
    return { status: "success" }; // still erfolgreich tun, aber nichts senden
  }

  const h = await headers();
  const ip = (h.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (rateLimited(ip)) {
    return {
      status: "error",
      message: "Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es später erneut.",
    };
  }

  const name = (formData.get("name") as string)?.trim() ?? "";
  const contact = (formData.get("contact") as string)?.trim() ?? "";
  const org = (formData.get("org") as string)?.trim() ?? "";
  const format = (formData.get("format") as string)?.trim() ?? "";
  const message = (formData.get("message") as string)?.trim() ?? "";
  const consent = formData.get("consent") === "on";

  const fieldErrors: Record<string, string> = {};
  if (name.length < 2) fieldErrors.name = "Bitte geben Sie Ihren Namen an.";
  if (contact.length < 4)
    fieldErrors.contact = "Bitte geben Sie eine E-Mail oder Telefonnummer an.";
  if (message.length < 10)
    fieldErrors.message = "Bitte beschreiben Sie Ihr Anliegen kurz.";
  if (!consent) fieldErrors.consent = "Bitte stimmen Sie der Verarbeitung zu.";

  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "Bitte prüfen Sie Ihre Angaben.", fieldErrors };
  }

  const subject = `Neue Anfrage über die Website — ${name}`;
  const text = [
    `Name: ${name}`,
    `Kontakt: ${contact}`,
    org && `Einrichtung/Team: ${org}`,
    format && `Bevorzugtes Format: ${format}`,
    "",
    "Anliegen:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? CONTACT.email;
  const from = process.env.CONTACT_FROM ?? `${SITE.brand} Website <onboarding@resend.dev>`;

  // Ohne API-Key (Entwicklung / noch nicht konfiguriert): serverseitig loggen,
  // damit keine Anfrage verloren geht — UX-Fluss bleibt testbar.
  if (!apiKey) {
    console.warn("[Kontakt] RESEND_API_KEY fehlt — Anfrage nur geloggt:\n" + text);
    return { status: "success" };
  }

  try {
    const resend = new Resend(apiKey);
    const replyTo = isEmail(contact) ? contact : undefined;
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      ...(replyTo ? { replyTo } : {}),
    });
    if (error) throw new Error(error.message);
    return { status: "success" };
  } catch (err) {
    console.error("[Kontakt] Versand fehlgeschlagen:", err);
    return {
      status: "error",
      message: "Der Versand hat nicht geklappt. Bitte schreiben Sie mir direkt per E-Mail.",
    };
  }
}
