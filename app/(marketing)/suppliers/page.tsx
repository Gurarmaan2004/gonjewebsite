import type { Metadata } from "next";
import { closing, intro, marqueeDescription, stat, suppliers } from "@/content/suppliers";
import { PageHero } from "@/components/sections/page-hero";
import { SupplierCarousel } from "@/components/sections/supplier-carousel";
import { MarkerSwipe } from "@/components/ui/marker";
import { Reveal } from "@/components/ui/reveal";
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
        <Reveal variant="scale" className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-balance text-spice-ink sm:text-5xl lg:text-6xl">
            <MarkerSwipe color="turmeric">{stat.value}</MarkerSwipe> {stat.label}
          </h2>
        </Reveal>

        <SupplierCarousel suppliers={suppliers} className="mt-14" />

        <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-spice-ink/70">
          {marqueeDescription}
        </p>
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
