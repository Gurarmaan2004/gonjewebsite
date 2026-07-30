import { cn } from "@/lib/utils";

/**
 * The single horizontal container for the whole site.
 * Never write ad-hoc `max-w-*` on a page — widen this instead.
 */
export function Container({
  className,
  as: Component = "div",
  ...props
}: React.ComponentProps<"div"> & { as?: React.ElementType }) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-[76rem] px-5 sm:px-8", className)}
      {...props}
    />
  );
}
