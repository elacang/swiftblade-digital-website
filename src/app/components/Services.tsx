const SERVICES = [
  {
    tag: "WEBSITES",
    title: "Professional websites & landing pages",
    body: "Conversion-aware sites engineered to load fast and look made, not generated. From single-page launchers to full marketing sites, built on the same anti-slop discipline we apply to everything.",
    points: ["Landing pages", "Marketing sites", "Conversion copy"],
  },
  {
    tag: "SEO",
    title: "Search engine optimization",
    body: "Technical and on-page SEO that compounds. We fix the foundations — speed, structure, schema — then ship content that actually ranks and earns citations.",
    points: ["Technical SEO audit", "Schema & structure", "AI-search readiness"],
  },
  {
    tag: "SOFTWARE",
    title: "Custom-built software solutions",
    body: "When off-the-shelf won't cut it. We design and build bespoke software — APIs, internal tools, platforms — engineered to your exact workflow and hardened for production.",
    points: ["Bespoke platforms", "APIs & integrations", "Internal tooling"],
    featured: true,
  },
  {
    tag: "QA",
    title: "Test automation strategy & implementation",
    body: "A test strategy that actually catches regressions, not theatre. We assess your surface, pick the right layers, and implement automation that runs on every commit.",
    points: ["Test strategy", "E2E & unit automation", "CI pipeline gating"],
  },
  {
    tag: "SECURITY",
    title: "Cybersecurity testing",
    body: "Offensive-style testing of your running systems — web, API, and infrastructure. We find the edges before attackers do and hand you a prioritised remediation plan.",
    points: ["Web & API pentesting", "Supply-chain review", "Remediation plan"],
  },
  {
    tag: "AI",
    title: "AI workflow integration",
    body: "Practical AI wired into your real workflows — not demos. We integrate LLMs, agents, and automation into the tools you already run, with guardrails that hold up in production.",
    points: ["LLM & agent integration", "Workflow automation", "Eval & guardrails"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-32">
      <div className="slash-divider mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl pt-24">
        <div className="mb-16 max-w-2xl">
          <p className="label-mono mb-6 reveal">// サービス — services</p>
          <h2 className="reveal display display-lg text-mist">
            What we sharpen.
          </h2>
        </div>

        {/* Gapless bento grid — NOT cards-in-cards */}
        <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline md:grid-cols-2">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={`reveal group relative overflow-hidden bg-background p-10 transition-colors duration-300 hover:bg-surface ${
                s.featured ? "bg-surface" : ""
              }`}
            >
              {/* Top-edge blade shimmer on hover — ui-ux-pro-max cinema card */}
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--blade-glow), transparent)",
                }}
                aria-hidden="true"
              />
              <div className="flex items-center justify-between">
                <span className="label-mono">{s.tag}</span>
                {s.featured && (
                  <span className="label-mono text-blade" aria-label="Flagship service">
                    ★ flagship
                  </span>
                )}
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-mist">
                {s.title}
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-mist-dim">
                {s.body}
              </p>
              <ul className="mt-6 space-y-2">
                {s.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-center gap-3 font-mono text-sm text-mist-dim"
                  >
                    <span className="text-blade">▸</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}