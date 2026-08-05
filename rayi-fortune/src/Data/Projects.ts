// src/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "brain-tumor-classification",
    title: "Brain Tumor Classification",
    description:
      "A multiclass MRI classification system identifying Glioma, Meningioma, Pituitary tumors, and healthy scans using transfer learning with EfficientNetB0.",
    image: "/images/projects/brain-tumor-classification.png",
    technologies: ["Python", "TensorFlow", "EfficientNetB0", "FastAPI", "Next.js"],
    githubUrl: "https://github.com/your-username/brain-tumor-classification",
    liveUrl: "https://your-live-demo-url.com",
    featured: true,
  },
  {
    slug: "placeholder-project-two",
    title: "Placeholder Project Two",
    description: "Replace with a real project title, description, and links.",
    image: "/images/projects/placeholder.png",
    technologies: ["Next.js", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/your-username/project-two",
    featured: true,
  },
  {
    slug: "placeholder-project-three",
    title: "Placeholder Project Three",
    description: "Replace with a real project title, description, and links.",
    image: "/images/projects/placeholder.png",
    technologies: ["FastAPI", "Docker", "React"],
    githubUrl: "https://github.com/your-username/project-three",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);