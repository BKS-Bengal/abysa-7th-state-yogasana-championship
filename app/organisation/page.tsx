import type { Metadata } from "next";
import { OrganisationPage } from "@/components/pages/OrganisationPage";

export const metadata: Metadata = {
  title: "Organisation",
  description:
    "Partners of the 7th State Yogasana Sports Championship: the All Bengal Yogasana Sports Association, Yogasana Bharat, World Yogasana, Karmyog for the 21st Century and Bharatiya Krishak Samaj.",
};

export default function Page() {
  return <OrganisationPage />;
}
