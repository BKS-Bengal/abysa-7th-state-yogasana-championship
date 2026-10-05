import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

const title = "7th State Yogasana Sports Championship 2026–27";
const description =
  "The 7th State Yogasana Sports Championship, 1–4 October 2026, at Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    images: [{ url: "/assets/hero/championship-banner.webp", width: 3456, height: 2304, alt: "Official banner for the 7th State Yogasana Sports Championship 2026–27 at Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum." }],
  },
};

export default function Page() {
  return <HomePage />;
}
