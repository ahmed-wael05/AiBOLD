import { Section } from "./Section";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";

export function ClientDiscovery() {
  const { t } = useTranslation();

  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          {t("clientDiscovery.heading")}
        </h2>

        <p className="mt-4 text-muted-foreground leading-relaxed">
          {t("clientDiscovery.subtitle")}
        </p>

        <div className="mt-8">
          <Button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("clientDiscovery.cta")}
          </Button>
        </div>
      </div>
    </Section>
  );
}