"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { skillCategories } from "../../Data/Skills";
import SectionTitle from "../../components/UI/SectionTitle";

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll(".skill-card");
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle eyebrow="Tech Stack" title="Tools & technologies I work with" />

      <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="skill-card rounded-2xl border border-border bg-muted/40 p-6 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{category.emoji}</span>
              <h3 className="font-semibold text-foreground">{category.title}</h3>
            </div>

            <div className="space-y-3">
              {category.groups.map((group) => (
                <div key={group.label}>
                  {category.groups.length > 1 && (
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1.5">
                      {group.label}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-full bg-background border border-border text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}