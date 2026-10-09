import type { Metadata } from "next";
import { InformationPage } from "@/components/pages/InformationPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Venue, hall, organisers, and the names on the championship banner for the 7th State Yogasana Sports Championship at Muluk, Bolpur, Birbhum.",
};

export default function Page() {
  return <InformationPage />;
}
