"use client";
import { motion } from "framer-motion";

const BaseContent = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full bg-gray-800 p-10 mt-10 rounded-lg text-center"
    >
      <h2 className="text-3xl font-bold">Welcome to Our 3D Experience</h2>
      <p className="mt-4 text-lg">Experience stunning 3D animations and effects.</p>
    </motion.div>
  );
};

export default BaseContent;
