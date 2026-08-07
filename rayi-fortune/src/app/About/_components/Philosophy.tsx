import SectionTitle from "../../../components/UI/SectionTitle";
import AnimatedText from "../../../components/UI/AnimatedText";

const PRINCIPLES = [
  {
    title: "Understand Before Build",
    description:
      "I believe the best solutions come from deeply understanding the problem before writing a single line of code. Whether it's software, machine learning, or a business challenge, I start by asking why before deciding how.",
  },
  {
    title: "Build What Matters",
    description:
      "Technology is a means, not the end. I focus on creating software that solves real problems and delivers measurable value, choosing practical impact over unnecessary complexity or trends.",
  },
  {
    title: "Curiosity With Discipline",
    description:
      "Naturally drawn to exploring new ideas, I balance curiosity with a commitment to long-term goals. I embrace continuous learning while deliberately returning to the roadmap that moves me closer to mastery.",
  },
];

export default function Philosophy() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <SectionTitle eyebrow="My Philosophy" title="How I approach my work" />

      <div className="grid sm:grid-cols-3 gap-6 mt-10">
        {PRINCIPLES.map((principle) => (
          <div key={principle.title} className="rounded-2xl border border-border p-6 bg-muted/30">
            <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-10 border-t border-border">
        <AnimatedText
          as="p"
          className="text-muted-foreground leading-relaxed max-w-2xl"
        >
          I naturally see software as interconnected systems rather than isolated features. Whether studying operating systems, machine learning, or web applications, I enjoy understanding how individual components communicate to create something larger than themselves.
        </AnimatedText>

        <p className="text-lg font-medium text-foreground mt-6">
          My engineering philosophy in three words:{" "}
          <span className="text-primary">Understand. Build. Improve.</span>
        </p>
      </div>
    </section>
  );
}