export type Still = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  plate: string;
  width: number;
  height: number;
};

export type FilmTrack = { src: string; srcLang: string; label: string };

export type Film = {
  id: string;
  src: string;
  poster: string;
  alt: string;
  caption: string;
  plate: string;
  width: number;
  height: number;
  duration?: string;
  day?: string;
  tracks?: FilmTrack[];
};

export const hero = {
  src: "/assets/hero/prakriti-jagaran.webp",
  alt: "Artwork for Prakriti Jagaran and the 7th State Yogasana Sports Championship: a figure in yellow sounds a conch, with the All Bengal Yogasana Sports Association, Yogasana Bharat and World Yogasana marks, at Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum.",
};

export const logo = {
  src: "/assets/logo/yogasana-bharat.webp",
  alt: "Yogasana Bharat seal, with the line समत्वं योग उच्यते",
};

export const stills: Still[] = [
  { id: "children-verandah", src: "/assets/gallery/children-verandah.webp", plate: "01", width: 1280, height: 960, alt: "Young athletes in orange sit along the mandir verandah, with cameras set up in the foreground.", caption: "Young athletes seated along the mandir verandah at Bharat Sevashram Sangha, Muluk." },
  { id: "organisers-court", src: "/assets/gallery/organisers-court.webp", plate: "02", width: 1280, height: 960, alt: "A group stands in the courtyard in front of the ashram building.", caption: "A group in the courtyard of the ashram." },
  { id: "practice-low", src: "/assets/gallery/practice-low.webp", plate: "03", width: 1280, height: 960, alt: "Practitioners hold a low posture on striped mats beside the health centre.", caption: "Morning practice on the mats beside the health centre at Muluk." },
  { id: "practice-rise", src: "/assets/gallery/practice-rise.webp", plate: "04", width: 1280, height: 960, alt: "The group raises both arms during morning practice, led from the front of the mat.", caption: "Arms raised during morning practice, led by the association team." },
  { id: "field-circle", src: "/assets/gallery/field-circle.webp", plate: "05", width: 1280, height: 960, alt: "A circle seated on the ashram field, with association shirts visible in the foreground.", caption: "A circle seated on the field at Muluk." },
  { id: "morning-address", src: "/assets/gallery/morning-address.webp", plate: "06", width: 1280, height: 960, alt: "A speaker in yellow sits with a microphone during a morning gathering in the courtyard.", caption: "A morning address in the courtyard." },
  { id: "morning-havan", src: "/assets/gallery/morning-havan.webp", plate: "07", width: 1280, height: 960, alt: "People sit with folded hands around a small fire offering in the courtyard.", caption: "A morning offering in the courtyard at Muluk." },
  { id: "hall-athletes", src: "/assets/gallery/hall-athletes.webp", plate: "08", width: 1280, height: 960, alt: "Athletes in orange shirts sit on the floor of the hall, facing the front.", caption: "Athletes of the state championship, seated in the hall." },
  { id: "children-banner", src: "/assets/gallery/children-banner.webp", plate: "09", width: 1280, height: 960, alt: "Children in orange sit before the championship banner and the Prakriti Jagaran banner.", caption: "Children seated before the championship banner and the Prakriti Jagaran banner." },
  { id: "hall-wide", src: "/assets/gallery/hall-wide.webp", plate: "10", width: 1280, height: 960, alt: "A wide view of the hall, with the gathering seated before the dais and the Sri Sri Shiv Mandir sign.", caption: "The hall at Sri Sri Shiv Mandir, during the championship gathering." },
  { id: "dais-address", src: "/assets/gallery/dais-address.webp", plate: "11", width: 1280, height: 960, alt: "A speaker with a microphone stands at the championship dais.", caption: "An address from the dais, beneath the championship banner." },
  { id: "table-address", src: "/assets/gallery/table-address.webp", plate: "12", width: 960, height: 1280, alt: "A speaker in yellow stands at a microphone beside the long table.", caption: "An address during the event proceedings." },
  { id: "dance", src: "/assets/gallery/dance.webp", plate: "13", width: 1280, height: 960, alt: "Dancers in cream and red costumes perform in the hall while phones record them.", caption: "Dance in the hall, recorded from the floor." },
  { id: "remembrance", src: "/assets/gallery/remembrance.webp", plate: "14", width: 1280, height: 960, alt: "A framed portrait is held at the ceremonial table.", caption: "A framed portrait brought to the table." },
  { id: "portrait-blue", src: "/assets/gallery/portrait-blue.webp", plate: "15", width: 1280, height: 960, alt: "A young athlete in a blue shirt stands before the championship banner.", caption: "A young athlete in a blue shirt, before the championship banner." },
  { id: "portrait-yellow", src: "/assets/gallery/portrait-yellow.webp", plate: "16", width: 1280, height: 960, alt: "A young athlete in a yellow shirt stands before the championship banner.", caption: "A young athlete in a yellow shirt, before the championship banner." },
  { id: "portrait-braid", src: "/assets/gallery/portrait-braid.webp", plate: "17", width: 1280, height: 960, alt: "A young athlete with a braid stands before the championship banner.", caption: "A young athlete with a braid, before the championship banner." },
  { id: "portrait-navy", src: "/assets/gallery/portrait-navy.webp", plate: "18", width: 1280, height: 960, alt: "A young man in a navy jacket stands before the championship banner.", caption: "A participant in a navy jacket, before the championship banner." },
  { id: "portrait-jersey", src: "/assets/gallery/portrait-jersey.webp", plate: "19", width: 960, height: 1280, alt: "A young athlete in a blue and white jersey stands before the championship banner.", caption: "An athlete in a blue and white jersey, before the championship banner." },
  { id: "interview-banner", src: "/assets/gallery/interview-banner.webp", plate: "20", width: 960, height: 1280, alt: "Dr (Major) Narayan Bhattacharya sits in conversation before the Prakriti Jagaran banner.", caption: "Dr (Major) Narayan Bhattacharya, before the Prakriti Jagaran banner." },
  { id: "interview-sofa", src: "/assets/gallery/interview-sofa.webp", plate: "21", width: 1280, height: 960, alt: "Two men sit for a filmed conversation in front of the championship banner.", caption: "Two men in a recorded conversation before the championship banner." },
  { id: "interview-corridor", src: "/assets/gallery/interview-corridor.webp", plate: "22", width: 1280, height: 960, alt: "A woman is recorded by a camera crew in a corridor.", caption: "A recorded conversation in a corridor during the championship." },
  { id: "day-crew", src: "/assets/gallery/day-crew.webp", plate: "23", width: 1280, height: 960, alt: "A camera operator films seated officials in the hall.", caption: "The hall being filmed during the championship proceedings." },
  { id: "night-officials", src: "/assets/gallery/night-officials.webp", plate: "24", width: 1280, height: 960, alt: "People sit with laptops under the championship banner at night.", caption: "Evening activity under the championship banner." },
  { id: "night-floor", src: "/assets/gallery/night-floor.webp", plate: "25", width: 1280, height: 960, alt: "Athletes in red stand near people seated at tables on a night terrace.", caption: "Participants during the evening proceedings." },
  { id: "night-mats", src: "/assets/gallery/night-mats.webp", plate: "26", width: 1280, height: 960, alt: "Athletes in red West Bengal kits stand on numbered mats at night.", caption: "Athletes in West Bengal kits, on the mats after dark." },
  { id: "night-asana", src: "/assets/gallery/night-asana.webp", plate: "27", width: 800, height: 600, alt: "An athlete holds a standing balance on a mat at night, with judges seated behind.", caption: "A standing balance during the evening session." },
];

export const films: Film[] = [
  {
    id: "film-corridor",
    src: "/assets/video/film-corridor.mp4",
    poster: "/assets/video/film-corridor.webp",
    plate: "28",
    width: 1280,
    height: 720,
    alt: "The gathering seated before the 7th State Yogasana Sports Championship banner and the Prakriti Jagaran banner.",
    caption: "The championship environment: the gathering before the banners.",
  },
  {
    id: "film-athletes",
    src: "/assets/video/film-athletes.mp4",
    poster: "/assets/video/film-athletes.webp",
    plate: "29",
    width: 720,
    height: 1280,
    alt: "Athletes in orange seated in the hall at Sri Sri Shiv Mandir.",
    caption: "Athletes seated in the hall.",
  },
  {
    id: "film-dais",
    src: "/assets/video/film-dais.mp4",
    poster: "/assets/video/film-dais.webp",
    plate: "30",
    width: 720,
    height: 1280,
    alt: "The championship dais seen from within the seated gathering.",
    caption: "The championship dais, from within the gathering.",
  },
  {
    id: "film-ceremony",
    src: "/assets/video/film-ceremony.mp4",
    poster: "/assets/video/film-ceremony.webp",
    plate: "31",
    width: 1280,
    height: 720,
    alt: "People gathered at the long table inside Sri Sri Shiv Mandir.",
    caption: "The wider gathering, at the long table.",
  },
];

export const introStill = stills[0];
export const hallStills = stills.slice(1, 15);
export const groundStills = stills.slice(15, 17);
export const practiceStills = stills.slice(17);

export const plates = [
  ...stills.map((item) => ({
    id: item.id,
    plate: item.plate,
    caption: item.caption,
    kind: "still" as const,
  })),
  ...films.map((item) => ({
    id: item.id,
    plate: item.plate,
    caption: item.caption,
    kind: "film" as const,
  })),
];
