import type { Metadata } from "next";
import { MediaPage } from "@/components/pages/MediaPage";

export const metadata: Metadata = {
  title: "Films",
    description:
    "Four films from the 7th State Yogasana Sports Championship: the gathering, the hall, the dais, and the long table.",
};

export default function Page() {
  return <MediaPage />;
}
