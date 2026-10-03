"use client";

import { EditorialFigure } from "@/components/EditorialFigure";
import { SiteFrame } from "@/components/SiteFrame";
import { logo } from "@/lib/media";
import { useLanguage } from "@/lib/language";

export function YogasanaPage() {
  const { copy } = useLanguage();
  const page = copy.yogasana;

  return (
    <SiteFrame>
      <section className="spread" aria-labelledby="yogasana-title">
        <EditorialFigure id="practice-low" priority />
        <div className="spread-copy">
          <p className="chapter-no">01</p>
          <p className="eyebrow">{page.eyebrow}</p>
          <h2 id="yogasana-title">
            {page.title}
            <em>{page.em}</em>
          </h2>
          <p>{page.practice}</p>
        </div>
      </section>
      <section className="spread spread-flip spread-ivory" aria-labelledby="yogasana-athlete">
        <div className="spread-copy">
          <p className="chapter-no">02</p>
          <h2 id="yogasana-athlete">{page.lead}</h2>
          <p>{page.sport}</p>
        </div>
        <EditorialFigure id="portrait-jersey" />
      </section>
      <section className="plate-full plate-full-dark" aria-labelledby="yogasana-close">
        <EditorialFigure id="night-asana" />
        <div className="plate-full-copy">
          <p className="chapter-no">03</p>
          <h2 id="yogasana-close">{page.session}</h2>
          <blockquote>
            {copy.information.title !== copy.event.motto ? <p>{copy.information.title}</p> : null}
            <p lang="sa">{copy.event.motto}</p>
            <footer>{page.mottoNote}</footer>
          </blockquote>
          <div className="seal-row">
            <img src={logo.src} alt="" width={72} height={72} />
            <p>{page.pathway}</p>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
