"use client";

import { EditorialFigure } from "@/components/EditorialFigure";
import { Hero } from "@/components/Hero";
import { SiteFrame } from "@/components/SiteFrame";
import { homeMomentIds } from "@/content/photos";
import { contents } from "@/lib/contents";
import { useLanguage } from "@/lib/language";

export function HomePage() {
  const { copy } = useLanguage();

  return (
    <SiteFrame intro>
      <Hero />
      <section className="programme" id="contents" aria-labelledby="contents-title">
        <div className="band-inner">
          <p className="eyebrow">{copy.home.leadEyebrow}</p>
          <h2 id="contents-title">{copy.home.leadTitle}</h2>
          <p>{copy.home.lead}</p>
          <h3>{copy.home.programmeTitle}</h3>
          <p>{copy.home.programmeLead}</p>
          <ol className="contents-list">
            {contents.map((chapter) => (
              <li key={chapter.href}>
                <a href={chapter.href}>
                  <span>{chapter.index}</span>
                  {copy.nav[chapter.key]}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="inside" aria-labelledby="inside-title">
        <div className="inside-head">
          <p className="eyebrow">{copy.home.insideEyebrow}</p>
          <h2 id="inside-title">{copy.home.insideTitle}</h2>
          <p>{copy.home.insideLead}</p>
        </div>
        {homeMomentIds.map((id) => (
          <EditorialFigure key={id} id={id} />
        ))}
      </section>
    </SiteFrame>
  );
}
