// src/components/ui/EngagementPopup.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../../lib/gsap";

const STORAGE_KEY = "portfolio_engagement_popup_shown";

export default function EngagementPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const trigger = ScrollTrigger.create({
      trigger: "#site-footer",
      start: "top 85%",
      once: true,
      onEnter: () => {
        setIsVisible(true);
        sessionStorage.setItem(STORAGE_KEY, "true");
      },
    });

    return () => trigger.kill();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo(
      popupRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }
    );
  }, [isVisible]);

  const handleClose = () => {
    gsap.to(popupRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setIsVisible(false),
    });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
  };

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
    >
      <div
        ref={popupRef}
        className="relative bg-background border border-border rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
      >
        <button
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold text-foreground mb-2">
          Enjoyed the portfolio?
        </h3>
        <p className="text-muted-foreground mb-6">Let&apos;s work together.</p>

        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}