"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import CubeBox from "./CubeBox";
import { useRouter } from "next/navigation";
import ibc from "@/assets/images/incubatedby/ibc.png";
import Image from "next/image";
import Link from "next/link";

const companies_incubated = [
  { name: "IBC", logo: ibc, link: 'https://www.ibcgroup.io/' },
];
const HeroSection = () => {
  const textRef = useRef(null);
  const {push}= useRouter();
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
        <h1 className="text-4xl font-bold h-[160px] md:h-[100px]">
          <span ref={textRef} className="text-[#2f5596]" />
        </h1>
        <p className="mt-4 text-lg">
          Access AI-powered index and leverage tokens for optimized, one-click portfolio management.
        </p>
        <motion.button whileHover={{ scale: 1.1 }} onClick={()=>{push('/products')}} className="mt-6 px-6 py-3 bg-primaryblue rounded-lg font-semibold">
          Explore Products
        </motion.button>
        <div className="flex lg:flex-col items-center lg:items-start justify-center  gap-4 lg:gap-0 mt-2 lg:mt-8">
            <h2 className="text-lg font-bold text-gray-600">Incubated By</h2>
            <div className=" gap-10 mt-2">
              {companies_incubated.map((company, index) => (
                  // <motion.div
                  // key={index}
                  // initial={{ y: 100, opacity: 0 }}
                  // whileInView={{ y: 0, opacity: 1 }}
                  // transition={{ duration: 1 }}>
                  <Link href={company.link} target="_blank" key={index} >
                    <Image src={company.logo} alt={company.name} width={100} height={50} className=" md:h-[70px] w-auto hover:scale-105 transition-transform duration-300"/>
                  </Link>
                // </motion.div>
              ))}
            </div>
          </div>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <CubeBox />
      </div>
    </section>
  );
};

export default HeroSection;
