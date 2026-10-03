"use client";

import { SiteFrame } from "@/components/SiteFrame";
import { useLanguage } from "@/lib/language";

export function InformationPage() {
  const { copy } = useLanguage();
  const event = copy.event;

  return (
    <SiteFrame>
      <section className="dossier" aria-labelledby="details-title">
        <header className="dossier-head">
          <div className="identity-cluster">
            <img src="/assets/logo/yogasana-bharat-mark.webp" alt="Yogasana Bharat" width={128} height={86} />
            <img src="/assets/logo/abysa.webp" alt="All Bengal Yogasana Sports Association" width={140} height={82} />
            <img src="/assets/logo/world-yogasana.webp" alt="World Yogasana" width={128} height={86} />
          </div>
          <div>
            <p className="eyebrow">{event.recordEyebrow}</p>
            <h2 id="details-title">{event.recordTitle}</h2>
            {event.dateNote ? <p>{event.dateNote}</p> : null}
          </div>
        </header>
        <dl className="dossier-list">
          {event.rows.map((row) => (
            <div key={row.term}>
              <dt>{row.term}</dt>
              <dd lang={row.lang}>{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </SiteFrame>
  );
}
