"use client";

import { summaryRows } from "@/content/facts";
import { useLanguage } from "@/lib/language";

export function EventDetails() {
  const { copy, locale } = useLanguage();
  const ribbon = summaryRows(locale);

  if (ribbon.length === 0) return null;

  return (
    <section className="fact-ribbon" aria-label={copy.event.recordTitle}>
      {ribbon.map((row) => (
        <article key={row.term}>
          <p>{row.term}</p>
          <strong>{row.value}</strong>
        </article>
      ))}
    </section>
  );
}
