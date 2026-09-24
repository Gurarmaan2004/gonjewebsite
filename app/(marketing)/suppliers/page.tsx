import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { closing, intro, suppliers } from "@/content/suppliers";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { LogoSlot } from "@/components/ui/logo-slot";
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
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {suppliers.map((supplier, index) => (
            <Reveal as="li" key={supplier.name} delay={index * 0.1}>
              <Card className="flex h-full flex-col">
                <Link
                  href={supplier.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${supplier.name} on the Gonje marketplace`}
                >
                  <LogoSlot src={supplier.logo} name={supplier.name} />
                </Link>
                <h2 className="font-display mt-4 text-xl text-spice-ink">
                  {supplier.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-spice-ink/75">
                  {supplier.description}
                </p>
                <Link
                  href={supplier.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-spice-terracotta hover:text-spice-chili"
                >
                  Visit on the marketplace
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </Card>
            </Reveal>
          ))}
        </ul>
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
