import { useTranslation } from "react-i18next";

export function Footer() {

  const { t } = useTranslation();

  return (
    <footer className="bg-background text-foreground py-10">
      <div className="mx-auto max-w-6xl text-center">
        <p>{t("footer.rights")}</p>
      </div>
    </footer>
  );
}