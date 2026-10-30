import { testimonials } from "../content";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[var(--color-paper)] text-[var(--color-ink)] py-24 md:py-36"
    >
      <div className="container-wide">
        <div className="flex items-end justify-between gap-8 flex-wrap mb-14 md:mb-20">
          <div>
            <p className="eyebrow">§ 05 — Words from collaborators</p>
            <h2 className="mt-5 display-l max-w-[16ch]">
              <span className="block">Said better</span>
              <span className="block italic text-[var(--color-clay)]">
                by them.
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`p-8 md:p-10 rounded-2xl border border-[var(--color-ink)]/10 bg-[var(--color-bone)]/50 ${
                i === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <span
                className="font-display text-[var(--color-clay)] leading-none"
                aria-hidden
                style={{ fontSize: 72, lineHeight: 0.5 }}
              >
                “
              </span>
              <blockquote className="mt-2 font-display text-[20px] leading-[1.35] tracking-tight text-[var(--color-ink)]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span
                  className="grid place-items-center w-9 h-9 rounded-full text-[12px] font-mono"
                  style={{ background: "var(--color-ink)", color: "var(--color-paper)" }}
                  aria-hidden
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <div className="text-[14px] tracking-tight">{t.name}</div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-mute)]">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
