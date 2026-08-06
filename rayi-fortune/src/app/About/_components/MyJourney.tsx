// src/app/about/_components/MyJourney.tsx
import SectionTitle from "../../../components/UI/SectionTitle";


const TIMELINE = [
  {
    year: "2023",
    title: "The Decision to Build",
    description:
      "Committed to pursuing software engineering with a long-term goal of becoming an AI engineer capable of building intelligent products from end to end. Began studying programming from the fundamentals with a focus on long-term mastery rather than quick results.",
  },
  {
    year: "2023 – 2024",
    title: "Building the Foundation",
    description:
      "Completed foundational training in computer science and modern web development, including CS50, Git, GitHub, HTML, CSS, Tailwind CSS, JavaScript, React, and Next.js. Developed an understanding of software engineering principles while preparing for full-stack development.",
  },
  {
    year: "2024",
    title: "First Full-Stack Deployment",
    description:
      "Built and deployed a full-stack application using Next.js for the frontend and FastAPI for the backend, deploying to Vercel and Railway. This marked the transition from learning concepts to shipping production software.",
  },
  {
    year: "2024",
    title: "Machine Learning in Practice",
    description:
      "Developed a skin disease classification system using deep learning, gaining practical experience in data preparation, model training, backend integration, and deployment. The project reinforced an interest in machine learning as a long-term specialization.",
  },
  {
    year: "2024 – 2026",
    title: "Deepening the Craft",
    description:
      "A long phase of growth across multiple projects and computer science courses, alongside several AI/ML bootcamps with certifications. Temporarily worked within a team setting and built out most of the current tech stack used today.",
  },
  {
    year: "2026 – Present",
    title: "Specializing in AI Engineering",
    description:
      "Currently focused on advancing in machine learning and artificial intelligence while continuing to strengthen full-stack development skills. The long-term goal is to build intelligent systems that solve meaningful real-world problems, particularly in business, education, and healthcare.",
  },
];

export default function MyJourney() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 pb-24">
      <SectionTitle eyebrow="My Journey" title="How I got here" />
      <div className="mt-10 space-y-8 border-l border-border pl-6">
        {TIMELINE.map((item, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary" />
            <p className="text-sm text-primary font-medium">{item.year}</p>
            <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}