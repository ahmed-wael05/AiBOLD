import { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "ar";

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(
    (localStorage.getItem("lang") as Lang) || "en"
  );

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);