export type Locale = "en" | "bn";

export type PlateText = { alt: string; caption: string };

export type Copy = {
  nav: {
    home: string;
    event: string;
    story: string;
    gallery: string;
    media: string;
    information: string;
    menu: string;
    close: string;
    language: string;
    english: string;
    bangla: string;
    skip: string;
    skipIntro: string;
  };
  footer: string;
  lightbox: { previous: string; next: string; close: string };
  home: {
    presents: string;
    title: string;
    bangla: string;
    championship: string;
    place: string;
    leadEyebrow: string;
    leadTitle: string;
    leadEm: string;
    lead: string;
  };
  event: {
    eyebrow: string;
    title: string;
    present: string;
    championship: string;
    motto: string;
    mottoNote: string;
    whyEyebrow: string;
    whyTitle: string;
    whyEm: string;
    why: string;
    recordEyebrow: string;
    recordTitle: string;
    dateNote: string;
    rows: { term: string; value: string; lang?: "bn" }[];
  };
  story: {
    eyebrow: string;
    title: string;
    em: string;
    hall: string;
    ground: string;
    interview: string;
    interviewEyebrow: string;
    interviewTitle: string;
    interviewNote: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    em: string;
    groups: { id: string; kicker: string; title: string; note: string }[];
  };
  media: {
    eyebrow: string;
    title: string;
    em: string;
    play: string;
  };
  information: {
    eyebrow: string;
    title: string;
    lead: string;
    affiliation: string;
    organisers: string;
    closeEyebrow: string;
    closeTitle: string;
    closeName: string;
    closePlace: string;
    closeDate: string;
  };
  captions: Record<string, PlateText>;
};
