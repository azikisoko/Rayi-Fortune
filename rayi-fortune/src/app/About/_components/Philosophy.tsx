// src/app/about/_components/Philosophy.tsx
import SectionTitle from "../../../components/UI/SectionTitle";

const PRINCIPLES = [
  { title: "Placeholder Principle One", description: "Replace with a real value that guides how you build software." },
  { title: "Placeholder Principle Two", description: "Replace with another principle — e.g. simplicity or clarity." },
  { title: "Placeholder Principle Three", description: "Replace with a third principle defining your approach." },
];

export default function Philosophy() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <SectionTitle eyebrow="My Philosophy" title="How I approach my work" />
      <div className="grid sm:grid-cols-3 gap-6 mt-10">
        {PRINCIPLES.map((principle) => (
          <div key={principle.title} className="rounded-2xl border border-border p-6 bg-muted/30">
            <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}