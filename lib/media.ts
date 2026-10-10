import { publishedStills } from "@/content/photos";

export type Still = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
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
  src: "/assets/hero/championship-banner.webp",
  width: 3456,
  height: 2304,
  alt: "Official banner for the 7th State Yogasana Sports Championship 2026–27 at Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum.",
};

export const prakritiArt = {
  src: "/assets/hero/prakriti-jagaran.webp",
  width: 1024,
  height: 576,
  alt: "Artwork shown with the 7th State Yogasana Sports Championship: a figure in yellow sounds a conch, with the All Bengal Yogasana Sports Association, Yogasana Bharat and World Yogasana marks, at Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum.",
};

export const logo = {
  src: "/assets/logo/yogasana-bharat.webp",
  alt: "Yogasana Bharat seal, with the line समत्वं योग उच्यते",
};

const archive: Still[] = [
  { id: "children-verandah", src: "/assets/gallery/children-verandah.webp", plate: "01", width: 1280, height: 960, alt: "Young athletes in orange sit along the mandir verandah.", caption: "Young athletes seated along the mandir verandah at Bharat Sevashram Sangha, Muluk." },
  { id: "organisers-court", src: "/assets/gallery/organisers-court.webp", plate: "02", width: 1280, height: 960, alt: "Shyamal Ta, State President of the All Bengal Yogasana Sports Association, stands with officials and organisers in the courtyard at Bharat Sevashram Sangha, Muluk.", caption: "Shyamal Ta, State President of the All Bengal Yogasana Sports Association, with officials and organisers in the courtyard at Bharat Sevashram Sangha, Muluk." },
  { id: "practice-low", src: "/assets/gallery/practice-low.webp", plate: "03", width: 1280, height: 960, alt: "Practitioners hold a low posture on striped mats beside the health centre.", caption: "Morning practice on the mats beside the health centre at Muluk." },
  { id: "practice-rise", src: "/assets/gallery/practice-rise.webp", plate: "04", width: 1280, height: 960, alt: "The group raises both arms during morning practice, led from the front of the mat.", caption: "Arms raised during morning practice, led by the association team." },
  { id: "field-circle", src: "/assets/gallery/field-circle.webp", plate: "05", width: 1280, height: 960, alt: "A circle seated on the ashram field, with association shirts visible in the foreground.", caption: "Athletes sit together on the field at Muluk." },
  { id: "morning-address", src: "/assets/gallery/morning-address.webp", plate: "06", width: 1280, height: 960, alt: "Shyamal Ta, State President of the All Bengal Yogasana Sports Association, addresses the courtyard gathering at Bharat Sevashram Sangha, Muluk.", caption: "Shyamal Ta, State President of the All Bengal Yogasana Sports Association, addressing the courtyard gathering at Bharat Sevashram Sangha, Muluk, on the morning of 3 October." },
  { id: "morning-havan", src: "/assets/gallery/morning-havan.webp", plate: "07", width: 1280, height: 960, alt: "Shyamal Ta, State President of the All Bengal Yogasana Sports Association, sits beside the fire offering at Bharat Sevashram Sangha, Muluk.", caption: "Shyamal Ta, State President of the All Bengal Yogasana Sports Association, beside the fire offering at Bharat Sevashram Sangha, Muluk, on the morning of 3 October." },
  { id: "hall-athletes", src: "/assets/gallery/hall-athletes.webp", plate: "08", width: 1280, height: 960, alt: "Athletes in orange shirts sit on the floor of the hall, facing the front.", caption: "Athletes of the state championship, seated in the hall." },
  { id: "children-banner", src: "/assets/gallery/children-banner.webp", plate: "09", width: 1280, height: 960, alt: "Children in orange sit before the championship banner and a second banner.", caption: "Children seated before the championship banner and a second banner." },
  { id: "hall-wide", src: "/assets/gallery/hall-wide.webp", plate: "10", width: 1280, height: 960, alt: "A wide view of the hall, with the gathering seated before the dais and the Sri Sri Shiv Mandir sign.", caption: "The hall at Sri Sri Shiv Mandir, during the championship gathering." },
  { id: "dais-address", src: "/assets/gallery/dais-address.webp", plate: "11", width: 1280, height: 960, alt: "A person with a microphone stands at the championship dais.", caption: "A speaker at the dais, beneath the championship banner." },
  { id: "table-address", src: "/assets/gallery/table-address.webp", plate: "12", width: 960, height: 1280, alt: "Sourabh J. Sarkar, in yellow, stands with a microphone beside the long table.", caption: "Sourabh J. Sarkar addressing the gathering." },
  { id: "dance", src: "/assets/gallery/dance.webp", plate: "13", width: 1280, height: 960, alt: "Two dancers in cream, red and gold perform in the hall of Sri Sri Shiv Mandir while the gathering watches.", caption: "Inaugural dance in the hall." },
  { id: "remembrance", src: "/assets/gallery/remembrance.webp", plate: "14", width: 1280, height: 960, alt: "A woman in a yellow saree holds a framed portrait of Rabindranath Tagore at the long table, with a second portrait lying on the table.", caption: "Portraits of Rabindranath Tagore brought to the long table." },
  { id: "portrait-blue", src: "/assets/gallery/portrait-blue.webp", plate: "15", width: 1280, height: 960, alt: "An athlete stands with folded hands before the championship banner.", caption: "" },
  { id: "portrait-yellow", src: "/assets/gallery/portrait-yellow.webp", plate: "16", width: 1280, height: 960, alt: "An athlete stands before the championship banner.", caption: "" },
  { id: "portrait-braid", src: "/assets/gallery/portrait-braid.webp", plate: "17", width: 1280, height: 960, alt: "An athlete stands with folded hands before the championship banner.", caption: "" },
  { id: "portrait-navy", src: "/assets/gallery/portrait-navy.webp", plate: "18", width: 1280, height: 960, alt: "An athlete stands before the championship banner.", caption: "" },
  { id: "portrait-jersey", src: "/assets/gallery/portrait-jersey.webp", plate: "19", width: 960, height: 1280, alt: "An athlete stands before the championship banner.", caption: "" },
  { id: "interview-banner", src: "/assets/gallery/interview-banner.webp", plate: "20", width: 960, height: 1280, alt: "An older man speaks while a younger man listens, before a banner.", caption: "" },
  { id: "interview-sofa", src: "/assets/gallery/interview-sofa.webp", plate: "21", width: 1280, height: 960, alt: "Two men sit before the championship banner.", caption: "" },
  { id: "interview-corridor", src: "/assets/gallery/interview-corridor.webp", plate: "22", width: 1280, height: 960, alt: "A woman stands in a corridor during the championship.", caption: "" },
  { id: "day-crew", src: "/assets/gallery/day-crew.webp", plate: "23", width: 1280, height: 960, alt: "Shyamal Ta, State President of the All Bengal Yogasana Sports Association, seated in the hall at Bharat Sevashram Sangha, Muluk.", caption: "Shyamal Ta, State President of the All Bengal Yogasana Sports Association, in the hall at Bharat Sevashram Sangha, Muluk, on the morning of 3 October." },
  { id: "night-officials", src: "/assets/gallery/night-officials.webp", plate: "24", width: 1280, height: 960, alt: "People seated under the championship banner at night.", caption: "People seated under the championship banner." },
  { id: "night-floor", src: "/assets/gallery/night-floor.webp", plate: "25", width: 1280, height: 960, alt: "Athletes in red stand near people seated at tables on a night terrace.", caption: "Participants during the evening proceedings." },
  { id: "night-mats", src: "/assets/gallery/night-mats.webp", plate: "26", width: 1280, height: 960, alt: "Athletes in red West Bengal kits stand on numbered mats at night.", caption: "Athletes in West Bengal kits on the mats during an evening session." },
  { id: "night-asana", src: "/assets/gallery/night-asana.webp", plate: "27", width: 800, height: 600, alt: "An athlete holds a standing balance on a mat at night, with judges seated behind.", caption: "A standing balance during the evening session." },
];

export const stills: Still[] = [...archive, ...publishedStills];

export type RemoteFilm = {
  id: string;
  youtube: string;
  embed: string;
  poster: string;
  plate: string;
  caption: string;
  alt: string;
  vertical?: boolean;
};

function remote(id: string, videoId: string, plate: string, caption: string, alt: string, vertical = false): RemoteFilm {
  return {
    id,
    youtube: vertical ? `https://www.youtube.com/shorts/${videoId}` : `https://www.youtube.com/watch?v=${videoId}`,
    embed: `https://www.youtube-nocookie.com/embed/${videoId}`,
    poster: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    plate,
    caption,
    alt,
    vertical,
  };
}

export const remoteFilms: RemoteFilm[] = [
  remote(
    "yt-yajna",
    "_p_k4tdwbeU",
    "47",
    "Shyamal Ta and the speakers with him, on the Vedic yajna.",
    "Shyamal Ta and the speakers with him discuss the Vedic yajna as a work offered without choosing a recipient, the morning order of flag, yajna, practice and competition, and the meals they describe as simple food.",
  ),
  remote(
    "yt-shyamal",
    "hdyJD2A38dY",
    "48",
    "Shyamal Ta with Amit Shil, recorded at Muluk.",
    "Amit Shil of Karmyog TV speaks with Shyamal Ta at Bharat Sevashram Sangha, Muluk, about the work he is doing, his present activities in Yogasana, and the plans he describes.",
  ),
  remote(
    "yt-abhay",
    "RLgAz4onoSM",
    "49",
    "Abhay Barman on competing here.",
    "Abhay Barman of Paschim Bardhaman speaks of competing at this championship, of medals he says he won earlier, and of asking young athletes to take the route from district to state.",
  ),
  remote(
    "yt-mahacharya",
    "J5WbntnJwng",
    "50",
    "Sourabh J. Sarkar and Reena J. Sarkar, at Muluk.",
    "Sourabh J. Sarkar, Mahacharya, and Reena J. Sarkar, Gunomata, in the recording titled প্রকৃতি জাগরণ যজ্ঞ, at the championship in Muluk, Birbhum.",
  ),
  remote(
    "yt-short-meet",
    "i2cGyhSS1kU",
    "51",
    "A short from the state championship.",
    "A vertical short from the state Yogasana championship.",
    true,
  ),
  remote(
    "yt-short-yajna",
    "BpFFbFtfCFw",
    "52",
    "A short on the fire and the Sangha.",
    "A vertical short. Its YouTube title is Prakriti Jagaran Yagya beside Bharat Seva Sangha. On this site the chapter is Prakriti Jagran Yajna.",
    true,
  ),
  remote(
    "yt-short-line",
    "-RJ1Lq8OUtk",
    "53",
    "A short of the line of a posture.",
    "A vertical short of Yogasana at the championship: the strength, the discipline, and the line of a posture.",
    true,
  ),
];

export const films: Film[] = [
  {
    id: "film-corridor",
    src: "/assets/video/film-corridor.mp4",
    poster: "/assets/video/film-corridor.webp",
    plate: "28",
    width: 1280,
    height: 720,
    alt: "The gathering seated before the 7th State Yogasana Sports Championship banner and a second banner.",
    caption: "The gathering seated before the championship banners.",
    duration: "0:17",
  },
  {
    id: "film-athletes",
    src: "/assets/video/film-athletes.mp4",
    poster: "/assets/video/film-athletes.webp",
    plate: "29",
    width: 720,
    height: 1280,
    alt: "Athletes in orange seated in the hall at Sri Sri Shiv Mandir.",
    caption: "Athletes seated in the hall of Sri Sri Shiv Mandir.",
    duration: "0:14",
  },
  {
    id: "film-dais",
    src: "/assets/video/film-dais.mp4",
    poster: "/assets/video/film-dais.webp",
    plate: "30",
    width: 720,
    height: 1280,
    alt: "The championship dais seen from within the seated gathering.",
    caption: "The championship dais, seen from within the gathering.",
    duration: "0:10",
  },
  {
    id: "film-ceremony",
    src: "/assets/video/film-ceremony.mp4",
    poster: "/assets/video/film-ceremony.webp",
    plate: "31",
    width: 1280,
    height: 720,
    alt: "People gathered at the long table inside Sri Sri Shiv Mandir.",
    caption: "The long table during the championship gathering.",
    duration: "0:19",
  },
];

export const introStill = archive[0];
export const hallStills = archive.slice(1, 15);
export const groundStills = archive.slice(15, 17);
export const practiceStills = archive.slice(17);

export const plates = [
  ...stills.map((item) => ({
    id: item.id,
    plate: item.plate,
    caption: item.caption ?? "",
    kind: "still" as const,
  })),
  ...films.map((item) => ({
    id: item.id,
    plate: item.plate,
    caption: item.caption,
    kind: "film" as const,
  })),
];
