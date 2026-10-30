import { process } from "../content";

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[var(--color-ink-2)] text-[var(--color-paper)] py-24 md:py-36 relative overflow-hidden"
    >
      <div
        className="absolute -right-[10%] top-[20%] ghost-word pointer-events-none"
        aria-hidden
        style={{ fontSize: "clamp(180px, 26vw, 420px)" }}
      >
        Four
      </div>

      <div className="container-wide relative">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <p className="eyebrow eyebrow-light">§ 04 — Process</p>
            <h2 className="mt-5 display-l max-w-[14ch]">
              <span className="block">Four steps.</span>
              <span className="block italic text-[var(--color-clay-soft)]">
                No surprises.
              </span>
            </h2>
          </div>
          <p className="max-w-[420px] text-[14.5px] leading-[1.6] text-paper/65">
            A small, predictable shape. Most projects follow the same arc
            with the timing adjusted — a wordmark might take two weeks, a
            full identity program three months.
          </p>
        </div>

        <ol className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {process.map((p, i) => (
            <li
              key={p.no}
              className="relative md:pr-6 md:border-r md:border-paper/10 last:md:border-r-0"
            >
              <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-paper/45">
                Step {p.no}
              </div>
              <h3
                className="mt-4 font-display tracking-tight"
                style={{
                  fontSize: "clamp(36px, 4.4vw, 56px)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                }}
              >
                {p.name}
              </h3>
              <p className="mt-4 text-[14.5px] leading-[1.6] text-paper/70 max-w-[28ch]">
                {p.body}
              </p>
              {i === 0 && (
                <div
                  className="mt-6 h-px bg-[var(--color-clay)] w-12"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
