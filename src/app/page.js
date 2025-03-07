"use client"
import { useEffect } from "react";
import Script from "next/script";
import HeroSection from "@/components/HeroSection";
import CounterSection from "@/components/Counters";
import SeeWhosTalkin from "@/components/SeeWhosTalkin";
import AuditedBy from "@/components/AuditedBy";
import EcosystemSection from "@/components/Ecosystem";
import StayConnected from "@/components/StayConnected";
import BackedBy from "@/components/BackedBy";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize 3D Cube here if needed
      // console.log("3DCube is ready!");
    }
  }, []);

  
  return (
    <div className="">
      <Script src="/js/3DCube-Bundle.js" strategy="beforeInteractive" onLoad={() => console.log("3DCube script loaded!")}/>
        <HeroSection />
        <CounterSection />
        <BackedBy/>
        <AuditedBy/>
        <EcosystemSection/>
        <SeeWhosTalkin/>
        <StayConnected/>
    </div>
  );
}

