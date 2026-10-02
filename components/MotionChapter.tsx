"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { practiceStills } from "@/lib/media";
import { useReducedMotion } from "@/lib/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

type Props = { onOpen: (id: string) => void };

export function MotionChapter({ onOpen }: Props) {
  const pinRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track || reduced) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 980px)", () => {
      const distance = () => track.scrollWidth - pin.offsetWidth;
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.65,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    });

    return () => mm.revert();
  }, [reduced]);

  return (
    <section className="practice" id="practice" ref={pinRef} aria-labelledby="practice-title">
      <header className="practice-head">
        <p className="eyebrow">07 — Yogasana in motion</p>
        <h2 id="practice-title">The morning practice</h2>
        <p>Led on the forecourt by the All Bengal Yogasana Sports Association team. Around seven.</p>
      </header>
      <div className="practice-track" ref={trackRef}>
        {practiceStills.map((item) => (
          <figure key={item.id}>
            <button type="button" onClick={() => onOpen(item.id)} aria-label={`Open plate ${item.plate}`}>
              <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" />
            </button>
            <figcaption>
              <span>{item.plate}</span>
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
