"use client"
import { useEffect } from "react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BackedBy from "@/components/BackedBy";
import CounterSection from "@/components/Counters";
import SeeWhosTalkin from "@/components/SeeWhosTalkin";
import AuditedBy from "@/components/AuditedBy";
import EcosystemSection from "@/components/Ecosystem";
import StayConnected from "@/components/StayConnected";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize 3D Cube here if needed
      // console.log("3DCube is ready!");
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* <h1 className="text-white text-3xl">3D Cube Demo</h1> */}
      <Script src="/js/3DCube-Bundle.js" strategy="beforeInteractive" onLoad={() => console.log("3DCube script loaded!")}/>
      <div className="">
      <Navbar />
      <HeroSection />
      <BackedBy/>
      <CounterSection />
      <EcosystemSection/>
      <AuditedBy/>
      <SeeWhosTalkin/>
      <StayConnected/>
    </div>
    </div>
  );
}

