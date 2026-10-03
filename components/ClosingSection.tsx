"use client";

import { useLanguage } from "@/lib/language";

export function ClosingSection() {
  const { copy } = useLanguage();
  const info = copy.information;

  return (
    <section className="closing band-charcoal" aria-labelledby="closing-title">
      <div className="band-inner edit-split">
        <div className="closing-copy edit-copy">
          <p className="eyebrow">{info.closeEyebrow}</p>
          <h2 id="closing-title" lang="bn">
            {info.closeTitle}
          </h2>
          <p>{info.closeName}</p>
          <p className="closing-meta">
            {info.closePlace}
            <span>{info.closeDate}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
