// src/app/about/_components/WhoIAm.tsx
import AnimatedText from "../../../components/UI/AnimatedText";
import Image from "next/image";

export default function WhoIAm() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 items-center">
        <div>
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            About Me
          </p>
          <AnimatedText
            as="h1"
            className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight"
          >
            Who I Am
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="text-muted-foreground text-lg mt-6 leading-relaxed"
          >
            I&apos;m a Full-Stack Developer and Machine Learning Engineer who builds fast, scalable web applications and intelligent AI solutions. I enjoy transforming complex ideas into intuitive digital experiences that solve real-world problems. Currently exploring the intersection of software engineering, artificial intelligence, and impactful product design.
          </AnimatedText>
        </div>

        <div className="relative mx-auto md:mx-0">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border border-border shadow-xl">
            <Image
              src="/images/profile/rayi-fortune.webp"
              alt="Rayi Fortune"
              fill
              sizes="(max-width: 768px) 224px, 256px"
              className="object-cover scale-110 -translate-x-[4%]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}