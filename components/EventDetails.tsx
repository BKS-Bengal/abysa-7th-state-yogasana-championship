const rows = [
  ["Event", "Prakriti Jagaran Mancha, with the 7th State Yogasana Sports Championship 2026–27 (Men & Women)"],
  ["Date", "2 October 2026"],
  ["Venue", "Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum"],
  ["Hall", "শ্রী শ্রী শিব মন্দির"],
  ["In the morning", "A programme in the hall, then practice on the grounds beside the health centre"],
  ["Presented by", "All Bengal Yogasana Sports Association (ABYSA)"],
  ["Affiliations", "Yogasana Bharat, New Delhi · World Yogasana"],
  ["Jointly organised by", "Karmyog, for the 21st century · Bharatiya Krishak Samaj"],
];

export function EventDetails() {
  return (
    <section className="details" id="details" aria-labelledby="details-title">
      <p className="eyebrow">04 — The record</p>
      <h2 id="details-title">Event details</h2>
      <dl>
        {rows.map(([term, value]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd lang={term === "Hall" ? "bn" : undefined}>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
