"use client";

import { films, stills, type Still } from "@/lib/media";
import { ImageReveal } from "./ImageReveal";

type Props = { onOpen: (id: string) => void };

const groups: { id: string; kicker: string; title: string; note: string; ids: string[]; crop?: boolean }[] = [
  {
    id: "interview",
    kicker: "Interview",
    title: "In front of the banner",
    note: "Dr (Major) Narayan Bhattacharya.",
    ids: ["interview-seated", "interview-camera"],
  },
  {
    id: "moments",
    kicker: "Moments",
    title: "The hall and the dais",
    note: "Address, dance, and the championship banner.",
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
    kicker: "Community",
    title: "Who was in the room",
    note: "Athletes, the seated hall, and the corridor.",
    ids: ["hall-assembly", "athletes-hall", "young-athletes", "from-the-floor", "hall-wide", "crossing-dais"],
  },
  {
    id: "practice",
    kicker: "Practice",
    title: "On the mats",
    note: "The association team leads the morning practice.",
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
    kicker: "Atmosphere",
    title: "Muluk, outside",
    note: "The field and the courtyard, the morning of 2 October 2026.",
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
  return (
    <ImageReveal
      {...item}
      className={[className, crop ? "crop-mark" : ""].filter(Boolean).join(" ")}
      onOpen={() => onOpen(item.id)}
    />
  );
}

export function MediaGallery({ onOpen }: Props) {
  return (
    <>
      <section className="gallery" id="gallery" aria-labelledby="gallery-title">
        <header className="chapter-head">
          <p className="eyebrow">Photographs</p>
          <h2 id="gallery-title">
            The day,
            <em> in photographs.</em>
          </h2>
        </header>
        {groups.map((group) => {
          const items = group.ids.map((id) => byId.get(id)).filter((item): item is Still => item != null);
          const [lead, second, third, ...rest] = items;
          return (
            <div className="gallery-group" key={group.id}>
              <header className="group-head">
                <p className="eyebrow">{group.kicker}</p>
                <h3>{group.title}</h3>
                <p>{group.note}</p>
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

      <section className="archive" id="media" aria-labelledby="media-title">
        <header className="chapter-head">
          <p className="eyebrow">Films</p>
          <h2 id="media-title">
            Four films.
            <em> Nothing plays until it is opened.</em>
          </h2>
        </header>
        <div className="films">
          {films.map((film) => (
            <button
              key={film.id}
              type="button"
              className={film.width > film.height ? "film wide" : "film"}
              onClick={() => onOpen(film.id)}
            >
              <img src={film.poster} alt="" width={film.width} height={film.height} loading="lazy" />
              <span className="film-meta">
                <span>Play · {film.plate}</span>
                <strong>{film.caption}</strong>
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
