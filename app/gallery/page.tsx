import type { Metadata } from "next";
import { GalleryPage } from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs from the 7th State Yogasana Sports Championship at Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum.",
};

export default function Page() {
  return <GalleryPage />;
}
