import type { Metadata } from "next";
import type { ReactNode } from "react";
import { cookies } from "next/headers";
import { Cormorant_Garamond, Noto_Serif_Bengali, Outfit, Tiro_Bangla } from "next/font/google";
import { LanguageProvider } from "@/lib/language";
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

const title = "7th State Yogasana Sports Championship 2026–27";
const description =
  "The 7th State Yogasana Sports Championship 2026–27 at Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum, presented by the All Bengal Yogasana Sports Association, with Prakriti Jagaran Mancha.";

export const metadata: Metadata = {
  metadataBase: new URL("https://prakriti-jagaran-mancha.vercel.app"),
  title: {
    default: title,
    template: "%s — State Yogasana Championship",
  },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/assets/hero/prakriti-jagaran.webp", width: 1024, height: 576, alt: "Artwork for the 7th State Yogasana Sports Championship at Muluk, Bolpur, Birbhum." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/hero/prakriti-jagaran.webp"],
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const jar = await cookies();
  const initialLocale = jar.get("pjm-lang")?.value === "bn" ? "bn" : "en";

  return (
    <html lang={initialLocale} className={`${display.variable} ${sans.variable} ${bangla.variable} ${banglaQuote.variable}`}>
      <body>
        <LanguageProvider initialLocale={initialLocale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
