"use client";

import { useLanguage } from "@/lib/language";
import { ScrollReveal } from "./ScrollReveal";

export function EventIntro() {
  const { copy } = useLanguage();
  const event = copy.event;

  return (
    <section className="gathering" aria-labelledby="event-title">
      <div className="gathering-copy">
        <ScrollReveal>
          <p className="eyebrow">{event.eyebrow}</p>
          <h2 id="event-title" lang="bn">
            {event.title}
          </h2>
          <p>{event.present}</p>
          <p>{event.championship}</p>
        </ScrollReveal>
        <blockquote>
          <p lang="bn">{event.motto}</p>
          <footer>{event.mottoNote}</footer>
        </blockquote>
      </div>
      <div className="significance">
        <p className="eyebrow">{event.whyEyebrow}</p>
        <h2>
          {event.whyTitle}
          <em>{event.whyEm}</em>
        </h2>
        <p>{event.why}</p>
      </div>
    </section>
  );
}
