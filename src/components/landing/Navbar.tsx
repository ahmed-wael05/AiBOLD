import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const { t, i18n } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

          {/* Logo */}
          <Link
            to="/"
            className="font-display text-xl font-bold tracking-tight text-foreground"
          >
            AIBold
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("about")}
            </a>

            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("services")}
            </a>

            {/* Projects Dropdown */}
            <div className="relative group">

              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </button>

              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-52 rounded-xl border border-border bg-background shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">

                <Link
                  to="/projects/carepath-ai"
                  className="block px-4 py-3 text-sm hover:bg-secondary transition-colors"
                >
                  CarePath AI
                </Link>

              </div>

            </div>

            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("contact")}
            </a>

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

          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">

            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs border border-border rounded-md"
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </button>

            <button
              onClick={toggle}
              className="p-2 text-sm border border-border rounded-md"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="p-2 text-foreground relative z-[70]"
              type="button"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>

          </div>

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

          <a
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="block text-lg text-foreground hover:text-primary transition-colors"
          >
            {t("about")}
          </a>

          <a
            href="#services"
            onClick={() => setMobileOpen(false)}
            className="block text-lg text-foreground hover:text-primary transition-colors"
          >
            {t("services")}
          </a>

          <div className="space-y-2">

            <p className="text-sm text-muted-foreground">
              Projects
            </p>

            <Link
              to="/projects/carepath-ai"
              onClick={() => setMobileOpen(false)}
              className="block text-lg text-foreground hover:text-primary transition-colors"
            >
              CarePath AI
            </Link>

          </div>

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-lg text-foreground hover:text-primary transition-colors"
          >
            {t("contact")}
          </a>

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