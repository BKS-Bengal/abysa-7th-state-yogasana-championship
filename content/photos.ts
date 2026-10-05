export const championshipFilm = "https://www.youtube.com/shorts/-RJ1Lq8OUtk";

export type PhotoRecord = {
  id: string;
  src: string;
  width: number;
  height: number;
  plate: string;
  page: "home" | "event" | "story" | "gallery";
  section: string;
  theme: string;
  alt: string;
  caption: string;
  usedOnce: true;
  youtube?: string;
};

export type UnusedPhoto = {
  source: string;
  status: "near-duplicate" | "reserved";
  reason: string;
};

export const publishedPhotos: PhotoRecord[] = [
  {
    id: "indoor-session",
    src: "/assets/gallery/indoor-session.webp",
    width: 1024,
    height: 640,
    plate: "32",
    page: "story",
    section: "day-03",
    theme: "gathering",
    alt: "Young athletes seated in rows during an indoor championship session, with officials behind them.",
    caption: "Young athletes seated together during an indoor session in the hall.",
    usedOnce: true,
  },
  {
    id: "yt-verandah-table",
    src: "/assets/gallery/yt-verandah-table.webp",
    width: 720,
    height: 1060,
    plate: "33",
    page: "home",
    section: "inside",
    theme: "voices",
    alt: "Officials seated at a long table on the verandah, writing on papers beside laptops.",
    caption: "Officials work through papers at a table on the verandah.",
    youtube: championshipFilm,
    usedOnce: true,
  },
  {
    id: "yt-standing-balance",
    src: "/assets/gallery/yt-standing-balance.webp",
    width: 720,
    height: 1060,
    plate: "34",
    page: "home",
    section: "inside",
    theme: "practice",
    alt: "An athlete in a green, white and orange suit holds a standing balance, one foot drawn up behind the head.",
    caption: "An athlete holds a standing balance during a performance.",
    youtube: championshipFilm,
    usedOnce: true,
  },
  {
    id: "hall-crew",
    src: "/assets/gallery/hall-crew.webp",
    width: 1024,
    height: 768,
    plate: "35",
    page: "home",
    section: "inside",
    theme: "documentation",
    alt: "A video camera on a tripod stands beside a sound desk and an open laptop on the hall floor.",
    caption: "Recording equipment set up on the hall floor during the championship.",
    usedOnce: true,
  },
  {
    id: "recognition-stand",
    src: "/assets/gallery/recognition-stand.webp",
    width: 1024,
    height: 768,
    plate: "36",
    page: "event",
    section: "experience",
    theme: "recognition",
    alt: "An athlete in an orange shirt holds a medal while officials stand beside her in the hall.",
    caption: "An athlete receives a medal during recognition in the hall.",
    usedOnce: true,
  },
  {
    id: "medal-placed",
    src: "/assets/gallery/medal-placed.webp",
    width: 1024,
    height: 768,
    plate: "37",
    page: "gallery",
    section: "recognition",
    theme: "recognition",
    alt: "A medal is placed over an athlete's head in the hall, while a certificate is held beside him.",
    caption: "A medal is placed as a certificate is held beside the athlete, during recognition in the hall.",
    usedOnce: true,
  },
  {
    id: "certificate-youth",
    src: "/assets/gallery/certificate-youth.webp",
    width: 1024,
    height: 768,
    plate: "38",
    page: "gallery",
    section: "recognition",
    theme: "recognition",
    alt: "A young athlete in orange holds a certificate in the hall.",
    caption: "An athlete holds a certificate presented in the hall.",
    usedOnce: true,
  },
];

export const homeMomentIds = ["yt-verandah-table", "yt-standing-balance", "hall-crew"];

export const publishedStills = publishedPhotos.map(({ id, src, alt, caption, plate, width, height }) => ({
  id,
  src,
  alt,
  caption,
  plate,
  width,
  height,
}));

export const filmLinks: Record<string, string> = Object.fromEntries(
  publishedPhotos.filter((photo) => photo.youtube).map((photo) => [photo.id, photo.youtube as string]),
);

export const unusedPhotos: UnusedPhoto[] = [
  { source: "photo_2026-10-05_10-25-31", status: "near-duplicate", reason: "Same officials' lineup as 10-25-29, with the microphone away from the speaker." },
  { source: "photo_2026-10-05_10-25-29", status: "near-duplicate", reason: "Same hall lineup as recognition-stand. Officials are looking down; the athlete frame is clearer." },
  { source: "photo_2026-10-05_10-25-20", status: "near-duplicate", reason: "Same recognition lineup, another certificate handoff." },
  { source: "photo_2026-10-05_10-25-23", status: "near-duplicate", reason: "Same recognition lineup, another certificate handoff." },
  { source: "photo_2026-10-05_10-25-15", status: "near-duplicate", reason: "Same young athlete and certificate as certificate-youth, a few moments apart." },
  { source: "photo_2026-10-05_10-25-08", status: "near-duplicate", reason: "Same athlete as recognition-stand, now holding the certificate." },
  { source: "photo_2026-10-05_10-25-10", status: "near-duplicate", reason: "Same athlete and lineup as recognition-stand, with the microphone raised." },
  { source: "photo_2026-10-05_10-25-06", status: "near-duplicate", reason: "Same athlete as recognition-stand. An arm crosses the face while the medal is placed." },
  { source: "photo_2026-10-05_10-25-04", status: "near-duplicate", reason: "Same recognition lineup, another athlete with a certificate." },
  { source: "photo_2026-10-05_10-25-02", status: "near-duplicate", reason: "Same athlete and certificate as 10-25-04." },
  { source: "photo_2026-10-05_10-24-59", status: "near-duplicate", reason: "Same recognition lineup, another athlete with a certificate." },
  { source: "photo_2026-10-05_10-24-45", status: "near-duplicate", reason: "Same recognition lineup, another certificate held in the hall." },
  { source: "photo_2026-10-05_10-24-37", status: "near-duplicate", reason: "Same two people, sofas, banner and camera as the published interview-sofa frame." },
  { source: "photo_2026-10-05_10-24-34", status: "reserved", reason: "Courtyard offering. morning-havan already carries that gathering." },
  { source: "photo_2026-10-05_10-24-32", status: "reserved", reason: "Another portrait before the championship banner. The gallery already holds banner portraits." },
];

/** Research only. Not imported by any page. */
export const photoEvidence: {
  id: string;
  capture: string;
  source: "visible-stamp";
  day: "02" | "03";
  confidence: "high";
  scene: string;
  placement: string;
}[] = [
  { id: "children-verandah", capture: "2026-10-02 05:29", source: "visible-stamp", day: "02", confidence: "high", scene: "gathering", placement: "story day-02" },
  { id: "field-circle", capture: "2026-10-02 06:27", source: "visible-stamp", day: "02", confidence: "high", scene: "gathering", placement: "story day-02" },
  { id: "practice-rise", capture: "2026-10-02 07:17", source: "visible-stamp", day: "02", confidence: "high", scene: "practice", placement: "story day-02" },
  { id: "practice-low", capture: "2026-10-02 07:23", source: "visible-stamp", day: "02", confidence: "high", scene: "practice", placement: "yogasana" },
  { id: "morning-address", capture: "2026-10-03 07:00", source: "visible-stamp", day: "03", confidence: "high", scene: "address", placement: "story day-03" },
  { id: "morning-havan", capture: "2026-10-03 07:31", source: "visible-stamp", day: "03", confidence: "high", scene: "offering", placement: "story day-03" },
  { id: "portrait-jersey", capture: "2026-10-03 10:32", source: "visible-stamp", day: "03", confidence: "high", scene: "portrait", placement: "yogasana" },
  { id: "day-crew", capture: "2026-10-03 10:47", source: "visible-stamp", day: "03", confidence: "high", scene: "organisation", placement: "people" },
  { id: "portrait-navy", capture: "2026-10-03 10:51", source: "visible-stamp", day: "03", confidence: "high", scene: "portrait", placement: "gallery day-03" },
  { id: "portrait-braid", capture: "2026-10-03 10:53", source: "visible-stamp", day: "03", confidence: "high", scene: "portrait", placement: "gallery day-03" },
  { id: "portrait-yellow", capture: "2026-10-03 10:58", source: "visible-stamp", day: "03", confidence: "high", scene: "portrait", placement: "gallery day-03" },
  { id: "portrait-blue", capture: "2026-10-03 11:06", source: "visible-stamp", day: "03", confidence: "high", scene: "portrait", placement: "gallery day-03" },
  { id: "interview-sofa", capture: "2026-10-03 11:37", source: "visible-stamp", day: "03", confidence: "high", scene: "conversation", placement: "gallery day-03" },
  { id: "indoor-session", capture: "2026-10-03 19:49", source: "visible-stamp", day: "03", confidence: "high", scene: "session", placement: "story day-03" },
];
