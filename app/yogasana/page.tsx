import type { Metadata } from "next";
import { YogasanaPage } from "@/components/pages/YogasanaPage";

export const metadata: Metadata = {
  title: "Yogasana",
  description:
    "Yogasana as a competitive discipline at the 7th State Yogasana Sports Championship, from practice to performance.",
};

export default function Page() {
  return <YogasanaPage />;
}
