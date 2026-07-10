import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Noto_Sans_Thai } from "next/font/google";
import { Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoThai = Noto_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
});

const notoArabic = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Learn Islam — Flashcards for New Muslims",
  description:
    "Bilingual (English + Thai) flashcards to learn the basics of Islam: the pillars, prayer, fasting, virtues and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${notoThai.variable} ${notoArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-pattern">{children}</body>
    </html>
  );
}
