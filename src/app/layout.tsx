import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fez Dizayn | Lüks İç Mimarlık",
  description: "Lüks iç mekan tasarımında 15 yıllık deneyim. Hayal ettiğiniz mekanları, olağanüstü detaylarla hayata geçiriyoruz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      {/* We removed all custom cursors, ensuring the default system cursor always works */}
      <body className="min-h-full flex flex-col font-sans bg-[#110e0a] text-[#f2ebe3]">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
