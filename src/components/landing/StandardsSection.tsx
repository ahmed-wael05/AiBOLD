import { Section } from "./Section";
import { useTranslation } from "react-i18next";

export function StandardsSection() {

  const { t } = useTranslation();

  return (
    <Section>

      <div className="mx-auto max-w-3xl text-center">

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {t("standards.heading")}
        </h2>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {t("standards.description")}
        </p>

      </div>

    </Section>
  );
}