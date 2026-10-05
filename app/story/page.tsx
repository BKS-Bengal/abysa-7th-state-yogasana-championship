import type { Metadata } from "next";
import { StoryPage } from "@/components/pages/StoryPage";

export const metadata: Metadata = {
  title: "The four days",
  description:
    "The grounds, practice, offering and conversations of the 7th State Yogasana Sports Championship at Muluk.",
};

export default function Page() {
  return <StoryPage />;
}
