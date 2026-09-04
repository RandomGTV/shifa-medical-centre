"use client";

import { useEffect, useState } from "react";
import { useInView, usePrefersReducedMotion } from "@/lib/motion";

/**
 * Counts a number up when it scrolls into view.
 *
 * Takes the display string ("1.2 L+", "24×7", "12 min") and animates only the
 * leading numeral, leaving prefixes and suffixes intact — so "₹3.1 Cr" counts
 * and "24×7" is left alone.
 */
export function CountUp({
  value,
  duration = 1400,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const { ref, seen } = useInView<HTMLSpanElement>(0.4);
  const reduced = usePrefersReducedMotion();

  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[2]) : null;
  const decimals = match && match[2].includes(".") ? match[2].split(".")[1].length : 0;

  const [shown, setShown] = useState(target ?? 0);

  useEffect(() => {
    if (target === null || reduced || !seen) return;

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic: quick off the mark, settles gently
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(target * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    setShown(0);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, reduced, seen, target]);

  if (target === null || !match) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {/* the real value stays in the accessibility tree; the count is decoration */}
      <span className="sr-only">{value}</span>
      <span aria-hidden className="tabular-nums">
        {match[1]}
        {shown.toFixed(decimals)}
        {match[3]}
      </span>
    </span>
  );
}
