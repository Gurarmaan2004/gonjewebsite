import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  "primary" | "accent" | "outline" | "outlineInverse" | "ghost" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold " +
  "transition-[background-color,color,border-color,transform] duration-200 " +
  "active:translate-y-px " +
  // Disabled applies to <button disabled> and to links marked aria-disabled.
  "disabled:pointer-events-none disabled:opacity-50 " +
  "aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  /* The main CTA is green rather than black — the biggest single lift in
     colour on the page, and green is the brand's designated highlight. */
  primary: "bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700",
  /* Gold fill takes dark text — white on brand-500 would fail contrast. */
  accent: "bg-brand-500 text-ink-950 hover:bg-brand-400 active:bg-brand-600",
  outline:
    "border-2 border-ink-950/15 bg-white/70 text-ink-950 hover:border-accent-400 hover:bg-white",
  /* Outline for dark sections. `outline` has a white fill, so it cannot just
     be recoloured with a text override on an ink background. */
  outlineInverse:
    "border-2 border-ink-600 bg-transparent text-ink-50 hover:border-accent-400 hover:bg-ink-900",
  ghost:
    "bg-transparent text-ink-800 hover:bg-accent-100 hover:text-accent-800",
  inverse: "bg-white text-ink-950 hover:bg-brand-200 active:bg-brand-300",
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
