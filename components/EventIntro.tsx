"use client";

import { EditorialFigure } from "./EditorialFigure";
import { useLanguage } from "@/lib/language";

export function EventIntro() {
  const { copy } = useLanguage();
  const event = copy.event;

  return (
    <>
      <section className="spread" aria-labelledby="event-title">
        <EditorialFigure id="hall-wide" priority />
        <div className="spread-copy">
          <p className="chapter-no">01</p>
          <p className="eyebrow">{event.eyebrow}</p>
          <h2 id="event-title">{event.whatTitle}</h2>
          <p>{event.what}</p>
        </div>
      </section>
      <section className="spread spread-flip spread-ivory" aria-labelledby="event-athletes">
        <div className="spread-copy">
          <p className="chapter-no">02</p>
          <h2 id="event-athletes">{event.whoTitle}</h2>
          <p>{event.who}</p>
        </div>
        <EditorialFigure id="hall-athletes" />
      </section>
      <section className="plate-full" aria-labelledby="event-dais">
        <EditorialFigure id="dais-address" />
        <div className="plate-full-copy">
          <p className="chapter-no">03</p>
          <h2 id="event-dais">{event.judgedTitle}</h2>
          <p>{event.judged}</p>
        </div>
      </section>
      <section className="spread spread-oxblood" aria-labelledby="event-dance">
        <EditorialFigure id="dance" />
        <div className="spread-copy">
          <p className="chapter-no">04</p>
          <h2 id="event-dance">{event.gatheringTitle}</h2>
          <p>{event.gathering}</p>
        </div>
      </section>
      <section className="spread spread-flip spread-ivory" aria-labelledby="event-banner">
        <div className="spread-copy">
          <p className="chapter-no">05</p>
          <h2 id="event-banner">{event.whereTitle}</h2>
          <p>{event.where}</p>
        </div>
        <EditorialFigure id="children-banner" />
      </section>
      <section className="plate-full plate-full-dark" aria-labelledby="event-night">
        <EditorialFigure id="night-mats" />
        <div className="plate-full-copy">
          <p className="chapter-no">06</p>
          <h2 id="event-night">{event.experienceTitle}</h2>
          <p>{event.experience}</p>
        </div>
      </section>
    </>
  );
}
