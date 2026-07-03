"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Motion() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const ctx = gsap.context(() => {
      // Hero sheath-draw
      gsap.fromTo(
        "[data-hero-line]",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.12,
        }
      );

      // Scroll-triggered reveals
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          onEnter: () => el.classList.add("is-visible"),
        });
      });

      // Katana slash sweep on section dividers
      gsap.utils.toArray<HTMLElement>(".slash-divider").forEach((el) => {
        const sweep = el.querySelector<HTMLElement>("[data-slash-sweep]");
        if (sweep) {
          gsap.set(sweep, { scaleX: 0, transformOrigin: "left" });
          ScrollTrigger.create({
            trigger: el,
            start: "top 75%",
            onEnter: () => {
              gsap.fromTo(
                sweep,
                { scaleX: 0, opacity: 0 },
                { scaleX: 1, opacity: 1, duration: 0.5, ease: "expo.out" }
              );
              gsap.to(sweep, {
                opacity: 0.3,
                duration: 0.4,
                delay: 0.5,
                ease: "power2.out",
              });
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}