"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Hand-drawn marker accents for the Spice Pantry direction (DESIGN.md §8).
 *
 * These are deliberately irregular SVG paths, not the geometric gradient bar
 * the previous direction used — the wobble is the point.
 *
 * Like <Reveal>, they carry `data-reveal` so the CSS safety net in globals.css
 * and the <noscript> block force them visible when the animation never runs.
 */

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

/**
 * A rough highlighter swipe sitting behind a word or phrase.
 *
 * Painted as a background-image (see `.marker-swipe` in globals.css), not as a
 * positioned bar. A positioned bar stretches the full width of its box the
 * moment the phrase wraps to a second line — which is exactly what went wrong
 * the first time. `box-decoration-break: clone` redraws the swipe per line.
 */
export function MarkerSwipe({
  children,
  color = "turmeric",
  delay = 0.4,
  className,
}: {
  children: React.ReactNode;
  color?: "turmeric" | "chili" | "green";
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.span
      data-brush=""
      className={cn(
        "marker-swipe",
        { turmeric: "marker-turmeric", chili: "marker-chili", green: "marker-green" }[
          color
        ],
        className
      )}
      initial={reduced ? undefined : { backgroundSize: "0% 0.46em" }}
      whileInView={reduced ? undefined : { backgroundSize: "100% 0.46em" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: EASE_EXPO, delay }}
    >
      {children}
    </motion.span>
  );
}

/** A scribbled ellipse looped around a short callout. */
export function MarkerCircle({
  children,
  delay = 0.5,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <span className={cn("relative inline-block px-3 py-1", className)}>
      <motion.svg
        data-reveal=""
        aria-hidden="true"
        viewBox="0 0 220 70"
        preserveAspectRatio="none"
        className="absolute inset-0 -z-10 h-full w-full overflow-visible"
        initial={reduced ? undefined : { opacity: 0 }}
        whileInView={reduced ? undefined : { opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.2, delay }}
      >
        <motion.path
          data-scribble=""
          d="M188,14 C150,2 74,0 36,12 C4,22 6,50 44,60 C88,71 168,70 200,56 C224,45 220,24 186,15"
          fill="none"
          stroke="var(--color-spice-chili)"
          strokeWidth="3"
          strokeLinecap="round"
          pathLength={1}
          initial={reduced ? undefined : { strokeDashoffset: 1 }}
          whileInView={reduced ? undefined : { strokeDashoffset: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE_EXPO, delay }}
          style={{ strokeDasharray: 1 }}
        />
      </motion.svg>
      <span className="relative">{children}</span>
    </span>
  );
}
