"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Marker underline that draws itself left-to-right after the heading lands.
 *
 * It animates the `background-size` of the `.underline-brush` gradient rather
 * than scaling an absolutely-positioned bar. That keeps the element a normal
 * inline span, so a long phrase can still wrap mid-heading on narrow screens —
 * `box-decoration-break: clone` redraws the bar on each line. A positioned bar
 * would have stretched across the whole box and broken.
 *
 * Under reduced motion it renders the static utility with no animation.
 */
export function BrushUnderline({
  children,
  delay = 0.45,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  /* `data-brush` is the same safety net as `data-reveal` — see reveal.tsx.
     Without it the server-rendered `background-size: 0% 100%` would leave the
     underline undrawn forever when the animation never runs. */
  return (
    <motion.span
      data-brush=""
      className={cn("underline-brush", className)}
      initial={reduced ? undefined : { backgroundSize: "0% 100%" }}
      whileInView={reduced ? undefined : { backgroundSize: "100% 100%" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.span>
  );
}
