import type { Metadata } from "next";
import { OrganisationPage } from "@/components/pages/OrganisationPage";

export const metadata: Metadata = {
  title: "People",
  description:
    "The All Bengal Yogasana Sports Association, and the institutions named with the 7th State Yogasana Sports Championship: Yogasana Bharat, World Yogasana, Karmyog for the 21st Century and Bharatiya Krishak Samaj.",
};

export default function Page() {
  return <OrganisationPage />;
}
