"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * The only Framer Motion surface on the site (the library now ships as the
 * `motion` package). Entrance reveals only — fade plus a small rise, once,
 * on scroll into view. See DESIGN.md §6.
 *
 * Keeping motion behind this single client component means the sections that
 * use it stay server components apart from this wrapper.
 */
export function Reveal({
  delay = 0,
  as = "div",
  className,
  children,
}: {
  /** Seconds. Keep stagger steps at or under 0.08. */
  delay?: number;
  as?: "div" | "li" | "section" | "article" | "span";
  className?: string;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}
