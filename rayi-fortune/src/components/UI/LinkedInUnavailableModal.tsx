"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";
import { FaLinkedin } from "react-icons/fa";
import { X } from "lucide-react";

interface LinkedInUnavailableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LinkedInUnavailableModal({
  isOpen,
  onClose,
}: LinkedInUnavailableModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      return;
    }
  }, [isOpen]);

  useEffect(() => {
    if (!shouldRender) return;

    if (isOpen) {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25 });
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 30, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.2 });
      gsap.to(modalRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.96,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => setShouldRender(false),
      });
    }
  }, [isOpen, shouldRender]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  return (
    <div
      ref={overlayRef}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="linkedin-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-background border border-border rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted mx-auto mb-4">
          <FaLinkedin className="w-5 h-5 text-muted-foreground" />
        </div>

        <h3 id="linkedin-modal-title" className="text-lg font-semibold text-foreground mb-2">
          LinkedIn Temporarily Unavailable
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          I&apos;m currently working on resolving an issue with my LinkedIn account. In the meantime, feel free to reach out via email or WhatsApp instead.
        </p>

        <a
          href="/Contact"
          onClick={onClose}
          className="inline-block px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Contact Me Instead
        </a>
      </div>
    </div>
  );
}