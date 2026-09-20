"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { externalLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Postcode capture on gonje.com itself, rather than sending visitors to the
 * marketplace to find out if anyone delivers to them.
 *
 * gonje.com doesn't hold vendor coverage data — that lives on the marketplace
 * (CLAUDE.md §1, "out of scope" for this redesign) — so this hands off to the
 * marketplace's own vendor search rather than rendering results here. The
 * postcode is passed through as a query param for the marketplace team to
 * read on their end; until that's wired up there, it's a best-effort deep
 * link, not a live vendor lookup.
 */
export function PostcodeFinder({ className }: { className?: string }) {
  const inputId = useId();
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = postcode.trim();

    if (!/^\d{4}$/.test(trimmed)) {
      setError("Enter a 4-digit Australian postcode.");
      return;
    }

    setError(null);
    window.open(
      `${externalLinks.marketplace}/?postcode=${trimmed}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <label htmlFor={inputId} className="sr-only">
        Postcode
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={inputId}
          type="text"
          inputMode="numeric"
          pattern="\d{4}"
          maxLength={4}
          placeholder="Enter your postcode"
          autoComplete="postal-code"
          value={postcode}
          onChange={(event) => setPostcode(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className="h-14 w-full rounded-xl border-2 border-spice-ink bg-spice-cream px-5 text-lg font-bold text-spice-ink shadow-stamp-sm placeholder:font-normal placeholder:text-spice-ink/50 sm:max-w-[13rem]"
        />
        <button
          type="submit"
          className={cn(
            "font-spice inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-spice-ink px-6 text-lg font-bold",
            "bg-spice-green text-spice-cream shadow-stamp",
            "transition-[transform,box-shadow] duration-150 ease-out",
            "hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-stamp-sm",
            "active:translate-x-[5px] active:translate-y-[5px] active:shadow-none",
          )}
        >
          Find vendors
          <ArrowRight className="size-5" aria-hidden="true" />
        </button>
      </div>

      {error ? (
        <p id={`${inputId}-error`} role="alert" className="mt-2 text-sm font-semibold text-spice-chili">
          {error}
        </p>
      ) : (
        <p className="mt-2 text-sm text-spice-ink/60">
          Opens the marketplace with vendors near you.
        </p>
      )}
    </form>
  );
}
