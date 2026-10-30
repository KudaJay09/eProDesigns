import { press } from "../content";

export default function Press() {
  return (
    <section className="bg-[var(--color-paper)] text-[var(--color-ink)] py-16 md:py-20 hairline-top hairline-bottom">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-3">
            <p className="eyebrow">Selected press</p>
          </div>
          <ul className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
            {press.map((p) => (
              <li key={p.source} className="md:border-l md:border-[var(--color-ink)]/15 md:pl-6 first:md:border-l-0 first:md:pl-0">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-mute)]">
                  {p.source}
                </div>
                <div className="mt-3 font-display text-[19px] leading-[1.25] tracking-tight">
                  {p.line}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
