// src/components/home/CTA.tsx
import Link from "next/link";
import SectionTitle from "../../components/UI/SectionTitle";

export default function CTA() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-center">
      <SectionTitle
        eyebrow="Let's Work Together"
        title="Have a project in mind?"
        description="I'm always open to discussing new projects, creative ideas, or opportunities to build something impactful."
        align="center"
      />
      <div className="mt-8">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}