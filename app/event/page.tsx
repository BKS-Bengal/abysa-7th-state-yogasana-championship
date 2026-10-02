import type { Metadata } from "next";
import { EventPage } from "@/components/pages/EventPage";

export const metadata: Metadata = {
  title: "Event",
  description:
    "Prakriti Jagaran Mancha and the 7th State Yogasana Sports Championship 2026–27 at Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum. Presented by the All Bengal Yogasana Sports Association.",
};

export default function Page() {
  return <EventPage />;
}
