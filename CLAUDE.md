@AGENTS.md
This file orients Claude Code to the project before any component, page, or content work begins. Read it in full before writing code. Treat it as the source of truth over assumptions — if something here conflicts with a later ad-hoc instruction, flag the conflict rather than silently picking one.

---

## 1. What Gonje Is

Gonje is an Australian delivery and local-commerce platform, headquartered in Melbourne (West Footscray, VIC). The business operates two connected surfaces:

- **gonje.com** — the corporate / marketing site. This is what we are redesigning. It covers company identity, "About Us," how the platform works at a high level, vendor/partner recruitment, support, and legal (terms, privacy, refunds).
- **marketplace.gonje.com** — the actual transactional app (CS-Cart based storefront) where customers browse vendors, order food and groceries, and check out. This is a separate system and is **out of scope** for this redesign. gonje.com's job is to explain, sell, and hand off to the marketplace, not to replicate its checkout functionality.

Core value proposition: Gonje connects customers with local vendors — restaurants, grocers, and specialty/organic suppliers — for fast delivery (30–60 min typical for food, same-day for groceries) or pickup at designated centers. It also serves a vendor/partner audience (businesses that want to sell through Gonje) and has a community/cultural dimension (e.g. sponsorship of African Music and Cultural Festival-style events), suggesting the brand has roots in and strong appeal to multicultural communities in Australia.

Audiences to design for, in rough priority order:
1. **Customers** — people deciding whether to trust and use Gonje for delivery.
2. **Prospective vendors/partners** — businesses evaluating whether to list on Gonje.
3. **Everyone else** — press, support seekers, job seekers, legal/compliance readers.

The redesign should read as **trustworthy, modern, and local-first** — not a generic SaaS template. Avoid making it look like a clone of DoorDash/UberEats marketing; Gonje's differentiation is community and vendor relationships, not scale.

---

## 2. Redesign Goals

- Establish a **clean information architecture** distinct from the marketplace app: gonje.com should not try to be a storefront.
- Build a **component-driven Next.js foundation** that content and future pages can be layered onto without re-architecting.
- Make the **customer → marketplace handoff** obvious and low-friction (clear CTAs to marketplace.gonje.com throughout).
- Make the **vendor/partner recruitment path** a first-class flow, not an afterthought buried in a footer link.
- Ship something that performs well and is easy to maintain — this is a marketing site, not an app; it should be static/ISR-first, fast, and simple to extend with content.

Do not treat this as a from-scratch brainstorm of what Gonje "could" be — anchor every page and section back to what's actually described in Section 1 and any content Claude is given or asked to fetch. If asked to write copy for a section, fetch the live current page content first rather than inventing claims (delivery times, fees, payment providers, etc. are factual claims — get them right or mark them as placeholders).

---

## 3. Tech Stack

- **Framework**: Next.js (App Router), TypeScript throughout — no `.js`/`.jsx` files.
- **Styling**: Tailwind CSS. No CSS-in-JS, no separate SCSS system.
- **Animation**: Framer Motion, used deliberately (entrance/scroll reveals, hover states) — not on every element by default.
- **Content**: Plain structured data (TS/JSON) or MDX for static marketing copy — no CMS integration assumed unless explicitly requested. If a CMS is added later, keep content-fetching isolated behind a data layer so components don't care where content comes from.
- **Images**: `next/image` everywhere; no raw `<img>` tags.
- **Deployment target**: Static export or standard Node build suitable for shared hosting deploy via GitHub Actions (same general deploy pattern as other DC-family sites) — confirm hosting target before assuming static export is safe, since some routes (e.g. contact forms) may need a server.
- **Package manager**: npm unless the repo already shows otherwise.

---

## 4. Project Structure Conventions

```
/app
  /(marketing)
    /about
    /vendors            (partner recruitment / "become a seller")
    /how-it-works
    /contact
    /faq
    /legal
      /terms
      /privacy
      /refunds
    page.tsx            (home)
    layout.tsx
/components
  /ui                    (buttons, inputs, cards — generic, no business logic)
  /sections              (homepage/marketing sections — Hero, HowItWorks, Testimonials, etc.)
  /layout                (Header, Footer, Nav)
/content                 (structured copy — one file per page/section, typed)
/lib                     (utilities, data fetching helpers)
/public
```

Rules:
- Sections (Hero, HowItWorks, VendorCTA, Testimonials, FAQAccordion, etc.) live in `/components/sections` and are composed into pages — pages themselves stay thin.
- Never hardcode copy inside a component if it's marketing content that a non-developer might want to edit later — pull from `/content`.
- Shared visual primitives (Button, Badge, Card, Section wrapper with consistent padding) go in `/components/ui` and get reused everywhere rather than re-styled per page.

---

## 5. Design System Foundations

Claude should propose and then lock in (in this file, or a linked `DESIGN.md`) before building many pages:
- **Color palette**: needs a primary brand color #FBDDA2, (black for most text and #7CB340 for highlights), a neutral scale, and semantic colors for success/error/info (relevant for order-status-style messaging even on the marketing site, e.g. "delivering now" badges in testimonials).
- **Typography scale**: one display/heading font pairing, sensible type scale (Tailwind's default scale is a fine starting point — don't invent arbitrary sizes).
- **Spacing/layout rhythm**: consistent section vertical padding, a max-width container component used everywhere instead of ad-hoc `max-w-*` per page.
- **Component states**: buttons/links need explicit hover, focus, and disabled states from the start — don't retrofit accessibility later.

Reference `/mnt/skills/public/frontend-design` conventions for avoiding generic/templated visual choices — this should not look like a stock Tailwind UI kit.

---

## 6. Content Sections (Home Page Baseline)

Based on what currently exists, the homepage should at minimum cover:
1. Hero — clear one-line value prop + primary CTA to marketplace.gonje.com + secondary CTA (e.g. "Become a vendor").
2. How it works — enter address → select vendor → add products → checkout (keep this simple, don't duplicate the app's UI).
3. Categories/what's available — groceries, food, specialty (organic, halal, kosher, etc.) — a visual, not a literal catalog.
4. Trust signals — delivery speed, payment security, real customer testimonials (do not fabricate testimonials — use placeholders clearly marked as such until real ones are supplied).
5. Vendor/partner recruitment CTA — a real section, not just a footer link.
6. FAQ — short, linking to full FAQ page for the long tail.
7. Footer — company info (ABN, address, contact), legal links, social links.

---

## 7. What NOT to Do

- Don't build cart/checkout/login functionality — that belongs to marketplace.gonje.com.
- Don't invent factual claims (delivery times, fees, payment providers, ABN, addresses) — pull from real source content or leave a clearly marked placeholder.
- Don't over-animate; Framer Motion should support the content, not distract from it.
- Don't introduce a CMS, database, or auth without being asked — this is a static/marketing foundation.
- Don't scaffold every possible page speculatively — build the foundation (layout, design system, home, 2–3 key pages) solidly before fanning out to every legal/FAQ subpage.

---

## 8. Open Questions to Resolve Early

Claude should ask (or flag assumptions clearly) rather than guess silently on:
- Whether there's an existing brand/logo asset kit to pull real colors and typography from, vs. designing a new visual identity from scratch.
- Final hosting target (static export vs. Node server) — affects whether a contact form can be server-rendered/handled on this site or must post to an external form service.
- Whether real testimonial/customer content will be supplied, or whether placeholder content is acceptable for the initial foundation build.
