import type { Metadata } from "next";
import { PrakritiPage } from "@/components/pages/PrakritiPage";

export const metadata: Metadata = {
  title: "Prakriti Jagran Yajna",
  description:
    "Prakriti Jagran Yajna at the 7th State Yogasana Sports Championship: the recorded invocation, the mornings, food, and farming. The courtyard fire of 3 October is shown separately.",
};

export default function Page() {
  return <PrakritiPage />;
}
