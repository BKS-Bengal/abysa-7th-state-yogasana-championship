/**
 * Internal person/role registry. Do not render `source`. Not imported by pages.
 * A name is public only when identity, role, and presence are independently supported.
 *
 * Reconciliation against the October 2026 documentary brief (not visitor copy):
 * - Shyamal Ta: State President, ABYSA. Spelling confirmed in Bengali reporting as শ্যামল তা.
 *   "Shyamal Das Mahashaya" is not an independently verified alternate. Do not publish Das / Mahashaya.
 * - Papiya Bhattacharya (Roy): General Secretary, ABYSA. Printed on the championship banner.
 *   Do not replace the name with Papia Roy Chowdhury.
 * - Shyamal Ta is also printed as an executive committee member of Yogasana Bharat. Publish that once.
 * - His labeled banner portrait (rectangular glasses, thick moustache) matches the living man in
 *   morning-address, morning-havan, organisers-court, and day-crew. Name him only in those frames.
 * - The grey-haired speaker in interview-banner does not match that portrait. Do not name him Shyamal.
 * - Papiya Bhattacharya (Roy) is printed on the banner. The women at the dais and the long table
 *   were compared with that portrait and do not match clearly enough to name.
 * - Udit Seth and Jaideep Arya are printed on the banner with national and world offices.
 *   Publish those offices. Do not say they attended, and do not call them a committee.
 * - Narendra Modi, Rabindranath Tagore, and the unlabeled namaste portrait on the banner
 *   are not leadership profiles. Do not publish Suvendu Adhikari.
 * - Dr Major Narayan Bhattacharya / Mukhopadhyay: inauguration guest in the brief only. Not published.
 * - Mahacharya Sourabh J. Sarkar: independently State President, Bharatiya Krishak Samaj, West Bengal, and associated with Karmyog.
 *   Attendance, lamp lighting, and leadership of a 2 October yajna are brief-only. Do not publish him as present.
 * - Gunamata Rina J. Sarkar, Kalyan Mukherjee, Swami Sanghamitrananda Ji, Mr Supriya,
 *   Kartik Maharaj, Hiranmoy Maharaj: presence at this championship is brief-only. Do not name them.
 * - Approximately 800 competitors, six stages, 10–12 judges per stage, clock times,
 *   First/Second/Third/Fourth, and a named prize hour: brief-only. Do not publish.
 * - Fire offering is dated 3 October in the courtyard photograph, not 2 October.
 *   Do not retitle it Prakriti Jagaran Yajna or Shanti Yajna.
 * - Official English title remains 7th State, not "Seven State".
 * - A state result can lead toward national competition (reported for this meet). Do not publish a results table or a minor's name.
 */
export const people = [
  {
    id: "shyamal-ta",
    name: "Shyamal Ta",
    role: "State President",
    organisation: "All Bengal Yogasana Sports Association",
    source: "Labeled on the championship banner as President, ABYSA, and EC member, Yogasana Bharat. The same face is in the 3 October courtyard address, the fire offering, the organisers’ group, and the hall recording. Not the speaker in interview-banner.",
    verified: true,
  },
  {
    id: "papiya-bhattacharya-roy",
    name: "Papiya Bhattacharya (Roy)",
    role: "General Secretary",
    organisation: "All Bengal Yogasana Sports Association",
    source: "Printed on the championship banner as General Secretary, ABYSA. Compared with the dais and long-table photographs; not a clear enough face match to name in a frame.",
    verified: true,
  },
  {
    id: "udit-seth",
    name: "Udit Seth",
    role: "President",
    organisation: "Yogasana Bharat",
    source: "Labeled on the championship banner. Portrait is from that artwork. Not documented as present at Muluk.",
    verified: true,
  },
  {
    id: "jaideep-arya",
    name: "Jaideep Arya",
    role: "General Secretary",
    organisation: "World Yogasana and Yogasana Bharat",
    source: "Labeled on the championship banner. Portrait is from that artwork. Not documented as present at Muluk.",
    verified: true,
  },
] as const;
