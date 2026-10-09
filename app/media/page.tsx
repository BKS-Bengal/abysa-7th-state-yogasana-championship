import type { Metadata } from "next";
import { MediaPage } from "@/components/pages/MediaPage";

export const metadata: Metadata = {
  title: "Films",
    description:
    "Films from the 7th State Yogasana Sports Championship, and three recordings from the hall and the grounds.",
};

export default function Page() {
  return <MediaPage />;
}
