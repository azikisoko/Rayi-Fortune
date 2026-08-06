// src/components/projects/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../Data/Projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/Projects/${project.slug}`}
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
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}