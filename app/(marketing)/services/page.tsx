import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { overview, overviewItems } from "@/content/services";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { produceAccent } from "@/lib/produce-accents";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description: overview.lead,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero intro={overview} highlight="a marketplace listing" />

      <Section>
        <ul className="grid gap-6 sm:grid-cols-2">
          {overviewItems.map((item, index) => (
            <Reveal as="li" key={item.href} delay={index * 0.12}>
              <Link href={item.href} className="block h-full">
                <Card interactive className="h-full">
                  <span
                    className={cn(
                      "grid size-14 place-items-center border-2 shadow-stamp-sm",
                      index % 2 === 0 ? "blob-a" : "blob-c",
                      produceAccent(index).tile,
                    )}
                  >
                    <Icon name={item.icon} className="size-7" />
                  </span>
                  <h2 className="font-display mt-4 text-2xl text-spice-ink">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-spice-ink/75">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-spice-terracotta">
                    Learn more
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
