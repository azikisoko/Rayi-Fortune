"use client";

interface FiltersProps {
  technologies: string[];
  activeFilter: string;
  onChange: (value: string) => void;
}

export default function Filters({ technologies, activeFilter, onChange }: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {technologies.map((tech) => {
        const isActive = tech === activeFilter;
        return (
          <button
            key={tech}
            onClick={() => onChange(tech)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              isActive
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {tech}
          </button>
        );
      })}
    </div>
  );
}