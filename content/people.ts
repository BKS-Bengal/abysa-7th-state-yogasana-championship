/**
 * Internal person/role registry. Do not render `source`.
 * A name is attached to a scene only when identity and presence are both independently supported.
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
    role: "Secretary",
    organisation: "All Bengal Yogasana Sports Association",
    source: "Secretary of the association for this championship. Not identified in a particular frame.",
    verified: true,
  },
] as const;
