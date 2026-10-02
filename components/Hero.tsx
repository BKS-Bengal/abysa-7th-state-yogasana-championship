"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { hero } from "@/lib/media";
import { useLanguage } from "@/lib/language";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { usePageReady } from "./SiteFrame";

const gesture =
  "M304 338 C268 292 228 236 252 178 C270 136 236 108 204 126 C184 138 192 168 220 162";

export function Hero() {
  const frameRef = useRef<HTMLDivElement>(null);
  const gestureRef = useRef<SVGPathElement>(null);
  const reduced = useReducedMotion();
  const play = usePageReady();
  const { copy } = useLanguage();

  useEffect(() => {
    const path = gestureRef.current;
    const image = frameRef.current?.querySelector("img");
    if (!path || !image || !play) return;

    if (reduced) {
      gsap.set(path, { opacity: 0 });
      gsap.set(image, { scale: 1, x: 0 });
      return;
    }

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const timeline = gsap.timeline({ delay: 0.45 });
    timeline
      .fromTo(image, { scale: 1.035, x: 10 }, { scale: 1, x: 0, duration: 14, ease: "none" }, 0)
      .to(path, { strokeDashoffset: 0, duration: 4.6, ease: "power1.inOut" }, 0.55)
      .to(path, { opacity: 0, duration: 1.6, ease: "power1.out" }, 6.2);

    return () => {
      timeline.kill();
    };
  }, [reduced, play]);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-frame" ref={frameRef}>
        <img src={hero.src} alt={hero.alt} width={1024} height={576} fetchPriority="high" />
        <svg viewBox="0 0 1024 576" aria-hidden="true">
          <path ref={gestureRef} className="gesture" d={gesture} />
        </svg>
      </div>
      <div className="hero-copy">
        <div>
          <p className="eyebrow">{copy.home.presents}</p>
          <h1 id="hero-title">{copy.home.title}</h1>
          <p className="hero-bangla" lang="bn">
            {copy.home.bangla}
          </p>
        </div>
        <p className="hero-meta">
          {copy.home.championship}
          <span>{copy.home.place}</span>
        </p>
      </div>
    </section>
  );
}
