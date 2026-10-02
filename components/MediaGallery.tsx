"use client";

import { films, plates } from "@/lib/media";

type Props = { onOpen: (id: string) => void };

export function MediaGallery({ onOpen }: Props) {
  return (
    <section className="archive" id="archive" aria-labelledby="archive-title">
      <header className="chapter-head">
        <p className="eyebrow">08 — Archive</p>
        <h2 id="archive-title">
          Four films.
          <em> Twenty-three plates.</em>
        </h2>
        <p className="lede">
          Each photograph appears once. The films are separate records of the hall, the table, the dais
          and the athletes. Nothing here plays until it is opened.
        </p>
      </header>

      <div className="films">
        {films.map((film) => (
          <button
            key={film.id}
            type="button"
            className={film.width > film.height ? "film wide" : "film tall"}
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

      <ol className="plate-index">
        {plates.map((plate) => (
          <li key={plate.id}>
            <button type="button" onClick={() => onOpen(plate.id)}>
              <span>{plate.plate}</span>
              <span>{plate.caption}</span>
              {plate.kind === "film" ? <em>Film</em> : null}
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
