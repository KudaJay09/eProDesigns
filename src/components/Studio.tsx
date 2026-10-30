export default function Studio() {
  return (
    <section
      id="studio"
      className="bg-[var(--color-ink)] text-[var(--color-paper)] py-24 md:py-36 relative overflow-hidden"
    >
      <div className="container-wide relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow eyebrow-light">§ 02 — Studio</p>
            <h2 className="mt-5 display-l">
              <span className="block">A studio of one,</span>
              <span className="block italic text-[var(--color-clay-soft)]">
                built for clarity.
              </span>
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
              {[
                ["Based in", "Harare, ZW"],
                ["Working", "Worldwide, GMT+2"],
                ["Founded", "2023"],
                ["Clients", "Studios, founders, publishers"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-paper/45">
                    {k}
                  </div>
                  <div className="mt-2 text-[15px] tracking-tight text-paper/90">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="space-y-6 text-[16.5px] leading-[1.75] text-paper/80">
              <p>
                <span className="font-display text-[1.4em] leading-[1.1] mr-2 text-paper">
                  I work
                </span>
                with people who already know what they're making and want it to
                look like it. Studios, founders, and small publishers hire me to
                make their work legible, durable, and a pleasure to hold.
              </p>
              <p>
                My background is in editorial design and identity. Before going
                independent in 2023 I worked at a small press in Madrid and a
                brand studio in Copenhagen. I keep the studio deliberately small
                so I can stay close to the work.
              </p>
              <p className="text-paper/60">
                I don't do growth-hack decks or NFT launches. I do the printed
                thing, the mark that survives being photocopied, the system that
                still makes sense in five years.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 hairline-top pt-8">
              {[
                { k: "3+", v: "Years independent" },
                { k: "32", v: "Projects shipped" },
              ].map((s) => (
                <div key={s.k}>
                  <div
                    className="font-display tabular-nums"
                    style={{
                      fontSize: "clamp(40px, 4vw, 60px)",
                      lineHeight: 0.9,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.k}
                  </div>
                  <div className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-paper/55">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
