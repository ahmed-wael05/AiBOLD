import { Section } from "./Section";
import { useReveal } from "@/hooks/useReveal";
import { useTranslation } from "react-i18next";

function ServiceCard({
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

export function WhatWeDo() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("servicesSection.automation.title"),
      desc: t("servicesSection.automation.desc"),
    },
    {
      title: t("servicesSection.strategy.title"),
      desc: t("servicesSection.strategy.desc"),
    },
    {
      title: t("servicesSection.content.title"),
      desc: t("servicesSection.content.desc"),
    },
    {
      title: t("servicesSection.data.title"),
      desc: t("servicesSection.data.desc"),
    },
  ];

  return (
    <Section id="services">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground text-center">
        {t("servicesSection.heading")}
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} delay={i * 100} />
        ))}
      </div>
    </Section>
  );
}