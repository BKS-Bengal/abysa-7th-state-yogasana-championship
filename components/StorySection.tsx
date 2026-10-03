"use client";

import { EditorialFigure } from "./EditorialFigure";
import { useLanguage } from "@/lib/language";

export function StorySection() {
  const { copy } = useLanguage();
  const story = copy.story;

  return (
    <>
      <section className="spread" aria-labelledby="story-arrive">
        <EditorialFigure id="children-verandah" priority />
        <div className="spread-copy">
          <p className="chapter-no">01</p>
          <p className="eyebrow">{story.eyebrow}</p>
          <h2 id="story-arrive">{story.arriveTitle}</h2>
          <p>{story.arrive}</p>
        </div>
      </section>
      <section className="plate-full" aria-labelledby="story-ground-title">
        <EditorialFigure id="field-circle" />
        <div className="plate-full-copy">
          <p className="chapter-no">02</p>
          <h2 id="story-ground-title">{story.em.trim()}</h2>
          <p>{story.ground}</p>
        </div>
      </section>
      <section className="spread spread-flip spread-green" aria-labelledby="story-practice">
        <div className="spread-copy">
          <p className="chapter-no">03</p>
          <h2 id="story-practice">{story.practiceTitle}</h2>
          <p>{story.practice}</p>
        </div>
        <EditorialFigure id="practice-rise" />
      </section>
      <section className="spread spread-ivory" aria-labelledby="story-courtyard-title">
        <EditorialFigure id="morning-havan" />
        <div className="spread-copy">
          <p className="chapter-no">04</p>
          <h2 id="story-courtyard-title">{story.courtyardTitle}</h2>
          <p>{story.courtyard}</p>
        </div>
      </section>
      <section className="spread spread-flip" aria-labelledby="story-morning">
        <div className="spread-copy">
          <p className="chapter-no">05</p>
          <h2 id="story-morning">{story.morningTitle}</h2>
          <p>{story.morning}</p>
        </div>
        <EditorialFigure id="morning-address" />
      </section>
      <section className="plate-full plate-full-dark" aria-labelledby="story-interview-title">
        <EditorialFigure id="interview-banner" />
        <div className="plate-full-copy">
          <p className="chapter-no">06</p>
          <p className="eyebrow">{story.interviewEyebrow}</p>
          <h2 id="story-interview-title">{story.interviewTitle}</h2>
          <p>{story.interview}</p>
          <p className="edit-note">{story.interviewNote}</p>
        </div>
      </section>
    </>
  );
}
