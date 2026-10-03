"use client";

import { EditorialFigure } from "./EditorialFigure";
import { useLanguage } from "@/lib/language";

export function EventIntro() {
  const { copy } = useLanguage();
  const event = copy.event;
  const story = copy.story;

  return (
    <>
      <section className="spread" aria-labelledby="event-title">
        <EditorialFigure id="hall-wide" priority />
        <div className="spread-copy">
          <p className="chapter-no">01</p>
          <p className="eyebrow">{event.eyebrow}</p>
          <h2 id="event-title">{event.title}</h2>
          <p>{event.championship}</p>
        </div>
      </section>
      <section className="spread spread-flip spread-ivory" aria-labelledby="event-athletes">
        <div className="spread-copy">
          <p className="chapter-no">02</p>
          <h2 id="event-athletes">{story.title}</h2>
          <p>{story.hall}</p>
        </div>
        <EditorialFigure id="hall-athletes" />
      </section>
      <section className="plate-full" aria-labelledby="event-dais">
        <EditorialFigure id="dais-address" />
        <div className="plate-full-copy">
          <p className="chapter-no">03</p>
          <h2 id="event-dais">{story.addressTitle}</h2>
          <p>{story.address}</p>
        </div>
      </section>
      <section className="spread spread-oxblood" aria-labelledby="event-dance">
        <EditorialFigure id="dance" />
        <div className="spread-copy">
          <p className="chapter-no">04</p>
          <h2 id="event-dance">{story.danceTitle}</h2>
          <p>{story.dance}</p>
        </div>
      </section>
      <section className="spread spread-flip spread-ivory" aria-labelledby="event-banner">
        <div className="spread-copy">
          <p className="chapter-no">05</p>
          <p className="eyebrow">{event.rows[2].term}</p>
          <h2 id="event-banner">{story.bannerTitle}</h2>
          <p>{story.banner}</p>
        </div>
        <EditorialFigure id="children-banner" />
      </section>
      <section className="plate-full plate-full-dark" aria-labelledby="event-night">
        <EditorialFigure id="night-mats" />
        <div className="plate-full-copy">
          <p className="chapter-no">06</p>
          <h2 id="event-night">{story.nightTitle}</h2>
          <p>{story.night}</p>
        </div>
      </section>
    </>
  );
}
