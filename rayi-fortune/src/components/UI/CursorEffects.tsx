// src/components/ui/CursorEffects.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";

export default function CursorEffects() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const [isFinePointer, setIsFinePointer] = useState<boolean | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Detect touch vs. mouse/trackpad devices
  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    const dotX = gsap.quickTo(dotRef.current, "x", { duration: 0.15, ease: "power3.out" });
    const dotY = gsap.quickTo(dotRef.current, "y", { duration: 0.15, ease: "power3.out" });
    const glowX = gsap.quickTo(glowRef.current, "x", { duration: 0.6, ease: "power3.out" });
    const glowY = gsap.quickTo(glowRef.current, "y", { duration: 0.6, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      glowX(e.clientX);
      glowY(e.clientY);
    };

    const isInteractive = (target: EventTarget | null) =>
      target instanceof HTMLElement &&
      !!target.closest("a, button, [data-cursor-hover]");

    const handleMouseOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) setIsHovering(true);
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) setIsHovering(false);
    };

    const handleWindowMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) setIsVisible(false);
    };

    const handleWindowMouseOver = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleWindowMouseOut);
    document.addEventListener("mouseenter", handleWindowMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleWindowMouseOut);
      document.removeEventListener("mouseenter", handleWindowMouseOver);
    };
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Ambient background glow — sits behind content */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 z-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] transition-[width,height,opacity] duration-500 ease-out ${
          isVisible ? "" : "opacity-0"
        } ${isHovering ? "w-[520px] h-[520px] opacity-30" : "w-[320px] h-[320px] opacity-[0.12]"}`}
        style={{
          background:
            "radial-gradient(circle, var(--color-primary) 0%, var(--color-accent) 45%, transparent 70%)",
        }}
      />

      {/* Morphing cursor dot — coexists with native arrow */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 z-[200] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
          isVisible ? "" : "opacity-0"
        } ${
          isHovering
            ? "w-11 h-11 rounded-xl bg-accent/20 border border-accent"
            : "w-2.5 h-2.5 rounded-full bg-primary"
        }`}
      />
    </>
  );
}