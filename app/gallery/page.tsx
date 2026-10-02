import type { Metadata } from "next";
import { GalleryPage } from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs from the morning of 2 October 2026 at Muluk: the hall, the gathering, and practice on the mats.",
};

export default function Page() {
  return <GalleryPage />;
}
