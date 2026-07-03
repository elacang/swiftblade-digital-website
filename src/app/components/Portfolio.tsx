const WORK = [
  {
    n: "01",
    client: "AccountRight Services",
    title: "Professional website & SEO",
    body: "Built a responsive, professional website for a New Zealand accounting firm. Delivered fast-loading pages, clear conversion paths, and technical SEO — schema markup, semantic structure, and mobile-first performance.",
    metric: "Live · accountsright.co.nz",
    link: "https://accountsright.co.nz/",
  },
  {
    n: "02",
    client: "NZ Citizenship Mock Exam",
    title: "SaaS platform — in development",
    body: "Designing and building a SaaS practice exam platform for the New Zealand citizenship test. Includes question banks, timed mock exams, progress tracking, and a subscription model.",
    metric: "In design & development",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative px-6 py-32">
      <div className="slash-divider mx-auto max-w-7xl">
        <span className="slash-sweep" data-slash-sweep />
      </div>
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
                {w.link ? (
                  <a
                    href={w.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-lg text-blade underline-offset-4 hover:underline"
                  >
                    {w.metric} ↗
                  </a>
                ) : (
                  <span className="font-mono text-lg text-blade">{w.metric}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}