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

const title = "ABYSA 7th State Yogasana Sports Championship 2026–27";
const description =
  "ABYSA presents the 7th State Yogasana Sports Championship, 1–4 October 2026, at Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum.";

export const metadata: Metadata = {
  metadataBase: new URL("https://abysa-7th-state-yogasana-championship.vercel.app"),
  title: {
    default: title,
    template: "%s — ABYSA",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    siteName: title,
    url: "/",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/assets/hero/championship-banner.webp", width: 3456, height: 2304, alt: "Official banner for the 7th State Yogasana Sports Championship 2026–27 at Bharat Sevashram Sangha, Muluk, Bolpur, Birbhum." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/hero/championship-banner.webp"],
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
