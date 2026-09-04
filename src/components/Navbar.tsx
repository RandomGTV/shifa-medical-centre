"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { useSite } from "@/components/SiteContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const clinic = useSite();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/85 backdrop-blur-xl transition-shadow duration-300 hairline ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={clinic.name}>
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/10">
            <Image
              src="/logo.png"
              alt="Shifa Medical Centre Logo"
              width={44}
              height={44}
              className="h-full w-full object-contain p-0.5"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[20px] font-extrabold text-brand-900">
              Shifa
            </span>
            <span className="hidden text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-faint sm:block">
              Medical Centre
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                  active ? "text-accent-700" : "text-ink-soft hover:text-accent-700"
                }`}
              >
                {l.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent-500 transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={clinic.phoneHref}
            aria-label={`Call the clinic on ${clinic.phone}`}
            className="btn-primary min-h-[44px] min-w-[44px] whitespace-nowrap px-4 py-3 sm:px-6"
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
            <span className="hidden sm:inline">Contact Desk</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border text-brand-900 hairline lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t bg-white hairline lg:hidden">
          <div className="container-x flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex min-h-[44px] items-center rounded-xl px-3 py-3 text-[15px] font-medium text-ink-soft hover:bg-cream hover:text-accent-700"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={clinic.phoneHref}
              className="flex min-h-[44px] items-center rounded-xl px-3 py-3 text-[15px] font-semibold text-accent-700"
            >
              Call {clinic.phone}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
