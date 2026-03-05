import { Section } from "./Section";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function CredibilitySection() {

  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    setLoading(true);

    try {

      await fetch(
        "https://script.google.com/macros/s/AKfycbxNB7dpMDMCpo9U9gm55lmQwcq2iy_D42FOX5TojwcZGYS2KN2v0-Jte5J6-_z8uos/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            name,
            email,
            company
          })
        }
      );

    } catch (error) {
      console.error(error);
    }

    window.open(
      "https://surveymars.com/r/dVVcVrH1cdH4",
      "_blank"
    );

    setLoading(false);
  };

  return (
    <Section id="contact">
      <div className="mx-auto max-w-3xl">

        <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {t("credibility.heading")}
        </h2>

        <div className="mt-12 rounded-2xl border border-border bg-background p-8 md:p-10 shadow-sm">

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              required
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-border bg-card px-5 py-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-border bg-card px-5 py-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-xl border border-border bg-card px-5 py-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              disabled={loading}
              type="submit"
              className="w-full rounded-xl bg-primary py-4 text-white font-medium hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Start the Conversation →"}
            </button>

          </form>

        </div>
      </div>
    </Section>
  );
}