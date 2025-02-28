import Image from "next/image";
import { motion } from "framer-motion";

import platinum from "@/assets/images/backedby/platinum.png";
import stanford from "@/assets/images/backedby/stanford.jpeg";
// import spores from "@/assets/images/backedby/spores.jpg";
import palo from "@/assets/images/backedby/palo.png";
import ibc from "@/assets/images/incubatedby/ibc.png";
const companies_backed = [
  { name: "Platinum", logo: platinum },
  { name: "Stanford", logo: stanford },
  // { name: "Spores", logo: spores },
  { name: "Palo", logo: palo },
];
const companies_incubated = [
  { name: "IBC", logo: ibc },
];
const BackedBy = () => {
  //rounded-lg bg-gradient-to-r from-gray-800 to-black
  return (
    <section className="flex flex-col md:flex-row justify-center py-10 md:py-20 md:px-10 text-center gap-2 md:gap-0">
      <div className="md:px-10">
        <h2 className="text-lg font-bold text-gray-600">Backed By</h2>
        <div className="flex justify-center gap-10 mt-2">
          {companies_backed.map((company, index) => (
              <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}>
            <Image
              src={company.logo}
              alt={company.name}
              // width={100}
              // height={50}
              className=" w-[40px] h-[40px] md:h-[60px] md:w-[80px]"
            />
            </motion.div>
          ))}
        </div>
      </div>
      {/* <div className="md:px-10">
        <h2 className="text-lg font-bold text-gray-600">Incubated By</h2>
        <div className="flex justify-center gap-10 mt-2">
          {companies_incubated.map((company, index) => (
              <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}>
            <Image
              src={company.logo}
              alt={company.name}
              width={100}
              height={50}
              className=" md:h-[70px] md:w-[120px]"
            />
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default BackedBy;
