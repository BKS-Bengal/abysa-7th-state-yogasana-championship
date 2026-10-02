"use client";

import { useLanguage } from "@/lib/language";

export function IdentitySection() {
  const { copy } = useLanguage();
  const info = copy.information;

  return (
    <section className="identity" aria-labelledby="identity-title">
      <p className="eyebrow">{info.eyebrow}</p>
      <h2 id="identity-title" lang="bn">
        {info.title}
      </h2>
      <p className="identity-lead">{info.lead}</p>
      <div className="identity-columns">
        <p>{info.affiliation}</p>
        <p>{info.organisers}</p>
      </div>
    </section>
  );
}
