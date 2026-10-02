"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { hero } from "@/lib/media";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const breath =
  "M236 312 C210 286 168 268 152 228 C136 188 154 148 186 142 C214 136 228 164 214 196 C198 232 168 248 188 276";

const silhouette =
  "M168 214 C186 176 214 162 228 186 C242 210 226 236 206 250 C190 278 206 314 184 336 C166 354 146 338 154 308 C162 278 148 258 156 228";

export function Hero() {
  const frameRef = useRef<HTMLDivElement>(null);
  const breathRef = useRef<SVGPathElement>(null);
  const poseRef = useRef<SVGPathElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const breathPath = breathRef.current;
    const posePath = poseRef.current;
    const image = frameRef.current?.querySelector("img");
    const copy = copyRef.current;
    if (!breathPath || !posePath || !image || !copy) return;

    if (reduced) {
      gsap.set([breathPath, posePath], { opacity: 0 });
      gsap.set(copy, { opacity: 1, y: 0 });
      return;
    }

    const draw = (path: SVGPathElement) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      return length;
    };

    draw(breathPath);
    draw(posePath);

    const timeline = gsap.timeline({ delay: 0.35 });
    timeline
      .fromTo(image, { scale: 1.018 }, { scale: 1, duration: 11, ease: "none" }, 0)
      .to(breathPath, { strokeDashoffset: 0, duration: 2.6, ease: "power1.inOut" }, 0.4)
      .to(posePath, { strokeDashoffset: 0, duration: 2.2, ease: "power1.inOut" }, 1.5)
      .to(posePath, { opacity: 0.9, duration: 0.4 }, 2.4)
      .to([breathPath, posePath], { opacity: 0, duration: 1.15, ease: "power1.out" }, 4.3)
      .from(copy, { y: 16, opacity: 0, duration: 1, ease: "power2.out" }, 0.7);

    return () => {
      timeline.kill();
    };
  }, [reduced]);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-frame" ref={frameRef}>
        <img src={hero.src} alt={hero.alt} width={1024} height={576} fetchPriority="high" />
        <svg viewBox="0 0 1024 576" aria-hidden="true">
          <path ref={breathRef} className="breath" d={breath} />
          <path ref={poseRef} className="pose" d={silhouette} />
        </svg>
      </div>
      <div className="hero-copy" ref={copyRef}>
        <div>
          <p className="eyebrow">All Bengal Yogasana Sports Association presents</p>
          <h1 id="hero-title">Prakriti Jagaran Mancha</h1>
          <p className="hero-bangla" lang="bn">
            প্রকৃতি জাগরণ মঞ্চ
          </p>
        </div>
        <p className="hero-meta">
          7th State Yogasana Sports Championship 2026–27
          <span>Muluk, Bolpur, Birbhum</span>
          <span>2 October 2026</span>
        </p>
      </div>
    </section>
  );
}
