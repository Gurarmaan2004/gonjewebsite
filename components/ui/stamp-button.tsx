import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * The Spice Pantry call-to-action (DESIGN.md §8).
 *
 * Deliberately NOT a pill — a squared-off, ink-outlined block sitting on a hard
 * offset shadow, which presses into the shadow on hover. That physicality is
 * what separates it from the SaaS pill convention.
 */

type StampVariant = "chili" | "turmeric" | "cream" | "green";
type StampSize = "md" | "lg";

const variants: Record<StampVariant, string> = {
  chili: "bg-spice-chili text-spice-cream hover:bg-spice-chili-deep",
  turmeric: "bg-spice-turmeric text-spice-ink hover:bg-spice-turmeric-deep",
  cream: "bg-spice-cream text-spice-ink hover:bg-spice-cream-deep",
  green: "bg-spice-green text-spice-cream hover:bg-spice-green-deep",
};

const sizes: Record<StampSize, string> = {
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

const base =
  "font-spice inline-flex items-center justify-center gap-2 rounded-xl " +
  "border-2 border-spice-ink font-bold shadow-stamp " +
  "transition-[transform,box-shadow,background-color] duration-150 ease-out " +
  // Presses down into its own shadow.
  "hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-stamp-sm " +
  "active:translate-x-[5px] active:translate-y-[5px] active:shadow-none " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "aria-disabled:pointer-events-none aria-disabled:opacity-50";

type BaseProps = {
  variant?: StampVariant;
  size?: StampSize;
  className?: string;
  children: React.ReactNode;
};

type AsButton = BaseProps &
  Omit<React.ComponentProps<"button">, keyof BaseProps> & { href?: never };

type AsLink = BaseProps &
  Omit<React.ComponentProps<"a">, keyof BaseProps> & {
    href: string;
    external?: boolean;
  };

export function StampButton(props: AsButton | AsLink) {
  const { variant = "chili", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, external, variant: _v, size: _s, className: _c, ...rest } = props;
    void _v;
    void _s;
    void _c;

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, ...rest } = props as AsButton;
  void _v;
  void _s;
  void _c;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
