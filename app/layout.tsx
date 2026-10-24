import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const promptFont = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pood Lite — แอปพลิเคชันถอดความเสียงภาษาไทยออฟไลน์ 100% สำหรับ Windows",
  description:
    "Pood Lite แอปถอดความเสียงภาษาไทยออฟไลน์ 100% บน Pure CPU พัฒนาด้วย Rust + Slint UI ปลอดภัย ไร้โฆษณา ไม่ส่งข้อมูลออกนอกเครื่อง กิน RAM น้อยเพียง 15-25 MB",
  keywords: [
    "Pood Lite",
    "Speech to Text ภาษาไทย",
    "ถอดความเสียงภาษาไทย",
    "Offline STT",
    "Pathumma STT",
    "Windows Desktop Dictation",
  ],
  authors: [{ name: "Rachtipong Chaiprab (GRG02)" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/poodlite-logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icons/poodlite-logo.png",
  },
};

import { LanguageProvider } from "./data/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${promptFont.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-200 selection:text-emerald-900 antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

