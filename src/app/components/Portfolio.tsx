const WORK = [
  {
    n: "01",
    client: "Northwind Labs",
    title: "Cut deploy failures by 78%",
    body: "A deploy preflight pipeline that caught config drift before it hit production. Rolled out across 40+ services in six weeks.",
    metric: "−78% failed deploys",
  },
  {
    n: "02",
    client: "Kestrel Finance",
    title: "Sub-50ms settlement reporting",
    body: "Re-architected a nightly batch into a streaming settlement layer. Reporting latency dropped from 11 minutes to under 50ms.",
    metric: "11 min → 50ms",
  },
  {
    n: "03",
    client: "Driftwood.dev",
    title: "Codebase onboarding in a day",
    body: "Shipped our onboarding tooling into a 320k-LOC monorepo. New engineers shipped their first PR within one business day.",
    metric: "1 day to first PR",
  },
  {
    n: "04",
    client: "Halberd Health",
    title: "SOC 2 in a quarter, not a year",
    body: "Designed the control surface and evidence pipeline that took a regulated health product from zero to SOC 2 Type II.",
    metric: "Type II in 90 days",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative px-6 py-32">
      <div className="slash-divider mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl pt-24">
        <div className="mb-16 max-w-2xl">
          <p className="label-mono mb-6 reveal">// 作品 — portfolio</p>
          <h2 className="reveal display display-lg text-mist">
            Edges we&apos;ve put in the field.
          </h2>
        </div>

        {/* Stacked case-study list — horizontal hairline rows */}
        <div className="border-t border-hairline">
          {WORK.map((w) => (
            <article
              key={w.n}
              className="reveal group grid grid-cols-1 gap-6 border-b border-hairline py-10 md:grid-cols-12 md:items-baseline"
            >
              <span className="label-mono md:col-span-1">{w.n}</span>
              <div className="md:col-span-7">
                <p className="label-mono mb-2">{w.client}</p>
                <h3 className="text-2xl font-bold tracking-tight text-mist transition-colors group-hover:text-blade">
                  {w.title}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-mist-dim">
                  {w.body}
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <span className="font-mono text-lg text-blade">{w.metric}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}