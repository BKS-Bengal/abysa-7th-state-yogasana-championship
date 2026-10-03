"use client";

import { Hero } from "@/components/Hero";
import { SiteFrame } from "@/components/SiteFrame";
import { eventFacts } from "@/content/facts";
import { useLanguage } from "@/lib/language";

export function HomePage() {
  const { copy, locale } = useLanguage();
  const days = eventFacts.days.filter((day) => day.date || day.theme || (day.moments && day.moments.length > 0));

  return (
    <SiteFrame intro>
      <Hero />
      <section className="programme" id="programme" aria-labelledby="programme-title">
        <div className="band-inner">
          <p className="eyebrow">{copy.home.leadEyebrow}</p>
          <h2 id="programme-title">{copy.home.programmeTitle}</h2>
          <p>{copy.home.programmeLead}</p>
          {days.length > 0 ? (
            <ol className="programme-days">
              {days.map((day, index) => (
                <li key={day.id}>
                  <h3>
                    {locale === "bn" ? `দিন ${index + 1}` : `Day ${index + 1}`}
                    {day.date ? <span>{day.date}</span> : null}
                  </h3>
                  {day.theme ? <p>{day.theme}</p> : null}
                  {day.moments && day.moments.length > 0 ? (
                    <ul>
                      {day.moments.map((moment) => (
                        <li key={moment}>{moment}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ol>
          ) : null}
          <h3>{copy.home.duringTitle}</h3>
          <ul className="programme-during">
            {eventFacts.during[locale].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>{copy.home.leadTitle}</h3>
          <p>{copy.home.lead}</p>
        </div>
      </section>
    </SiteFrame>
  );
}
