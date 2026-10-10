"use client";

import { useState } from "react";
import { films, remoteFilms, stills, type RemoteFilm, type Still } from "@/lib/media";
import { useLanguage } from "@/lib/language";
import { GalleryReel } from "./GalleryReel";
import { ImageReveal } from "./ImageReveal";

type Props = { onOpen: (id: string) => void };

export const galleryGroups: { id: string; ids: string[] }[] = [
  { id: "recorded", ids: ["portrait-navy", "portrait-braid", "portrait-yellow", "portrait-blue"] },
  { id: "recognition", ids: ["recognition-steps", "recognition-medal", "medal-placed", "recognition-stand", "certificate-youth", "recognition-saree", "recognition-blue", "recognition-gold", "recognition-orange", "recognition-pair", "recognition-line"] },
  { id: "hall", ids: ["table-address", "remembrance", "interview-sofa", "interview-corridor", "night-officials", "night-floor"] },
];

const span: Record<string, string> = {
  "table-address": "span-pair",
  remembrance: "span-pair",
  "interview-sofa": "span-all",
  "night-officials": "span-pair",
  "night-floor": "span-all",
  "medal-placed": "span-all",
  "certificate-youth": "span-all",
};

const byId = new Map(stills.map((item) => [item.id, item]));

function RemoteFilmCard({ film }: { film: RemoteFilm }) {
  const { copy } = useLanguage();
  const [playing, setPlaying] = useState(false);
  const text = copy.captions[film.id];
  const title = text?.caption ?? film.caption;
  const detail = text?.alt ?? film.alt;
  const shape = film.vertical ? "film short" : "film feature";
  return (
    <article className={shape}>
      {playing ? (
        <iframe
          src={`${film.embed}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button type="button" className="plate-button" onClick={() => setPlaying(true)} aria-label={`${title}. ${copy.media.play}`}>
          <img src={film.poster} alt="" width={film.vertical ? 360 : 1280} height={film.vertical ? 640 : 720} loading="lazy" />
          <span className="film-play">{copy.media.play}</span>
        </button>
      )}
      <span className="film-meta">
        <span>{copy.media.fig} {film.plate}</span>
        <strong>{title}</strong>
        <p>{detail}</p>
        <a href={film.youtube} target="_blank" rel="noreferrer">{copy.media.open}</a>
      </span>
    </article>
  );
}

function Shot({ item, onOpen, priority = false }: { item: Still; onOpen: (id: string) => void; priority?: boolean }) {
  const { copy } = useLanguage();
  const text = copy.captions[item.id];
  return (
    <ImageReveal
      {...item}
      alt={text?.alt ?? item.alt}
      caption={(text?.caption ?? item.caption)?.trim() || undefined}
      className={span[item.id] ?? ""}
      onOpen={() => onOpen(item.id)}
      priority={priority}
    />
  );
}

export function GalleryView({ onOpen }: Props) {
  const { copy } = useLanguage();
  return (
    <section className="gallery tone-photo" aria-labelledby="gallery-title">
      <GalleryReel />
      <header className="chapter-head">
        <p className="eyebrow">{copy.gallery.eyebrow}</p>
        <h2 id="gallery-title">{copy.gallery.title}</h2>
        {copy.gallery.em ? <p className="lede">{copy.gallery.em}</p> : null}
      </header>
      {galleryGroups.map((group, groupIndex) => {
        const words = copy.gallery.groups.find((item) => item.id === group.id);
        const items = group.ids.map((id) => byId.get(id)).filter((item): item is Still => item != null);
        return (
          <div className="gallery-group" key={group.id}>
            <header className="group-head">
              <p className="eyebrow">{words?.kicker}</p>
              <h3>
                <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                {words?.title}
              </h3>
              <p>{words?.note}</p>
            </header>
            <div className="exhibit">
              {items.map((item, index) => (
                <Shot key={item.id} item={item} onOpen={onOpen} priority={groupIndex === 0 && index === 0} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export function MediaView({ onOpen }: Props) {
  const { copy } = useLanguage();
  return (
    <section className="archive band-charcoal" aria-labelledby="media-title">
      <div className="band-inner">
      <header className="chapter-head">
        <p className="eyebrow">{copy.media.eyebrow}</p>
        <h2 id="media-title">{copy.media.title}</h2>
        {copy.media.em ? <p className="lede">{copy.media.em}</p> : null}
      </header>
      <div className="cinema">
        {films.map((film, index) => {
          const text = copy.captions[film.id];
          return (
            <button
              key={film.id}
              type="button"
              className={index === 0 ? "film feature" : "film rail"}
              onClick={() => onOpen(film.id)}
            >
              <img src={film.poster} alt="" width={film.width} height={film.height} loading={index === 0 ? "eager" : "lazy"} />
              <span className="film-meta">
                <span>{copy.media.fig} {film.plate}</span>
                <strong>{text?.caption ?? film.caption}</strong>
                {film.day ? <span>{film.day}</span> : null}
                {film.duration ? <span>{film.duration}</span> : null}
                <span>{copy.media.play}</span>
              </span>
            </button>
          );
        })}
        {remoteFilms.map((film) => (
          <RemoteFilmCard key={film.id} film={film} />
        ))}
      </div>
      </div>
    </section>
  );
}
