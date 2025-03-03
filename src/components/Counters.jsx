"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Counter = ({ target, title, suffix }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // Calculate step per frame

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16); // Run every 16ms (around 60FPS)
    }
  }, [inView, target]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex flex-col items-center">
      <h2 className="text-sm lg:text-4xl font-bold text-[#2f5596] lg:h-[80px]">
        {count.toLocaleString()}{suffix}
      </h2>
      <p className="text-xs lg:text-lg mt-2">{title}</p>
    </motion.div>
  );
};

const CounterSection = () => {
  return (
    <section className="w-full py-10 lg:py-20 bg-gray-900  text-center rounded-lg">
      <div className="max-w-6xl mx-auto lg:px-4">
        <div className="grid grid-cols-5 gap-6">
          <Counter title="Users" target={200} suffix='+'/>
          <Counter title="Total Value Locked" target={1000} suffix='+'/>
          <Counter title="External Liquidity" target={3000} suffix='M+'/>
          <Counter title="Active Ecosystem Protocols" target={3} />

          {/* Network Section (Static Text) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-sm lg:text-4xl font-bold text-[#2f5596]">
              BNBChain, Arbitrum
            </h2>
            <p className="text-xs lg:text-lg mt-2">Network</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
