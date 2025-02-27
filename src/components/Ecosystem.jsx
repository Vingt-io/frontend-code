"use client";
import Image from "next/image";
import Link from "next/link";
// import logo from "next/logo";
import { motion } from "framer-motion";
import img1 from '@/assets/images/infrastructure-integration/ox-Protocol.png';
import img2 from '@/assets/images/infrastructure-integration/Chainlink.png';
import img13 from '@/assets/images/infrastructure-integration/compound.png';
import img4 from '@/assets/images/infrastructure-integration/Gnosis-Safe.png';
import img5 from '@/assets/images/infrastructure-integration/metamask.png';
import img6 from '@/assets/images/infrastructure-integration/Pancake-swap.png';
import img7 from '@/assets/images/infrastructure-integration/set-protocol.png';
import img8 from '@/assets/images/infrastructure-integration/uniswap.png';
import img9 from '@/assets/images/infrastructure-integration/bnbchain.webp';
import img10 from '@/assets/images/infrastructure-integration/arbitrum.png';
import img11 from '@/assets/images/infrastructure-integration/aave.png';
import img12 from '@/assets/images/infrastructure-integration/indexcoop.jpg';
import img3 from '@/assets/images/infrastructure-integration/fetch_ai.png';

const ecosystemCompanies = [
    {
      link: "https://www.tokensets.com/",
      logo: img7,
      alt: "Set Protocol",
      name: "Set Protocol",
      description: "Integrated for building VISP architecture",
    },
    {
      link: "https://pancakeswap.finance",
      logo: img6,
      alt: "Pancake Swap",
      name: "Pancake Swap",
      description: "Initial liquidity for the ecosystem",
    },
    {
      link: "https://0x.org",
      logo: img1,
      alt: "0x",
      name: "0x",
      description: "Trade optimisation for on-chain trades",
    },
    {
      link: "https://metamask.io",
      logo: img5,
      alt: "Meta Mask",
      name: "Meta Mask",
      description: "Linked for permissionless transactions",
    },
    {
      link: "https://uniswap.org",
      logo: img8,
      alt: "Uniswap v3",
      name: "Uniswap v3",
      description: "Concentrated liquidity for token swap",
    },
    // {
    //   link: "https://fetch.ai/",
    //   logo: img3,
    //   alt: "Fetch-AI",
    //   name: "Fetch-AI",
    //   description: "AI compatability for smart agents",
    // },
    {
      link: "https://safe.global",
      logo: img4,
      alt: "Gnosis Safe",
      name: "Gnosis Safe",
      description: "Multisig wallet compatibility",
    },
    {
      link: "https://chain.link",
      logo: img2,
      alt: "Chainlink",
      name: "Chainlink",
      description: "Oracle network for off-chain data",
    },
    {
      link: "https://www.bnbchain.org/en",
      logo: img9,
      alt: "BNB Chain",
      name: "BNB Chain",
      description: "Transaction settlements for ecosystem applications",
    },
    {
      link: "https://arbitrum.io/",
      logo: img10,
      alt: "Arbitrum",
      name: "Arbitrum",
      description: "Leverage compatibility for Long And Short positions",
    },
    {
      link: "https://aave.com",
      logo: img11,
      alt: "AAVE",
      name: "AAVE",
      description: "Handling debt/leveraged positions for VISP",
    },
    // {
    //   link: "https://compound.finance/",
    //   logo: img13,
    //   alt: "Compound",
    //   name: "Compound",
    //   description: "Decentralized ecosystem governance compatibility",
    // },
  ];
// const ecosystemCompanies = [
//   {
//     name: "Company A",
//     logo: "/images/companyA.png",
//     description: "A leader in blockchain-based asset management.",
//   },
//   {
//     name: "Company B",
//     logo: "/images/companyB.png",
//     description: "Innovating the DeFi space with secure smart contracts.",
//   },
//   {
//     name: "Company C",
//     logo: "/images/companyC.png",
//     description: "Providing liquidity solutions for decentralized exchanges.",
//   },
//   {
//     name: "Company D",
//     logo: "/images/companyD.png",
//     description: "Optimizing gas fees with AI-powered automation.",
//   },
//   {
//     name: "Company E",
//     logo: "/images/companyE.png",
//     description: "Bringing cross-chain interoperability to crypto ecosystems.",
//   },
//   {
//     name: "Company F",
//     logo: "/images/companyF.png",
//     description: "Enabling next-gen blockchain security solutions.",
//   },
// ];

const EcosystemSection = () => {
  return (
    <section className="w-full py-10 lg:py-20">
      {/* <h2 className="text-3xl font-bold text-center text-[#2f5596] mb-6"> */}
      <h2 className="section-title">
        Ecosystem Infrastructure Integration
      </h2>
      {/* <p className="text-lg text-center text-gray-600 mb-8"> */}
      <p className="section-subtitle">
        Partnering with leading companies to build a robust blockchain ecosystem.
      </p>

      <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-2 gap-6 ">
        {ecosystemCompanies.map((company, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-900 shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}>
            <Link className="flex items-center space-x-4" href={company.link} target='_blank'>
              <Image src={company.logo} alt={company.name} width={80} height={80} className="w-8 h-8 sm:w-16 sm:h-16 object-contain"/>
              <div>
                <h3 className="sm:text-lg font-semibold text-[#2f5596]">{company.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{company.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EcosystemSection;
