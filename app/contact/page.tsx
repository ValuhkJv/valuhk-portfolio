import type { Metadata } from "next";
import { BrandIcon } from "@/components/site/brand-icon";
import { channels } from "@/components/site/contact-links";
import { PageHeader } from "@/components/site/page-header";
import { PageShell } from "@/components/site/page-shell";
import { profile } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

export default function ContactPage() {
  return (
    <PageShell className="gap-16">
      <PageHeader title="Contact" />

      <p className="text-[15px] text-dim">
        Feel free to reach out about anything — I&apos;m always happy to talk.
        Email is the fastest way to reach me. {profile.responseTime}
      </p>

      <section aria-labelledby="channels-title" className="flex flex-col gap-4">
        <h2 id="channels-title" className="section-label">
          CHANNELS
        </h2>
        <ul className="flex flex-col gap-3">
          {channels.map(({ label, value, icon, color, link }) => (
            <li key={label}>
              <a {...link} className="group flex items-center justify-between gap-4">
                <span className="flex items-center gap-2.5 text-muted">
                  <BrandIcon icon={icon} color={color} className="size-4 shrink-0" />
                  {label}
                </span>
                <span className="break-all text-right font-semibold transition-colors group-hover:text-accent">
                  {value} <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="location-title" className="flex flex-col gap-4">
        <h2 id="location-title" className="section-label">
          LOCATION
        </h2>
        <p className="text-dim">Based in {profile.location}.</p>
      </section>
    </PageShell>
  );
}
