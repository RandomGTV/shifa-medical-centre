"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useSite } from "@/components/SiteContext";
import { services } from "@/data/services";

export function Footer() {
  const clinic = useSite();
  return (
    <footer className="mt-24 bg-brand-950 text-white/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white p-1 shadow-sm">
              <Image
                src="/logo.png"
                alt="Shifa Medical Centre Logo"
                width={36}
                height={36}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-display text-lg text-white">{clinic.shortName}</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            {clinic.tagline} Serving the surrounding areas of Tirur since {clinic.established}.
          </p>
          <p className="mt-5 text-[13px] text-white/60">
            Languages spoken: {clinic.languages.join(", ")}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.16em] text-white/90">
            Departments
          </h3>
          <ul className="mt-3 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="-mx-2 flex min-h-[36px] items-center rounded-lg px-2 hover:bg-white/[.06] hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.16em] text-white/90">
            Visit us
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" strokeWidth={1.7} />
              <span>
                {clinic.address.line1}
                <br />
                {clinic.address.line2} – {clinic.address.pincode}
                <br />
                {clinic.address.state}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" strokeWidth={1.7} />
              <div className="flex flex-col gap-0.5">
                <a href={clinic.phoneHref} className="inline-flex min-h-[26px] items-center font-medium text-white hover:text-accent-300">
                  Mobile: {clinic.phone}
                </a>
                <a
                  href={`https://wa.me/${clinic.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[26px] items-center text-accent-300 hover:text-white"
                >
                  WhatsApp: {clinic.whatsappDisplay}
                </a>
                <a href={clinic.phoneAltHref} className="inline-flex min-h-[26px] items-center text-white/60 hover:text-white">
                  Landline: {clinic.phoneAlt}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" strokeWidth={1.7} />
              <a href={`mailto:${clinic.email}`} className="inline-flex min-h-[28px] items-center hover:text-white">
                {clinic.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.16em] text-white/90">
            Timings
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            {clinic.hours.map((h) => (
              <li key={h.days} className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" strokeWidth={1.7} />
                <span>
                  <span className="block text-white/90">{h.days}</span>
                  {h.morning}
                  {h.evening !== "Closed" ? ` · ${h.evening}` : ""}
                </span>
              </li>
            ))}
            <li className="rounded-xl bg-white/[.06] px-4 py-3 text-[13px] text-white/80">
              {clinic.emergencyNote}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <p>
            Information on this site is general in nature and is not a substitute for a
            consultation.
          </p>
        </div>
      </div>
    </footer>
  );
}
