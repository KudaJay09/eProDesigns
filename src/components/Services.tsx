import { services } from "../content";

/**
 * A single, intentionally restrained list — not a grid of feature cards.
 * Inspired by editorial pricing tables: the numbering IS the structure,
 * and the line beneath each item ties the whole list together. Each row
 * is one self-contained click target.
 */
export default function Services() {
  return (
    <section
      id="services"
      className="bg-[var(--color-paper)] text-[var(--color-ink)] py-24 md:py-36"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow">§ 03 — Services</p>
            <h2 className="mt-5 display-l">
              <span className="block">What I</span>
              <span className="block italic text-[var(--color-clay)]">
                actually do.
              </span>
            </h2>
            <p className="mt-6 max-w-[36ch] text-[15px] leading-[1.65] text-[var(--color-mute)]">
              Engagements usually run six to twelve weeks, end to end.
              Smaller pieces of work (a wordmark, a single chapter) take
              less. Bigger programs (multi-touchpoint identity, multi-issue
              editorial systems) take more.
            </p>
            <a
              href="#process"
              className="mt-8 inline-flex items-center gap-2 text-[12px] font-mono tracking-[0.18em] uppercase text-[var(--color-ink)] hover:text-[var(--color-clay)] transition-colors"
            >
              <span>How I work</span>
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <ul className="hairline-top">
              {services.map((s) => (
                <li key={s.no} className="hairline-bottom">
                  <a
                    href="#contact"
                    className="group grid grid-cols-12 gap-4 items-baseline py-7 md:py-8 transition-colors hover:text-[var(--color-clay)]"
                  >
                    <span className="col-span-2 md:col-span-1 font-mono text-[11px] tracking-[0.22em] text-[var(--color-mute)] group-hover:text-[var(--color-clay)] transition-colors">
                      {s.no}
                    </span>
                    <span
                      className="col-span-10 md:col-span-4 font-display tracking-tight"
                      style={{
                        fontSize: "clamp(26px, 3.2vw, 40px)",
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {s.name}
                    </span>
                    <span className="hidden md:block md:col-span-6 text-[14.5px] leading-[1.55] text-[var(--color-mute)] group-hover:text-[var(--color-ink)] transition-colors">
                      {s.detail}
                    </span>
                    <span
                      aria-hidden
                      className="hidden md:flex md:col-span-1 justify-end text-[var(--color-mute)] group-hover:text-[var(--color-clay)] group-hover:translate-x-1 transition-all"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
