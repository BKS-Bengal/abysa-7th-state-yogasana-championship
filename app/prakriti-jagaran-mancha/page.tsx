import type { Metadata } from "next";
import { PrakritiPage } from "@/components/pages/PrakritiPage";

export const metadata: Metadata = {
  title: "Prakriti Jagran Yatra",
  description:
    "Prakriti Jagran Yatra at the 7th State Yogasana Sports Championship: the mornings, the fire offering, food, and farming.",
};

export default function Page() {
  return <PrakritiPage />;
}
