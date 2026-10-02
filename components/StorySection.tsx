"use client";

import { stills } from "@/lib/media";
import { useLanguage } from "@/lib/language";
import { ImageReveal } from "./ImageReveal";

const interviewIds = ["interview-seated", "interview-camera"];

type Props = { onOpen: (id: string) => void };

export function StorySection({ onOpen }: Props) {
  const { copy } = useLanguage();
  const story = copy.story;
  const plates = interviewIds
    .map((id) => stills.find((item) => item.id === id))
    .filter((item) => item != null);

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
      <div className="story-interview">
        <header className="group-head">
          <p className="eyebrow">{story.interviewEyebrow}</p>
          <h3>{story.interviewTitle}</h3>
          <p>{story.interviewNote}</p>
        </header>
        <div className="split uneven">
          {plates.map((item) => {
            const text = copy.captions[item.id];
            return (
              <ImageReveal
                key={item.id}
                {...item}
                alt={text?.alt ?? item.alt}
                caption={text?.caption ?? item.caption}
                onOpen={() => onOpen(item.id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
