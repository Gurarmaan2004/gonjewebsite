import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  "primary" | "accent" | "outline" | "outlineInverse" | "ghost" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "font-display inline-flex items-center justify-center gap-2 rounded-xl " +
  "border-2 border-spice-ink font-bold shadow-stamp-sm " +
  "transition-[transform,box-shadow,background-color,color] duration-150 ease-out " +
  // Presses down into its own offset shadow rather than lifting on a soft one.
  "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none " +
  "active:translate-x-[3px] active:translate-y-[3px] active:shadow-none " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-spice-chili text-spice-cream hover:bg-spice-chili-deep",
  accent: "bg-spice-turmeric text-spice-ink hover:bg-spice-turmeric-deep",
  outline: "bg-spice-cream text-spice-ink hover:bg-spice-cream-deep",
  /* On ink sections the border has to lift off the background. */
  outlineInverse:
    "border-spice-cream/70 bg-transparent text-spice-cream shadow-none hover:bg-spice-cream/15",
  ghost:
    "border-transparent bg-transparent text-spice-ink/80 shadow-none hover:bg-spice-cream-deep hover:text-spice-ink hover:shadow-none",
  inverse: "bg-spice-cream text-spice-ink hover:bg-spice-turmeric",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:text-base",
  lg: "h-13 px-7 text-base",
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<React.ComponentProps<"button">, keyof BaseProps> & { href?: never };

type ButtonAsLink = BaseProps &
  Omit<React.ComponentProps<"a">, keyof BaseProps> & {
    href: string;
    /** Opens in a new tab with the right rel. Set for marketplace / vendor links. */
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * The one button in the system. Renders a <button>, a next/link, or a plain
 * <a> for external destinations — all with the same hover/focus/disabled
 * behaviour. Focus styling comes from the global :focus-visible rule.
 */
export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const {
      href,
      external,
      variant: _v,
      size: _s,
      className: _c,
      ...rest
    } = props;
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

  const {
    variant: _v,
    size: _s,
    className: _c,
    ...rest
  } = props as ButtonAsButton;
  void _v;
  void _s;
  void _c;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
