"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { company } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * A real contact form UI backed by a `mailto:` submit rather than a server
 * endpoint. gonje.com has no backend yet (CLAUDE.md §3/§8 — hosting target
 * still open, and a form handler shouldn't be built ahead of that decision),
 * so this composes the enquiry into the visitor's own mail client instead of
 * silently failing or requiring one. Swap the `handleSubmit` body for a real
 * POST once a hosting target and endpoint exist.
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
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `${subjectPrefix} — ${business || name}`;
    const body = [
      `Name: ${name}`,
      `Business: ${business}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
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
        className={cn(
          "font-spice inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-spice-ink px-6 text-base font-bold",
          "bg-spice-green text-spice-cream shadow-stamp",
          "transition-[transform,box-shadow] duration-150 ease-out",
          "hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-stamp-sm",
          "active:translate-x-[5px] active:translate-y-[5px] active:shadow-none",
        )}
      >
        Send enquiry
        <ArrowRight className="size-5" aria-hidden="true" />
      </button>

      <p className="text-sm text-spice-ink/60" role="status">
        {submitted
          ? `Opens your email app addressed to ${company.email} — send it from there to reach us.`
          : `Opens your email app to send this to ${company.email}.`}
      </p>
    </form>
  );
}
