// src/app/about/_components/MyJourney.tsx
import SectionTitle from "../../../components/UI/SectionTitle";

const TIMELINE = [
  { year: "20XX", title: "Placeholder Milestone", description: "Replace with a real milestone." },
  { year: "20XX", title: "Placeholder Milestone", description: "Replace with a real milestone." },
  { year: "20XX", title: "Placeholder Milestone", description: "Replace with a real milestone." },
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
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}