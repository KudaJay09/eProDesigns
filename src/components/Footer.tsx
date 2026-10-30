import { site } from "../content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-paper)] pt-12 pb-10 border-t border-paper/10">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div
              className="font-display tracking-tight"
              style={{
                fontSize: "clamp(56px, 8vw, 132px)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              {site.brand.split(" ")[0]}
              <span className="italic text-[var(--color-clay-soft)]">
                {" "}
                {site.brand.split(" ")[1]}
              </span>
            </div>
            <p className="mt-4 max-w-[40ch] text-[14px] leading-[1.6] text-paper/55">
              {site.tagline}. {site.city}.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-paper/45">
              Navigate
            </div>
            <ul className="mt-4 space-y-2 text-[14px]">
              {[
                ["Index", "#index"],
                ["Work", "#work"],
                ["Studio", "#studio"],
                ["Services", "#services"],
                ["Process", "#process"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-paper/75 hover:text-paper transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-paper/45">
              Elsewhere
            </div>
            <ul className="mt-4 space-y-2 text-[14px]">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    rel="noreferrer noopener"
                    target="_blank"
                    className="text-paper/75 hover:text-paper transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-paper/45">
              Reach
            </div>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-paper/75 hover:text-paper transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-paper/55">+263 77 392 4870</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-paper/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-paper/45">
            © {year} {site.brand}. All rights reserved.
          </div>
          <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-paper/45">
            Set in Bodoni Moda &amp; Inter
          </div>
        </div>
      </div>
    </footer>
  );
}
