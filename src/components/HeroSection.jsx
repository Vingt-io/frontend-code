"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import CubeBox from "./CubeBox";

const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Asset management is complex. Vingt.io makes it simple."],
      typeSpeed: 50,
      loop: false,
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between lg:px-10 pt-20 lg:py-10">
      <div className="flex flex-col lg:block lg:w-1/2">
        <h1 className="text-4xl font-bold h-[120px] lg:h-[100px]">
          <span ref={textRef} className="text-[#2f5596]" />
        </h1>
        <p className="mt-4 text-lg">
          Access AI-powered index and leverage tokens for optimized, one-click portfolio management.
        </p>
        <motion.button whileHover={{ scale: 1.1 }} className="mt-6 px-6 py-3 bg-primaryblue text-white rounded-lg font-semibold">
          Explore Products
        </motion.button>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <CubeBox />
      </div>
    </section>
  );
};

export default HeroSection;
