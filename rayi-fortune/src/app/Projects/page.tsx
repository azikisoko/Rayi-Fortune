// src/app/projects/page.tsx
import type { Metadata } from "next";
import AnimatedText from "../../components/UI/AnimatedText";
import ProjectsExplorer from "../../components/Projects/_Components/ProjectExplorer";

// src/app/projects/page.tsx
export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of software engineering and machine learning projects by Rayi Fortune.",
};

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-24">
      <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
        Portfolio
      </p>
      <AnimatedText
        as="h1"
        className="text-4xl sm:text-5xl font-semibold text-foreground max-w-2xl leading-tight"
      >
        Projects
      </AnimatedText>
      <AnimatedText
        as="p"
        delay={0.2}
        className="text-muted-foreground text-lg mt-6 max-w-2xl leading-relaxed"
      >
        A collection of things I&apos;ve built — spanning full-stack web applications and machine learning systems.
      </AnimatedText>

      <div className="mt-16">
        <ProjectsExplorer />
      </div>
    </section>
  );
}