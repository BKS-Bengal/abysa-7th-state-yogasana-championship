import type { Metadata } from "next";
import { MediaPage } from "@/components/pages/MediaPage";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Four films from Prakriti Jagaran Mancha: the mandir corridor, the athletes, the dais, and the table inside Sri Sri Shiv Mandir.",
};

export default function Page() {
  return <MediaPage />;
}
