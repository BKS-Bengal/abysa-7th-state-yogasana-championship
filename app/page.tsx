import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

const title = "Prakriti Jagaran Mancha — প্রকৃতি জাগরণ মঞ্চ";
const description =
  "A gathering presented by the All Bengal Yogasana Sports Association at Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum, with the 7th State Yogasana Sports Championship 2026–27.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: { title, description },
};

export default function Page() {
  return <HomePage />;
}
