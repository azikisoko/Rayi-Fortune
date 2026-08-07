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
    slug: "dropbox-airtable-link-generator",
    title: "Automated Dropbox-Airtable Folder Link Generator",
    description:"A Python-based automation script that scans a client's Dropbox account, identifies specific folders across 20,000+ records, generates shareable links for them, and updates the corresponding Airtable rows — without affecting existing data. Built to solve a bulk data-linking problem that was previously handled manually, this tool integrates directly with the Dropbox and Airtable APIs to deliver a fast, reliable, and safely re-runnable solution.",
    image: "/images/projects/dropbox-airtable-link-generator.webp",
    technologies: ["Python", "dropbox (Official Python SDK)", "pyairtable", "python-dotenv", "Git/GitHub"],
    githubUrl: "https://github.com/azikisoko/Dropbox-Folder-Link-Generator",
    liveUrl: "",
    featured: true,
    overview: "This project addressed a real-world integration challenge for a client managing a media-based record system in Airtable, with corresponding storage folders in Dropbox. After an existing no-code automation (Make.com) silently failed due to authentication issues, a custom Python script was developed to audit and repair the data pipeline — specifically identifying empty Dropbox folders and generating shareable links for them, then syncing those links back into the correct Airtable records. The project involved systematic debugging across authentication, API permissions, and folder-path structure issues, ultimately tracing the root cause to an incorrectly scoped Dropbox app configuration. The final solution is idempotent, safely re-runnable, and includes diagnostic tooling for future maintenance — while also shifting Dropbox account control back to the client to reduce third-party liability."
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