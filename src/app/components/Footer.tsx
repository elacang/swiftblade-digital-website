export default function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm tracking-[0.3em] uppercase text-mist">
            刀 Swiftblade
          </span>
          <span className="label-mono">digital</span>
        </div>
        <div className="flex items-center gap-8">
          {["About", "Services", "Portfolio", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="label-mono hover:text-mist transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <p className="label-mono">© {new Date().getFullYear()} — 鍛造</p>
      </div>
    </footer>
  );
}