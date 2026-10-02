"use client";

import { stills } from "@/lib/media";
import { useLanguage } from "@/lib/language";

type Props = {
  id: string;
  className?: string;
};

export function EditorialFigure({ id, className }: Props) {
  const { copy } = useLanguage();
  const still = stills.find((item) => item.id === id);
  if (!still) return null;
  const text = copy.captions[id];

  return (
    <figure className={className ? `edit-figure ${className}` : "edit-figure"}>
      <img
        src={still.src}
        alt={text?.alt ?? still.alt}
        width={still.width}
        height={still.height}
        loading="lazy"
      />
      <figcaption>
        <span>{still.plate}</span>
        <p>{text?.caption ?? still.caption}</p>
      </figcaption>
    </figure>
  );
}
