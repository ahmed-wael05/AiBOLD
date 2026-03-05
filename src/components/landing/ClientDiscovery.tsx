import { Section } from "./Section";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";

export function ClientDiscovery() {

  const { t } = useTranslation();

  return (
    <Section>

     <div className="mx-auto max-w-3xl text-center">

  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground text-center">
    {t("clientDiscovery.label")}
  </h2>


  <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
    {t("clientDiscovery.description")}
  </p>

  <Button
  onClick={() =>
    window.open("https://surveymars.com/r/N6F63kNwiqmq", "_blank")
  }
  className="mt-8 w-full rounded-xl bg-primary py-4 text-white font-medium hover:opacity-90 transition"
>
  {t("clientDiscovery.cta")}
</Button>

</div>

    </Section>
  );
}