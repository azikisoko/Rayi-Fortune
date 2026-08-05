// src/components/home/FeaturedProjects.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { featuredProjects } from "../../Data/Projects";
import SectionTitle from "../../components/UI/SectionTitle";
import { ArrowUpRight } from "lucide-react";

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
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="project-card group rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-colors"
          >
            <div className="relative aspect-video bg-muted overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}