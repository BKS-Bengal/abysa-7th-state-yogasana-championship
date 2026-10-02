import type { Metadata } from "next";
import { StoryPage } from "@/components/pages/StoryPage";

export const metadata: Metadata = {
  title: "Story",
  description:
    "The morning at Sri Sri Shiv Mandir: the hall, the ground, and an interview with Dr (Major) Narayan Bhattacharya filmed in front of the Prakriti Jagaran banner.",
};

export default function Page() {
  return <StoryPage />;
}
