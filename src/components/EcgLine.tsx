/**
 * The clinic's signature motif: a heartbeat trace.
 *
 * Two uses:
 *   <EcgLine />            a full-width section divider
 *   <EcgLine variant="card" />  the compact trace inside the hero's vitals card
 *
 * The stroke is drawn with a dash sweep rather than a JS loop, so it costs the
 * main thread nothing and stops dead under prefers-reduced-motion.
 */

const TRACE =
  "M0 40 H60 l10-4 8 10 10-34 12 52 10-24 9 0 h34 l10-6 8 14 9-30 11 46 9-24 8 0 H360 l10-4 8 10 10-34 12 52 10-24 9 0 H520 l10-6 8 14 9-30 11 46 9-24 8 0 H720 l10-4 8 10 10-34 12 52 10-24 9 0 H900";

export function EcgLine({
  variant = "divider",
  className = "",
}: {
  variant?: "divider" | "card";
  className?: string;
}) {
  const card = variant === "card";

  return (
    <div
      className={`pointer-events-none relative w-full overflow-hidden ${
        card ? "h-12" : "h-20"
      } ${className}`}
      aria-hidden
    >
      {/* the paper: a faint clinical grid */}
      <div
        className={`absolute inset-0 ${card ? "opacity-100" : "opacity-70"}`}
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: card ? "14px 14px" : "22px 22px",
          color: card ? "rgba(255,255,255,.10)" : "rgba(14,165,233,.14)",
          maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
      />

      <svg
        viewBox="0 0 900 80"
        preserveAspectRatio="none"
        className="relative h-full w-full"
        role="presentation"
      >
        {/* ghost trace, so the line still reads before the sweep reaches it */}
        <path
          d={TRACE}
          fill="none"
          strokeWidth={card ? 2.4 : 2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={card ? "stroke-accent-300/25" : "stroke-accent-500/20"}
        />
        {/* the live sweep */}
        <path
          d={TRACE}
          fill="none"
          strokeWidth={card ? 2.4 : 2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`ecg-trace ${card ? "stroke-accent-300" : "stroke-accent-600"}`}
        />
      </svg>
    </div>
  );
}
