import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { closing, intro, suppliers } from "@/content/suppliers";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
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
        <ul className="grid gap-8 sm:grid-cols-2">
          {suppliers.map((supplier, index) => (
            <Reveal as="li" key={supplier.name} delay={index * 0.1}>
              <Card
                interactive
                className="flex h-full flex-col p-0 sm:p-0 shadow-lift"
              >
                <Link
                  href={supplier.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${supplier.name} on the Gonje marketplace`}
                  className="relative block h-56 w-full overflow-hidden rounded-t-[inherit] bg-spice-cream-deep sm:h-64"
                >
                  {supplier.logo ? (
                    <Image
                      src={supplier.logo}
                      alt={supplier.name}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-contain p-6"
                    />
                  ) : (
                    <span className="font-display absolute inset-0 flex items-center justify-center text-lg font-bold text-spice-ink/35">
                      {supplier.name}
                    </span>
                  )}
                </Link>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h2 className="font-display text-3xl text-spice-ink">
                    {supplier.name}
                  </h2>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-spice-ink/75">
                    {supplier.description}
                  </p>
                  <Link
                    href={supplier.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-spice-terracotta hover:text-spice-chili"
                  >
                    Visit on the marketplace
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
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
