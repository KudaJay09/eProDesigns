import { projects } from "../content";

/**
 * Each project gets a unique, on-brand "fake" cover composed from CSS
 * shapes + type — no stock imagery, no broken links, and visually
 * distinct from a real photograph so it reads as a placeholder, not
 * as a missing image. Real assets can be dropped in by replacing the
 * <ProjectCover /> with an <img>.
 */
function ProjectCover({
  palette,
  no,
  variant,
}: {
  palette: readonly [string, string, string];
  no: string;
  variant: "a" | "b" | "c" | "d" | "e" | "f";
}) {
  const [a, b, c] = palette;
  return (
    <div
      className="absolute inset-0"
      style={{ background: `linear-gradient(140deg, ${a} 0%, ${a} 60%, ${b} 100%)` }}
    >
      {variant === "a" && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(60% 80% at 20% 30%, ${c}22 0%, transparent 60%)`,
            }}
          />
          <div className="absolute right-6 top-6 text-paper/85 font-display text-[18vw] leading-none">
            Aa
          </div>
          <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between">
            <span
              className="font-mono text-[10px] tracking-[0.22em] uppercase"
              style={{ color: `${c}cc` }}
            >
              № {no}
            </span>
            <span
              className="font-mono text-[10px] tracking-[0.22em] uppercase"
              style={{ color: `${c}aa` }}
            >
              Identity
            </span>
          </div>
        </>
      )}
      {variant === "b" && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${c}10 0%, ${c} 90%)`,
            }}
          />
          <div
            className="absolute left-0 right-0 top-[12%] h-px"
            style={{ background: `${c}66` }}
          />
          <div
            className="absolute left-0 right-0 top-[88%] h-px"
            style={{ background: `${c}66` }}
          />
          <div className="absolute inset-0 grid place-items-center">
            <div
              className="font-display text-paper text-center"
              style={{ fontSize: "clamp(56px, 11vw, 180px)", lineHeight: 0.85, letterSpacing: "-0.03em" }}
            >
              F<span className="italic">&amp;</span>F
            </div>
          </div>
          <div className="absolute left-6 bottom-6 text-paper/85 font-mono text-[10px] tracking-[0.22em] uppercase">
            № {no} — Editorial
          </div>
        </>
      )}
      {variant === "c" && (
        <>
          <div
            className="absolute -left-[10%] top-[20%] w-[120%] aspect-square rounded-full"
            style={{ background: `${c}22` }}
          />
          <div
            className="absolute -right-[20%] bottom-[-20%] w-[80%] aspect-square rounded-full"
            style={{ background: `${b}33`, border: `1px solid ${c}55` }}
          />
          <div className="absolute left-6 bottom-6 text-paper">
            <div
              className="font-display leading-none"
              style={{ fontSize: "clamp(64px, 14vw, 220px)", letterSpacing: "-0.04em" }}
            >
              NS
            </div>
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase mt-3 opacity-75">
              № {no} — Helsinki
            </div>
          </div>
        </>
      )}
      {variant === "d" && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background: `repeating-linear-gradient(0deg, ${c}10 0 1px, transparent 1px 28px)`,
            }}
          />
          <div className="absolute inset-0 grid place-items-center px-6 text-center">
            <div>
              <div
                className="font-display italic text-paper/95"
                style={{ fontSize: "clamp(28px, 4.4vw, 64px)", lineHeight: 1.05 }}
              >
                Salt &amp;
              </div>
              <div
                className="font-display text-paper"
                style={{ fontSize: "clamp(28px, 4.4vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
              >
                Atlas
              </div>
            </div>
          </div>
          <div className="absolute left-6 bottom-6 font-mono text-[10px] tracking-[0.22em] uppercase text-paper/75">
            № {no} — 240 pages
          </div>
        </>
      )}
      {variant === "e" && (
        <>
          <div
            className="absolute inset-y-0 left-0 w-[40%]"
            style={{ background: `${b}33` }}
          />
          <div
            className="absolute right-[10%] top-[18%] w-[55%] h-[64%]"
            style={{ background: `${c}cc`, borderRadius: 6 }}
          />
          <div
            className="absolute right-[14%] top-[24%] w-[47%] h-[52%]"
            style={{ background: `${a}` }}
          />
          <div className="absolute left-6 bottom-6 text-paper/85 font-mono text-[10px] tracking-[0.22em] uppercase">
            № {no} — Tea
          </div>
        </>
      )}
      {variant === "f" && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(120deg, ${a} 0%, ${b}22 60%, ${a} 100%)`,
            }}
          />
          <div
            className="absolute inset-y-0 left-1/2 w-px"
            style={{ background: `${c}55` }}
          />
          <div className="absolute inset-0 grid grid-cols-2 place-items-center px-6">
            <span
              className="font-display text-paper text-right pr-6"
              style={{ fontSize: "clamp(80px, 16vw, 280px)", lineHeight: 0.85, letterSpacing: "-0.05em" }}
            >
              M
            </span>
            <span
              className="font-display italic text-paper/80 text-left pl-6"
              style={{ fontSize: "clamp(80px, 16vw, 280px)", lineHeight: 0.85 }}
            >
              a
            </span>
          </div>
          <div className="absolute left-6 bottom-6 font-mono text-[10px] tracking-[0.22em] uppercase text-paper/70">
            № {no} — Display serif
          </div>
        </>
      )}
      {/* very subtle grain */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-25 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 3px)",
        }}
      />
    </div>
  );
}

function ProjectCard({
  p,
  variant,
}: {
  p: (typeof projects)[number];
  variant: "a" | "b" | "c" | "d" | "e" | "f";
}) {
  const isWide = p.span === "wide";
  return (
    <a
      href="#contact"
      className={`tile group block ${isWide ? "aspect-[16/10] md:aspect-[16/9]" : "aspect-[4/5]"}`}
      aria-label={`${p.title} — ${p.subtitle}, ${p.year}`}
    >
      <div className="tile__media">
        <ProjectCover palette={p.palette} no={p.no} variant={variant} />
      </div>
      <div className="tile__veil" />

      <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-paper/85 font-mono text-[10px] tracking-[0.22em] uppercase">
        <span>№ {p.no}</span>
        <span>{p.year}</span>
      </div>

      <div className="tile__caption">
        <span className="tile__meta">{p.subtitle}</span>
        <h3 className="tile__title">
          {p.title.split(" ").map((w, i) => (
            <span key={i} className="block">
              {w}
            </span>
          ))}
        </h3>
        <span className="mt-2 max-w-[36ch] text-[12.5px] leading-[1.55] text-paper/75">
          {p.blurb}
        </span>
        <span className="mt-3 inline-flex items-center gap-2 text-[12px] tracking-tight text-paper transition-transform group-hover:translate-x-1 duration-300">
          <span>View case study</span>
          <span aria-hidden>→</span>
        </span>
      </div>
    </a>
  );
}

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="bg-[var(--color-paper)] text-[var(--color-ink)] py-24 md:py-36"
    >
      <div className="container-wide">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <p className="eyebrow">§ 01 — Selected Work</p>
            <h2 className="mt-5 display-l max-w-[14ch]">
              <span className="block">A short list,</span>
              <span className="block italic text-[var(--color-clay)]">
                kept on purpose.
              </span>
            </h2>
          </div>
          <div className="max-w-[360px] text-[14.5px] leading-[1.6] text-[var(--color-mute)]">
            <p>
              Six recent collaborations across identity, editorial, and print.
              Each is a real piece of work — only the most considered
              ones make the page.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 text-[12px] font-mono tracking-[0.18em] uppercase text-[var(--color-ink)] hover:text-[var(--color-clay)] transition-colors"
            >
              <span>Request full portfolio</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Asymmetric layout: alternating row groups, not a uniform grid. */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {/* Row 1: wide (8) + tall (4) */}
          <div className="md:col-span-8">
            <ProjectCard p={projects[0]} variant="a" />
          </div>
          <div className="md:col-span-4 md:row-span-2">
            <ProjectCard p={projects[1]} variant="b" />
          </div>

          {/* Row 2: small (4) only — the tall card already spans both */}
          {/* Row 3 begins; we put a small index + meta in a column on the left */}
          <div className="md:col-span-4">
            <ProjectCard p={projects[2]} variant="c" />
          </div>
          <div className="md:col-span-8">
            <ProjectCard p={projects[3]} variant="d" />
          </div>

          <div className="md:col-span-5">
            <ProjectCard p={projects[4]} variant="e" />
          </div>
          <div className="md:col-span-7">
            <ProjectCard p={projects[5]} variant="f" />
          </div>
        </div>
      </div>
    </section>
  );
}
