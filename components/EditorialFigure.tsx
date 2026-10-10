"use client";

import { filmLinks } from "@/content/photos";
import { stills } from "@/lib/media";
import { useLanguage } from "@/lib/language";

type Props = {
  id: string;
  className?: string;
  priority?: boolean;
};

export function EditorialFigure({ id, className, priority = false }: Props) {
  const { copy } = useLanguage();
  const still = stills.find((item) => item.id === id);
  if (!still) return null;
  const text = copy.captions[id];
  const caption = (text?.caption ?? still.caption)?.trim() ?? "";
  const portrait = still.height > still.width;
  const classes = ["edit-figure", portrait ? "edit-portrait" : "", className].filter(Boolean).join(" ");
  const film = filmLinks[id];

  return (
    <figure className={classes} data-still={id}>
      <img
        src={still.src}
        alt={text?.alt ?? still.alt}
        width={still.width}
        height={still.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
      {caption || film ? (
        <figcaption>
          <span>{copy.media.fig} {still.plate}</span>
          <p>
            {caption}
            {film ? (
              <a className="film-link" href={film} target="_blank" rel="noopener noreferrer">
                {copy.home.watchFilm}
              </a>
            ) : null}
          </p>
        </figcaption>
      ) : null}
    </figure>
  );
}
