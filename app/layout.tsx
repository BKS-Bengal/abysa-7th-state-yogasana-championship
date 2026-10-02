import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Noto_Serif_Bengali, Outfit, Tiro_Bangla } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const bangla = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["500", "600"],
  variable: "--font-bangla",
  display: "swap",
});

const banglaQuote = Tiro_Bangla({
  subsets: ["bengali", "latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-quote",
  display: "swap",
});

const title = "Prakriti Jagaran Mancha — প্রকৃতি জাগরণ মঞ্চ";
const description =
  "A gathering presented by the All Bengal Yogasana Sports Association at Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum, with the 7th State Yogasana Sports Championship 2026–27. Affiliated to Yogasana Bharat and World Yogasana.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/assets/hero/prakriti-jagaran.webp", width: 1024, height: 576, alt: "Prakriti Jagaran invitation artwork" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/hero/prakriti-jagaran.webp"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${bangla.variable} ${banglaQuote.variable}`}>
      <body>{children}</body>
    </html>
  );
}
