"use client";

import { hero } from "@/lib/media";
import { SiteFrame } from "@/components/SiteFrame";
import { useLanguage } from "@/lib/language";

export function PrakritiPage() {
  const { copy } = useLanguage();
  const page = copy.prakriti;

  return (
    <SiteFrame>
      <section className="prakriti-stage" aria-labelledby="prakriti-title">
        <div className="prakriti-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h2 id="prakriti-title" className="prakriti-display">
            {page.title}
          </h2>
          <p className="hero-bangla" lang="bn">
            {page.bangla}
          </p>
          <p className="prakriti-lead">{page.lead}</p>
          <p>{page.note}</p>
        </div>
        <figure className="prakriti-art">
          <img src={hero.src} alt={hero.alt} width={1024} height={576} />
        </figure>
      </section>
    </SiteFrame>
  );
}
