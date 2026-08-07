export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  overview: string;
};

export const projects: Project[] = [
  {
    slug: "tumor-classification",
    title: "Brain Tumor Classification",
    description:
      "A multiclass MRI classification system identifying Glioma, Meningioma, Pituitary tumors, and healthy scans using transfer learning with EfficientNetB0.",
    image: "/images/projects/tumor-classification.webp",
    technologies: ["Python", "TensorFlow", "EfficientNetB0", "FastAPI", "Next.js"],
    githubUrl: "https://github.com/azikisoko/Brain-Tumor-Classification-Using-Deep-Learning",
    liveUrl: "https://brain-tumor-classification-using-de.vercel.app/",
    featured: true,
    overview: "This project focuses on developing a robust brain tumor classification system using deep learning techniques. It leverages transfer learning with EfficientNetB0 to identify different types of brain tumors from MRI scans."
  },
];
  /*{
    slug: "placeholder-project-two",
    title: "Placeholder Project Two",
    description: "Replace with a real project title, description, and links.",
    image: "/images/projects/placeholder.webp",
    technologies: ["Next.js", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/your-username/project-two",
    featured: true,
    overview: "This project focuses",
  },
  {
    slug: "placeholder-project-three",
    title: "Placeholder Project Three",
    description: "Replace with a real project title, description, and links.",
    image: "/images/projects/placeholder.webp",
    technologies: ["FastAPI", "Docker", "React"],
    githubUrl: "https://github.com/your-username/project-three",
    featured: true,
    overview: "This project focuses",
  },
];*/

export const featuredProjects = projects.filter((p) => p.featured);