"use client";

import Link from "next/link";
import { EditorialFigure } from "@/components/EditorialFigure";
import { Hero } from "@/components/Hero";
import { SiteFrame } from "@/components/SiteFrame";
import { useLanguage } from "@/lib/language";

const onward = [
  { href: "/event", key: "event" },
  { href: "/story", key: "story" },
  { href: "/gallery", key: "gallery" },
  { href: "/media", key: "media" },
  { href: "/information", key: "information" },
] as const;

export function HomePage() {
  const { copy } = useLanguage();

  return (
    <SiteFrame intro>
      <Hero />
      <section className="home-lead band-charcoal" aria-labelledby="home-lead-title">
        <div className="band-inner edit-split">
          <div className="edit-copy">
            <p className="eyebrow">{copy.home.leadEyebrow}</p>
            <h2 id="home-lead-title">
              {copy.home.leadTitle}
              <em>{copy.home.leadEm}</em>
            </h2>
            <p>{copy.home.lead}</p>
            <ul className="home-routes">
              {onward.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{copy.nav[item.key]}</Link>
                </li>
              ))}
            </ul>
          </div>
          <EditorialFigure id="field-circle" />
        </div>
      </section>
    </SiteFrame>
  );
}
