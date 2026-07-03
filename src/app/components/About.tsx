const PRINCIPLES = [
  {
    kanji: "速",
    title: "Swift",
    body: "Speed is a feature. We ship in tight loops, measure relentlessly, and treat latency as a bug.",
  },
  {
    kanji: "刃",
    title: "Sharp",
    body: "Precision over polish-for-its-own-sake. Every edge we ship has a purpose; nothing is decorative.",
  },
  {
    kanji: "鍛",
    title: "Forged",
    body: "Hardened by real production load. We build the way blades are made — folded, tested, proven.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="slash-divider mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl pt-24">
        <div className="grid gap-16 md:grid-cols-12 md:items-start">
          {/* Asymmetric editorial split — large statement left */}
          <div className="md:col-span-7">
            <p className="label-mono mb-6 reveal">// について — about</p>
            <h2 className="reveal display display-lg text-mist">
              We are the studio that
              <br />
              <span className="text-blade">treats software like a blade.</span>
            </h2>
            <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-mist-dim">
              Swiftblade Digital began as a consulting practice for teams that
              needed to ship fast without shipping junk. Today we run a hybrid
              model — hands-on engineering consulting alongside a growing suite
              of developer tools built from the same discipline. The blade is
              our operating principle: minimal, precise, and tested until it
              holds an edge.
            </p>
          </div>

          {/* Supporting motifs right */}
          <div className="md:col-span-5">
            <div className="space-y-px">
              {PRINCIPLES.map((p) => (
                <div
                  key={p.title}
                  className="reveal flex items-start gap-5 border-b border-hairline py-7"
                >
                  <span className="display text-4xl text-blade">{p.kanji}</span>
                  <div>
                    <h3 className="font-semibold text-mist">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mist-dim">
                      {p.body}
                    </p>
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