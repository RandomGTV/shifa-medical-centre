export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b bg-mesh hairline">
      <div className="container-x py-14 sm:py-20">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl animate-fade-up font-display text-[2.2rem] font-extrabold leading-[1.08] text-brand-900 sm:text-[3.2rem]">
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-soft animate-fade-up">
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}
