"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Pause, Phone, Play } from "lucide-react";
import { useSite } from "@/components/SiteContext";
import { OpenStatus } from "@/components/OpenStatus";
import { usePrefersReducedMotion } from "@/lib/motion";

const AUTOPLAY_MS = 7000;

/**
 * Full-height hero slider over the photographs of the building.
 *
 * Autoplay rules — the part most sliders get wrong:
 *   · never starts if the visitor prefers reduced motion
 *   · pauses while the tab is hidden, so it isn't burning frames in the background
 *   · pauses on hover and whenever focus is inside the hero, so a keyboard user
 *     is never yanked to another slide mid-read
 *   · has a visible play/pause control (WCAG 2.2.2: anything auto-moving for
 *     more than five seconds needs one)
 */
export function Hero() {
  const clinic = useSite();
  // spread out of the `as const` tuple so length checks stay honest when the
  // array is emptied in clinic.ts
  const slides: {
    src: string;
    alt: string;
    caption: string;
    headline: string;
    body: string;
  }[] = [...clinic.heroImages];
  const reduced = usePrefersReducedMotion();

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [held, setHeld] = useState(false);

  const go = useCallback(
    (next: number) => setIndex((next + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (reduced || !playing || held || slides.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [held, playing, reduced, slides.length]);

  useEffect(() => {
    const onVisibility = () => setHeld(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const current = slides[index];

  return (
    <header
      className="relative isolate h-[92vh] min-h-[560px] w-full overflow-hidden bg-brand-900 text-white"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
      aria-roledescription="carousel"
      aria-label="Shifa Medical Centre, Vailathur"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "z-[2] opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={i === index ? slide.alt : ""}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-transform duration-[7000ms] ease-out ${
              i === index && !reduced ? "scale-100" : "scale-105"
            }`}
          />
          {/* the scrim: dark where the words are, clear where the building is */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/80 via-45% to-brand-900/25"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent via-45% to-brand-900/40"
          />
        </div>
      ))}

      {slides.length === 0 ? (
        <div className="bg-curtain absolute inset-0 bg-brand-900" />
      ) : null}

      {/* the words */}
      <div className="container-x relative z-10 flex h-full flex-col justify-center">
        <div className="max-w-3xl">
          <div
            key={`tag-${index}`}
            className="inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[13px] font-semibold backdrop-blur-md"
          >
            <span className="relative flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-0.5 shadow-sm">
              <Image
                src="/logo.png"
                alt="Shifa Medical Centre Logo"
                width={18}
                height={18}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-bold uppercase tracking-[0.12em] text-white">
              {clinic.name}
            </span>
            <span className="text-white/40">·</span>
            <span className="font-medium text-white/80">{clinic.address.line2}</span>
          </div>

          <h1 className="mt-5 font-display font-extrabold leading-[1.04] tracking-tight">
            <span className="block text-[2.65rem] font-extrabold text-white sm:text-[3.85rem] lg:text-[4.6rem]">
              {clinic.name}
            </span>
            <span
              key={`h-${index}`}
              className="mt-2.5 block animate-fade-up font-sans text-[1.3rem] font-semibold text-accent-300 sm:text-[1.75rem] lg:text-[2rem] leading-snug"
            >
              {current?.headline ?? "The whole visit, under one roof."}
            </span>
          </h1>

          <p
            key={`p-${index}`}
            className="mt-6 max-w-2xl animate-fade-up text-[16px] leading-relaxed text-brand-200 sm:text-[19px]"
          >
            {current?.body ??
              "Specialist consultations, 500 mA digital X-Ray, diagnostic laboratory, and in-house pharmacy in a single building in Vailathur, Tirur."}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/services" className="btn-accent px-7 py-4 text-[15px]">
              Explore departments
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </Link>
            <a href={clinic.phoneHref} className="btn-glass px-7 py-4 text-[15px]">
              <Phone className="h-4 w-4" strokeWidth={2} />
              {clinic.phone}
            </a>
          </div>

          <div className="mt-9">
            <OpenStatus />
          </div>
        </div>
      </div>

      {/* controls */}
      {slides.length > 1 ? (
        <div className="absolute bottom-8 right-5 z-20 flex items-center gap-3 sm:right-8">
          <div className="mr-1 hidden items-center gap-2 sm:flex" aria-hidden>
            {slides.map((s, i) => (
              <span
                key={s.src}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-7 bg-white" : "w-3 bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-accent-600 hover:border-accent-600"
            aria-label={playing ? "Pause the slideshow" : "Play the slideshow"}
          >
            {playing && !reduced ? (
              <Pause className="h-4 w-4" strokeWidth={2} />
            ) : (
              <Play className="h-4 w-4" strokeWidth={2} />
            )}
          </button>
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:border-accent-600 hover:bg-accent-600"
            aria-label="Previous view"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:border-accent-600 hover:bg-accent-600"
            aria-label="Next view"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      ) : null}

      {/* what the slide is, announced once per change */}
      <p className="sr-only" aria-live="polite">
        {current?.caption}
      </p>
    </header>
  );
}
