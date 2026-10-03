"use client";

import { SiteFrame } from "@/components/SiteFrame";
import { logo } from "@/lib/media";
import { useLanguage } from "@/lib/language";

export function InformationPage() {
  const { copy } = useLanguage();
  const event = copy.event;

  return (
    <SiteFrame>
      <section className="dossier" aria-labelledby="details-title">
        <header className="dossier-head">
          <img src={logo.src} alt="" width={84} height={84} />
          <div>
            <p className="eyebrow">{event.recordEyebrow}</p>
            <h2 id="details-title">{event.recordTitle}</h2>
            <p>{event.dateNote}</p>
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
