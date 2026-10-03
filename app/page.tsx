import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

const title = "7th State Yogasana Sports Championship 2026–27";
const description =
  "Hundreds of young athletes compete in Yogasana over three days at Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    images: [{ url: "/assets/hero/prakriti-jagaran.webp", width: 1024, height: 576, alt: "Artwork for the 7th State Yogasana Sports Championship at Muluk, Bolpur, Birbhum." }],
  },
};

export default function Page() {
  return <HomePage />;
}
