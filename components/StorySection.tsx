"use client";

import { Fragment } from "react";
import { dayDate } from "@/content/facts";
import { EditorialFigure } from "./EditorialFigure";
import { useLanguage } from "@/lib/language";

const dayFigures: Record<string, string[]> = {
  "day-02": ["children-verandah", "field-circle", "practice-rise"],
  "day-03": ["morning-address", "morning-havan", "indoor-session"],
};

export function StorySection() {
  const { copy, locale } = useLanguage();
  const story = copy.story;

  return (
    <>
      <section className="chronicle-open" aria-labelledby="chronicle-title">
        <p className="eyebrow">{story.daysLabel}</p>
        <h2 id="chronicle-title">{story.daysLabel}</h2>
        <p>{story.daysLead}</p>
        <nav className="day-nav" aria-label={story.daysLabel}>
          {story.days.map((day) => (
            <a key={day.id} href={`#${day.id}`}>
              <span>{day.number}</span>
              {dayDate(day.id, locale)}
            </a>
          ))}
        </nav>
      </section>
      {story.days.map((day, index) => {
        const next = story.days[index + 1];
        const figures = dayFigures[day.id] ?? [];
        return (
          <article className={day.id} id={day.id} key={day.id}>
            <div className="day-chapter">
              <p className="chapter-no">{day.number}</p>
              <p className="eyebrow">{dayDate(day.id, locale)}</p>
              <h2>{day.title}</h2>
              <p className="day-open">{day.opening}</p>
              {figures.length === 0
                ? day.passages.map((passage) => <p key={passage}>{passage}</p>)
                : day.passages[0]
                  ? <p>{day.passages[0]}</p>
                  : null}
            </div>
            {figures.map((id, figureIndex) => (
              <Fragment key={id}>
                {figureIndex > 0 && day.passages[figureIndex] ? (
                  <div className="day-chapter day-beat">
                    <p>{day.passages[figureIndex]}</p>
                  </div>
                ) : null}
                <EditorialFigure id={id} className="day-plate" priority={figureIndex === 0} />
              </Fragment>
            ))}
            {figures.length > 0
              ? day.passages.slice(figures.length).map((passage) => (
                  <div className="day-chapter day-beat" key={passage}>
                    <p>{passage}</p>
                  </div>
                ))
              : null}
            <div className="day-chapter">
              <p className="day-close">{day.close}</p>
              <a className="day-next" href={next ? `#${next.id}` : "#plates"}>
                {next ? next.title : story.interviewTitle}
              </a>
            </div>
          </article>
        );
      })}
      <section className="spread spread-flip spread-story" id="plates" aria-labelledby="story-interview-title">
        <div className="spread-copy">
          <p className="eyebrow">{story.interviewEyebrow}</p>
          <h2 id="story-interview-title">{story.interviewTitle}</h2>
          <p>{story.interview}</p>
          <p className="edit-note">{story.interviewNote}</p>
        </div>
        <EditorialFigure id="interview-banner" />
      </section>
    </>
  );
}
