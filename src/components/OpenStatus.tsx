"use client";

import { useEffect, useState } from "react";
import { useSite } from "@/components/SiteContext";

type State = { open: boolean; label: string; detail: string };

const mins = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const pretty = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
};

function read(now: Date, clinic: ReturnType<typeof useSite>): State {
  const day = now.getDay();
  const at = now.getHours() * 60 + now.getMinutes();
  const today = clinic.schedule[day] ?? [];

  for (const [from, to] of today) {
    if (at >= mins(from) && at < mins(to)) {
      return { open: true, label: "OP open now", detail: `until ${pretty(to)}` };
    }
  }

  const next = today.find(([from]) => mins(from) > at);
  if (next) {
    return { open: false, label: "OP closed", detail: `opens ${pretty(next[0])}` };
  }

  // nothing left today — look ahead for the next day that has a session
  for (let i = 1; i <= 7; i += 1) {
    const slots = clinic.schedule[(day + i) % 7] ?? [];
    if (slots.length) {
      const when = i === 1 ? "tomorrow" : "";
      return {
        open: false,
        label: "OP closed",
        detail: `opens ${when} ${pretty(slots[0][0])}`.trim(),
      };
    }
  }

  return { open: false, label: "OP closed", detail: clinic.emergencyNote };
}

/**
 * A live "is the clinic open" pill. Renders the closed state on the server so
 * there is no hydration mismatch, then corrects itself on the client and
 * re-checks every minute.
 */
export function OpenStatus({ className = "" }: { className?: string }) {
  const clinic = useSite();
  const [state, setState] = useState<State | null>(null);

  useEffect(() => {
    const update = () => setState(read(new Date(), clinic));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [clinic]);

  const open = state?.open ?? false;

  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[12.5px] backdrop-blur-md ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        {open ? (
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent-300" />
        ) : null}
        <span
          className={`relative h-2.5 w-2.5 rounded-full ${
            open ? "bg-accent-300" : "bg-white/50"
          }`}
        />
      </span>
      <span className="font-medium text-white">{state?.label ?? "OP hours"}</span>
      <span className="text-white/60">{state?.detail ?? clinic.hours[0].morning}</span>
    </span>
  );
}
