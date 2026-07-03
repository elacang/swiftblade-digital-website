"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Katana scroll-progress indicator.
 *
 * A fixed katana blade that "draws" from its scabbard as the user scrolls
 * through the page. The crimson edge glows brighter near section boundaries.
 * Purely decorative (aria-hidden) and respects prefers-reduced-motion.
 */
export default function KatanaProgress() {
  const bladeRef = useRef<SVGSVGElement>(null);
  const glowRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const blade = bladeRef.current;
    const glow = glowRef.current;
    if (!blade || !glow) return;

    if (prefersReduced) {
      // Fully drawn, no animation
      gsap.set(blade, { "--blade-draw": 100 });
      return;
    }

    const ctx = gsap.context(() => {
      // Drive blade draw progress from scroll
      gsap.to(blade, {
        "--blade-draw": 100,
        ease: "none",
        scrollTrigger: {
          start: 0,
          end: () =>
            document.documentElement.scrollHeight - window.innerHeight,
          scrub: 0.4,
        },
      });

      // Pulse the glow at section boundaries
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 50%",
          onEnter: () => {
            gsap.fromTo(
              glow,
              { opacity: 0.15 },
              { opacity: 0.7, duration: 0.3, ease: "expo.out", yoyo: true, repeat: 1 }
            );
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="pointer-events-none fixed right-6 top-1/2 z-30 -translate-y-1/2"
      aria-hidden="true"
      style={{ width: "44px", height: "220px" }}
    >
      <svg
        ref={bladeRef}
        viewBox="0 0 44 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ "--blade-draw": "0" } as React.CSSProperties}
      >
        <defs>
          <linearGradient id="katana-edge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e63946" />
            <stop offset="40%" stopColor="#c01d2c" />
            <stop offset="100%" stopColor="#6b7280" />
          </linearGradient>
          <linearGradient id="katana-blade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1c1c20" />
            <stop offset="50%" stopColor="#8a8f98" />
            <stop offset="100%" stopColor="#1c1c20" />
          </linearGradient>
          <clipPath id="blade-clip">
            <rect
              x="0"
              y="0"
              width="44"
              height="220"
              // Clip reveals the blade from bottom (scabbard) upward as scroll progresses
              style={{
                transform: `scaleY(var(--blade-draw, 0))`,
                transformOrigin: "bottom",
              }}
            />
          </clipPath>
        </defs>

        {/* Scabbard (saya) — static, always visible */}
        <rect x="16" y="0" width="12" height="220" rx="6" fill="#0a0a0b" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <rect x="16" y="0" width="12" height="220" rx="6" fill="url(#katana-blade)" opacity="0.15" />

        {/* Katana blade — revealed by clip as you scroll */}
        <g clipPath="url(#blade-clip)">
          {/* Blade body — curved katana silhouette */}
          <path
            d="M22 20 C 20 60, 18 120, 16 195 L 28 195 C 26 120, 24 60, 22 20 Z"
            fill="url(#katana-blade)"
          />
          {/* Crimson edge — the sharp side */}
          <path
            ref={glowRef}
            d="M16 195 C 18 120, 20 60, 22 20"
            stroke="url(#katana-edge)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
          {/* Kissaki (tip) */}
          <path d="M22 20 L 18 30 L 26 30 Z" fill="#8a8f98" opacity="0.6" />
        </g>

        {/* Tsuba (guard) — always visible at the drawing point */}
        <rect
          x="8"
          y="188"
          width="28"
          height="4"
          rx="2"
          fill="#2a2a2e"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
        />
        {/* Handle (tsuka) */}
        <rect x="18" y="192" width="8" height="28" rx="2" fill="#1c1c20" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
        {/* Handle wrap crossing */}
        <line x1="18" y1="198" x2="26" y2="200" stroke="#e63946" strokeWidth="0.8" opacity="0.4" />
        <line x1="18" y1="206" x2="26" y2="208" stroke="#e63946" strokeWidth="0.8" opacity="0.4" />
        <line x1="18" y1="214" x2="26" y2="216" stroke="#e63946" strokeWidth="0.8" opacity="0.4" />
      </svg>
    </div>
  );
}