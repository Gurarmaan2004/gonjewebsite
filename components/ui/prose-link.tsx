import Link from "next/link";
import { cn } from "@/lib/utils";

/** Inline link styling for body copy — DESIGN.md §5. */
const proseLinkClasses =
  "font-medium text-accent-700 underline decoration-accent-300 underline-offset-4 " +
  "transition-colors hover:text-accent-800 hover:decoration-accent-600";

export function ProseLink({
  href,
  external,
  className,
  children,
  ...props
}: React.ComponentProps<"a"> & { href: string; external?: boolean }) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(proseLinkClasses, className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(proseLinkClasses, className)} {...props}>
      {children}
    </Link>
  );
}
