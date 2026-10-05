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
    source: "Introduced as State President in the recorded conversation at Muluk. The verified spelling is Ta.",
    verified: true,
  },
  {
    id: "papiya-bhattacharya-roy",
    name: "Papiya Bhattacharya (Roy)",
    role: "General Secretary",
    organisation: "All Bengal Yogasana Sports Association",
    source: "Printed on the championship banner as General Secretary, ABYSA. Not identified in a particular frame.",
    verified: true,
  },
] as const;
