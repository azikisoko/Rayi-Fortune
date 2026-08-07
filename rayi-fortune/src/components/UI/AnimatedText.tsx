"use client";

import { useRef, ElementType } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";

interface AnimatedTextProps {
  children: string;
  className?: string;
  as?: ElementType;
  delay?: number;
}

export default function AnimatedText({
  children,
  className = "",
  as: Tag = "p",
  delay = 0,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const words = children.split(" ");

  useGSAP(() => {
    const wordEls = containerRef.current?.querySelectorAll(".word-inner");
    if (!wordEls) return;

    gsap.fromTo(
      wordEls,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.04,
        delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-bottom">
          <span className="word-inner inline-block">{word}</span>
        </span>
      ))}
    </Tag>
  );
}