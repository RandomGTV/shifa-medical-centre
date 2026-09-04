import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Placeholder } from "@/components/Placeholder";
import { Hero } from "@/components/Hero";
import { EcgLine } from "@/components/EcgLine";
import { CountUp } from "@/components/CountUp";
import { getSiteContent } from "@/lib/content";
import { clinic, stats, trustPoints } from "@/data/clinic";
import { specialities } from "@/data/specialities";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

/** The three primary facilities that get the top feature cards in the bento grid. */
const FEATURED = ["x-ray", "laboratory", "pharmacy"];

export default async function HomePage() {
  const clinic = await getSiteContent();

  const lead = services.find((s) => s.slug === "x-ray");
  const labFacility = services.find((s) => s.slug === "laboratory");
  const pharmacyFacility = services.find((s) => s.slug === "pharmacy");
  const rest = services.filter((s) => !FEATURED.includes(s.slug));

  return (
    <>
      <Hero />

      {/* ── The numbers, straight under the fold ─────────────── */}
      <section className="border-b bg-white hairline">
        <div className="container-x grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div>
                <p className="font-display text-[2rem] font-extrabold leading-none text-brand-900">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-2 text-[13px] leading-snug text-ink-faint">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Medical fields ───────────────────────────────────── */}
      <section id="fields" className="container-x scroll-mt-24 py-24">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Medical fields"
            title="Super Speciality Consultations"
            lead="Expert specialist care across Dermatology, Neurology, Endocrinology, Urology, Rheumatology, and Orthopedics."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialities.map((f, i) => (
            <Reveal key={f.slug} delay={(i % 4) * 70}>
              <article className="card group h-full p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-accent-200 hover:shadow-lift">
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-accent-100 text-accent-700 transition-all duration-500 group-hover:scale-105 group-hover:bg-accent-600 group-hover:text-white">
                  <Icon name={f.icon} className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-[19px] font-semibold text-brand-900">
                  {f.name}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Services, bento ──────────────────────────────────── */}
      <section id="services" className="scroll-mt-24 bg-white py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Facilities & Departments"
              title="Advanced Diagnostics & Clinical Specialities"
              lead="In-house 500 mA Digital X-Ray, Diagnostic Laboratory, and Pharmacy, backing our six clinical departments under one roof."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            {lead ? (
              <Reveal className="lg:col-span-7">
                <article className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl bg-brand-900 p-10 text-white sm:p-12">
                  <div aria-hidden className="absolute inset-0 bg-dots opacity-[.14]" />
                  <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-white">
                    <Icon name={lead.icon} className="h-8 w-8" />
                  </span>
                  <h3 className="relative mt-7 font-display text-[1.9rem] font-bold leading-tight sm:text-[2.2rem]">
                    {lead.name}
                  </h3>
                  <p className="relative mt-4 max-w-xl text-[15.5px] leading-relaxed text-brand-200">
                    {lead.details}
                  </p>
                  <Link
                    href={`/services#${lead.slug}`}
                    className="relative mt-8 inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-accent-300 hover:text-white"
                  >
                    What it covers
                    <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                  </Link>
                </article>
              </Reveal>
            ) : null}

            <div className="flex flex-col gap-6 lg:col-span-5">
              {labFacility ? (
                <Reveal delay={60} className="flex-1">
                  <article className="card group flex h-full flex-col justify-center p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-100 text-accent-700 transition-colors duration-500 group-hover:bg-accent-600 group-hover:text-white">
                        <Icon name={labFacility.icon} className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-display text-[18px] font-semibold text-brand-900">
                          {labFacility.name}
                        </h3>
                        <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-accent-700">
                          {labFacility.price}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">
                      {labFacility.summary}
                    </p>
                  </article>
                </Reveal>
              ) : null}

              {pharmacyFacility ? (
                <Reveal delay={120} className="flex-1">
                  <article className="card group flex h-full flex-col justify-center p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-100 text-accent-700 transition-colors duration-500 group-hover:bg-accent-600 group-hover:text-white">
                        <Icon name={pharmacyFacility.icon} className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-display text-[18px] font-semibold text-brand-900">
                          {pharmacyFacility.name}
                        </h3>
                        <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-accent-700">
                          {pharmacyFacility.price}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">
                      {pharmacyFacility.summary}
                    </p>
                  </article>
                </Reveal>
              ) : null}
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 70}>
                <Link
                  href={`/services#${s.slug}`}
                  className="card group flex h-full flex-col p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-200 hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-100 text-accent-700 transition-colors duration-500 group-hover:bg-accent-600 group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-[17px] font-semibold text-brand-900">
                    {s.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-soft">
                    {s.summary}
                  </p>
                  <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-accent-700">
                    {s.price}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container-x">
        <EcgLine />
      </div>

      {/* ── Why us ───────────────────────────────────────────── */}
      <section className="container-x py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="card aspect-[3/4] overflow-hidden">
                <Placeholder label="In-House Pharmacy" image="/gallery/pharmacy.jpg" tone={0} />
              </div>
              <div className="mt-10 space-y-4">
                <div className="card aspect-square overflow-hidden">
                  <Placeholder label="Diagnostic Laboratory" image="/gallery/lab.jpg" tone={1} />
                </div>
                <div className="card aspect-square overflow-hidden">
                  <Placeholder label="500 mA Digital X-Ray" image="/gallery/xray-500ma.jpg" tone={3} />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <SectionHeading
              eyebrow="Why families stay"
              title="A clinic run the way a good family doctor would run one"
              lead="We kept what works about the neighbourhood doctor — being known, being listened to — and added the diagnostics, records and cover a single cabin cannot fund."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {trustPoints.map((t) => (
                <div
                  key={t.title}
                  className="group relative rounded-2xl pl-5 transition-colors duration-300 hover:bg-cream"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-1 h-[calc(100%-.5rem)] w-0.5 rounded-full bg-accent-200 transition-colors duration-500 group-hover:bg-accent-500"
                  />
                  <div className="flex items-center gap-2 text-accent-700">
                    <ShieldCheck
                      className="h-[18px] w-[18px] transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.9}
                    />
                    <h3 className="font-display text-[16px] font-semibold text-brand-900">
                      {t.title}
                    </h3>
                  </div>
                  <p className="mt-2 pb-1 text-[14px] leading-relaxed text-ink-soft">{t.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>



      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="container-x py-24">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="From our patients"
            title="What people say when the doctor is not in the room"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 70}>
              <figure className="card flex h-full flex-col p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <Quote className="h-7 w-7 text-accent-300" strokeWidth={1.6} />
                <blockquote className="mt-5 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 border-t pt-5 hairline">
                  <p className="font-display text-[15px] font-semibold text-brand-900">{t.name}</p>
                  <p className="text-[12.5px] text-ink-faint">
                    {t.place} · {t.service}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex items-center justify-center gap-2 text-[13.5px] text-ink-faint">
            <span className="flex text-accent-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
              ))}
            </span>
            <CountUp value="4.8" /> average across 900+ Google reviews
          </div>
        </Reveal>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section id="contact" className="container-x scroll-mt-24 pb-24">
        <Reveal>
          <div className="card grid gap-12 p-10 sm:p-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-3 font-display text-[2.2rem] font-extrabold leading-tight text-brand-900 sm:text-[2.6rem]">
                Walk in, or call ahead
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
                The front desk will tell you which consultants are in today and how long the
                wait is running before you set out.
              </p>

              <ul className="mt-9 space-y-5">
                {[
                  { icon: MapPin, label: "Location", value: `${clinic.address.line1}, ${clinic.address.line2}`, href: clinic.mapLink },
                  { icon: Phone, label: "Front desk & booking", value: `${clinic.phone} / ${clinic.phoneAlt}`, href: clinic.phoneHref },
                  { icon: Mail, label: "Email enquiries", value: clinic.email, href: `mailto:${clinic.email}` },
                  { icon: Clock, label: "Working hours", value: "Mon – Sat: 7:00 AM – 8:00 PM (Sundays Closed)" },
                ].map((row) => (
                  <li key={row.label} className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent-100 text-accent-700">
                      <row.icon className="h-5 w-5" strokeWidth={1.9} />
                    </span>
                    <span className="pt-1">
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                        {row.label}
                      </span>
                      {row.href ? (
                        <a
                          href={row.href}
                          className="text-[15px] text-brand-900 hover:text-accent-700"
                          target={row.href.startsWith("http") ? "_blank" : undefined}
                          rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {row.value}
                        </a>
                      ) : (
                        <span className="text-[15px] text-brand-900">{row.value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href={clinic.phoneHref} className="btn-primary px-6 py-3.5">
                  Call the front desk
                </a>
                <a
                  href={`https://wa.me/${clinic.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost px-6 py-3.5"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border hairline">
              <iframe
                src={clinic.mapEmbed}
                title="Map to Shifa Medical Centre"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {clinic.insurers.map((n) => (
              <li
                key={n}
                className="flex items-start gap-2.5 rounded-2xl border bg-white px-5 py-4 text-[13.5px] text-ink-soft hairline"
              >
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" strokeWidth={1.9} />
                {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
