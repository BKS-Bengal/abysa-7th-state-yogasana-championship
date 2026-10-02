"use client";

import { useEffect, useState } from "react";
import { logo } from "@/lib/media";

const links = [
  { href: "#home", label: "Home" },
  { href: "#event", label: "Event" },
  { href: "#story", label: "Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#media", label: "Media" },
  { href: "#information", label: "Information" },
];

type Props = { ready: boolean };

export function Header({ ready }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const arrive = () => {
      document.querySelector(".site-header")?.classList.add("is-ready");
    };
    if (ready) arrive();
    window.addEventListener("pjm-intro-arrive", arrive);
    return () => window.removeEventListener("pjm-intro-arrive", arrive);
  }, [ready]);

  useEffect(() => {
    if (!ready) return;
    const nodes = links
      .map((link) => document.querySelector(link.href))
      .filter((node): node is Element => node != null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.4] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [ready]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={ready ? "site-header is-ready" : "site-header"}>
      <a className="skip" href="#event">
        Skip to the event
      </a>
      <a className="seal" href="#home" aria-label="Yogasana Bharat">
        <img src={logo.src} alt={logo.alt} width={447} height={447} />
      </a>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="event-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="event-nav" className={open ? "is-open" : undefined} aria-label="Event">
        {links.map((link) => {
          const id = link.href.slice(1);
          const current = active === id;
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={current ? "true" : undefined}
              className={current ? "is-active" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
