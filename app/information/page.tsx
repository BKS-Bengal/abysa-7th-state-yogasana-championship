import type { Metadata } from "next";
import { InformationPage } from "@/components/pages/InformationPage";

export const metadata: Metadata = {
  title: "Information",
  description:
    "Yogasana Bharat and World Yogasana affiliations of the All Bengal Yogasana Sports Association, with Karmyog and Bharatiya Krishak Samaj as joint organisers.",
};

export default function Page() {
  return <InformationPage />;
}
