"use client";

import { EditorialFigure } from "@/components/EditorialFigure";
import { prakritiArt, remoteFilms } from "@/lib/media";
import { SiteFrame } from "@/components/SiteFrame";
import { useLanguage } from "@/lib/language";

const pairIds = new Set(["morning-address", "morning-havan", "practice-low", "practice-rise"]);

export function PrakritiPage() {
  const { copy, locale } = useLanguage();
  const page = copy.prakriti;
  const interview = remoteFilms.find((film) => film.id === "yt-shyamal");
  let mediaIndex = 0;

  return (
    <SiteFrame>
      <section className="prakriti-stage" aria-labelledby="prakriti-title">
        <div className="prakriti-intro">
          <p className="eyebrow">{page.eyebrow}</p>
          <h2 id="prakriti-title" className="prakriti-display">
            {page.title}
          </h2>
          <p lang={locale === "bn" ? "bn" : "en"}>{page.bangla}</p>
        </div>
        <figure className="prakriti-frame">
          <span className="prakriti-corner tl" aria-hidden="true" />
          <span className="prakriti-corner tr" aria-hidden="true" />
          <span className="prakriti-corner bl" aria-hidden="true" />
          <span className="prakriti-corner br" aria-hidden="true" />
          <img src={prakritiArt.src} alt={prakritiArt.alt} width={prakritiArt.width} height={prakritiArt.height} />
        </figure>
        <div className="prakriti-copy">
          {page.definition ? <p className="prakriti-lead">{page.definition}</p> : null}
          {page.lead ? <p className="prakriti-lead">{page.lead}</p> : null}
          {page.note ? <p>{page.note}</p> : null}
        </div>
      </section>
      {page.sections.map((section, index) => {
        const figures = section.figures ?? [];
        const flip = figures.length > 0 && mediaIndex++ % 2 === 1;
        const pair = figures.length > 1 && figures.every((id) => pairIds.has(id));
        const href = section.link
          ? section.link.href.includes("hdyJD2A38dY") && interview
            ? interview.youtube
            : section.link.href
          : "";
        return (
          <section
            className={["prakriti-spread", figures.length ? "" : "is-text", flip ? "is-flip" : "", pair ? "has-pair" : ""].filter(Boolean).join(" ")}
            key={section.title}
            aria-labelledby={`prakriti-${index}`}
          >
            <div className="prakriti-head">
              <p className="chapter-no">{String(index + 2).padStart(2, "0")}</p>
              <h2 id={`prakriti-${index}`}>{section.title}</h2>
            </div>
            {figures.length ? (
              <div className="prakriti-media">
                {figures.map((id) => (
                  <EditorialFigure key={id} id={id} />
                ))}
              </div>
            ) : null}
            <div className="prakriti-body">
              {section.body.split(/\n\n+/).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.link ? (
                <p><a href={href} target="_blank" rel="noreferrer">{section.link.label}</a></p>
              ) : null}
            </div>
          </section>
        );
      })}
    </SiteFrame>
  );
}
