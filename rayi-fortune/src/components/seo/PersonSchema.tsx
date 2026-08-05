// src/components/seo/PersonSchema.tsx
import { SITE_URL } from "../../lib/constants";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rayi Fortune",
    url: SITE_URL,
    jobTitle: "Full-Stack Developer & Machine Learning Engineer",
    description:
      "Full-Stack Developer and Machine Learning Engineer who builds fast, scalable web applications and intelligent AI solutions.",
    sameAs: [
      "https://github.com/your-username",
      "https://linkedin.com/in/your-username",
    ],
    knowsAbout: [
      "Full-Stack Development",
      "Machine Learning",
      "Deep Learning",
      "React",
      "Next.js",
      "Python",
      "TensorFlow",
      "Computer Vision",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}