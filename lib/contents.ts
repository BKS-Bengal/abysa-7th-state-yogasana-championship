export const contents = [
  { href: "/", index: "01", key: "home" },
  { href: "/event", index: "02", key: "event" },
  { href: "/story", index: "03", key: "story" },
  { href: "/gallery", index: "04", key: "gallery" },
  { href: "/media", index: "05", key: "media" },
  { href: "/organisation", index: "06", key: "organisation" },
  { href: "/prakriti-jagaran-mancha", index: "07", key: "prakriti" },
  { href: "/information", index: "08", key: "information" },
] as const;

export type ContentKey = (typeof contents)[number]["key"];
