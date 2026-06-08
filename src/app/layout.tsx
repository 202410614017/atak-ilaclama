import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AnimatedEntrance from "@/components/AnimatedEntrance";
import { SITE } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s - ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    "Balıkesir ilaçlama",
    "haşere ilaçlama",
    "temizlik hizmetleri",
    "dezenfeksiyon",
    "Atak ilaçlama",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${jakarta.variable} text-slate-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <AnimatedEntrance />
      </body>
    </html>
  );
}
