"use client";

import { SiteFrame } from "@/components/SiteFrame";
import { remoteFilms } from "@/lib/media";
import { useLanguage } from "@/lib/language";

export function InformationPage() {
  const { copy } = useLanguage();
  const event = copy.event;
  const feature = copy.home;
  const film = remoteFilms.find((item) => item.id === "yt-shyamal");
  const text = film ? copy.captions[film.id] : undefined;

  return (
    <SiteFrame>
      {film ? (
        <section className="spread feature-interview" aria-labelledby="shyamal-feature">
          <div className="spread-copy">
            <p className="eyebrow">{feature.featureEyebrow}</p>
            <div className="nameplate">
              <p>{feature.featureName}</p>
              <p>{feature.featureRole}</p>
              <p>{feature.featureOrg}</p>
            </div>
            <h2 id="shyamal-feature">{feature.featureTitle}</h2>
            <p>{feature.featureBody}</p>
            <p><a href={film.youtube} target="_blank" rel="noreferrer">{copy.media.open}</a></p>
          </div>
          <figure className="edit-figure">
            <iframe
              src={film.embed}
              title={text?.caption ?? film.caption}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <figcaption>
              <p>{text?.alt ?? film.alt}</p>
            </figcaption>
          </figure>
        </section>
      ) : null}
      <section className="dossier" aria-labelledby="details-title">
        <header className="dossier-head">
          <div className="identity-cluster">
            <img src="/assets/logo/yogasana-bharat-mark.webp" alt="Yogasana Bharat" width={128} height={86} />
            <img src="/assets/logo/abysa.webp" alt="All Bengal Yogasana Sports Association" width={140} height={82} />
            <img src="/assets/logo/world-yogasana.webp" alt="World Yogasana" width={128} height={86} />
          </div>
          <div>
            <p className="eyebrow">{event.recordEyebrow}</p>
            <h2 id="details-title">{event.recordTitle}</h2>
            {event.dateNote ? <p>{event.dateNote}</p> : null}
          </div>
        </header>
        <dl className="dossier-list">
          {event.rows.map((row) => (
            <div key={row.term}>
              <dt>{row.term}</dt>
              <dd lang={row.lang}>{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </SiteFrame>
  );
}
