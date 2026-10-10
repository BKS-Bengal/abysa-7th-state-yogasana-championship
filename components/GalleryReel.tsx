"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";

const HOLD = 4200;
const SLIDE = 1050;

const frames = [
  { src: "/assets/gallery/reel/13-38-39.webp", width: 1024, height: 768 },
  { src: "/assets/gallery/reel/13-38-34.webp", width: 1024, height: 768 },
  { src: "/assets/gallery/reel/13-38-32.webp", width: 1024, height: 768 },
  { src: "/assets/gallery/reel/13-38-30.webp", width: 1024, height: 768 },
  { src: "/assets/gallery/reel/13-38-27.webp", width: 768, height: 1024 },
  { src: "/assets/gallery/reel/13-38-41.webp", width: 1024, height: 768 },
  { src: "/assets/gallery/reel/13-38-21.webp", width: 768, height: 1024 },
  { src: "/assets/gallery/reel/13-38-23.webp", width: 768, height: 1024 },
  { src: "/assets/gallery/reel/13-38-17.webp", width: 1024, height: 768 },
  { src: "/assets/gallery/reel/13-38-19.webp", width: 768, height: 1024 },
  { src: "/assets/gallery/reel/13-38-10.webp", width: 1024, height: 768 },
  { src: "/assets/gallery/reel/13-38-05.webp", width: 768, height: 1024 },
  { src: "/assets/gallery/reel/13-38-03.webp", width: 1024, height: 768 },
  { src: "/assets/gallery/reel/13-37-58.webp", width: 1024, height: 768 },
  { src: "/assets/gallery/reel/13-38-01.webp", width: 1024, height: 768 },
  { src: "/assets/gallery/reel/13-37-55.webp", width: 1024, height: 768 },
  { src: "/assets/gallery/reel/13-38-15.webp", width: 1024, height: 768 },
  { src: "/assets/gallery/reel/13-38-36.webp", width: 1024, height: 768 },
  { src: "/assets/gallery/reel/13-05-56.webp", width: 447, height: 447 },
  { src: "/assets/gallery/reel/13-38-26.webp", width: 768, height: 1024 },
  { src: "/assets/gallery/reel/13-38-07.webp", width: 768, height: 1024 },
  { src: "/assets/gallery/reel/13-38-12.webp", width: 1024, height: 768 },
] as const;

export function GalleryReel() {
  const { copy } = useLanguage();
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || paused) return;
    const id = window.setInterval(() => {
      const current = indexRef.current;
      setPrevious(current);
      setIndex((current + 1) % frames.length);
    }, HOLD);
    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    if (previous == null) return;
    const id = window.setTimeout(() => setPrevious(null), SLIDE);
    return () => window.clearTimeout(id);
  }, [previous]);

  const upcoming = (index + 1) % frames.length;
  const shown = new Set<number>([index, upcoming]);
  if (previous != null) shown.add(previous);

  return (
    <div
      className="gallery-reel"
      role="region"
      aria-label={copy.gallery.title}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {frames.map((frame, frameIndex) => {
        if (!shown.has(frameIndex)) return null;
        const state =
          frameIndex === index && previous != null
            ? "is-enter"
            : frameIndex === previous
              ? "is-leave"
              : frameIndex === index
                ? "is-current"
                : "is-next";
        return (
          <img
            key={frame.src}
            src={frame.src}
            alt=""
            width={frame.width}
            height={frame.height}
            className={state}
            decoding="async"
            fetchPriority={frameIndex === 0 ? "high" : "auto"}
          />
        );
      })}
    </div>
  );
}
