"use client";

import Link from "next/link";
import AnimatedText from "../../components/UI/AnimatedText";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 items-center">
        <div>
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Full-Stack Developer & ML Engineer
          </p>

          <AnimatedText
            as="h1"
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-foreground leading-tight"
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
              href="/Projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/Contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="relative mx-auto md:mx-0 order-first md:order-last">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/25 to-accent/25 blur-2xl" />
          <div className="relative w-48 h-48 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-border shadow-2xl">
            <Image
              src="/images/profile/rayi-fortune.webp"
              alt="Rayi Fortune"
              fill
              sizes="(max-width: 768px) 192px, 288px"
              className="object-cover scale-106 -translate-x-[3%]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}