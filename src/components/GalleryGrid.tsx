"use client";

import { useState } from "react";
import { Placeholder } from "@/components/Placeholder";
import { gallery, galleryCategories } from "@/data/gallery";

export function GalleryGrid() {
  const [active, setActive] = useState<string>("All");

  const items = active === "All" ? gallery : gallery.filter((g) => g.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
              active === c
                ? "bg-brand-600 text-white"
                : "border border-brand-900/[.08] text-ink-soft hover:bg-white hover:text-brand-700"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {items.map((g, i) => (
          <figure
            key={g.id}
            className="card group break-inside-avoid overflow-hidden animate-fade-up"
            style={{ animationDelay: `${(i % 6) * 60}ms` }}
          >
            <div className={g.tall ? "aspect-[3/4]" : "aspect-[4/3]"}>
              <div className="h-full w-full overflow-hidden">
                <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
                  <Placeholder label={g.title} image={g.image} tone={i} hideLabel />
                </div>
              </div>
            </div>
            <figcaption className="p-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-brand-600">
                {g.category}
              </p>
              <h2 className="mt-2 font-display text-[16px] text-ink">{g.title}</h2>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{g.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {items.length === 0 ? (
        <p className="py-16 text-center text-ink-faint">Nothing in this category yet.</p>
      ) : null}
    </div>
  );
}
