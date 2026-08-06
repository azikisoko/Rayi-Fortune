// src/app/projects/[slug]/_components/ProjectDetails.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Icon from "../../../../components/UI/Icons";
import type { Project } from "../../../../Data/Projects";
import AnimatedText from "../../../../components/UI/AnimatedText";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 pt-24 pb-24">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      <AnimatedText
        as="h1"
        className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight"
      >
        {project.title}
      </AnimatedText>

      <p className="text-muted-foreground text-lg mt-4 max-w-2xl leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-8">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors"
          >
            <Icon icon={FaGithub} className="w-4 h-4" />
            View Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Live Demo
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-muted mt-12">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Placeholder — replace with a real written case study per project */}
      <div className="mt-12 space-y-4">
  <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
    {project.overview}
  </p>
</div>
    </article>
  );
}