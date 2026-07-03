"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About", id: "about" },
  { href: "#services", label: "Services", id: "services" },
  { href: "#portfolio", label: "Portfolio", id: "portfolio" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy — ui-ux-pro-max "Active State" navigation guideline
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    ) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-hairline bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-blade focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center gap-2"
        >
          <span className="text-mist font-mono text-sm tracking-[0.3em] uppercase">
            刀 Swiftblade
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "page" : undefined}
              className={`label-mono inline-flex min-h-[44px] items-center transition-colors ${
                active === l.href
                  ? "text-mist"
                  : "text-mist-dim hover:text-mist"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="btn-blade inline-flex min-h-[44px] items-center rounded-full px-5 py-2 text-sm font-medium"
        >
          Book a call
        </a>
      </nav>
    </header>
  );
}