"use client";

import { EditorialFigure } from "@/components/EditorialFigure";
import { SiteFrame } from "@/components/SiteFrame";
import { logo } from "@/lib/media";
import { useLanguage } from "@/lib/language";

export function OrganisationPage() {
  const { copy } = useLanguage();
  const page = copy.organisation;

  return (
    <SiteFrame>
      <section className="spread" aria-labelledby="org-title">
        <EditorialFigure id="organisers-court" priority />
        <div className="spread-copy">
          <p className="chapter-no">01</p>
          <p className="eyebrow">{page.eyebrow}</p>
          <h2 id="org-title">{page.title}</h2>
          <p>{page.lead}</p>
        </div>
      </section>
      <section className="spread spread-flip spread-ivory" aria-labelledby="org-crew">
        <div className="spread-copy">
          <p className="chapter-no">02</p>
          <h2 id="org-crew">{page.filmedTitle}</h2>
          <p>{page.filmed}</p>
        </div>
        <EditorialFigure id="day-crew" />
      </section>
      <section className="leaders-stage band-oxblood" aria-labelledby="leaders-title">
        <p className="chapter-no">03</p>
        <p className="eyebrow">{page.leadersEyebrow}</p>
        <h2 id="leaders-title" className="sr-only">
          {page.leadersEyebrow}
        </h2>
        <dl className="leaders leaders-display">
          <div>
            <dt>{page.presidentTerm}</dt>
            <dd>{page.president}</dd>
          </div>
          <div>
            <dt>{page.secretaryTerm}</dt>
            <dd>{page.secretary}</dd>
          </div>
        </dl>
        <p className="leaders-note">{page.joint}</p>
      </section>
      <section className="affiliate-band" aria-labelledby="affiliate-title">
        <img src={logo.src} alt={logo.alt} width={96} height={96} />
        <div>
          <p className="chapter-no">04</p>
          <h2 id="affiliate-title">{copy.information.title}</h2>
          <p>{copy.information.affiliation}</p>
          <p>{copy.information.organisers}</p>
        </div>
      </section>
    </SiteFrame>
  );
}
