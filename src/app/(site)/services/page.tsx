import type { Metadata } from "next";
import { Check, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { services } from "@/data/services";
import { getSiteContent } from "@/lib/content";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Services & Departments",
  description:
    "Facilities and medical departments at Shifa Medical Centre, Vailathur — 500 mA Digital X-Ray, Diagnostic Laboratory, In-House Pharmacy, and 6 specialist consultant departments.",
};

export default async function ServicesPage() {
  const clinic = await getSiteContent();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Departments & facilities. Published rates. No package pressure."
        lead="The bays written across the front of the building, in the same order. Consultation fees are printed at the desk and listed here; anything that needs a quote, you get in writing before it starts."
      />

      <section className="container-x py-14">
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border px-4 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:border-brand-600/40 hover:bg-white hover:text-brand-700 hairline"
            >
              {s.name}
            </a>
          ))}
        </div>

        <div className="mt-14 space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 40}>
              <article
                id={s.slug}
                className="card scroll-mt-28 grid gap-8 p-7 sm:p-9 lg:grid-cols-[auto_1fr_auto] lg:items-start"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-600/10 text-brand-700">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>

                <div>
                  <h2 className="font-display text-[22px] text-ink">{s.name}</h2>
                  <p className="mt-2 text-[15px] font-medium text-brand-700">{s.summary}</p>
                  <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">
                    {s.details}
                  </p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-ink-soft">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end lg:text-right">
                  <div className="rounded-xl bg-cream px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-ink-faint">From</p>
                    <p className="font-display text-lg text-ink">{s.price}</p>
                  </div>
                  <a href={clinic.phoneHref} className="btn-primary px-5 py-2.5">
                    <Phone className="h-4 w-4" strokeWidth={1.9} />
                    Enquire
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
