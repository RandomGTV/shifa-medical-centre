import type { Metadata } from "next";
import { Clock, FileScan, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { getSiteContent } from "@/lib/content";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description:
    "Phone, WhatsApp, email, timings and directions to Shifa Medical Centre, 7/228-B, Chelatt Arcade Building, Ponmundam PO, Vailathur, Tirur, Malappuram - 676106.",
};

export default async function ContactPage() {
  const clinic = await getSiteContent();

  const cards = [
    {
      icon: Phone,
      title: "Booking Line 1",
      body: clinic.phone,
      href: clinic.phoneHref,
      note: "Landline appointment desk",
    },
    {
      icon: Phone,
      title: "Booking Line 2",
      body: clinic.phoneAlt,
      href: clinic.phoneAltHref,
      note: "Landline enquiries & diagnostics",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Booking",
      body: clinic.whatsappDisplay,
      href: `https://wa.me/${clinic.whatsapp}`,
      note: "Instant WhatsApp appointments & reports",
    },
    {
      icon: Clock,
      title: "Working Hours",
      body: "7:00 AM – 8:00 PM",
      href: "#timings",
      note: "Open all days (Mon – Sun)",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Find us, call us, or just walk in"
        lead={`We are located at ${clinic.address.line1}, ${clinic.address.line2} (Pincode: ${clinic.address.pincode}). Step-free entrance with ample forecourt and lower parking.`}
      />

      <section className="container-x py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 50}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600/10 text-brand-700">
                  <c.icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <h2 className="mt-5 font-display text-[16px] text-ink">{c.title}</h2>
                <p className="mt-1.5 flex-1 text-[14px] text-brand-700">{c.body}</p>
                <p className="mt-3 text-[12.5px] text-ink-faint">{c.note}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <Reveal>
            <div className="card overflow-hidden">
              <iframe
                src={clinic.mapEmbed}
                title="Map to the clinic"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-5">
              <div className="card p-6">
                <h2 className="flex items-center gap-2 font-display text-[17px] text-ink">
                  <MapPin className="h-[18px] w-[18px] text-brand-600" strokeWidth={1.7} />
                  Address
                </h2>
                <p className="mt-4 text-[14.5px] leading-relaxed text-ink-soft">
                  {clinic.name}
                  <br />
                  {clinic.address.line1}
                  <br />
                  {clinic.address.line2} – {clinic.address.pincode}
                  <br />
                  {clinic.address.state}, India
                  <br />
                  <span className="mt-2 block">
                    <span className="text-ink-faint">Email: </span>
                    <a href={`mailto:${clinic.email}`} className="text-brand-700 hover:underline">
                      {clinic.email}
                    </a>
                  </span>
                </p>
                <a
                  href={clinic.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-5 w-full"
                >
                  Open in Google Maps
                </a>
              </div>

              <div id="timings" className="card scroll-mt-28 p-6">
                <h2 className="flex items-center gap-2 font-display text-[17px] text-ink">
                  <Clock className="h-[18px] w-[18px] text-brand-600" strokeWidth={1.7} />
                  OP timings
                </h2>
                <table className="mt-4 w-full text-[13.5px] text-ink-soft">
                  <tbody>
                    {clinic.hours.map((h) => (
                      <tr key={h.days} className="border-b last:border-0 hairline">
                        <td className="py-3 pr-4 font-medium text-ink">{h.days}</td>
                        <td className="py-3 text-right">
                          {h.morning}
                          <br />
                          <span className="text-ink-faint">{h.evening}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-4 rounded-xl bg-cream px-4 py-3 text-[13px]">
                  {clinic.emergencyNote}
                </p>
              </div>

              <div className="card bg-brand-950 p-6 text-white">
                <h2 className="font-display text-[17px]">Coming in today?</h2>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/70">
                  Call the front desk and we will tell you which consultants are in and how
                  long the wait is running.
                </p>
                <a href={clinic.phoneHref} className="btn-accent mt-5 w-full">
                  Call {clinic.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
