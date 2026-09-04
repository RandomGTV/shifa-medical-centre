import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock, Languages } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Placeholder } from "@/components/Placeholder";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Consultants at Shifa Medical Centre, Vailathur — qualifications, specialities, consulting days and timings.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultants"
        title="Specialist consultants on a published rota"
        lead="Days and timings below are the real rota, updated whenever it changes. Call ahead on festival days and during Ramadan, when evening hours shift."
      />

      <section className="container-x py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 3) * 60}>
              <article className="card flex h-full flex-col overflow-hidden">
                <div className="aspect-[4/3] w-full">
                  <Placeholder label={d.name} tone={i} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-[18px] text-ink">{d.name}</h2>
                  <p className="mt-1 text-[13.5px] font-medium text-brand-700">{d.speciality}</p>
                  <p className="mt-2 text-[12.5px] text-ink-faint">
                    {d.qualification} · {d.experience}
                  </p>

                  <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-ink-soft">{d.bio}</p>

                  <dl className="mt-5 space-y-2 border-t pt-4 text-[13px] text-ink-soft hairline">
                    <div className="flex gap-2.5">
                      <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={1.7} />
                      <dd>{d.days}</dd>
                    </div>
                    <div className="flex gap-2.5">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={1.7} />
                      <dd>{d.timing}</dd>
                    </div>
                    <div className="flex gap-2.5">
                      <Languages className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={1.7} />
                      <dd>{d.languages.join(", ")}</dd>
                    </div>
                  </dl>

                  <Link
                    href={`/book?doctor=${d.slug}`}
                    className="btn-primary mt-6 w-full py-2.5"
                  >
                    Book with {d.name.split(" ").slice(0, 2).join(" ")}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
