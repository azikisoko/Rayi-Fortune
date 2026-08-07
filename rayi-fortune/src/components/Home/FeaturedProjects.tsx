"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { featuredProjects } from "../../Data/Projects";
import SectionTitle from "../../components/UI/SectionTitle";
import ProjectCard from "../../components/Projects/ProjectCard";

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll(".project-card");
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
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
      <SectionTitle
        eyebrow="Selected Work"
        title="Featured Projects"
        description="A few projects that reflect how I think, build, and solve problems."
      />

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}