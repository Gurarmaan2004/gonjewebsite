import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

/**
 * A partner/vendor logo tile. With no `src`, renders a labelled placeholder
 * card rather than a broken image — used on the EaaS/DaaS pages where the
 * partner logos (ESQ Energy, Origin, Optus) haven't been supplied yet
 * (review feedback: "leave all logos etc blank for this, we will add it
 * later"). Dropping a real logo in later is a one-line `src` change.
 */
export function LogoSlot({
  src,
  name,
  className,
}: {
  src?: StaticImageData | string;
  name: string;
  className?: string;
}) {
  const frame = cn(
    "flex h-24 w-full items-center justify-center rounded-xl border-2 border-spice-ink/25 bg-spice-cream px-6",
    className,
  );

  if (src) {
    return (
      <div className={cn(frame, "relative")}>
        <Image
          src={src}
          alt={name}
          fill
          sizes="200px"
          className="object-contain p-3"
        />
      </div>
    );
  }

  return (
    <div className={cn(frame, "border-dashed")} role="img" aria-label={`${name} logo — coming soon`}>
      <span className="font-display text-sm font-bold text-spice-ink/40">
        {name}
      </span>
    </div>
  );
}
