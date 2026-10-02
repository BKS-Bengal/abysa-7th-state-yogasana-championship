"use client";

import { EditorialFigure } from "./EditorialFigure";
import { useLanguage } from "@/lib/language";

export function EventDetails() {
  const { copy } = useLanguage();
  const event = copy.event;

  return (
    <section className="details band-charcoal" aria-labelledby="details-title">
      <div className="band-inner edit-split">
        <div className="edit-copy">
          <p className="eyebrow">{event.recordEyebrow}</p>
          <h2 id="details-title">{event.recordTitle}</h2>
          <dl>
            {event.rows.map((row) => (
              <div key={row.term}>
                <dt>{row.term}</dt>
                <dd lang={row.lang}>{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="date-note">{event.dateNote}</p>
        </div>
        <EditorialFigure id="hall-wide" />
      </div>
    </section>
  );
}
