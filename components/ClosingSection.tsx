import { hero } from "@/lib/media";

export function ClosingSection() {
  return (
    <section className="closing" aria-labelledby="closing-title">
      <div className="closing-copy">
        <p className="eyebrow">10 — Close</p>
        <h2 id="closing-title" lang="bn">
          প্রকৃতি জাগরণ মঞ্চ
        </h2>
        <p>Prakriti Jagaran Mancha</p>
        <p className="closing-meta">
          Bharat Sevashram Sangha
          <span>Muluk, Bolpur, Birbhum</span>
          <span>2 October 2026</span>
        </p>
      </div>
      <img src={hero.src} alt="" width={1024} height={576} loading="lazy" />
    </section>
  );
}
