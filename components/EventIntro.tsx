import { ScrollReveal } from "./ScrollReveal";

export function EventIntro() {
  return (
    <section className="gathering" id="event">
      <div className="gathering-copy">
        <ScrollReveal>
          <p className="eyebrow">The event</p>
          <h2 lang="bn">প্রকৃতি জাগরণ মঞ্চ</h2>
          <p>
            All Bengal Yogasana Sports Association presents this gathering at Bharat Sevashram Sangha,
            Muluk, Bolpur, Birbhum. The association is affiliated to Yogasana Bharat, New Delhi, and to
            World Yogasana.
          </p>
          <p>
            With it stands the 7th State Yogasana Sports Championship 2026–27, for men and women, as
            lettered on the hall banner. The programme is organised jointly with Karmyog and Bharatiya
            Krishak Samaj.
          </p>
        </ScrollReveal>
        <blockquote>
          <p lang="bn">সমত্বং যোগ উচ্যতে</p>
          <footer>The line carried on the Yogasana Bharat seal.</footer>
        </blockquote>
      </div>
      <div className="significance">
        <p className="eyebrow">Why the day is held this way</p>
        <h2>
          A championship in the hall.
          <em> A practice on the ground.</em>
        </h2>
        <p>
          The morning begins indoors, in the mandir, and moves out onto the ashram field. Yogasana is
          present as a state sport, and as a practice taken together.
        </p>
      </div>
    </section>
  );
}
