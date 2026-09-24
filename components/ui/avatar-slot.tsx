import Image, { type StaticImageData } from "next/image";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A circular headshot slot. With no `src`, renders a placeholder avatar
 * rather than a broken image — used on the About page team section until
 * real photos are supplied. Dropping a real photo in later is a one-line
 * `src` change.
 */
export function AvatarSlot({
  src,
  name,
  className,
}: {
  src?: StaticImageData | string;
  name: string;
  className?: string;
}) {
  const frame = cn(
    "relative size-28 shrink-0 overflow-hidden rounded-full border-4 border-spice-ink shadow-stamp-sm",
    className,
  );

  if (src) {
    return (
      <div className={frame}>
        <Image src={src} alt={name} fill sizes="112px" className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn(frame, "grid place-items-center bg-spice-cream-deep")}
      role="img"
      aria-label={`${name} — photo coming soon`}
    >
      <User className="size-12 text-spice-ink/30" aria-hidden="true" strokeWidth={1.5} />
    </div>
  );
}
