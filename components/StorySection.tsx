"use client";

import { useLanguage } from "@/lib/language";

export function StorySection() {
  const { copy } = useLanguage();
  const story = copy.story;

  return (
    <section className="story" aria-labelledby="story-title">
      <p className="eyebrow">{story.eyebrow}</p>
      <h2 id="story-title">
        {story.title}
        <em>{story.em}</em>
      </h2>
      <div className="story-columns">
        <p>{story.hall}</p>
        <p>{story.ground}</p>
        <p>{story.interview}</p>
      </div>
    </section>
  );
}
