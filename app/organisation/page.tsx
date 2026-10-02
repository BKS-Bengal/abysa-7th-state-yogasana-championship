import type { Metadata } from "next";
import { OrganisationPage } from "@/components/pages/OrganisationPage";

export const metadata: Metadata = {
  title: "Organisation",
  description:
    "All Bengal Yogasana Sports Association presents the 7th State Yogasana Sports Championship 2026–27. Affiliated to Yogasana Bharat and World Yogasana.",
};

export default function Page() {
  return <OrganisationPage />;
}
