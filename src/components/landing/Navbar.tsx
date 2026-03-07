import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const { t, i18n } = useTranslation();

  const [projectsOpen, setProjectsOpen] = useState(false);
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
          <Link to="/" className="font-display text-xl font-bold text-foreground">
            AIBold
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">
              {t("about")}
            </a>

            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground">
              {t("services")}
            </a>

            {/* Desktop Projects Dropdown */}
            <div className="relative group">

              <button className="text-sm text-muted-foreground hover:text-foreground">
                Projects
              </button>

              <div
                className="
                absolute left-1/2 -translate-x-1/2 top-full pt-4
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
                "
              >
                <div className="absolute -top-4 left-0 right-0 h-4"></div>

                <div className="bg-background border border-border rounded-xl shadow-lg p-2 min-w-[200px]">

                  <Link
                    to="/projects/carepath-ai"
className="block px-3 py-1.5 
text-xs font-medium rounded-md 
text-foreground 
hover:bg-secondary transition"
                  >
                    CarePath AI
                  </Link>

                </div>
              </div>

            </div>

            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
              {t("contact")}
            </a>

          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-4">

            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-xs border border-border rounded-full"
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </button>

            <button
              onClick={toggle}
              className="rounded-lg p-2 hover:bg-secondary"
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
              className="p-2 border border-border rounded-md"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>

          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-background shadow-2xl z-40 transform transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-6 space-y-6">

          <a
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="block text-lg text-foreground"
          >
            {t("about")}
          </a>

          <a
            href="#services"
            onClick={() => setMobileOpen(false)}
            className="block text-lg text-foreground"
          >
            {t("services")}
          </a>

          {/* Mobile Projects Toggle */}
          <div>

            <button
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="block text-lg text-foreground"
            >
              Projects
            </button>

            {projectsOpen && (
              <div className="mt-2 ml-3 space-y-2">

                <Link
                  to="/carepath"
                  onClick={() => setMobileOpen(false)}
                  className="block text-base text-muted-foreground hover:text-primary"
                >
                  CarePath AI
                </Link>

              </div>
            )}

          </div>

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-lg text-foreground"
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