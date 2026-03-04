import { Section } from "./Section";
import { useReveal } from "@/hooks/useReveal";
import { useTranslation } from "react-i18next";

function AudienceCard({
  title,
  desc,
  delay,
}: {
  title: string;
  desc: string;
  delay: number;
}) {
  const { ref, isVisible } = useReveal(delay);

  return (
    <div
      ref={ref}
      className={`rounded-xl border border-border bg-card p-6 md:p-8 ${
        isVisible ? "reveal-visible" : "reveal-hidden"
      }`}
    >
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export function WhoWeWorkWith() {
  const { t } = useTranslation();

  const audiences = [
    {
      title: t("who.startups.title"),
      desc: t("who.startups.desc"),
    },
    {
      title: t("who.growth.title"),
      desc: t("who.growth.desc"),
    },
    {
      title: t("who.enterprise.title"),
      desc: t("who.enterprise.desc"),
    },
  ];

  return (
    <Section id="about">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground text-center">
        {t("who.heading")}
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {audiences.map((a, i) => (
          <AudienceCard key={i} {...a} delay={i * 100} />
        ))}
      </div>
    </Section>
  );
}