import { site } from "../content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-ink)] text-[var(--color-paper)] py-24 md:py-36 relative overflow-hidden"
    >
      <div
        className="absolute inset-x-0 -top-6 flex justify-center pointer-events-none"
        aria-hidden
      >
        <span
          className="ghost-word"
          style={{ fontSize: "clamp(180px, 28vw, 460px)" }}
        >
          Begin
        </span>
      </div>

      <div className="container-wide relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow eyebrow-light">§ 06 — Get in touch</p>
            <h2
              className="mt-6 font-display tracking-tight"
              style={{
                fontSize: "clamp(48px, 7.5vw, 116px)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
              }}
            >
              <span className="block">Have a project</span>
              <span className="block italic text-[var(--color-clay-soft)]">
                worth making well?
              </span>
            </h2>
            <p className="mt-8 max-w-[52ch] text-[15.5px] leading-[1.7] text-paper/75">
              I take on a small number of projects each quarter. If you have
              something in mind, send a short note — what you're making, who
              it's for, and roughly when you'd need it. I read every message and
              reply within a few days.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={`mailto:${site.email}`}
                className="cta-pill cta-pill--inverse"
              >
                <span>{site.email}</span>
                <span className="cta-pill__icon" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7H11M11 7L7 3M11 7L7 11"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper/55">
                Booking — Q2 2026
              </span>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <div className="hairline-top pt-6 space-y-5">
              {[
                ["Studio", site.city],
                ["Email", site.email],
                ["Response", "Within 3 working days"],
                ["Languages", "English · Shona "],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-paper/55">
                    {k}
                  </span>
                  <span className="text-[14px] tracking-tight text-paper/90 text-right">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
