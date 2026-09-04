import Link from "next/link";
import Image from "next/image";
import { getSiteContent } from "@/lib/content";

export default async function PitchLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const clinic = await getSiteContent();

  return (
    <div className="min-h-screen bg-brand-950 text-white/75">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-950/80 backdrop-blur-xl">
        <div className="container-x flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-white p-1 shadow-sm">
              <Image
                src="/logo.png"
                alt="Shifa Medical Centre Logo"
                width={32}
                height={32}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[15px] text-white">{clinic.shortName}</span>
              <span className="block text-[10.5px] uppercase tracking-[0.18em] text-accent-300">
                Investor brief
              </span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/" className="hidden text-[13px] hover:text-white sm:block">
              ← Back to the clinic site
            </Link>
            <a href={`mailto:${clinic.investorEmail}`} className="btn-accent px-5 py-2.5 text-[13px]">
              Request the data room
            </a>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-8 text-[12.5px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.name}. Confidential — for the named recipient
            only.
          </p>
          <p>
            Figures are management estimates and are not audited unless expressly stated.
          </p>
        </div>
      </footer>
    </div>
  );
}
