import { Section } from "./Section";
import { useTranslation } from "react-i18next";

export function CredibilitySection() {
  const { t } = useTranslation();

  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          {t("credibility.heading")}
        </h2>

        <p className="mt-6 text-muted-foreground leading-relaxed">
          {t("credibility.description")}
        </p>
      </div>
    </Section>
  );
}