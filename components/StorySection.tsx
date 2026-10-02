"use client";

import { EditorialFigure } from "./EditorialFigure";
import { useLanguage } from "@/lib/language";

export function StorySection() {
  const { copy } = useLanguage();
  const story = copy.story;

  return (
    <>
      <section className="story band-oxblood" aria-labelledby="story-title">
        <div className="band-inner edit-split">
          <div className="edit-copy">
            <p className="eyebrow">{story.eyebrow}</p>
            <h2 id="story-title">{story.title}</h2>
            <p>{story.hall}</p>
          </div>
          <EditorialFigure id="hall-assembly" />
        </div>
      </section>
      <section className="story-ground" aria-labelledby="story-ground-title">
        <div className="edit-split image-lead">
          <EditorialFigure id="practice-rise" />
          <div className="edit-copy">
            <p className="eyebrow">{story.eyebrow}</p>
            <h2 id="story-ground-title">{story.em.trim()}</h2>
            <p>{story.ground}</p>
          </div>
        </div>
      </section>
      <section className="story-interview band-charcoal" aria-labelledby="story-interview-title">
        <div className="band-inner edit-split">
          <div className="edit-copy">
            <p className="eyebrow">{story.interviewEyebrow}</p>
            <h2 id="story-interview-title">{story.interviewTitle}</h2>
            <p>{story.interview}</p>
            <p className="edit-note">{story.interviewNote}</p>
          </div>
          <EditorialFigure id="interview-seated" />
        </div>
      </section>
    </>
  );
}
