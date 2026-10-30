import { useEffect, useState } from "react";
import { nav, site } from "../content";
import eProLogo from "../assets/ePro_logo.png";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[var(--color-ink)]/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-[72px]">
        <a
          href="#top"
          aria-label={`${site.brand} — home`}
          className="w-20 flex items-center"
        >
          <img src={eProLogo} className="w-full h-full" alt={site.brand} />

          {/* <span
            aria-hidden
            className="grid place-items-center w-8 h-8 rounded-full border border-paper/40 text-[11px] font-mono tracking-[0.18em]"
          >
            {site.brandTag}
          </span>
          <span className="text-[13px] tracking-tight">
            <span className="text-paper">Eddie</span>{" "}
            <span className="text-paper/55 group-hover:text-paper transition-colors">
              Jay
            </span>
          </span> */}
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative px-3.5 py-2 text-[13px] tracking-tight transition-colors ${
                i === 0 ? "text-paper" : "text-paper/70 hover:text-paper"
              }`}
            >
              {item.label}
              {i === 0 && (
                <span
                  aria-hidden
                  className="absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-[var(--color-clay)] origin-left"
                  style={{
                    animation:
                      "underline-grow 600ms var(--ease-out-soft) 200ms both",
                  }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-[12px] font-mono tracking-[0.18em] uppercase text-paper/80 hover:text-paper transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-clay)]" />
            Booked — Q1 2026
          </a>
          <button
            type="button"
            className="md:hidden grid place-items-center w-10 h-10 rounded-full border border-paper/30 text-paper"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-4 bg-current transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-4 bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-4 bg-current transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[var(--color-ink)] text-paper">
          <nav
            className="container-wide py-6 flex flex-col gap-1"
            aria-label="Mobile"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-2xl font-display tracking-tight"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center gap-2 text-[12px] font-mono tracking-[0.18em] uppercase text-paper/70"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-clay)]" />
              Booked — Q1 2026
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
