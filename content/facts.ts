import type { Locale } from "./types";

export type EventStatus = "upcoming" | "live" | "completed";

export type ProgrammeDay = {
  id: string;
  date?: string;
  theme?: string;
  moments?: string[];
};

/**
 * Canonical event facts. Unconfirmed values stay unset and must not be rendered.
 * Do not infer status, dates, scale, travel, contact, or results.
 */
export const eventFacts = {
  status: "completed" as EventStatus | undefined,
  title: "7th State Yogasana Sports Championship",
  season: "2026–27",
  dates: "1–4 October 2026",
  monthYear: { en: "October 2026", bn: "অক্টোবর ২০২৬" },
  place: { en: "Muluk, Bolpur, Birbhum", bn: "মুলুক, বোলপুর, বীরভূম" },
  venue: {
    en: "Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum",
    bn: "ভারত সেবাশ্রম সঙ্ঘ, মুলুক, বোলপুর, বীরভূম",
  },
  hall: { en: "Sri Sri Shiv Mandir", bn: "শ্রী শ্রী শিব মন্দির" },
  whoCompetes: { en: "Men & Women", bn: "পুরুষ ও মহিলা" },
  presentedBy: {
    en: "All Bengal Yogasana Sports Association",
    bn: "অখিল বঙ্গ যোগাসন স্পোর্টস অ্যাসোসিয়েশন",
  },
  yogasanaBharat: { en: "Yogasana Bharat, New Delhi", bn: "যোগাসন ভারত, নতুন দিল্লি" },
  worldYogasana: { en: "World Yogasana", bn: "ওয়ার্ল্ড যোগাসন" },
  jointOrganisers: {
    en: "Karmyog for the 21st Century · Bharatiya Krishak Samaj",
    bn: "কর্মযোগ, একবিংশ শতাব্দীর জন্য · ভারতীয় কৃষক সমাজ",
  },
  awards: { en: "Certificates and medals", bn: "সনদ ও পদক" },
  provided: { en: "Accommodation, meals and athlete facilities", bn: "থাকার জায়গা, খাবার ও ক্রীড়াবিদদের সুযোগ-সুবিধা" },
  people: {
    shyamal: { en: "Shyamal Ta", bn: "শ্যামল তা" },
    papiya: { en: "Papiya Bhattacharya (Roy)", bn: "পাপিয়া ভট্টাচার্য (রায়)" },
  },
  motto: "समत्वं योग उच्यते",
  /** Exact quotation was not supplied. */
  quote: undefined as { text: string; attribution: string } | undefined,
  /** Organisers have not supplied a definition. */
  prakritiDefinition: undefined as Partial<Record<Locale, string>> | undefined,
  /**
   * The championship banner prints this span. Activities are not assigned to a day.
   */
  days: [
    { id: "day-01", date: "1 October 2026" },
    { id: "day-02", date: "2 October 2026" },
    { id: "day-03", date: "3 October 2026" },
    { id: "day-04", date: "4 October 2026" },
  ] as ProgrammeDay[],
  scale: {
    athletes: undefined as string | undefined,
    districts: undefined as string | undefined,
    judges: undefined as string | undefined,
  },
  travel: undefined as Partial<Record<Locale, string>> | undefined,
  visitorAccess: undefined as Partial<Record<Locale, string>> | undefined,
  contact: undefined as { name?: string; phone?: string; email?: string } | undefined,
  results: undefined as { day: string; category: string; winner: string; runnerUp?: string }[] | undefined,
  /** Evidenced parts of the championship. Not assigned to a day. */
  during: {
    en: [
      "Flag hosting",
      "Fire offering in the courtyard",
      "Morning Yogasana practice",
      "Competition before a judging panel",
      "An evening session under the lights",
      "Dance in the hall",
      "A morning address in the courtyard",
      "Certificates and medals",
    ],
    bn: [
      "পতাকা উত্তোলন",
      "উঠোনে আহুতি",
      "সকালের যোগাসন অনুশীলন",
      "বিচারকদলের সামনে প্রতিযোগিতা",
      "আলোর নিচে সন্ধ্যার সেশন",
      "হলঘরে নৃত্য",
      "উঠোনে সকালের ভাষণ",
      "সনদ ও পদক",
    ],
  },
};

const labels = {
  en: {
    event: "Event",
    dates: "Dates",
    venue: "Venue",
    hall: "Hall",
    who: "Who competes",
    scale: "Scale",
    provided: "What's provided",
    awards: "Awards",
    presented: "Presented by",
    affiliations: "Affiliations",
    joint: "Jointly organised by",
    president: "State President",
    secretary: "General Secretary",
    travel: "Getting there",
    visitors: "Can visitors attend?",
    contact: "Contact",
  },
  bn: {
    event: "অনুষ্ঠান",
    dates: "তারিখ",
    venue: "স্থান",
    hall: "হলঘর",
    who: "যাঁরা প্রতিযোগিতা করেন",
    scale: "পরিসর",
    provided: "যা দেওয়া হয়",
    awards: "পুরস্কার",
    presented: "উপস্থাপনা",
    affiliations: "অনুষঙ্গ",
    joint: "যৌথ আয়োজক",
    president: "রাজ্য সভাপতি",
    secretary: "সাধারণ সম্পাদক",
    travel: "কীভাবে পৌঁছাবেন",
    visitors: "দর্শক আসতে পারবেন?",
    contact: "যোগাযোগ",
  },
} as const;

export type FactRow = { term: string; value: string; lang?: "bn" };

export function informationRows(locale: Locale): FactRow[] {
  const L = labels[locale];
  const f = eventFacts;
  const scale = [f.scale.athletes, f.scale.districts, f.scale.judges].filter(Boolean).join(" · ");
  const contact = [f.contact?.name, f.contact?.phone, f.contact?.email].filter(Boolean).join(" · ");
  const rows: FactRow[] = [
    { term: L.event, value: `${f.title} ${f.season}` },
    { term: L.dates, value: dateLine[locale] },
    { term: L.venue, value: f.venue[locale] },
    { term: L.hall, value: `${f.hall.en} (${f.hall.bn})` },
    { term: L.who, value: f.whoCompetes[locale] },
    { term: L.scale, value: scale },
    { term: L.provided, value: f.provided[locale] },
    { term: L.awards, value: f.awards[locale] },
    { term: L.presented, value: f.presentedBy[locale] },
    { term: L.president, value: f.people.shyamal[locale] },
    { term: L.secretary, value: f.people.papiya[locale] },
    { term: L.affiliations, value: `${f.yogasanaBharat[locale]} · ${f.worldYogasana[locale]}` },
    { term: L.joint, value: f.jointOrganisers[locale] },
    { term: L.travel, value: f.travel?.[locale] ?? "" },
    { term: L.visitors, value: f.visitorAccess?.[locale] ?? "" },
    { term: L.contact, value: contact },
  ];
  return rows.filter((row) => row.value.trim().length > 0);
}

export function summaryRows(locale: Locale): FactRow[] {
  const L = labels[locale];
  const keep = new Set<string>([L.venue, L.hall, L.presented]);
  return informationRows(locale).filter((row) => keep.has(row.term));
}

const dateLine: Record<Locale, string> = {
  en: "1–4 October 2026",
  bn: "১–৪ অক্টোবর ২০২৬",
};

export function placeLine(locale: Locale) {
  const place = eventFacts.place[locale];
  return `${dateLine[locale]} · ${place}`;
}

export function dayDate(id: string, locale: Locale) {
  const index = eventFacts.days.findIndex((day) => day.id === id);
  const bn = ["১ অক্টোবর ২০২৬", "২ অক্টোবর ২০২৬", "৩ অক্টোবর ২০২৬", "৪ অক্টোবর ২০২৬"];
  if (locale === "bn" && bn[index]) return bn[index];
  return eventFacts.days[index]?.date ?? "";
}
