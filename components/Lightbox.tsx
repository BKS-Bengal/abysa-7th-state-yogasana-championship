"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { films, stills, type Film, type Still } from "@/lib/media";
import { useLanguage } from "@/lib/language";
import { VideoModal } from "./VideoModal";

type Item =
  | ({ kind: "still" } & Still)
  | ({ kind: "film" } & Film);

const items: Item[] = [
  ...stills.map((item) => ({ kind: "still" as const, ...item })),
  ...films.map((item) => ({ kind: "film" as const, ...item })),
];

type Props = {
  openId: string | null;
  onClose: () => void;
  ids: string[];
};

export function Lightbox({ openId, onClose, ids }: Props) {
  const { copy } = useLanguage();
  const pool = items.filter((item) => ids.includes(item.id));
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);
  const index = pool.findIndex((item) => item.id === openId);
  const [active, setActive] = useState(index);

  useEffect(() => {
    if (index >= 0) setActive(index);
  }, [index]);

  const close = useCallback(() => {
    onClose();
    lastFocus.current?.focus();
  }, [onClose]);

  const step = useCallback(
    (direction: number) => {
      setActive((current) => {
        const next = current + direction;
        if (next < 0) return pool.length - 1;
        if (next >= pool.length) return 0;
        return next;
      });
    },
    [pool.length],
  );

  useEffect(() => {
    if (openId == null) return;
    lastFocus.current = document.activeElement as HTMLElement | null;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [openId, close, step, pool.length]);

  if (openId == null || active < 0) return null;
  const item = pool[active];
  if (!item) return null;
  const text = copy.captions[item.id];
  const caption = text?.caption ?? item.caption;
  const alt = text?.alt ?? item.alt;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={caption}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
      onTouchStart={(event) => {
        touchX.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchX.current == null) return;
        const delta = (event.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
        if (delta > 48) step(-1);
        if (delta < -48) step(1);
        touchX.current = null;
      }}
    >
      <div className="lightbox-bar">
        <p>
          <span>{item.plate}</span>
          {caption}
        </p>
        <div className="lightbox-nav">
          <button type="button" onClick={() => step(-1)} aria-label={copy.lightbox.previous}>
            {copy.lightbox.previous}
          </button>
          <button type="button" onClick={() => step(1)} aria-label={copy.lightbox.next}>
            {copy.lightbox.next}
          </button>
          <button ref={closeRef} type="button" onClick={close} aria-label={copy.lightbox.close}>
            {copy.lightbox.close}
          </button>
        </div>
      </div>
      <div className="lightbox-stage">
        {item.kind === "film" ? (
          <VideoModal src={item.src} poster={item.poster} title={caption} />
        ) : (
          <img src={item.src} alt={alt} width={item.width} height={item.height} />
        )}
      </div>
    </div>
  );
}
