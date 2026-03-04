import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const { t, i18n } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("creators"), href: "#creators" },
    { label: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">

          <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
            AIBold
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-4">

            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-xs font-medium rounded-full border border-border
                         text-foreground/70 hover:text-foreground
                         hover:bg-secondary/60 transition-all duration-300"
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </button>

            <button
              onClick={toggle}
              className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <Button>
              {t("getStarted")}
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground relative z-[70]"
            type="button"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 ${
          document.documentElement.dir === "rtl" ? "left-0" : "right-0"
        } h-full w-72 bg-background shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen
            ? "translate-x-0"
            : document.documentElement.dir === "rtl"
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-6 space-y-6">

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-lg text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-4 pt-6 border-t border-border">

            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm border rounded-lg"
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </button>

            <button
              onClick={toggle}
              className="px-3 py-1 text-sm border rounded-lg"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

          </div>

        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}