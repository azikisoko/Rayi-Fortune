"use client";

import { useRef } from "react";
import { Mail } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { CONTACT } from "../../lib/constants";

export default function EmailBubble() {
  const ringRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.to(ringRef.current, {
      scale: 1.6,
      opacity: 0,
      duration: 1.6,
      repeat: -1,
      ease: "power1.out",
    });
  }, []);

  return (
    <a
      href={`mailto:${CONTACT.email}`}
      aria-label="Send me an email"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
    >
      <span ref={ringRef} className="absolute inset-0 rounded-full bg-primary opacity-60" />
      <Mail className="relative z-10 w-6 h-6" />
    </a>
  );
}