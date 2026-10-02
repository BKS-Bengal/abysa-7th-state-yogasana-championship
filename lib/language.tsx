"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { bn } from "@/content/bn";
import { en } from "@/content/en";
import type { Copy, Locale } from "@/content/types";

const STORAGE_KEY = "pjm-lang";
const copies: Record<Locale, Copy> = { en, bn };

type LanguageValue = {
  locale: Locale;
  copy: Copy;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageValue | null>(null);

function writeLocale(next: Locale) {
  window.localStorage.setItem(STORAGE_KEY, next);
  document.cookie = `pjm-lang=${next};path=/;max-age=31536000;samesite=lax`;
  document.documentElement.lang = next === "bn" ? "bn" : "en";
}

export function LanguageProvider({
  children,
  initialLocale = "en",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    document.documentElement.lang = locale === "bn" ? "bn" : "en";
  }, [locale]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if ((stored === "bn" || stored === "en") && stored !== initialLocale) {
      setLocaleState(stored);
      document.cookie = `pjm-lang=${stored};path=/;max-age=31536000;samesite=lax`;
    }
  }, [initialLocale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    writeLocale(next);
  };

  const value = useMemo<LanguageValue>(
    () => ({
      locale,
      copy: copies[locale],
      setLocale,
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}
