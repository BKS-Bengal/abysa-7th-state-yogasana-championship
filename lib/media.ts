export type Still = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  plate: string;
  width: number;
  height: number;
};

export type Film = {
  id: string;
  src: string;
  poster: string;
  alt: string;
  caption: string;
  plate: string;
  width: number;
  height: number;
};

export const hero = {
  src: "/assets/hero/prakriti-jagaran.webp",
  alt: "Invitation artwork for Prakriti Jagaran: a figure in yellow sounds a conch, with the All Bengal Yogasana Sports Association, Yogasana Bharat and World Yogasana marks, and the venue Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum.",
};

export const logo = {
  src: "/assets/logo/yogasana-bharat.webp",
  alt: "Yogasana Bharat seal, with the line সমত্বং যোগ উচ্যতে",
};

export const stills: Still[] = [
  {
    id: "athletes-hall",
    src: "/assets/gallery/athletes-hall.webp",
    plate: "01",
    width: 1024,
    height: 768,
    alt: "Young athletes in orange shirts seated on the floor of the hall, listening.",
    caption: "Athletes of the state championship, seated in the hall.",
  },
  {
    id: "hall-assembly",
    src: "/assets/gallery/hall-assembly.webp",
    plate: "02",
    width: 1024,
    height: 768,
    alt: "A wide view of the hall at Sri Sri Shiv Mandir, with the gathering seated before the dais.",
    caption: "The hall at Sri Sri Shiv Mandir, Bharat Sevashram Sangha.",
  },
  {
    id: "championship-dais",
    src: "/assets/gallery/championship-dais.webp",
    plate: "03",
    width: 1024,
    height: 768,
    alt: "The dais beneath the banner of the 7th State Yogasana Sports Championship 2026-27.",
    caption: "7th State Yogasana Sports Championship 2026–27, men and women.",
  },
  {
    id: "address",
    src: "/assets/gallery/address.webp",
    plate: "04",
    width: 768,
    height: 1024,
    alt: "A speaker in yellow stands at a microphone beside the long table.",
    caption: "An address from the table.",
  },
  {
    id: "dais-speaker",
    src: "/assets/gallery/dais-speaker.webp",
    plate: "05",
    width: 1024,
    height: 768,
    alt: "A speaker with a microphone stands among officials at the championship dais.",
    caption: "The dais, with the championship banner behind.",
  },
  {
    id: "dance-pair",
    src: "/assets/gallery/dance-pair.webp",
    plate: "06",
    width: 1024,
    height: 768,
    alt: "Two dancers in red and cream perform in the hall while the audience watches.",
    caption: "Dance in the hall.",
  },
  {
    id: "dance-record",
    src: "/assets/gallery/dance-record.webp",
    plate: "07",
    width: 1024,
    height: 768,
    alt: "Dancers mid-movement, with a phone held up to record the performance.",
    caption: "The dance, watched and recorded from the floor.",
  },
  {
    id: "dance-turn",
    src: "/assets/gallery/dance-turn.webp",
    plate: "08",
    width: 768,
    height: 1024,
    alt: "Dancers seen from behind, turning in red blouses and cream skirts.",
    caption: "A turn in the dance.",
  },
  {
    id: "remembrance",
    src: "/assets/gallery/remembrance.webp",
    plate: "09",
    width: 1024,
    height: 768,
    alt: "A woman in a yellow saree holds a framed portrait at the ceremonial table.",
    caption: "A framed portrait brought to the table.",
  },
  {
    id: "ceremony-table",
    src: "/assets/gallery/ceremony-table.webp",
    plate: "10",
    width: 1024,
    height: 768,
    alt: "People gathered at a long table under the sign of Sri Sri Shiv Mandir.",
    caption: "At the table, beneath the temple sign.",
  },
  {
    id: "offering",
    src: "/assets/gallery/offering.webp",
    plate: "11",
    width: 1024,
    height: 768,
    alt: "A woman in white walks toward the dais as the hall watches.",
    caption: "Approaching the dais.",
  },
  {
    id: "young-athletes",
    src: "/assets/gallery/young-athletes.webp",
    plate: "12",
    width: 1024,
    height: 768,
    alt: "Rows of young athletes in orange sit along the mandir corridor.",
    caption: "Young athletes along the mandir corridor.",
  },
  {
    id: "hall-wide",
    src: "/assets/gallery/hall-wide.webp",
    plate: "13",
    width: 1024,
    height: 768,
    alt: "The long hall opens onto the grounds, with children seated and cameras in the foreground.",
    caption: "The hall opens onto the grounds.",
  },
  {
    id: "from-the-floor",
    src: "/assets/gallery/from-the-floor.webp",
    plate: "14",
    width: 1024,
    height: 768,
    alt: "The gathering stands and sits around the dais, many holding phones.",
    caption: "From the floor of the hall.",
  },
  {
    id: "crossing-dais",
    src: "/assets/gallery/crossing-dais.webp",
    plate: "15",
    width: 1024,
    height: 768,
    alt: "A blurred figure crosses in front of the championship dais.",
    caption: "A passage across the dais.",
  },
  {
    id: "field-circle",
    src: "/assets/gallery/field-circle.webp",
    plate: "16",
    width: 1024,
    height: 768,
    alt: "A large circle seated on the ashram field at Muluk on the morning of 2 October 2026.",
    caption: "On the field at Muluk. 2 October 2026, morning.",
  },
  {
    id: "courtyard",
    src: "/assets/gallery/courtyard.webp",
    plate: "17",
    width: 1024,
    height: 768,
    alt: "People seated on mats in the courtyard, facing an address.",
    caption: "The courtyard assembly.",
  },
  {
    id: "practice-ground",
    src: "/assets/gallery/practice-ground.webp",
    plate: "18",
    width: 1024,
    height: 768,
    alt: "Practitioners hold a low posture on striped mats beside a small fire offering.",
    caption: "On the mats beside the health centre.",
  },
  {
    id: "practice-warrior",
    src: "/assets/gallery/practice-warrior.webp",
    plate: "19",
    width: 1024,
    height: 768,
    alt: "A wide lunge led on the forecourt, with the group practising on an orange mat.",
    caption: "A wide stance on the forecourt.",
  },
  {
    id: "practice-squat",
    src: "/assets/gallery/practice-squat.webp",
    plate: "20",
    width: 1024,
    height: 768,
    alt: "The group moves into a deep squat during morning practice.",
    caption: "Into a squat. About 7:15 in the morning.",
  },
  {
    id: "practice-open",
    src: "/assets/gallery/practice-open.webp",
    plate: "21",
    width: 1024,
    height: 768,
    alt: "Practitioners open the chest, arms extended, during the morning session.",
    caption: "Arms open across the chest.",
  },
  {
    id: "practice-rise",
    src: "/assets/gallery/practice-rise.webp",
    plate: "22",
    width: 1024,
    height: 768,
    alt: "The group raises both arms, led by the All Bengal Yogasana Sports Association team.",
    caption: "Arms raised with the association team.",
  },
  {
    id: "practice-lead",
    src: "/assets/gallery/practice-lead.webp",
    plate: "23",
    width: 1024,
    height: 768,
    alt: "An instructor seen from behind leads the group, incense smoke rising from the mats.",
    caption: "The association team leads. Muluk, 2 October 2026.",
  },
  {
    id: "interview-seated",
    src: "/assets/gallery/interview-seated.webp",
    plate: "28",
    width: 1024,
    height: 768,
    alt: "An interview with Dr (Major) Narayan Bhattacharya being filmed in front of the Prakriti Jagaran banner.",
    caption: "Interview with Dr (Major) Narayan Bhattacharya.",
  },
  {
    id: "interview-camera",
    src: "/assets/gallery/interview-camera.webp",
    plate: "29",
    width: 768,
    height: 1024,
    alt: "A camera on a tripod records the interview with Dr (Major) Narayan Bhattacharya.",
    caption: "The interview, filmed in front of the banner.",
  },
];

export const films: Film[] = [
  {
    id: "film-corridor",
    src: "/assets/video/film-corridor.mp4",
    poster: "/assets/video/film-corridor.webp",
    plate: "24",
    width: 1280,
    height: 720,
    alt: "Film of people seated before the championship banner and the Prakriti Jagaran banner.",
    caption: "Seated before the two banners, in the mandir corridor.",
  },
  {
    id: "film-athletes",
    src: "/assets/video/film-athletes.mp4",
    poster: "/assets/video/film-athletes.webp",
    plate: "25",
    width: 720,
    height: 1280,
    alt: "Portrait film of athletes in orange seated in the hall.",
    caption: "Athletes in the hall.",
  },
  {
    id: "film-dais",
    src: "/assets/video/film-dais.mp4",
    poster: "/assets/video/film-dais.webp",
    plate: "26",
    width: 720,
    height: 1280,
    alt: "Portrait film of the championship dais and the seated gathering.",
    caption: "The dais, from within the gathering.",
  },
  {
    id: "film-ceremony",
    src: "/assets/video/film-ceremony.mp4",
    poster: "/assets/video/film-ceremony.webp",
    plate: "27",
    width: 1280,
    height: 720,
    alt: "Film of the ceremonial table inside Sri Sri Shiv Mandir.",
    caption: "The table inside Sri Sri Shiv Mandir.",
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
