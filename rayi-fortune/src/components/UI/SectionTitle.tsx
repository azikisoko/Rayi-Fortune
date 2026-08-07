import AnimatedText from "./AnimatedText";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : ""}>
      {eyebrow && (
        <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
          {eyebrow}
        </p>
      )}
      <AnimatedText as="h2" className="text-3xl sm:text-4xl font-semibold text-foreground">
        {title}
      </AnimatedText>
      {description && (
        <p className="text-muted-foreground mt-4 leading-relaxed">{description}</p>
      )}
    </div>
  );
}