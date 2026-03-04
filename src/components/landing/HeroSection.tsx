import { Button } from "./Button";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      <div className="gradient-mesh" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1]">
          {t("hero.title")}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t("hero.subtitle")}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("hero.ctaPrimary")}
          </Button>

          <Button
            variant="secondary"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("hero.ctaSecondary")}
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground tracking-wide">
          {t("hero.microcopy")}
        </p>
      </div>
    </section>
  );
}