# Gonje Design System

Locked-in foundations for gonje.com. Referenced by `CLAUDE.md` §5. Change values here
and in `app/globals.css` together — `globals.css` is the machine-readable source of truth.

---

## 1. Design direction

Gonje is a **local market**, not a logistics startup. The visual language leans warm,
tactile and editorial — closer to a good grocer's shopfront than to a SaaS dashboard.

Three rules that keep it off the stock-Tailwind path:

1. **Warm paper, not cold white.** Backgrounds sit on a warm off-white (`ink-50`) with the
   butter brand tone (`brand-200`) used as large calm washes, never as a button fill.
2. **Ink-first typography.** Near-black text at real weight does the heavy lifting. A soft
   serif display face (Fraunces) carries headings; green is an accent, not a theme.
3. **No floating gradient blobs, no purple, no glassmorphism.** Depth comes from warm
   borders, flat colour blocks and one soft shadow token.

---

## 2. Colour palette

### Brand — butter (`brand-*`)
Anchored on the supplied brand colour `#FBDDA2` at step **200**. Because the anchor is a
light tint, it is a **surface** colour: section washes, cards, highlight panels. Steps
600–900 exist for text on butter backgrounds and for hover states.

| Step | Hex | Use |
|---|---|---|
| 50 | `#FEF9F0` | Faintest wash |
| 100 | `#FDF0D9` | Alternating section background |
| **200** | **`#FBDDA2`** | **Primary brand surface** — hero wash, feature panels |
| 300 | `#F8C86F` | Borders on butter, decorative rules |
| 400 | `#F3AF3F` | Illustrative accents |
| 500 | `#EC9520` | — |
| 600 | `#D07714` | — |
| 700 | `#A85812` | Text on `brand-100/200` when green is wrong |
| 800 | `#874616` | — |
| 900 | `#6F3A16` | — |

### Accent — leaf green (`accent-*`)
Supplied highlight colour `#7CB340` at step **400**. Used for emphasis, links-in-context,
active states, and the "in progress / delivering" status family.

| Step | Hex | Use |
|---|---|---|
| 50 | `#F4F9EC` | Success surface |
| 100 | `#E7F2D6` | Badge background |
| 200 | `#CFE5B0` | Badge border |
| 300 | `#B0D383` | — |
| **400** | **`#7CB340`** | **Highlight** — icons, underlines, markers, dots |
| 500 | `#6B9F35` | Hover for 400 |
| 600 | `#54802A` | **Accent text on light** (passes AA on `ink-50`) |
| 700 | `#426324` | Accent text, small sizes |
| 800 | `#384F21` | — |
| 900 | `#30431F` | — |

> Contrast note: `accent-400` is **decorative only**. It fails AA as text on light
> backgrounds. Any green *text* must use `accent-600` or darker.

### Neutrals — warm ink (`ink-*`)
Deliberately warm (hue ≈ 40°, low saturation) so neutrals sit with the butter rather than
fighting it. Never use Tailwind's default cool `gray`/`zinc`/`slate` in this project.

| Step | Hex | Use |
|---|---|---|
| 50 | `#F9F7F2` | Page background |
| 100 | `#F1EDE4` | Subtle surface |
| 200 | `#E2DBCD` | **Default border** |
| 300 | `#C8BEAB` | Strong border, dividers |
| 400 | `#A79C86` | Disabled text, placeholder |
| 500 | `#857B67` | — |
| 600 | `#6A6152` | Muted text (AA on `ink-50`) |
| 700 | `#524B40` | **Body text** |
| 800 | `#3A352D` | — |
| 900 | `#23201B` | — |
| 950 | `#0F0E0B` | **Headings / primary text** (warm black) |

### Semantic
Kept for order-status-style messaging (`delivering now`, `pickup ready`, form errors).

| Token | Hex | Surface | Border |
|---|---|---|---|
| `success` | `#54802A` | `#F4F9EC` | `#CFE5B0` |
| `warning` | `#B4690E` | `#FDF0D9` | `#F8C86F` |
| `error` | `#B3372C` | `#FDF1EF` | `#F3C9C4` |
| `info` | `#2F6FB0` | `#EFF5FB` | `#C6DCEF` |

---

## 3. Typography

| Role | Family | Loaded as | Notes |
|---|---|---|---|
| Display / headings | **Fraunces** | `next/font/google`, variable | Soft old-style serif; `SOFT`/`WONK` axes give warmth without novelty |
| Body / UI | **Manrope** | `next/font/google`, variable | Clean semi-geometric sans, more texture than Inter |

CSS variables: `--font-display`, `--font-sans`. Tailwind classes: `font-display`, `font-sans`.

**Scale** — Tailwind's default scale, no invented sizes. Conventional usage:

| Element | Classes |
|---|---|
| Page H1 | `font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight` |
| Section H2 | `font-display text-3xl sm:text-4xl tracking-tight` |
| Card / sub H3 | `font-display text-xl sm:text-2xl` |
| Eyebrow | `text-xs font-semibold uppercase tracking-[0.14em]` |
| Lead paragraph | `text-lg sm:text-xl leading-relaxed text-ink-700` |
| Body | `text-base leading-relaxed text-ink-700` |
| Meta / caption | `text-sm text-ink-600` |

Display text sets tight (`tracking-tight`) and body sets normal. Headings never go below
`font-medium`; Fraunces at `600` is the default heading weight.

---

## 4. Layout rhythm

- **Container** — `components/ui/container.tsx`. `max-w-[76rem]` + `px-5 sm:px-8`.
  Never write ad-hoc `max-w-*` on a page.
- **Section** — `components/ui/section.tsx` owns vertical padding. Three sizes:
  - `sm` → `py-12 sm:py-16`
  - `md` *(default)* → `py-16 sm:py-24`
  - `lg` → `py-20 sm:py-28 lg:py-32`
- **Section tones** — `default` (page bg), `muted` (`ink-100`), `brand` (`brand-100`),
  `brandStrong` (`brand-200`), `ink` (`ink-950`, inverted text). Alternate tones between
  adjacent sections so the page reads as bands, not one long scroll.
- **Radii** — `rounded-xl` for cards/inputs, `rounded-2xl` for large panels,
  `rounded-full` for pills and buttons. Nothing sharper, nothing rounder.
- **Elevation** — one token, `shadow-soft`. Cards are defined by border first, shadow second.

---

## 5. Component states

Every interactive element ships hover, focus-visible and disabled from the start.

- **Focus** — a single global treatment: `focus-visible:outline-2`,
  `focus-visible:outline-offset-2`, `outline-accent-600`. Applied via `:focus-visible` in
  the base layer so nothing can ship unfocusable.
- **Buttons** (`components/ui/button.tsx`):
  | Variant | Rest | Hover | Use |
  |---|---|---|---|
  | `primary` | `ink-950` bg, white text | `ink-800` | Main CTA → marketplace |
  | `accent` | `accent-600` bg, white text | `accent-700` | Vendor / conversion CTA |
  | `outline` | transparent, `ink-300` border | `ink-100` bg | Secondary |
  | `ghost` | transparent | `ink-100` bg | Tertiary, nav |
  | `inverse` | white bg, `ink-950` text | `brand-200` | On dark/`ink` sections |
  - Sizes `sm` / `md` / `lg`; disabled → `opacity-50`, `cursor-not-allowed`, no hover.
- **Links in prose** — `accent-700` text with `underline-offset-4` and
  `decoration-accent-300`, going `decoration-accent-600` on hover.
- **Reduced motion** — all Framer Motion reveals are gated on `useReducedMotion()`; the
  base layer also zeroes animation/transition durations under
  `@media (prefers-reduced-motion: reduce)`.

---

## 6. Motion

Framer Motion (shipped as the `motion` package) is used for **entrance reveals only**, via
the single `components/ui/reveal.tsx` client component. Everything else is a CSS
transition. Rules: fade + ≤12px rise, 0.5s, `easeOut`, `viewport={{ once: true }}`,
stagger ≤ 80ms. No parallax, no scroll-jacking, no looping ambient animation apart from the
one "live status" pulse dot.

---

## 7. Open items

Tracked from `CLAUDE.md` §8 — all three still need a decision from the client:

1. **Brand asset kit** — the real wordmark (`public/logo.webp`) is now in use in the header
   and footer. Two things still outstanding:
   - It is only **128×70**, so it is rendered small (36px tall) to stay sharp on retina.
     An SVG or larger raster would let it scale up.
   - Its green is `#507229` — near-identical to `accent-600` `#54802A`, which confirms the
     palette. On the `ink-950` footer that green is dark, so the footer logo gets a
     `brightness-125` lift. A proper light/reversed logo variant would be better.
2. **Hosting target** — not confirmed, so `output: 'export'` is **not** enabled. The build
   is a standard Node build. No contact form is wired yet for this reason.
3. **Testimonials** — none supplied. `content/testimonials.ts` exports an empty array and
   the section self-hides; no quotes are fabricated.
