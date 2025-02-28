"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import platinum from "@/assets/images/backedby/platinum.png";
import stanford from "@/assets/images/backedby/stanford.jpeg";
import palo from "@/assets/images/backedby/palo.png";
import Link from "next/link";
const backedByCompanies = [
  {
    name: "Platinum",
    logo: platinum,
    description: "A leading blockchain investment firm backing innovation in Web3.",
    link: 'https://vc.platinum.fund/en/',
  },
  {
    name: "Stanfod",
    logo: stanford,
    description: "Pioneering venture capital firm focused on decentralized finance.",
    link: 'http://crypto.stanford.edu/',
  },
  {
    name: "PALO",
    logo: palo,
    description: "Accelerating growth in the DeFi ecosystem with strategic funding.",
    link: 'https://www.paloaltonetworks.com/',
  },
//   {
//     name: "Web3 Innovations",
//     logo: "/images/web3-innovations.png",
//     description: "A global firm supporting next-gen blockchain applications.",
//   },
];

const BackedBy = () => {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Backed By
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3  gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {backedByCompanies.map((company, index) => (
            <motion.div
              key={index}
            //   className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg text-center  hover:scale-105 transition-transform duration-300"
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center  hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
                <Link href={company.link} target="_blank">
              <Image
                src={company.logo}
                alt={company.name}
                width={100}
                height={100}
                className="mx-auto mb-4 w-auto h-20"
              />
              <h3 className="text-xl font-medium text-[#2f5596]">{company.name}</h3>
              <p className="text-[#b0b0b0] mt-2">{company.description}</p>
              </Link>
            </motion.div>
            
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BackedBy;
