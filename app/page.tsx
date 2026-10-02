import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

const title = "7th State Yogasana Sports Championship 2026–27";
const description =
  "A state yogasana championship at Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum, presented by the All Bengal Yogasana Sports Association, with Prakriti Jagaran Mancha.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: { title, description },
};

export default function Page() {
  return <HomePage />;
}
