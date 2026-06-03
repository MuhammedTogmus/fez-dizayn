import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

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
  title: "Fez Dizayn | Lüks İç Mimarlık & Tasarım",
  description: "Lüks iç mekan tasarımında 15 yıllık deneyim. Hayal ettiğiniz mekanları, olağanüstü detaylarla hayata geçiriyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0a0a0a] text-[#f5f0eb]">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
