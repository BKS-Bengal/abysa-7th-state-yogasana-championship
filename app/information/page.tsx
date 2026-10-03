import type { Metadata } from "next";
import { InformationPage } from "@/components/pages/InformationPage";

export const metadata: Metadata = {
  title: "Information",
  description:
    "Venue, hall, organisers and affiliations for the 7th State Yogasana Sports Championship at Muluk, Bolpur, Birbhum.",
};

export default function Page() {
  return <InformationPage />;
}
