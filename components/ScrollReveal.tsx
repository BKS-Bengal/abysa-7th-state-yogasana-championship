"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  className?: string;
};

export function ScrollReveal({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reduced) return;

    const ctx = gsap.context(() => {
      gsap.from(node, {
        y: 22,
        duration: 0.9,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: node,
          start: "top 88%",
          once: true,
        },
      });
    }, node);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
