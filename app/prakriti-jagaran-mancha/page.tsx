import type { Metadata } from "next";
import { PrakritiPage } from "@/components/pages/PrakritiPage";

export const metadata: Metadata = {
  title: "Prakriti Jagaran Mancha",
  description:
    "Prakriti Jagaran Mancha at the 7th State Yogasana Sports Championship, and the link between Yogasana, food and farming.",
};

export default function Page() {
  return <PrakritiPage />;
}
