import type { Metadata } from "next";
import { ArrowUpRight, Lock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getSiteContent } from "@/lib/content";
import {
  competition,
  investorMeta,
  problem,
  revenueMix,
  risks,
  roadmap,
  solution,
  team,
  traction,
  unitEconomics,
  useOfFunds,
  whyNow,
} from "@/data/investor";

export const metadata: Metadata = {
  title: "Investor Brief",
  description: "Confidential investor brief.",
  robots: { index: false, follow: false, nocache: true },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-accent-300">
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-4 max-w-3xl text-[2rem] leading-[1.15] text-white sm:text-[2.5rem]">{children}</h2>;
}

export default async function InvestorsPage() {
  const clinic = await getSiteContent();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-white/10 bg-mesh">
        <div className="container-x py-20 sm:py-28">
          <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-white/60">
            <Lock className="h-3.5 w-3.5" strokeWidth={2} />
            Confidential · unlisted page
          </div>

          <h1 className="mt-8 max-w-4xl text-[2.6rem] leading-[1.06] text-white sm:text-[4rem]">
            {investorMeta.headline}
          </h1>

          <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-white/70">
            {investorMeta.subhead}
          </p>

          <dl className="mt-14 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            <div>
              <dt className="text-[12px] uppercase tracking-[0.16em] text-white/60">Raising</dt>
              <dd className="mt-2 font-display text-3xl text-accent-300">{investorMeta.raising}</dd>
            </div>
            <div>
              <dt className="text-[12px] uppercase tracking-[0.16em] text-white/60">Instrument</dt>
              <dd className="mt-2 font-display text-3xl text-white">{investorMeta.instrument}</dd>
            </div>
            <div>
              <dt className="text-[12px] uppercase tracking-[0.16em] text-white/60">Deployment</dt>
              <dd className="mt-2 font-display text-3xl text-white">{investorMeta.use}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────── */}
      <section className="container-x py-20">
        <Reveal>
          <Eyebrow>The problem</Eyebrow>
          <H2>
            Families in Malabar travel two hours for care that should take two blocks.
          </H2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problem.map((p, i) => (
            <Reveal key={p.label} delay={i * 70}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[.03] p-7">
                <p className="font-display text-4xl text-accent-300">{p.stat}</p>
                <p className="mt-3 text-[14px] font-medium text-white">{p.label}</p>
                <p className="mt-4 text-[14px] leading-relaxed text-white/60">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Solution ─────────────────────────────────────────── */}
      <section className="border-y border-white/10 bg-white/[.02] py-20">
        <div className="container-x">
          <Reveal>
            <Eyebrow>What we built</Eyebrow>
            <H2>A single clinic design that works, repeated town by town.</H2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {solution.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-white/10 p-7">
                  <p className="font-display text-[19px] text-white">{s.title}</p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-white/60">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14">
              <Eyebrow>Why now</Eyebrow>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {whyNow.map((w) => (
                  <li key={w} className="flex gap-3 text-[14.5px] leading-relaxed text-white/65">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Traction ─────────────────────────────────────────── */}
      <section className="container-x py-20">
        <Reveal>
          <Eyebrow>Traction</Eyebrow>
          <H2>One clinic, profitable, growing 34% a year.</H2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {traction.map((t, i) => (
            <Reveal key={t.label} delay={i * 50}>
              <div className="h-full bg-brand-950 p-8">
                <p className="font-display text-4xl text-white">{t.value}</p>
                <p className="mt-3 text-[13.5px] text-white/60">{t.label}</p>
                {t.delta ? (
                  <p className="mt-3 inline-flex items-center gap-1 rounded-full bg-accent-400/15 px-2.5 py-1 text-[12px] font-medium text-accent-300">
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
                    {t.delta}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Model & unit economics ───────────────────────────── */}
      <section className="border-y border-white/10 bg-white/[.02] py-20">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Revenue mix</Eyebrow>
            <H2>Five streams from one patient visit.</H2>
            <div className="mt-10 space-y-6">
              {revenueMix.map((r) => (
                <div key={r.stream}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-[14.5px] text-white">{r.stream}</p>
                    <p className="font-display text-[15px] text-accent-300">{r.share}%</p>
                  </div>
                  <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-400 to-accent-300"
                      style={{ width: `${r.share * 2.6}%` }}
                    />
                  </div>
                  <p className="mt-2 text-[12.5px] text-white/60">{r.note}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Eyebrow>Unit economics</Eyebrow>
            <H2>Per clinic, at maturity.</H2>
            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {unitEconomics.map((u) => (
                <div key={u.metric} className="bg-brand-950 p-6">
                  <dt className="text-[12.5px] uppercase tracking-[0.14em] text-white/60">
                    {u.metric}
                  </dt>
                  <dd className="mt-2 font-display text-2xl text-white">{u.value}</dd>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-white/50">{u.note}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Roadmap ──────────────────────────────────────────── */}
      <section className="container-x py-20">
        <Reveal>
          <Eyebrow>Expansion</Eyebrow>
          <H2>Nine clinics across Malabar by FY 2028–29.</H2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {roadmap.map((r, i) => (
            <Reveal key={r.phase} delay={i * 70}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[.03] p-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent-400/15 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-accent-300">
                    {r.phase}
                  </span>
                  <span className="text-[12.5px] text-white/60">{r.period}</span>
                </div>
                <h3 className="mt-6 font-display text-[19px] text-white">{r.title}</h3>
                <ul className="mt-5 space-y-3">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[14px] leading-relaxed text-white/60">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Use of funds ─────────────────────────────────────── */}
      <section className="border-y border-white/10 bg-white/[.02] py-20">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Eyebrow>The ask</Eyebrow>
            <H2>{investorMeta.raising} for {investorMeta.use}.</H2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
              Deployed against a build manual we have already executed once. The existing clinic
              services its own working capital, so raised capital goes into new units rather than
              into keeping the current one alive.
            </p>
            <a href={`mailto:${clinic.investorEmail}`} className="btn-accent mt-8">
              Request the data room
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-5">
              {useOfFunds.map((u) => (
                <div key={u.head}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-[14.5px] text-white">{u.head}</p>
                    <p className="font-display text-[15px] text-accent-300">{u.pct}%</p>
                  </div>
                  <div className="mt-2.5 h-2.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-accent-400"
                      style={{ width: `${u.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Competition ──────────────────────────────────────── */}
      <section className="container-x py-20">
        <Reveal>
          <Eyebrow>Landscape</Eyebrow>
          <H2>Who else is in these towns, and why we still win.</H2>
        </Reveal>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-y-3 text-left">
            <thead>
              <tr className="text-[11.5px] uppercase tracking-[0.16em] text-white/60">
                <th className="px-6 pb-2 font-medium">Alternative</th>
                <th className="px-6 pb-2 font-medium">Their strength</th>
                <th className="px-6 pb-2 font-medium">Our position</th>
              </tr>
            </thead>
            <tbody>
              {competition.map((c) => (
                <tr key={c.name} className="bg-white/[.03]">
                  <td className="rounded-l-2xl px-6 py-6 align-top font-display text-[16px] text-white">
                    {c.name}
                  </td>
                  <td className="px-6 py-6 align-top text-[14px] text-white/55">{c.them}</td>
                  <td className="rounded-r-2xl px-6 py-6 align-top text-[14px] text-white/75">
                    {c.us}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────── */}
      <section className="border-y border-white/10 bg-white/[.02] py-20">
        <div className="container-x">
          <Reveal>
            <Eyebrow>Team</Eyebrow>
            <H2>Clinical credibility, and the operators to scale it.</H2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <Reveal key={t.role} delay={i * 60}>
                <div className="h-full rounded-2xl border border-white/10 p-7">
                  <p className="font-display text-[17px] text-white">{t.name}</p>
                  <p className="mt-1.5 text-[13px] text-accent-300">{t.role}</p>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-white/55">{t.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Risks ────────────────────────────────────────────── */}
      <section className="container-x py-20">
        <Reveal>
          <Eyebrow>Risks</Eyebrow>
          <H2>What could go wrong, and what we are doing about it.</H2>
        </Reveal>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {risks.map((r, i) => (
            <Reveal key={r.risk} delay={i * 50}>
              <div className="grid gap-4 py-7 md:grid-cols-[.9fr_1.4fr]">
                <p className="font-display text-[17px] text-white">{r.risk}</p>
                <p className="text-[14.5px] leading-relaxed text-white/60">{r.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 rounded-3xl border border-accent-400/25 bg-accent-400/[.07] p-10 text-center">
            <h2 className="font-display text-[1.9rem] leading-tight text-white">
              Next step: the data room
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/65">
              {investorMeta.contactLine} — audited statements, the unit build manual, the clinic
              lease, and a live dashboard of daily patient volume.
            </p>
            <a href={`mailto:${clinic.investorEmail}`} className="btn-accent mt-8">
              {clinic.investorEmail}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
