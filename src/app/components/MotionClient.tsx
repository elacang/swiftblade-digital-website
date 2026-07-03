"use client";

import dynamic from "next/dynamic";

// Defer GSAP/ScrollTrigger into a post-hydration chunk so the motion library
// never blocks first paint or inflates the main bundle (Lighthouse unused-JS).
// Must be a client component — next/dynamic ssr:false is client-only.
const Motion = dynamic(() => import("./Motion"), { ssr: false });
const KatanaProgress = dynamic(() => import("./KatanaProgress"), { ssr: false });

export default function MotionClient() {
  return (
    <>
      <Motion />
      <KatanaProgress />
    </>
  );
}