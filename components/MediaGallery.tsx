"use client";

import { films, stills, type Still } from "@/lib/media";
import { useLanguage } from "@/lib/language";
import { ImageReveal } from "./ImageReveal";

type Props = { onOpen: (id: string) => void };

const groups: { id: string; ids: string[]; crop?: boolean }[] = [
  {
    id: "interview",
    ids: ["interview-seated", "interview-camera"],
  },
  {
    id: "moments",
    ids: [
      "championship-dais",
      "address",
      "dais-speaker",
      "dance-pair",
      "dance-record",
      "dance-turn",
      "remembrance",
      "ceremony-table",
      "offering",
    ],
  },
  {
    id: "community",
    ids: ["hall-assembly", "athletes-hall", "young-athletes", "from-the-floor", "hall-wide", "crossing-dais"],
  },
  {
    id: "practice",
    ids: [
      "practice-ground",
      "practice-warrior",
      "practice-squat",
      "practice-open",
      "practice-rise",
      "practice-lead",
    ],
    crop: true,
  },
  {
    id: "atmosphere",
    ids: ["field-circle", "courtyard"],
  },
];

const byId = new Map(stills.map((item) => [item.id, item]));

function rows(items: Still[]) {
  const pattern = [2, 3, 2, 3];
  const result: Still[][] = [];
  let index = 0;
  let step = 0;
  while (index < items.length) {
    const size = Math.min(pattern[step % pattern.length], items.length - index);
    result.push(items.slice(index, index + size));
    index += size;
    step += 1;
  }
  return result;
}

function Shot({ item, className, crop, onOpen }: { item: Still; className?: string; crop?: boolean; onOpen: (id: string) => void }) {
  const { copy } = useLanguage();
  const text = copy.captions[item.id];
  return (
    <ImageReveal
      {...item}
      alt={text?.alt ?? item.alt}
      caption={text?.caption ?? item.caption}
      className={[className, crop ? "crop-mark" : ""].filter(Boolean).join(" ")}
      onOpen={() => onOpen(item.id)}
    />
  );
}

export function GalleryView({ onOpen }: Props) {
  const { copy } = useLanguage();
  return (
    <section className="gallery" aria-labelledby="gallery-title">
      <header className="chapter-head">
        <p className="eyebrow">{copy.gallery.eyebrow}</p>
        <h2 id="gallery-title">
          {copy.gallery.title}
          <em>{copy.gallery.em}</em>
        </h2>
      </header>
      {groups.map((group) => {
        const words = copy.gallery.groups.find((item) => item.id === group.id);
        const items = group.ids.map((id) => byId.get(id)).filter((item): item is Still => item != null);
        const [lead, second, third, ...rest] = items;
        return (
          <div className="gallery-group" key={group.id}>
            <header className="group-head">
              <p className="eyebrow">{words?.kicker}</p>
              <h3>{words?.title}</h3>
              <p>{words?.note}</p>
            </header>
              {lead ? <Shot item={lead} className="bleed" crop={group.crop} onOpen={onOpen} /> : null}
              {rows(second ? [second, third, ...rest].filter((item): item is Still => item != null) : []).map((row, index) =>
                row.length === 1 ? (
                  <Shot key={row[0].id} item={row[0]} className="offset-still" crop={group.crop} onOpen={onOpen} />
                ) : (
                  <div key={index} className={row.length === 3 ? "trio" : "split uneven"}>
                    {row.map((item) => (
                      <Shot key={item.id} item={item} crop={group.crop} onOpen={onOpen} />
                    ))}
                  </div>
                ),
              )}
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
      <div className="films">
        {films.map((film) => {
          const text = copy.captions[film.id];
          return (
            <button
              key={film.id}
              type="button"
              className={film.width > film.height ? "film wide" : "film"}
              onClick={() => onOpen(film.id)}
            >
              <img src={film.poster} alt="" width={film.width} height={film.height} loading="lazy" />
              <span className="film-meta">
                <span>
                  {copy.media.play} · {film.plate}
                </span>
                <strong>{text?.caption ?? film.caption}</strong>
              </span>
            </button>
          );
        })}
      </div>
      </div>
    </section>
  );
}
