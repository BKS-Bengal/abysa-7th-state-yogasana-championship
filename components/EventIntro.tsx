"use client";

import { EditorialFigure } from "./EditorialFigure";
import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/lib/language";

export function EventIntro() {
  const { copy } = useLanguage();
  const event = copy.event;

  return (
    <>
      <section className="event-poster" aria-labelledby="event-title">
        <div className="event-poster-copy">
          <ScrollReveal>
            <p className="edition">07</p>
            <p className="eyebrow">{event.eyebrow}</p>
            <h2 id="event-title" className="event-display">{event.title}</h2>
          </ScrollReveal>
          <blockquote>
            <p lang="bn">{event.motto}</p>
            <footer>{event.mottoNote}</footer>
          </blockquote>
        </div>
        <EditorialFigure id="championship-dais" className="event-poster-photo" />
        <div className="event-poster-note">
          <p>{event.championship}</p>
          <p>{event.present}</p>
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
