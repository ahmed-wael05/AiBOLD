import { Section } from "./Section";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";

export function BuildSystemCTA() {
  const { t } = useTranslation();

  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          {t("buildSystem.heading")}
        </h2>

        <div className="mt-8">
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("buildSystem.cta")}
          </Button>
        </div>

      </div>
    </Section>
  );
}