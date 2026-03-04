import { Section } from "./Section";
import { Input, Textarea } from "./Input";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";

export function CreatorSection() {
  const { t } = useTranslation();

  return (
    <Section id="creators">
      <div className="mx-auto max-w-xl">
        
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground text-center">
          {t("creator.heading")}
        </h2>

        <p className="mt-4 text-muted-foreground text-center leading-relaxed">
          {t("creator.subtitle")}
        </p>

        <div className="mt-10 space-y-4 rounded-xl border border-border bg-card p-6 md:p-8">
          
          <Input placeholder={t("creator.name")} />

          <Input placeholder={t("creator.platform")} />

          <Input placeholder={t("creator.audience")} />

          <Input
            placeholder={t("creator.email")}
            type="email"
          />

          <Textarea
            placeholder={t("creator.reason")}
          />

          <a
            href="https://surveymars.com/r/7DxJDUWhDyCB6"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button className="w-full">
              {t("creator.cta")}
            </Button>
          </a>

        </div>
      </div>
    </Section>
  );
}