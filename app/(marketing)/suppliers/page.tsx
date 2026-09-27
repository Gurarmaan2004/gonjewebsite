import type { Metadata } from "next";
import { intro, suppliers, closing } from "@/content/suppliers";
import { PageHero } from "@/components/sections/page-hero";
import { SupplierCarousel } from "@/components/sections/supplier-carousel";
import { Section } from "@/components/ui/section";
import { ProseLink } from "@/components/ui/prose-link";

export const metadata: Metadata = {
  title: "Suppliers",
  description: intro.lead,
};

export default function SuppliersPage() {
  return (
    <>
      <PageHero intro={intro} highlight="ethnic food shelves" />

      <Section>
        <p className="text-center text-sm text-spice-ink/60">
          Tap a logo to visit that supplier on the marketplace.
        </p>
        <SupplierCarousel suppliers={suppliers} className="mt-8" />
      </Section>

      <Section tone="muted" size="sm">
        <div className="text-center">
          <h2 className="font-display text-2xl text-spice-ink">{closing.title}</h2>
          <p className="mt-2 text-base text-spice-ink/70">{closing.lead}</p>
          <p className="mt-4">
            <ProseLink href={closing.cta.href} external>
              {closing.cta.label}
            </ProseLink>
          </p>
        </div>
      </Section>
    </>
  );
}
