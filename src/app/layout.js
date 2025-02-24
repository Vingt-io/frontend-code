import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vingt.io | AI based DeFi Ecosystem | On-chain Asset Management",
  description: "Vingt.io is an AI-powered platform for asset management, offering optimized trades and access to index and leverage tokens, all within a single dApp for quick, one-click investing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
      <Script type="text/javascript" src="/js/3DCube-Bundle.js" />
      </Head> */}
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}> */}
      <body className={`p-6 md:p-10 overflow-x-hidden overflow-y-auto bg-gradient-to-b from-black via-primaryblue to-black text-white`}>
        {children}
      </body>
    </html>
  );
}
