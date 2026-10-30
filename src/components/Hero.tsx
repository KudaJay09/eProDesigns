import { useEffect, useRef, useState } from "react";

// SVG-based "studio scene" — no external image, no stock photo.
// A pure-graphic composition that takes the *role* of the photo in the
// inspiration screenshot (a textured full-bleed visual) while feeling
// like something a designer would actually put on a hero.
function StudioScene() {
  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1614" />
          <stop offset="55%" stopColor="#221c18" />
          <stop offset="100%" stopColor="#0c0a09" />
        </linearGradient>
        <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a201a" />
          <stop offset="100%" stopColor="#181210" />
        </linearGradient>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1310" />
          <stop offset="100%" stopColor="#08070a" />
        </linearGradient>
        <linearGradient id="lamp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4d9a4" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f4d9a4" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#f4d9a4" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#f4d9a4" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#f4d9a4" stopOpacity="0" />
        </radialGradient>
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0.18 0"
          />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>

      {/* base wall */}
      <rect width="1600" height="700" fill="url(#wall)" />
      {/* sky/upper wash */}
      <rect width="1600" height="500" fill="url(#sky)" opacity="0.85" />
      {/* floor */}
      <rect y="700" width="1600" height="300" fill="url(#floor)" />
      <line
        x1="0"
        y1="700"
        x2="1600"
        y2="700"
        stroke="#f4f1ea"
        strokeOpacity="0.06"
        strokeWidth="1"
      />

      {/* desk */}
      <rect
        x="0"
        y="690"
        width="1600"
        height="14"
        fill="#2a211b"
        opacity="0.9"
      />

      {/* hanging picture frame on wall */}
      <g opacity="0.85">
        <rect
          x="1080"
          y="170"
          width="320"
          height="420"
          fill="#f4f1ea"
          opacity="0.04"
          stroke="#f4f1ea"
          strokeOpacity="0.18"
        />
        {/* typographic poster inside the frame */}
        <g transform="translate(1100 200)">
          <text
            x="0"
            y="40"
            fill="#f4f1ea"
            fillOpacity="0.55"
            fontFamily="Bodoni Moda, serif"
            fontStyle="italic"
            fontSize="38"
            letterSpacing="-1"
          >
            Quiet
          </text>
          <text
            x="0"
            y="84"
            fill="#f4f1ea"
            fillOpacity="0.85"
            fontFamily="Bodoni Moda, serif"
            fontWeight="700"
            fontSize="38"
            letterSpacing="-1"
          >
            Hours
          </text>
          <line
            x1="0"
            y1="108"
            x2="120"
            y2="108"
            stroke="#b5462c"
            strokeWidth="1.5"
          />
          <text
            x="0"
            y="138"
            fill="#f4f1ea"
            fillOpacity="0.45"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="2"
          >
            TEA · HARARE · MMXXIV
          </text>
        </g>
      </g>

      {/* small framed sketch left */}
      <g opacity="0.55">
        <rect
          x="140"
          y="240"
          width="220"
          height="160"
          fill="#f4f1ea"
          fillOpacity="0.03"
          stroke="#f4f1ea"
          strokeOpacity="0.12"
        />
        {/* abstract curves inside */}
        <path
          d="M160 360 C 200 300, 240 320, 260 280 S 320 320, 340 290"
          fill="none"
          stroke="#f4f1ea"
          strokeOpacity="0.35"
          strokeWidth="1.2"
        />
        <path
          d="M160 380 C 220 340, 270 360, 300 330"
          fill="none"
          stroke="#b5462c"
          strokeOpacity="0.6"
          strokeWidth="1.2"
        />
      </g>

      {/* desk lamp */}
      <g transform="translate(640 230)">
        <line x1="0" y1="0" x2="60" y2="200" stroke="#1c1917" strokeWidth="2" />
        <line
          x1="60"
          y1="200"
          x2="120"
          y2="200"
          stroke="#1c1917"
          strokeWidth="2"
        />
        <circle cx="60" cy="200" r="4" fill="#1c1917" />
        <path d="M30 200 L100 200 L80 232 L50 232 Z" fill="#1c1917" />
        <ellipse cx="65" cy="250" rx="180" ry="60" fill="url(#glow)" />
        <ellipse cx="65" cy="244" rx="38" ry="14" fill="url(#lamp)" />
      </g>

      {/* papers on the desk */}
      <g>
        <rect
          x="300"
          y="700"
          width="380"
          height="240"
          fill="#f4f1ea"
          opacity="0.05"
          transform="rotate(-4 300 700)"
        />
        <rect
          x="320"
          y="700"
          width="380"
          height="240"
          fill="#f4f1ea"
          opacity="0.04"
          transform="rotate(3 320 700)"
        />
        {/* print marks on top sheet */}
        <g transform="rotate(-4 320 700)">
          <text
            x="360"
            y="780"
            fill="#f4f1ea"
            fillOpacity="0.45"
            fontFamily="Bodoni Moda, serif"
            fontStyle="italic"
            fontSize="44"
            letterSpacing="-1"
          >
            Aevum
          </text>
          <line
            x1="360"
            y1="800"
            x2="500"
            y2="800"
            stroke="#b5462c"
            strokeOpacity="0.7"
            strokeWidth="1"
          />
          <text
            x="360"
            y="824"
            fill="#f4f1ea"
            fillOpacity="0.35"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            letterSpacing="1.6"
          >
            IDENTITY · 2025
          </text>
        </g>
      </g>

      {/* type specimen / open book */}
      <g transform="translate(880 640)">
        <rect
          x="0"
          y="0"
          width="380"
          height="120"
          fill="#f4f1ea"
          fillOpacity="0.06"
          stroke="#f4f1ea"
          strokeOpacity="0.18"
        />
        <text
          x="20"
          y="62"
          fill="#f4f1ea"
          fillOpacity="0.9"
          fontFamily="Bodoni Moda, serif"
          fontSize="64"
          letterSpacing="-2"
        >
          Aa
        </text>
        <text
          x="120"
          y="44"
          fill="#f4f1ea"
          fillOpacity="0.6"
          fontFamily="Bodoni Moda, serif"
          fontSize="22"
        >
          Bodoni
        </text>
        <text
          x="120"
          y="66"
          fill="#f4f1ea"
          fillOpacity="0.4"
          fontFamily="JetBrains Mono, monospace"
          fontSize="9"
          letterSpacing="1.6"
        >
          DISPLAY · ROMAN
        </text>
        <line
          x1="120"
          y1="80"
          x2="240"
          y2="80"
          stroke="#b5462c"
          strokeOpacity="0.7"
        />
        <text
          x="120"
          y="100"
          fill="#f4f1ea"
          fillOpacity="0.55"
          fontFamily="Bodoni Moda, serif"
          fontStyle="italic"
          fontSize="18"
        >
          Quiet, deliberate, sharp.
        </text>
      </g>

      {/* coffee cup */}
      <g transform="translate(540 720)">
        <ellipse cx="40" cy="8" rx="34" ry="6" fill="#1a120e" />
        <path d="M6 8 L74 8 L68 70 L12 70 Z" fill="#2a1d16" />
        <ellipse cx="40" cy="8" rx="26" ry="4" fill="#0a0807" />
        <path
          d="M74 18 Q92 24 92 38 Q92 52 74 56"
          fill="none"
          stroke="#2a1d16"
          strokeWidth="3"
        />
      </g>

      {/* film grain overlay */}
      <rect
        width="1600"
        height="1000"
        fill="#000"
        filter="url(#grain)"
        opacity="0.45"
      />
    </svg>
  );
}

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0.18);

  useEffect(() => {
    const onScroll = () => {
      const max = window.innerHeight * 0.9;
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      setProgress(0.12 + p * 0.88);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] bg-[var(--color-ink)] text-[var(--color-paper)] overflow-hidden"
    >
      {/* Photo / scene */}
      <div className="absolute inset-0 settle" aria-hidden>
        <StudioScene />
      </div>

      {/* Vignette + readability scrim */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 70% at 30% 50%, rgba(12,10,9,0.0) 0%, rgba(12,10,9,0.55) 65%, rgba(12,10,9,0.85) 100%)",
        }}
        aria-hidden
      />

      {/* Ghost signature word — the one editorial flourish, used twice */}
      <div
        className="absolute inset-x-0 top-[18%] flex justify-center pointer-events-none"
        aria-hidden
      >
        <span
          className="ghost-word fade d-100"
          style={{
            fontSize: "clamp(180px, 28vw, 460px)",
          }}
        >
          Studio
        </span>
      </div>

      <div className="relative container-wide pt-36 md:pt-44 pb-20 md:pb-28 min-h-[100svh] flex flex-col">
        <div className="max-w-[820px]">
          <p className="eyebrow eyebrow-light rise d-200">
            <span className="text-paper/80">Eddie</span>
            <span className="mx-3 text-paper/35">/</span>
            <span>Harare — working worldwide</span>
          </p>

          <h1 className="mt-8 md:mt-10 display-xl text-paper">
            <span className="split">
              <span className="d-300">Quiet&nbsp;design,</span>
            </span>
            <br />
            <span className="split">
              <span className="italic text-[var(--color-clay-soft)] d-400">
                loud
              </span>
            </span>{" "}
            <span className="split">
              <span className="d-500">ideas.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-[520px] text-[15.5px] leading-[1.65] text-paper/75 rise d-600">
            I'm Eddie — an independent graphic designer and art director. I
            build identities, editorial systems, and printed objects for
            studios, founders, and small publishers who care about how things
            look on a shelf.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 rise d-700">
            <a href="#work" className="cta-pill">
              <span>See selected work</span>
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
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[13px] tracking-tight text-paper/75 hover:text-paper transition-colors"
            >
              <span>Start a project</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Footer cluster: pager arrows + progress rule + index */}
        <div className="mt-auto pt-16 flex items-end justify-between gap-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              className="grid place-items-center w-12 h-12 rounded-full border border-paper/25 text-paper/85 hover:bg-paper hover:text-[var(--color-ink)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M11 7H3M3 7L7 3M3 7L7 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              className="grid place-items-center w-12 h-12 rounded-full border border-paper/25 text-paper/85 hover:bg-paper hover:text-[var(--color-ink)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7H11M11 7L7 3M11 7L7 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              ref={scrollRef}
              className="hidden sm:block w-[40vw] max-w-[420px] h-px bg-paper/20 relative overflow-hidden"
              aria-hidden
            >
              <div
                className="absolute inset-y-0 left-0 bg-paper/90"
                style={{
                  width: `${progress * 100}%`,
                  transition: "width 220ms var(--ease-out-soft)",
                }}
              />
            </div>
          </div>

          <div
            className="text-paper/85 font-display tabular-nums"
            style={{
              fontSize: "clamp(48px, 6vw, 96px)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
            }}
            aria-label="Slide 01 of 06"
          >
            <span className="rise d-800">01</span>
            <span className="text-paper/30 text-[0.55em] align-top ml-1">
              /06
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
