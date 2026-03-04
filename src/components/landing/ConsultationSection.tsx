import { Section } from "./Section";
import { Input, Textarea } from "./Input";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";

export function ConsultationSection() {
  const { t } = useTranslation();

  return (
    <Section id="contact">
      <div className="mx-auto max-w-xl">
        <div className="space-y-4 rounded-xl border border-border bg-card p-6 md:p-8">
          
          <Input placeholder={t("consultation.name")} />

          <Input
            placeholder={t("consultation.email")}
            type="email"
          />

          <Input placeholder={t("consultation.company")} />

          <Textarea
            placeholder={t("consultation.challenge")}
          />

          <a
            href="https://surveymars.com/r/dVVcVrH1cdH4"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button className="w-full">
              {t("consultation.cta")}
            </Button>
          </a>

        </div>
      </div>
    </Section>
  );
}
