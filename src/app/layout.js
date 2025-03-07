import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from 'next';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: '%s | Vingt.io | AI based DeFi Ecosystem | On-chain Asset Management',
    default: 'Vingt.io | AI based DeFi Ecosystem | On-chain Asset Management',
  },
  description: "Vingt.io is an AI-powered platform for asset management, offering optimized trades and access to index and leverage tokens, all within a single dApp for quick, one-click investing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden overflow-y-auto bg-gradient-to-b from-black via-primaryblue to-black text-[#e0e0e0]`}>
        <Navbar/>
        <div className="min-h-screen p-6 md:p-10 xl:p-40 ">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
