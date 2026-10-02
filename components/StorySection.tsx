"use client";

import { EditorialFigure } from "./EditorialFigure";
import { useLanguage } from "@/lib/language";

export function StorySection() {
  const { copy } = useLanguage();
  const story = copy.story;

  return (
    <>
      <section className="story-open band-indigo" aria-labelledby="story-open-title">
        <p className="chapter-no">01</p>
        <p className="eyebrow">{copy.yogasana.eyebrow}</p>
        <h2 id="story-open-title">
          {copy.yogasana.title}
          <em>{copy.yogasana.em}</em>
        </h2>
        <p>{copy.yogasana.sport}</p>
      </section>
      <section className="story-hall band-oxblood" aria-labelledby="story-title">
        <EditorialFigure id="hall-assembly" className="story-hall-photo" />
        <div className="story-hall-copy">
          <p className="chapter-no">02</p>
          <p className="eyebrow">{story.eyebrow}</p>
          <h2 id="story-title">{story.title}</h2>
          <p>{story.hall}</p>
        </div>
      </section>
      <section className="story-ground" aria-labelledby="story-ground-title">
        <div className="story-ground-copy">
          <p className="chapter-no">03</p>
          <p className="eyebrow">{story.eyebrow}</p>
          <h2 id="story-ground-title">{story.em.trim()}</h2>
          <p>{story.ground}</p>
        </div>
        <EditorialFigure id="practice-rise" className="story-ground-photo" />
      </section>
      <section className="story-interview band-charcoal" aria-labelledby="story-interview-title">
        <EditorialFigure id="interview-seated" className="story-interview-photo" />
        <div className="story-interview-copy">
          <p className="chapter-no">04</p>
          <p className="eyebrow">{story.interviewEyebrow}</p>
          <h2 id="story-interview-title">{story.interviewTitle}</h2>
          <p>{story.interview}</p>
          <p className="edit-note">{story.interviewNote}</p>
        </div>
      </section>
    </>
  );
}
