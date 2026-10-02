"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { logo } from "@/lib/media";

const STORAGE_KEY = "pjm-intro-seen";

type Props = { onDone: () => void };

export function IdentityIntro({ onDone }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      onDoneRef.current();
      return;
    }

    let timeline: gsap.core.Timeline | null = null;
    let flight: gsap.core.Tween | null = null;
    let closed = false;

    const finish = () => {
      if (closed) return;
      closed = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      flight?.kill();
      timeline?.kill();
      window.removeEventListener("keydown", onKey);
      onDoneRef.current();
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish();
    };

    const startId = window.setTimeout(() => {
      if (closed) return;
      const mark = root.querySelector<HTMLElement>(".intro-mark");
      const leg = root.querySelector<SVGGElement>(".pose-leg");
      const pose = root.querySelector<SVGSVGElement>(".pose-guide");
      if (!mark) return;

      window.addEventListener("keydown", onKey);
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        if (pose) gsap.set(pose, { opacity: 0 });
        gsap.fromTo(mark, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power1.out" });
        gsap.to(root, { opacity: 0, delay: 0.9, duration: 0.35, onComplete: finish });
        return;
      }

      const seal = document.querySelector(".seal");
      gsap.set(mark, { opacity: 0, scale: 0.94, filter: "blur(8px)" });
      if (leg) gsap.set(leg, { rotation: -68, svgOrigin: "48 46" });

      const place = () => {
        const from = mark.getBoundingClientRect();
        const to = seal?.getBoundingClientRect();
        if (!to || to.width < 8) return { x: 0, y: 0, scale: 1 };
        return {
          x: to.left + to.width / 2 - (from.left + from.width / 2),
          y: to.top + to.height / 2 - (from.top + from.height / 2),
          scale: to.width / from.width,
        };
      };

      timeline = gsap.timeline();
      timeline.to(mark, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.7, ease: "power2.out" }, 0.08);
      if (leg) timeline.to(leg, { rotation: 0, duration: 1.3, ease: "power2.inOut" }, 0.75);
      if (pose) timeline.to(pose, { opacity: 0, duration: 0.35, ease: "power1.out" }, 2.2);
      timeline
        .add("move", 2.7)
        .add(() => {
          if (closed) return;
          const next = place();
          flight = gsap.to(mark, { x: next.x, y: next.y, scale: next.scale, duration: 1.05, ease: "power3.inOut" });
        }, "move")
        .to(root, { backgroundColor: "rgba(14,10,8,0)", duration: 0.5, ease: "power1.out" }, "move+=0.4")
        .add(() => {
          root.style.pointerEvents = "none";
          window.dispatchEvent(new Event("pjm-intro-arrive"));
        }, "move+=0.7")
        .to(mark, { opacity: 0, duration: 0.25 }, "move+=0.9")
        .add(finish, "move+=1.15");
    }, 50);

    return () => {
      closed = true;
      window.clearTimeout(startId);
      flight?.kill();
      timeline?.kill();
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="intro" ref={rootRef} role="dialog" aria-label="Yogasana Bharat" aria-modal="true">
      <div className="intro-mark">
        <img src={logo.src} alt="" width={447} height={447} />
        <svg className="pose-guide" viewBox="0 0 100 100" aria-hidden="true">
          <g className="pose-leg">
            <path d="M48 47 C60 46 72 34 67 22 C63 14 54 15 53 23 C52 31 60 38 50 44 Z" />
          </g>
        </svg>
      </div>
      <button
        type="button"
        className="skip-intro"
        onClick={() => {
          sessionStorage.setItem(STORAGE_KEY, "1");
          onDoneRef.current();
        }}
      >
        Skip intro
      </button>
    </div>
  );
}
