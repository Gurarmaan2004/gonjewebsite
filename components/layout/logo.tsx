import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import logoSrc from "@/public/logo.webp";

/**
 * The Gonje wordmark, cropped from the same asset marketplace.gonje.com uses
 * (marketplace.gonje.com/images/logos/8/gonje-text-2_2vlm-mu.png, with its
 * "Marketplace" subtitle trimmed off) so the two sites share one visual
 * identity. The asset already contains the word "Gonje", so no text is set
 * alongside it — the accessible name comes from the link's aria-label and the
 * image is marked decorative.
 */
export function Logo({
  className,
  tone = "default",
  priority = false,
}: {
  className?: string;
  /** `inverse` is for the dark footer — see the note in the footer. */
  tone?: "default" | "inverse";
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn(
        "inline-flex items-center rounded-md transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Image
        src={logoSrc}
        alt=""
        priority={priority}
        className={cn(
          "h-9 w-auto",
          /* The wordmark's green sits dark against ink-950, so it gets a
             small lift on the footer rather than a recoloured asset. */
          tone === "inverse" && "brightness-125",
        )}
      />
    </Link>
  );
}
