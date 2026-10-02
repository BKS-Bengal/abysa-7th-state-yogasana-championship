"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { films, stills, type Film, type Still } from "@/lib/media";
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
};

export function Lightbox({ openId, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);
  const index = items.findIndex((item) => item.id === openId);
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
        if (next < 0) return items.length - 1;
        if (next >= items.length) return 0;
        return next;
      });
    },
    [],
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
  }, [openId, close, step]);

  if (openId == null || active < 0) return null;
  const item = items[active];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
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
          {item.caption}
        </p>
        <div className="lightbox-nav">
          <button type="button" onClick={() => step(-1)} aria-label="Previous plate">
            Previous
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next plate">
            Next
          </button>
          <button ref={closeRef} type="button" onClick={close} aria-label="Close">
            Close
          </button>
        </div>
      </div>
      <div className="lightbox-stage">
        {item.kind === "film" ? (
          <VideoModal src={item.src} poster={item.poster} title={item.caption} />
        ) : (
          <img src={item.src} alt={item.alt} width={item.width} height={item.height} />
        )}
      </div>
    </div>
  );
}
