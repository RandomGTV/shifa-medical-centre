import type { Metadata, Viewport } from "next";
import "./globals.css";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  metadataBase: new URL("https://shifamedicalcentre.in"),
  title: {
    default: `${clinic.name} — ${clinic.address.line2}`,
    template: `%s · ${clinic.shortName}`,
  },
  description:
    "Speciality healthcare clinic at Chelatt Arcade Building, Vailathur, Tirur. Expert consultations in Dermatology, Neurology, Endocrinology, Urology, Rheumatology, and Orthopedics, supported by a 500 mA Digital X-Ray, Diagnostic Laboratory, and In-House Pharmacy.",
  keywords: [
    "clinic in Vailathur",
    "clinic in Tirur",
    "Shifa Medical Centre",
    "500 mA X-Ray Vailathur",
    "diagnostic laboratory Vailathur",
    "pharmacy Vailathur",
    "neurologist Malappuram",
    "dermatologist Vailathur",
    "endocrinology Tirur",
    "urology clinic Kerala",
    "rheumatologist Malappuram",
    "orthopedic doctor Vailathur",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: `${clinic.name} — ${clinic.address.line2}`,
    description: clinic.tagline,
    siteName: clinic.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        {/*
          Outfit (display) + Plus Jakarta Sans (body), loaded at runtime rather than through next/font,
          so the project builds on machines (and CI) without outbound access to
          fonts.googleapis.com. Swap in self-hosted woff2 files for full offline builds.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
