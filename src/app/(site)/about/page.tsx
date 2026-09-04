import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { getSiteContent } from "@/lib/content";
import { clinic, stats, trustPoints } from "@/data/clinic";

const timeline = [
  {
    year: "2008",
    title: "Our founding in Vailathur",
    body: "Shifa Medical Centre opens its doors as a dedicated outpatient clinic, committed to bringing careful, accessible medicine to families in the surrounding towns of Vailathur and Tirur.",
  },
  {
    year: "2018",
    title: "The lab, and the first specialists",
    body: "In-house sample collection begins. Speciality departments join the weekly rota; the diagnostic register starts.",
  },
  {
    year: "2020",
    title: "Through the pandemic",
    body: "Fever clinic separated from the main OP, teleconsultation set up in three weeks, home medicine delivery begins — and never stops.",
  },
  {
    year: "2022",
    title: "The current building",
    body: "The present premises at 7/228-B, Chelatt Arcade Building, Vailathur, Tirur. Six consulting chambers, high-frequency 500 mA digital X-Ray suite, fully automated diagnostic laboratory, and in-house pharmacy.",
  },
  {
    year: "2024",
    title: "Records go digital",
    body: "Every patient file keyed to a phone number. Reports and reminders move to WhatsApp; follow-up compliance jumps sharply.",
  },
  {
    year: "Today",
    title: "6 consultant specialties, 500 mA X-Ray, Lab & Pharmacy",
    body: "And the same rule as day one: nobody leaves without understanding what is wrong with them, in their own language.",
  },
];

export const metadata: Metadata = {
  title: "About the Clinic",
  description:
    "How Shifa Medical Centre grew from an outpatient clinic in 2008 into a full multispeciality day clinic serving the surrounding towns of Vailathur and Tirur.",
};

export default async function AboutPage() {
  const clinic = await getSiteContent();

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built in Vailathur, for Vailathur"
        lead={`${clinic.name} started as a two-room outpatient clinic in ${clinic.established}. The ambition has not changed since: close a family's medical problem in their own town, at a price they were told in advance.`}
      />

      <section className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="card relative aspect-[4/3] overflow-hidden shadow-soft">
              <Image
                src="/hero/facade-front.jpg"
                alt="Shifa Medical Centre building, Vailathur, Tirur"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <SectionHeading
              eyebrow="Our approach"
              title="Continuity is the whole product"
              lead="Anyone can sell a consultation. What is hard — and what actually changes outcomes in diabetes, hypertension, pregnancy and childhood immunisation — is the fifth visit, the one where the doctor already knows the story."
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {trustPoints.map((t) => (
                <div key={t.title}>
                  <h3 className="font-display text-[16px] text-ink">{t.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{t.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Our story" title="Our journey since 2008" />
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={(i % 3) * 60}>
                <li className="card h-full p-6">
                  <p className="font-display text-2xl text-brand-600">{t.year}</p>
                  <h3 className="mt-3 font-display text-[16.5px] text-ink">{t.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{t.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-16">
        <Reveal>
          <div className="card grid gap-8 p-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-brand-700">{s.value}</p>
                <p className="mt-2 text-[13px] leading-snug text-ink-faint">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-brand-600 px-8 py-10 text-white">
            <div>
              <h2 className="text-2xl">Come and see the place</h2>
              <p className="mt-2 text-[15px] text-white/80">
                Walk in during OP hours, or call ahead and we will tell you how busy it is.
              </p>
            </div>
            <div className="flex gap-3">
              <a href={clinic.phoneHref} className="btn-accent">
                Call {clinic.phone}
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <Link
                href="/contact"
                className="btn border border-white/30 text-white hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
