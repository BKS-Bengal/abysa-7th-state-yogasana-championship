"use client";

import { EditorialFigure } from "@/components/EditorialFigure";
import { SiteFrame } from "@/components/SiteFrame";
import { useLanguage } from "@/lib/language";

export function YogasanaPage() {
  const { copy } = useLanguage();
  const page = copy.yogasana;

  return (
    <SiteFrame>
      <section className="chapter band-indigo yoga-statement" aria-labelledby="yogasana-title">
        <div className="band-inner">
          <p className="chapter-no">01</p>
          <p className="eyebrow">{page.eyebrow}</p>
          <h2 id="yogasana-title">
            {page.title}
            <em>{page.em}</em>
          </h2>
          <blockquote>
            <p lang="bn">{copy.event.motto}</p>
            <footer>{page.mottoNote}</footer>
          </blockquote>
        </div>
      </section>
      <EditorialFigure id="practice-rise" className="yoga-bleed" />
      <section className="chapter band-green yoga-ground" aria-labelledby="yogasana-ground">
        <div className="band-inner">
          <p className="chapter-no">02</p>
          <h2 id="yogasana-ground">{copy.event.whyTitle}</h2>
          <p>{page.lead}</p>
          <p>{page.practice}</p>
          <p>{page.sport}</p>
        </div>
        <EditorialFigure id="practice-lead" className="yoga-side" />
      </section>
    </SiteFrame>
  );
}
