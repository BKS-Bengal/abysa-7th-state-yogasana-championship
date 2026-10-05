/**
 * Portrait files for the organisation page. Names and roles live in the copy.
 * Each portrait is the labeled office-bearer extracted from the official championship banner.
 * Narendra Modi and the unlabeled namaste portrait on that banner are not included.
 */
export const portraits = {
  "shyamal-ta": { src: "/assets/people/shyamal-ta.webp", width: 240, height: 219 },
  "papiya-bhattacharya-roy": { src: "/assets/people/papiya-bhattacharya-roy.webp", width: 270, height: 219 },
  "udit-seth": { src: "/assets/people/udit-seth.webp", width: 257, height: 281 },
  "jaideep-arya": { src: "/assets/people/jaideep-arya.webp", width: 231, height: 281 },
} as const;

export const leadershipGroups = [
  { id: "event", members: ["shyamal-ta", "papiya-bhattacharya-roy"] },
  { id: "institutional", members: ["udit-seth", "jaideep-arya"] },
] as const;

export type LeadershipId = keyof typeof portraits;
