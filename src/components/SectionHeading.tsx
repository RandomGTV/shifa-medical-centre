import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  light = false,
  action,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  light?: boolean;
  action?: ReactNode;
}) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col gap-5 ${
        centered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"
      }`}
    >
      <div className={centered ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow ? (
          <p className={`eyebrow ${light ? "text-accent-300" : ""}`}>{eyebrow}</p>
        ) : null}
        <h2
          className={`mt-3 font-display text-[2rem] font-extrabold leading-[1.12] sm:text-[2.75rem] ${
            light ? "text-white" : "text-brand-900"
          }`}
        >
          {title}
        </h2>
        {lead ? (
          <p
            className={`mt-5 text-[15.5px] leading-relaxed ${
              light ? "text-brand-200" : "text-ink-soft"
            }`}
          >
            {lead}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
