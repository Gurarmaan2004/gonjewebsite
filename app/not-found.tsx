import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { externalLinks } from "@/lib/site";

/**
 * Root not-found renders inside the root layout only — the (marketing) route
 * group's layout doesn't wrap it — so the chrome is composed in explicitly.
 */
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Container className="flex flex-1 flex-col items-center justify-center py-24 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-accent-700">
            404
          </p>
          <h1 className="font-display mt-3 text-4xl text-ink-950 sm:text-5xl">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-700">
            The link may be out of date. Try the home page, or head straight to
            the marketplace to start an order.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/">Back to home</Button>
            <Button href={externalLinks.marketplace} external variant="outline">
              Go to the marketplace
            </Button>
          </div>

          <p className="mt-10 text-sm text-ink-600">
            Looking to sell?{" "}
            <Link
              href="/vendors"
              className="font-medium text-accent-700 underline decoration-accent-300 underline-offset-4 hover:decoration-accent-600"
            >
              See vendor plans
            </Link>
            .
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
