import type { Metadata } from "next";
import { PrakritiPage } from "@/components/pages/PrakritiPage";

export const metadata: Metadata = {
  title: "Prakriti Jagaran Mancha",
  description:
    "Prakriti Jagaran Mancha within the state yogasana gathering at Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum.",
};

export default function Page() {
  return <PrakritiPage />;
}
