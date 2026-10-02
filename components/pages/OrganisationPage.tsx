"use client";

import { EditorialFigure } from "@/components/EditorialFigure";
import { SiteFrame } from "@/components/SiteFrame";
import { useLanguage } from "@/lib/language";

export function OrganisationPage() {
  const { copy } = useLanguage();
  const page = copy.organisation;

  return (
    <SiteFrame>
      <section className="org-stage band-indigo" aria-labelledby="org-title">
        <p className="org-mark">ABYSA</p>
        <div className="org-stage-body">
          <EditorialFigure id="practice-open" />
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h2 id="org-title">{page.title}</h2>
            <p>{page.lead}</p>
          </div>
        </div>
      </section>
      <section className="leaders-stage band-oxblood" aria-labelledby="leaders-title">
        <p className="eyebrow">{page.leadersEyebrow}</p>
        <h2 id="leaders-title" className="sr-only">{page.leadersEyebrow}</h2>
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
    </SiteFrame>
  );
}
