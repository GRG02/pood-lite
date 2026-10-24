"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, SiteContent } from "./types";
import { thaiContent } from "./th";
import { englishContent } from "./en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: SiteContent;
}

const contentMap: Record<Language, SiteContent> = {
  th: thaiContent,
  en: englishContent,
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "th",
  setLang: () => {},
  toggleLang: () => {},
  t: thaiContent,
});

const STORAGE_KEY = "poodlite_preferred_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("th");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "th" || saved === "en") {
        React.startTransition(() => {
          setLangState(saved);
        });
      }
    } catch {
      // Ignore localStorage errors (e.g., SSR or incognito mode restrictions)
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // Ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === "th" ? "en" : "th");
  };

  const t = contentMap[lang] || thaiContent;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
