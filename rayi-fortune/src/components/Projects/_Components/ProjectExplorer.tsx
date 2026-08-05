// src/app/projects/_components/ProjectsExplorer.tsx
"use client";

import { useMemo, useState } from "react";
import { projects } from "../../../Data/Projects";
import Filters from "./Filters";
import ProjectGrid from "./ProjectGrid";

const ALL = "All";

export default function ProjectsExplorer() {
  const [activeFilter, setActiveFilter] = useState(ALL);

  const technologies = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((project) =>
      project.technologies.forEach((tech) => set.add(tech))
    );
    return [ALL, ...Array.from(set).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === ALL) return projects;
    return projects.filter((project) => project.technologies.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div>
      <Filters
        technologies={technologies}
        activeFilter={activeFilter}
        onChange={setActiveFilter}
      />
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}