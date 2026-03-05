import { Section } from "./Section";
import { Input } from "./Input";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function CreatorSection() {

  const { t } = useTranslation();

  const [name,setName] = useState("");
  const [platform,setPlatform] = useState("");
  const [email,setEmail] = useState("");

  const [loading,setLoading] = useState(false);
  const [success,setSuccess] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);

    try {

      await fetch(
        "https://script.google.com/macros/s/AKfycbxQQhXqFXO8oRFii2NVKxOuCu8Rfe1gbW8E_RKXxjk1beYPa8BLZNKvfZ5D_EtzV28M/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            name,
            platform,
            email
          }),
        }
      );

      setSuccess(true);

    } catch (error) {
      console.error(error);
    }

    window.open(
      "https://surveymars.com/r/7DxJDUWhDyCB6",
      "_blank"
    );

    setLoading(false);
  };

  return (
    <Section id="creators">
      <div className="mx-auto max-w-2xl">

        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground text-center">
          {t("creator.heading")}
        </h2>

        <p className="mt-4 text-muted-foreground text-center leading-relaxed">
          {t("creator.subtitle")}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4 rounded-xl border border-border bg-card p-6 md:p-8"
        >

          <Input
            placeholder={t("creator.name")}
            required
            minLength={2}
            value={name}
            onChange={(e:any)=>setName(e.target.value)}
          />

          <Input
            placeholder={t("creator.platform")}
            value={platform}
            onChange={(e:any)=>setPlatform(e.target.value)}
          />

          <Input
            placeholder={t("creator.email")}
            type="email"
            required
            value={email}
            onChange={(e:any)=>setEmail(e.target.value)}
          />

          <Button
            disabled={loading}
            type="submit"
            className="w-full rounded-xl bg-primary py-4 text-white font-medium hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : t("creator.cta")}
          </Button>

          {success && (
            <p className="text-green-600 text-sm text-center">
              Redirecting you to the survey...
            </p>
          )}

        </form>

      </div>
    </Section>
  );
}