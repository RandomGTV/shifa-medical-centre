import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { getSiteContent } from "@/lib/content";
import { SiteProvider } from "@/components/SiteContext";

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const clinic = await getSiteContent();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    description: clinic.tagline,
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.line1,
      addressLocality: clinic.address.line2,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.pincode,
      addressCountry: "IN",
    },
    openingHours: ["Mo-Su 07:00-20:00"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteProvider value={clinic}>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
      </SiteProvider>
    </>
  );
}
