"use client";

import { EditorialFigure } from "@/components/EditorialFigure";
import { SiteFrame } from "@/components/SiteFrame";
import { useLanguage } from "@/lib/language";

export function InformationPage() {
  const { copy } = useLanguage();
  const event = copy.event;

  return (
    <SiteFrame>
      <section className="info-hero band-saffron" aria-labelledby="details-title">
        <p className="info-edition">07</p>
        <div>
          <p className="eyebrow">{event.recordEyebrow}</p>
          <h2 id="details-title">{event.recordTitle}</h2>
        </div>
      </section>
      <section className="details info-record">
        <dl>
          {event.rows.map((row) => (
            <div key={row.term}>
              <dt>{row.term}</dt>
              <dd lang={row.lang}>{row.value}</dd>
            </div>
          ))}
        </dl>
        <p className="date-note">{event.dateNote}</p>
      </section>
      <EditorialFigure id="hall-wide" className="info-photo" />
    </SiteFrame>
  );
}
