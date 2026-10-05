import type { Metadata } from "next";
import { EventPage } from "@/components/pages/EventPage";

export const metadata: Metadata = {
  title: "The championship",
  description:
    "What the 7th State Yogasana Sports Championship is, who competes, how it is judged, and where it is held in Muluk, Bolpur, Birbhum.",
};

export default function Page() {
  return <EventPage />;
}
