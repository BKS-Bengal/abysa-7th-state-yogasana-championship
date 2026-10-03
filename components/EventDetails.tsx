"use client";

import { useLanguage } from "@/lib/language";

export function EventDetails() {
  const { copy } = useLanguage();
  const event = copy.event;
  const ribbon = [event.rows[1], event.rows[5], event.rows[6]];

  return (
    <section className="fact-ribbon" aria-label={event.recordTitle}>
      {ribbon.map((row) => (
        <article key={row.term}>
          <p>{row.term}</p>
          <strong>{row.value}</strong>
        </article>
      ))}
    </section>
  );
}
