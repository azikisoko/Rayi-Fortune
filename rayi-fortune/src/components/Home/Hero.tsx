// src/components/home/Hero.tsx
"use client";

import Link from "next/link";
import AnimatedText from "../../components/UI/AnimatedText";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
        Full-Stack Developer & ML Engineer
      </p>

      <AnimatedText
        as="h1"
        className="text-4xl sm:text-6xl font-semibold tracking-tight text-foreground max-w-3xl leading-tight"
      >
        Hi, I&apos;m Rayi Fortune.
      </AnimatedText>

      <AnimatedText
        as="p"
        delay={0.3}
        className="text-muted-foreground text-lg mt-6 max-w-2xl leading-relaxed"
      >
        I build fast, scalable web applications and intelligent AI solutions, transforming complex ideas into intuitive digital experiences that solve real-world problems.
      </AnimatedText>

      <div className="flex flex-wrap items-center gap-4 mt-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          View My Work
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}