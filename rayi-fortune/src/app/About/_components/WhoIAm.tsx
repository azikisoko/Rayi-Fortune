// src/app/about/_components/WhoIAm.tsx
import AnimatedText from "../../../components/UI/AnimatedText";

export default function WhoIAm() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-16">
      <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">About Me</p>
      <AnimatedText as="h1" className="text-4xl sm:text-5xl font-semibold text-foreground max-w-2xl leading-tight">
        Who I Am
      </AnimatedText>
      <AnimatedText
        as="p"
        delay={0.2}
        className="text-muted-foreground text-lg mt-6 max-w-2xl leading-relaxed"
      >
        I&apos;m a Full-Stack Developer and Machine Learning Engineer who builds fast, scalable web applications and intelligent AI solutions. I enjoy transforming complex ideas into intuitive digital experiences that solve real-world problems. Currently exploring the intersection of software engineering, artificial intelligence, and impactful product design.
      </AnimatedText>
    </section>
  );
}