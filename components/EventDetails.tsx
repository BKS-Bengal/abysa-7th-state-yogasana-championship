"use client";

import { useLanguage } from "@/lib/language";

export function EventDetails() {
  const { copy } = useLanguage();
  const event = copy.event;

  return (
    <section className="details" aria-labelledby="details-title">
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
    </section>
  );
}
