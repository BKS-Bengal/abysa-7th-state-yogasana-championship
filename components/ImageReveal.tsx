"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  src: string;
  alt: string;
  caption?: string;
  plate?: string;
  width: number;
  height: number;
  className?: string;
  onOpen?: () => void;
  priority?: boolean;
};

export function ImageReveal({
  src,
  alt,
  caption,
  plate,
  width,
  height,
  className,
  onOpen,
  priority = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reduced) return;
    const frame = node.querySelector(".frame");
    if (!frame) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        frame,
        { clipPath: "inset(3% 0% 4% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: "top 82%",
            once: true,
          },
        },
      );
    }, node);

    return () => ctx.revert();
  }, [reduced]);

  const image = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );

  return (
    <figure ref={ref} className={className}>
      <div className="frame">
        {onOpen ? (
          <button type="button" className="plate-button" onClick={onOpen} aria-label={`Open plate ${plate ?? ""}: ${alt}`}>
            {image}
          </button>
        ) : (
          image
        )}
      </div>
      {caption ? (
        <figcaption>
          {plate ? <span>{plate}</span> : null}
          <p>{caption}</p>
        </figcaption>
      ) : null}
    </figure>
  );
}
