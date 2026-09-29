"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight, Check, TriangleAlert } from "lucide-react";
import { contactRouting } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * A real contact form backed by app/api/contact, which relays it over SMTP
 * (Hostinger, from enquiries@gonje.com) to the addresses in
 * lib/site.ts's `contactRouting`. If the request fails — including the SMTP
 * credentials simply not being configured yet — it falls back to a mailto:
 * link so the enquiry isn't just lost.
 */
export function ContactForm({
  /** Distinguishes enquiries in the recipient's inbox (e.g. "EaaS enquiry"). */
  subjectPrefix,
  className,
}: {
  subjectPrefix: string;
  className?: string;
}) {
  const formId = useId();
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          business,
          email,
          message,
          subjectPrefix,
          company_website: honeypot,
        }),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const mailtoFallback = `mailto:${contactRouting.fromAddress}?subject=${encodeURIComponent(
    `${subjectPrefix} — ${business || name}`,
  )}&body=${encodeURIComponent(
    [`Name: ${name}`, `Business: ${business}`, `Email: ${email}`, "", message].join("\n"),
  )}`;

  if (status === "success") {
    return (
      <div className={cn("flex items-start gap-3", className)} role="status">
        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-spice-green text-spice-cream">
          <Check className="size-4" aria-hidden="true" />
        </span>
        <div>
          <p className="font-display text-lg text-spice-ink">Thanks — that&apos;s sent.</p>
          <p className="mt-1 text-sm text-spice-ink/70">
            We&apos;ve got your enquiry and will get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      {/* Honeypot — hidden from sighted and keyboard users, left blank by real visitors. */}
      <div aria-hidden="true" className="h-0 w-0 overflow-hidden">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${formId}-name`}
            className="text-sm font-semibold text-spice-ink/70"
          >
            Your name
          </label>
          <input
            id={`${formId}-name`}
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1.5 h-12 w-full rounded-xl border-2 border-spice-ink bg-spice-cream px-4 text-base text-spice-ink shadow-stamp-sm"
          />
        </div>
        <div>
          <label
            htmlFor={`${formId}-business`}
            className="text-sm font-semibold text-spice-ink/70"
          >
            Business name
          </label>
          <input
            id={`${formId}-business`}
            type="text"
            required
            value={business}
            onChange={(event) => setBusiness(event.target.value)}
            className="mt-1.5 h-12 w-full rounded-xl border-2 border-spice-ink bg-spice-cream px-4 text-base text-spice-ink shadow-stamp-sm"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor={`${formId}-email`}
          className="text-sm font-semibold text-spice-ink/70"
        >
          Email
        </label>
        <input
          id={`${formId}-email`}
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-1.5 h-12 w-full rounded-xl border-2 border-spice-ink bg-spice-cream px-4 text-base text-spice-ink shadow-stamp-sm"
        />
      </div>

      <div>
        <label
          htmlFor={`${formId}-message`}
          className="text-sm font-semibold text-spice-ink/70"
        >
          What are you interested in?
        </label>
        <textarea
          id={`${formId}-message`}
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-1.5 w-full rounded-xl border-2 border-spice-ink bg-spice-cream px-4 py-3 text-base text-spice-ink shadow-stamp-sm"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "font-spice inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-spice-ink px-6 text-base font-bold",
          "bg-spice-green text-spice-cream shadow-stamp",
          "transition-[transform,box-shadow] duration-150 ease-out",
          "hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-stamp-sm",
          "active:translate-x-[5px] active:translate-y-[5px] active:shadow-none",
          "disabled:pointer-events-none disabled:opacity-60",
        )}
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
        <ArrowRight className="size-5" aria-hidden="true" />
      </button>

      {status === "error" ? (
        <p className="flex items-start gap-2 text-sm text-spice-chili" role="alert">
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            Couldn&apos;t send that just now.{" "}
            <a href={mailtoFallback} className="font-semibold underline underline-offset-2">
              Email us directly instead
            </a>
            .
          </span>
        </p>
      ) : (
        <p className="text-sm text-spice-ink/60">
          Sent straight to the Gonje team — we&apos;ll get back to you soon.
        </p>
      )}
    </form>
  );
}
