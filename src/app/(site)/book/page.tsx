import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { BookingForm } from "@/components/BookingForm";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Pick a department, doctor and time slot at Shifa Medical Centre, Tirur. Your request goes straight to the front desk on WhatsApp.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Book a slot in under a minute"
        lead="Fill this in and it becomes a WhatsApp message to our front desk. A real person confirms your time — usually within 20 minutes during OP hours."
      />

      <section className="container-x grid gap-8 py-14 lg:grid-cols-[1.6fr_.9fr] lg:items-start">
        <Suspense
          fallback={
            <div className="card p-10 text-center text-ink-faint">Loading the booking form…</div>
          }
        >
          <BookingForm />
        </Suspense>

        <aside className="space-y-5 lg:sticky lg:top-24">
          <div className="card p-6">
            <h2 className="font-display text-[17px] text-ink">How it works</h2>
            <ol className="mt-4 space-y-4 text-[13.5px] leading-relaxed text-ink-soft">
              {[
                "Choose the department and, if you have one, your preferred doctor.",
                "Pick a date and a time you would like. Slots are a preference, not a lock.",
                "Send it. The form opens WhatsApp with everything already typed out.",
                "The front desk replies with a confirmed time and your token number.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600/10 text-[12px] font-semibold text-brand-700">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="card p-6">
            <h2 className="font-display text-[17px] text-ink">OP timings</h2>
            <ul className="mt-4 space-y-3 text-[13.5px] text-ink-soft">
              {clinic.hours.map((h) => (
                <li key={h.days} className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={1.7} />
                  <span>
                    <span className="block font-medium text-ink">{h.days}</span>
                    {h.morning}
                    {h.evening ? ` · ${h.evening}` : ""}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-cream px-4 py-3 text-[13px] text-ink-soft">
              {clinic.emergencyNote}
            </p>
          </div>

          <div className="card p-6">
            <h2 className="font-display text-[17px] text-ink">Rather just call?</h2>
            <ul className="mt-4 space-y-3 text-[13.5px] text-ink-soft">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={1.7} />
                <div className="flex flex-col gap-0.5">
                  <a href={clinic.phoneHref} className="hover:text-brand-700">
                    {clinic.phone}
                  </a>
                  <a href={clinic.phoneAltHref} className="hover:text-brand-700">
                    {clinic.phoneAlt}
                  </a>
                  <a
                    href={`https://wa.me/${clinic.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent-700 hover:underline"
                  >
                    WhatsApp: {clinic.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={1.7} />
                <span>
                  {clinic.address.line1}, {clinic.address.line2}
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
