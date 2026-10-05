"use client";

import { films, stills, type Still } from "@/lib/media";
import { useLanguage } from "@/lib/language";
import { ImageReveal } from "./ImageReveal";

type Props = { onOpen: (id: string) => void };

export const galleryGroups: { id: string; ids: string[] }[] = [
  { id: "day-01", ids: [] },
  { id: "day-02", ids: [] },
  { id: "day-03", ids: ["portrait-navy", "portrait-braid", "portrait-yellow", "portrait-blue", "interview-sofa"] },
  { id: "day-04", ids: [] },
  { id: "wider", ids: ["table-address", "remembrance", "medal-placed", "certificate-youth", "interview-corridor", "night-officials", "night-floor"] },
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

function Shot({ item, onOpen, priority = false }: { item: Still; onOpen: (id: string) => void; priority?: boolean }) {
  const { copy } = useLanguage();
  const text = copy.captions[item.id];
  return (
    <ImageReveal
      {...item}
      alt={text?.alt ?? item.alt}
      caption={text?.caption ?? item.caption}
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
      <header className="chapter-head">
        <p className="eyebrow">{copy.gallery.eyebrow}</p>
        <h2 id="gallery-title">
          {copy.gallery.title}
          <em>{copy.gallery.em}</em>
        </h2>
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
        <h2 id="media-title">
          {copy.media.title}
          <em>{copy.media.em}</em>
        </h2>
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
      </div>
      </div>
    </section>
  );
}
