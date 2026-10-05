"use client";

import { prakritiArt } from "@/lib/media";
import { SiteFrame } from "@/components/SiteFrame";
import { useLanguage } from "@/lib/language";

export function PrakritiPage() {
  const { copy, locale } = useLanguage();
  const page = copy.prakriti;

  return (
    <SiteFrame>
      <section className="prakriti-stage" aria-labelledby="prakriti-title">
        <div className="prakriti-intro">
          <p className="eyebrow">{page.eyebrow}</p>
          <h2 id="prakriti-title" className="prakriti-display">
            {page.title}
          </h2>
          <p lang={locale === "bn" ? "bn" : "en"}>{page.bangla}</p>
        </div>
        <figure className="prakriti-frame">
          <span className="prakriti-corner tl" aria-hidden="true" />
          <span className="prakriti-corner tr" aria-hidden="true" />
          <span className="prakriti-corner bl" aria-hidden="true" />
          <span className="prakriti-corner br" aria-hidden="true" />
          <img src={prakritiArt.src} alt={prakritiArt.alt} width={prakritiArt.width} height={prakritiArt.height} />
        </figure>
        <div className="prakriti-copy">
          {page.definition ? <p className="prakriti-lead">{page.definition}</p> : null}
          {page.lead ? <p className="prakriti-lead">{page.lead}</p> : null}
          {page.note ? <p>{page.note}</p> : null}
        </div>
      </section>
      <section className="affiliate-band" aria-labelledby="prakriti-printed">
        <p className="chapter-no">02</p>
        <div>
          <h2 id="prakriti-printed">{page.contextTitle}</h2>
          <p>{page.context}</p>
        </div>
      </section>
    </SiteFrame>
  );
}
