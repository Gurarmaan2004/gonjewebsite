import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { footerNav } from "@/content/nav";
import { Container } from "@/components/ui/container";
import { company, companyAddressLine, service, site, socialLinks } from "@/lib/site";
import { Logo } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-300">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          {/* Company identity + verified contact details */}
          <div>
            <Logo tone="inverse" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              {site.description}
            </p>

            <address className="mt-6 space-y-2.5 text-sm not-italic">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden="true" />
                <span>{companyAddressLine}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-accent-400" aria-hidden="true" />
                <a
                  href={`tel:${company.phoneHref}`}
                  className="transition-colors hover:text-ink-50"
                >
                  {company.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-accent-400" aria-hidden="true" />
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-ink-50"
                >
                  {company.email}
                </a>
              </p>
            </address>

            <p className="mt-5 text-xs text-ink-500">
              Service hours {service.hours}. {service.hoursNote}
            </p>
          </div>

          {/* Link groups */}
          <div className="grid gap-8 sm:grid-cols-3">
            {footerNav.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  {group.heading}
                </h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {group.links.map((link) => (
                    <li key={`${group.heading}-${link.href}`}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 transition-colors hover:text-ink-50"
                        >
                          {link.label}
                          <ArrowUpRight className="size-3.5" aria-hidden="true" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="transition-colors hover:text-ink-50"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Legal strip */}
        <div className="mt-12 flex flex-col gap-4 border-t border-ink-800 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. ABN {company.abn}.
          </p>

          {socialLinks.length > 0 ? (
            <ul className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-ink-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            /* Legal pages and social profiles are pending — see DESIGN.md §7.
               Nothing is linked here until the real routes/URLs exist, so the
               footer never ships a 404. */
            <p className="text-ink-600">
              Terms, Privacy and Refunds pages coming soon.
            </p>
          )}
        </div>
      </Container>
    </footer>
  );
}
