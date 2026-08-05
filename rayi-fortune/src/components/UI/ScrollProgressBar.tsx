// src/components/ui/ScrollProgressBar.tsx
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left center" });

    gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60] pointer-events-none bg-muted">
      <div ref={barRef} className="h-full w-full bg-gradient-to-r from-primary to-accent" />
    </div>
  );
}