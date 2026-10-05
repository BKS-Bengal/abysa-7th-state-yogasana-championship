"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero } from "@/lib/media";
import { useLanguage } from "@/lib/language";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { usePageReady } from "./SiteFrame";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const stageRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const play = usePageReady();
  const { copy, locale } = useLanguage();

  useEffect(() => {
    const stage = stageRef.current;
    const frame = frameRef.current;
    const image = frame?.querySelector("img");
    if (!stage || !frame || !image || !play) return;

    const show = () => stage.classList.add("is-shown");

    if (reduced) {
      gsap.set(image, { scale: 1, x: 0, y: 0 });
      gsap.set(frame, { clipPath: "inset(0% 0% 0% 0%)" });
      show();
      return;
    }

    const compact = window.matchMedia("(max-width: 768px)").matches;
    const rise = compact ? 12 : 22;
    const reveals = stage.querySelectorAll(".hero-reveal");
    const header = document.querySelector(".site-header.tone-overlay");

    const timeline = gsap.timeline({
      delay: compact ? 0.08 : 0.16,
      onComplete: show,
    });

    if (header) {
      timeline.fromTo(header, { autoAlpha: 0, y: -8 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" }, 0);
    }

    timeline
      .fromTo(
        frame,
        { clipPath: "inset(0% 0% 0% 100%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: compact ? 0.95 : 1.25, ease: "power3.inOut" },
        0.2,
      )
      .fromTo(
        reveals,
        { autoAlpha: 0, y: rise },
        { autoAlpha: 1, y: 0, duration: compact ? 0.55 : 0.72, ease: "power2.out", stagger: compact ? 0.08 : 0.12 },
        0.72,
      );

    const unlock = window.setTimeout(show, 6800);
    let scroll: ScrollTrigger | undefined;

    if (!compact) {
      const drift = gsap.fromTo(frame, { y: 0 }, { y: 28, ease: "none", paused: true });
      scroll = ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        end: "bottom top",
        scrub: 0.4,
        animation: drift,
      });
    }

    return () => {
      window.clearTimeout(unlock);
      timeline.kill();
      scroll?.kill();
      if (header) gsap.set(header, { autoAlpha: 1, y: 0 });
      show();
    };
  }, [reduced, play]);

  return (
    <section className="hero hero-stage" aria-labelledby="hero-title" ref={stageRef}>
      <div className="hero-stage-copy">
        <p className="hero-reveal hero-kicker">
          <span className="hero-mark">07</span>
          <span className="eyebrow">{copy.home.presents}</span>
        </p>
        <h1 className="hero-reveal" id="hero-title">
          {copy.home.title}
        </h1>
        {copy.home.bangla ? (
          <p className="hero-reveal" lang={locale === "bn" ? "bn" : "en"}>
            {copy.home.bangla}
          </p>
        ) : null}
        <p className="hero-reveal hero-meta">{copy.home.place}</p>
        <p className="hero-reveal hero-context">{copy.home.context}</p>
        <p className="hero-reveal hero-actions">
          <a href="#contents">{copy.home.ctaProgramme}</a>
          <a href="/story">{copy.home.ctaVisit}</a>
        </p>
      </div>
      <div className="hero-frame" ref={frameRef}>
        <img
          src={hero.src}
          alt={copy.home.heroAlt}
          width={hero.width}
          height={hero.height}
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
