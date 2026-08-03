import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/**
 * Chrome for every marketing page. Kept in the (marketing) route group so a
 * future route without the site header/footer can sit outside it.
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-xl border-2 border-spice-ink bg-spice-chili px-4 py-2 text-sm font-bold text-spice-cream focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
