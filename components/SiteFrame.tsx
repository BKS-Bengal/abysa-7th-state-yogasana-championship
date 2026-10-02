"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Header } from "@/components/Header";
import { IdentityIntro } from "@/components/IdentityIntro";
import { useLanguage } from "@/lib/language";

const ReadyContext = createContext(true);

export function usePageReady() {
  return useContext(ReadyContext);
}

type Props = {
  children: ReactNode;
  intro?: boolean;
};

export function SiteFrame({ children, intro = false }: Props) {
  const { copy } = useLanguage();
  const [siteReady, setSiteReady] = useState(!intro);
  const [introOn, setIntroOn] = useState(intro);

  useEffect(() => {
    if (!intro) return;
    const show = () => setSiteReady(true);
    window.addEventListener("pjm-intro-arrive", show);
    return () => window.removeEventListener("pjm-intro-arrive", show);
  }, [intro]);

  return (
    <ReadyContext.Provider value={siteReady}>
      {introOn ? (
        <IdentityIntro
          onDone={() => {
            setSiteReady(true);
            setIntroOn(false);
          }}
        />
      ) : null}
      <Header ready={siteReady} />
      <main id="content" className="route">
        {children}
      </main>
      <footer className="colophon">
        <p>{copy.footer}</p>
      </footer>
    </ReadyContext.Provider>
  );
}
