/**
 * Renders a photo when one is supplied, and a designed placeholder tile when it is not —
 * so the layout looks intentional before the clinic's real photography arrives.
 * Drop images into /public/gallery/ and reference them in src/data/gallery.ts.
 */
export function Placeholder({
  label,
  image,
  className = "",
  tone = 0,
  variant = "light",
  hideLabel = false,
}: {
  label: string;
  image?: string;
  className?: string;
  tone?: number;
  variant?: "light" | "dark";
  /** The caption alongside already names it — keep the tile clean, keep the aria label. */
  hideLabel?: boolean;
}) {
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={image}
        alt={label}
        className={`h-full w-full object-cover ${className}`}
        loading="lazy"
      />
    );
  }

  const dark = variant === "dark";
  const tones = dark
    ? [
        "from-brand-800 to-brand-900",
        "from-accent-900 to-brand-900",
        "from-brand-700 to-brand-900",
        "from-brand-900 to-brand-950",
      ]
    : [
        "from-accent-100 to-accent-200",
        "from-brand-100 to-brand-200",
        "from-accent-50 to-accent-100",
        "from-brand-200 to-accent-100",
      ];
  const gradient = tones[tone % tones.length];

  return (
    <div
      className={`relative flex h-full w-full items-end bg-gradient-to-br ${gradient} ${className}`}
      role="img"
      aria-label={`${label} — photo coming soon`}
    >
      <div className="absolute inset-0 bg-dots opacity-40" />
      <svg
        viewBox="0 0 24 24"
        className={`absolute right-4 top-4 h-8 w-8 ${dark ? "text-white/25" : "text-brand-900/25"}`}
        fill="none"
        aria-hidden
      >
        <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8.5" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.5" />
        <path d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      {hideLabel ? null : (
        <p
          className={`relative p-4 font-display text-sm font-medium ${
            dark ? "text-white/80" : "text-brand-900"
          }`}
        >
          {label}
        </p>
      )}
    </div>
  );
}
