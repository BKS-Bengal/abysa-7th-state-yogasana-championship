"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logo } from "@/lib/media";
import { useLanguage } from "@/lib/language";
import type { Locale } from "@/content/types";

const routes = [
  { href: "/", key: "home" },
  { href: "/event", key: "event" },
  { href: "/yogasana", key: "yogasana" },
  { href: "/organisation", key: "organisation" },
  { href: "/prakriti-jagaran-mancha", key: "prakriti" },
  { href: "/story", key: "story" },
  { href: "/gallery", key: "gallery" },
  { href: "/media", key: "media" },
  { href: "/information", key: "information" },
] as const;

type Props = { ready: boolean };

const darkNav = new Set([
  "/yogasana",
  "/organisation",
  "/story",
  "/gallery",
  "/media",
  "/prakriti-jagaran-mancha",
]);

export function Header({ ready }: Props) {
  const pathname = usePathname();
  const tone = pathname === "/" ? "tone-overlay" : darkNav.has(pathname) ? "tone-dark" : "tone-light";
  const { locale, setLocale, copy } = useLanguage();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langId = useId();

  useEffect(() => {
    const arrive = () => {
      document.querySelector(".site-header")?.classList.add("is-ready");
    };
    if (ready) arrive();
    window.addEventListener("pjm-intro-arrive", arrive);
    return () => window.removeEventListener("pjm-intro-arrive", arrive);
  }, [ready]);

  useEffect(() => {
    setOpen(false);
    setLangOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!open && !langOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setLangOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, langOpen]);

  const choose = (next: Locale) => {
    setLocale(next);
    setLangOpen(false);
    setOpen(false);
  };

  return (
    <header className={ready ? `site-header is-ready ${tone}` : `site-header ${tone}`}>
      <a className="skip" href="#content">
        {copy.nav.skip}
      </a>
      <div className="nav-brand">
        <Link className="seal" href="/" aria-label="Yogasana Bharat">
          <img src={logo.src} alt={logo.alt} width={447} height={447} />
        </Link>
        <span className="nav-edition" aria-hidden="true">07</span>
      </div>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="event-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? copy.nav.close : copy.nav.menu}
      </button>
      <nav id="event-nav" className={open ? "is-open" : undefined} aria-label={copy.nav.event}>
        {routes.map((route) => {
          const current = pathname === route.href;
          const label = copy.nav[route.key];
          return (
            <Link
              key={route.href}
              href={route.href}
              aria-current={current ? "page" : undefined}
              className={current ? "is-active" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="lang">
          <button
            type="button"
            className="lang-toggle"
            aria-expanded={langOpen}
            aria-controls={langId}
            aria-haspopup="listbox"
            onClick={() => setLangOpen((value) => !value)}
          >
            {copy.nav.language}
            <span>{locale === "bn" ? copy.nav.bangla : copy.nav.english}</span>
          </button>
          {langOpen ? (
            <ul id={langId} className="lang-menu" role="listbox" aria-label={copy.nav.language}>
              <li>
                <button type="button" role="option" aria-selected={locale === "en"} onClick={() => choose("en")}>
                  {copy.nav.english}
                </button>
              </li>
              <li>
                <button type="button" role="option" aria-selected={locale === "bn"} onClick={() => choose("bn")}>
                  {copy.nav.bangla}
                </button>
              </li>
            </ul>
          ) : null}
      </div>
    </header>
  );
}
