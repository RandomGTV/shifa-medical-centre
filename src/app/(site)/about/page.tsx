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
    body: "Shifa Medical Centre opens its doors as a dedicated outpatient clinic, committed to bringing careful, accessible medicine to families in the surrounding areas of Tirur.",
  },
  {
    year: "2018",
    title: "The lab and visiting specialists",
    body: "In-house blood sample collection begins. Visiting super speciality consultants join the weekly rota to serve the local community.",
  },
  {
    year: "2020",
    title: "Through the pandemic",
    body: "Dedicated fever screening separated from the main OP, teleconsultations introduced, and doorstep medicine delivery organized for senior citizens.",
  },
  {
    year: "2022",
    title: "The current building",
    body: "Moved into modern premises at 7/228-B, Chelatt Arcade Building, Vailathur, Tirur. Six consulting chambers, high-frequency 500 mA digital X-Ray suite, automated laboratory, and in-house pharmacy.",
  },
  {
    year: "2024",
    title: "Digital health records",
    body: "Patient records securely linked to phone numbers. Digital test reports delivered directly via WhatsApp for timely follow-up.",
  },
  {
    year: "Today",
    title: "6 super specialist departments, 500 mA X-Ray, Lab & Pharmacy",
    body: "Guided by the same principle since day one: every patient leaves with a clear understanding of their health, explained in their own language.",
  },
];

export const metadata: Metadata = {
  title: "About the Clinic",
  description:
    "How Shifa Medical Centre grew from an outpatient clinic in 2008 into a full multispeciality day clinic serving the surrounding areas of Tirur.",
};

export default async function AboutPage() {
  const clinic = await getSiteContent();

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built in Vailathur, Tirur for Vailathur, Tirur"
        lead={`${clinic.name} started as a two-room outpatient clinic in ${clinic.established}. Our commitment remains unchanged: to provide local families in Vailathur and Tirur with dependable medical care, accurate diagnostics, and honest advice close to home.`}
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
              title="Consistent care for lasting family health"
              lead="Long-term health depends on continuity. When your doctor knows your medical history, managing conditions like diabetes, blood pressure, and arthritis becomes safer, more personal, and far more effective."
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
