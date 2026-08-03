import type { Metadata } from "next";
import { Baloo_2, Caveat, Fredoka, Nunito } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

/* Display face — rounded, chunky and friendly. This is what carries the
   casual tone; a serif here read as editorial/corporate. */
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/* Body / UI face — rounded terminals, warm and highly readable at small sizes. */
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

/* Spice Pantry display face — rounder and warmer than Fredoka, and the family
   carries Devanagari/Arabic siblings, which suits a multicultural marketplace. */
const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  display: "swap",
});

/* Handwritten accent for kickers, callouts and step numerals. Never body copy. */
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_AU",
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={site.locale}
      /* Opts back in to Next's scroll-behaviour handling on route changes,
         which v16 no longer does by default. */
      data-scroll-behavior="smooth"
      className={`${nunito.variable} ${fredoka.variable} ${baloo.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        {/* Scroll reveals are server-rendered with an inline opacity:0. Without
            JavaScript they would never animate in, leaving the page blank, so
            force them visible up front. See components/ui/reveal.tsx. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}[data-brush]{background-size:100% 100%!important}[data-brush].marker-swipe{background-size:100% 0.46em!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
