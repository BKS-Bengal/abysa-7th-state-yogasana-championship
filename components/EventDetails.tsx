const rows = [
  ["Event", "Prakriti Jagaran Mancha, with the 7th State Yogasana Sports Championship 2026–27 (Men & Women)"],
  ["Morning on the photographs", "2 October 2026, Muluk"],
  ["Venue", "Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum"],
  ["Hall", "শ্রী শ্রী শিব মন্দির"],
  ["In the morning", "A programme in the hall, then practice on the grounds beside the health centre"],
  ["Presented by", "All Bengal Yogasana Sports Association (ABYSA)"],
  ["Affiliations", "Yogasana Bharat, New Delhi · World Yogasana"],
  ["Jointly organised by", "Karmyog, for the 21st century · Bharatiya Krishak Samaj"],
  ["Interview", "Dr (Major) Narayan Bhattacharya, filmed in front of the banner"],
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
      <p className="date-note">
        This morning is the date carried on the photographs. The invitation artwork does not print a
        separate calendar date.
      </p>
    </section>
  );
}
