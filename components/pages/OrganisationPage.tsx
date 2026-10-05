"use client";

import { EditorialFigure } from "@/components/EditorialFigure";
import { SiteFrame } from "@/components/SiteFrame";
import { eventFacts } from "@/content/facts";
import { useLanguage } from "@/lib/language";

export function OrganisationPage() {
  const { copy, locale } = useLanguage();
  const page = copy.organisation;

  return (
    <SiteFrame>
      <section className="affiliate-band" aria-labelledby="partners-title">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h2 id="partners-title">{page.partnersTitle}</h2>
          <h3>{eventFacts.presentedBy[locale]}</h3>
          <p>{page.abysaRole}</p>
          <dl className="leaders leaders-display">
            <div>
              <dt>{page.presidentTerm}</dt>
              <dd>{eventFacts.people.shyamal[locale]}</dd>
            </div>
            <div>
              <dt>{page.secretaryTerm}</dt>
              <dd>{eventFacts.people.papiya[locale]}</dd>
            </div>
          </dl>
          <h3>{eventFacts.yogasanaBharat[locale]}</h3>
          <p>{page.nationalRole}</p>
          <h3>{eventFacts.worldYogasana[locale]}</h3>
          <h3>{copy.information.organisersEyebrow}</h3>
          <p>{page.jointRole}</p>
          <p>{eventFacts.jointOrganisers[locale]}</p>
          <p>{page.joint}</p>
        </div>
      </section>
      <section className="spread" aria-labelledby="org-title">
        <EditorialFigure id="organisers-court" priority />
        <div className="spread-copy">
          <p className="chapter-no">01</p>
          <p className="eyebrow">{page.eyebrow}</p>
          <h2 id="org-title">{page.title}</h2>
          {page.lead.split(/\n\n+/).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section className="spread spread-flip spread-ivory" aria-labelledby="org-crew">
        <div className="spread-copy">
          <p className="chapter-no">02</p>
          <h2 id="org-crew">{page.filmedTitle}</h2>
          {page.filmed.split(/\n\n+/).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <EditorialFigure id="day-crew" />
      </section>
    </SiteFrame>
  );
}
