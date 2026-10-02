"use client";

import { EditorialFigure } from "./EditorialFigure";
import { useLanguage } from "@/lib/language";

export function IdentitySection() {
  const { copy } = useLanguage();
  const info = copy.information;

  return (
    <>
      <section className="identity" aria-labelledby="identity-title">
        <div className="edit-split image-lead">
          <EditorialFigure id="practice-open" />
          <div className="edit-copy">
            <p className="eyebrow">{info.eyebrow}</p>
            <h2 id="identity-title" lang="bn">
              {info.title}
            </h2>
            <p className="identity-lead">{info.lead}</p>
            <p>{info.affiliation}</p>
          </div>
        </div>
      </section>
      <section className="organisers band-oxblood" aria-labelledby="organisers-title">
        <div className="band-inner edit-split">
          <div className="edit-copy">
            <p className="eyebrow">{info.organisersEyebrow}</p>
            <h2 id="organisers-title">{info.organisersTitle}</h2>
            <p>{info.organisers}</p>
          </div>
          <EditorialFigure id="championship-dais" />
        </div>
      </section>
    </>
  );
}
