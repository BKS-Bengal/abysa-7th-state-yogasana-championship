"use client";

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
  const portrait = still.height > still.width;
  const classes = ["edit-figure", portrait ? "edit-portrait" : "", className].filter(Boolean).join(" ");

  return (
    <figure className={classes}>
      <img
        src={still.src}
        alt={text?.alt ?? still.alt}
        width={still.width}
        height={still.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
      <figcaption>
        <span>{copy.media.fig} {still.plate}</span>
        <p>{text?.caption ?? still.caption}</p>
      </figcaption>
    </figure>
  );
}
