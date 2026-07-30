"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * The main Framer Motion surface on the site (the library now ships as the
 * `motion` package). Entrance reveals on scroll into view — see DESIGN.md §6.
 *
 * Keeping motion behind this wrapper means the sections that use it stay
 * server components apart from this one client boundary.
 */

export type RevealVariant = "up" | "left" | "right" | "scale" | "pop" | "tilt";

/** How far an element travels before settling. Big enough to be unmissable. */
const TRAVEL = 56;

/** Expo-out. A long, hard deceleration — this is what reads as "dramatic". */
const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

/** Overshoots slightly, so pills and badges land with a bounce. */
const SPRING_POP: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 16,
  mass: 0.7,
};

type MotionState = {
  opacity: number;
  y?: number;
  x?: number;
  scale?: number;
  rotate?: number;
};

const from: Record<RevealVariant, MotionState> = {
  up: { opacity: 0, y: TRAVEL, scale: 0.96 },
  left: { opacity: 0, x: -TRAVEL, scale: 0.97 },
  right: { opacity: 0, x: TRAVEL, scale: 0.97 },
  scale: { opacity: 0, scale: 0.82, y: 24 },
  pop: { opacity: 0, scale: 0.6 },
  tilt: { opacity: 0, y: 40, scale: 0.85, rotate: -8 },
};

const settled: MotionState = { opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 };

export function Reveal({
  delay = 0,
  variant = "up",
  duration = 0.85,
  as = "div",
  className,
  children,
}: {
  /** Seconds. Stagger steps sit around 0.12 — see DESIGN.md §6. */
  delay?: number;
  variant?: RevealVariant;
  duration?: number;
  as?: "div" | "li" | "section" | "article" | "span";
  className?: string;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  const transition: Transition =
    variant === "pop"
      ? { ...SPRING_POP, delay }
      : { duration, ease: EASE_EXPO, delay };

  /**
   * `data-reveal` is load-bearing, not decorative.
   *
   * These elements are server-rendered with an inline `opacity:0` from
   * `initial`. If the reveal never runs — reduced motion, or JavaScript that
   * fails or is disabled — that inline style would leave the content
   * permanently invisible. Returning a different element under reduced motion
   * does not help: React does not strip the server's inline style on hydration.
   *
   * So the guarantee lives in CSS instead, keyed on this attribute:
   *   - `globals.css` forces it visible under `prefers-reduced-motion: reduce`
   *   - a `<noscript>` block in `app/layout.tsx` does the same without JS
   * Both win over the inline style and apply before hydration.
   */
  return (
    <MotionTag
      data-reveal=""
      className={cn(className)}
      initial={reduced ? undefined : from[variant]}
      whileInView={reduced ? undefined : settled}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
    >
      {children}
    </MotionTag>
  );
}
