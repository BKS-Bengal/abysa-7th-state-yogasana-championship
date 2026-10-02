"use client";

import { EditorialFigure } from "./EditorialFigure";
import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/lib/language";

export function EventIntro() {
  const { copy } = useLanguage();
  const event = copy.event;

  return (
    <>
      <section className="gathering" aria-labelledby="event-title">
        <div className="edit-split">
          <div className="gathering-copy edit-copy">
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
          <EditorialFigure id="championship-dais" className="edit-overlap" />
        </div>
      </section>
      <section className="significance band-oxblood" aria-labelledby="significance-title">
        <div className="band-inner edit-split image-lead">
          <EditorialFigure id="practice-lead" />
          <div className="edit-copy">
            <p className="eyebrow">{event.whyEyebrow}</p>
            <h2 id="significance-title">
              {event.whyTitle}
              <em>{event.whyEm}</em>
            </h2>
            <p>{event.why}</p>
          </div>
        </div>
      </section>
    </>
  );
}
