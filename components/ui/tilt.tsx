"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Hover wrapper that straightens and lifts a tilted collage tile with a bit of
 * spring bounce (DESIGN.md §8) — replaces the flat corporate hover-lift.
 *
 * `rest` is the resting rotation in degrees; on hover the tile eases toward
 * upright and scales slightly, which reads as picking a photo off a table.
 */
export function Tilt({
  rest = -2,
  hover = 0,
  lift = 6,
  className,
  children,
}: {
  rest?: number;
  hover?: number;
  /** Pixels the tile rises on hover. */
  lift?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial={{ rotate: rest }}
      whileHover={{ rotate: hover, y: -lift, scale: 1.03 }}
      whileFocus={{ rotate: hover, y: -lift, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 14, mass: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
