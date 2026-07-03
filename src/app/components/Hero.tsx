export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Asanoha lattice backdrop */}
      <div className="pattern-asanoha pointer-events-none absolute inset-0" />
      {/* Radial blade glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 38%, rgba(230,57,70,0.12), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="label-mono mb-8" data-hero-line>
          // ソフトウェア を鍛える
        </p>
        <h1 className="display display-xl text-mist">
          <span className="block" data-hero-line>
            Software,
          </span>
          <span className="block text-blade" data-hero-line>
            sharpened.
          </span>
        </h1>
        <p
          className="reveal mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-mist-dim md:text-xl"
        >
          Swiftblade Digital forges developer tools and engineers the systems
          behind them. We pair consulting precision with shipping speed —
          cutting through complexity, one blade at a time.
        </p>

        <div className="reveal mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="btn-blade rounded-full px-8 py-3.5 text-base font-semibold"
          >
            Book a consulting call
          </a>
          <a
            href="#services"
            className="btn-ghost rounded-full px-8 py-3.5 text-base font-medium"
          >
            Start a SaaS trial →
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="reveal absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden="true">
        <span className="label-mono">scroll</span>
      </div>
    </section>
  );
}