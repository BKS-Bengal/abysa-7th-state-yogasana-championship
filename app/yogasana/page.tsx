import type { Metadata } from "next";
import { YogasanaPage } from "@/components/pages/YogasanaPage";

export const metadata: Metadata = {
  title: "Yogasana",
  description:
    "Yogasana at the 7th State Yogasana Sports Championship 2026–27: the hall at Sri Sri Shiv Mandir and morning practice on the mats at Muluk.",
};

export default function Page() {
  return <YogasanaPage />;
}
