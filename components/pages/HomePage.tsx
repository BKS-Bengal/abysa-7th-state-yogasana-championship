"use client";

import { EditorialFigure } from "@/components/EditorialFigure";
import { Hero } from "@/components/Hero";
import { SiteFrame } from "@/components/SiteFrame";
import { homeMomentIds } from "@/content/photos";
import { contents } from "@/lib/contents";
import { remoteFilms } from "@/lib/media";
import { useLanguage } from "@/lib/language";

const homeFilmIds = ["yt-shyamal", "yt-abhay", "yt-yajna"];

export function HomePage() {
  const { copy } = useLanguage();

  return (
    <SiteFrame intro>
      <Hero />
      <section className="programme" id="contents" aria-labelledby="contents-title">
        <div className="band-inner">
          <p className="eyebrow">{copy.home.leadEyebrow}</p>
          <h2 id="contents-title">{copy.home.leadTitle}</h2>
          {copy.home.lead.split(/\n\n+/).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h3>{copy.home.programmeTitle}</h3>
          <p>{copy.home.programmeLead}</p>
          <ol className="contents-list">
            {contents.map((chapter) => (
              <li key={chapter.href}>
                <a href={chapter.href}>
                  <span>{chapter.index}</span>
                  {copy.nav[chapter.key]}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="archive band-charcoal" aria-labelledby="home-films-title">
        <div className="band-inner">
          <header className="chapter-head">
            <p className="eyebrow">{copy.home.filmsEyebrow}</p>
            <h2 id="home-films-title">{copy.home.filmsTitle}</h2>
            <p className="lede">{copy.home.filmsLead}</p>
          </header>
          <div className="cinema">
            {homeFilmIds.map((id) => {
              const film = remoteFilms.find((item) => item.id === id);
              if (!film) return null;
              const text = copy.captions[film.id];
              const title = text?.caption ?? film.caption;
              const detail = text?.alt ?? film.alt;
              return (
                <article key={film.id} className="film feature">
                  <iframe
                    src={film.embed}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <span className="film-meta">
                    <strong>{title}</strong>
                    <p>{detail}</p>
                    <a href={film.youtube} target="_blank" rel="noreferrer">{copy.media.open}</a>
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="inside" aria-labelledby="inside-title">
        <div className="inside-head">
          <p className="eyebrow">{copy.home.insideEyebrow}</p>
          <h2 id="inside-title">{copy.home.insideTitle}</h2>
          <p>{copy.home.insideLead}</p>
        </div>
        {homeMomentIds.map((id) => (
          <EditorialFigure key={id} id={id} />
        ))}
      </section>
    </SiteFrame>
  );
}
