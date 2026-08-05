// src/app/contact/page.tsx
import type { Metadata } from "next";
import AnimatedText from "../../components/UI/AnimatedText";
import ContactForm from "./_Components/ContactForm";
import SocialLinks from "./_Components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact | Rayi Fortune",
  description:
    "Get in touch with Rayi Fortune for full-stack development and machine learning projects.",
};

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-24">
      <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
        Get In Touch
      </p>
      <AnimatedText
        as="h1"
        className="text-4xl sm:text-5xl font-semibold text-foreground max-w-2xl leading-tight"
      >
        Let&apos;s build something together.
      </AnimatedText>
      <AnimatedText
        as="p"
        delay={0.2}
        className="text-muted-foreground text-lg mt-6 max-w-2xl leading-relaxed"
      >
        Have a project in mind, a question, or just want to say hello? Fill out the form below or reach out directly through any of the channels listed.
      </AnimatedText>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <ContactForm />
        <SocialLinks />
      </div>
    </section>
  );
}