import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreInitializer from "@/components/StoreInitializer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Keripik Tempe Tono | Camilan Khas Malang",
  description: "Keripik Tempe TONO - Camilan khas Kota Malang dengan kualitas terbaik dan rasa yang konsisten. Renyah, gurih, dan kriuknya nendang!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable}`}>
      <body className="flex flex-col min-h-screen">
        <StoreInitializer>
          <Navbar />
          <main className="flex-grow pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
        </StoreInitializer>
      </body>
    </html>
  );
}
