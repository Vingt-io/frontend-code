// "use client";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   return (
//     <motion.nav 
//       initial={{ y: -50, opacity: 0 }} 
//       animate={{ y: 0, opacity: 1 }} 
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 left-0 w-full bg-gray-900 p-4 z-50 flex justify-between items-center text-white"
//     >
//       <h1 className="text-2xl font-bold">3D Cube Site</h1>
//       <ul className="flex space-x-6">
//         <li className="hover:text-blue-500 cursor-pointer">Home</li>
//         <li className="hover:text-blue-500 cursor-pointer">About</li>
//         <li className="hover:text-blue-500 cursor-pointer">Contact</li>
//       </ul>
//     </motion.nav>
//   );
// };

// export default Navbar;
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, FileText, Mail, Rocket, Home, UsersRound } from "lucide-react";
import Link from "next/link";
import Logo from '@/assets/images/vingt_icons/white-logo.png';
import Logo_coloured from '@/assets/images/vingt_icons/logo.png';
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const {push} =  useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${scrolled ? "bg-[#2f5596] shadow-md " : "bg-transparent"} z-50`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* <img src={Logo.src} alt="Vingt.io Logo" className="h-14" /> */}
        <img src={scrolled ?Logo.src:Logo_coloured.src} alt="Vingt.io Logo" height={18} width={20} className={`${scrolled?'h-16':'ml-2'} h-14 w-auto`} />
        <ul className="hidden md:flex gap-6 text-white">
          <li>
            <Link href="/" className="flex items-center gap-1 hover:text-gray-300">
              <Home /> Home
            </Link>
          </li>
          <li>
            <Link href="https://app.vingt.io/aboutUs" target="_blank" className="flex items-center gap-1 hover:text-gray-300">
              <UsersRound /> About Us
            </Link>
          </li>
          <li>
            <Link href="https://vingt-io.gitbook.io/vingt.io" target="_blank" className="flex items-center gap-1 hover:text-gray-300">
              <FileText /> Whitepaper
            </Link>
          </li>
          <li>
            <Link href="mailto:support@vingt.io" className="flex items-center gap-1 hover:text-gray-300">
              <Mail /> Contact Us
            </Link>
          </li>
        </ul>

        <button onClick={()=>push('https://app.vingt.io/')} className="hidden md:block px-4 py-2 bg-white text-[#2f5596] rounded-lg font-semibold hover:bg-gray-200">
          Launch App <Rocket className="inline-block ml-2" size={18} />
        </button>

        {/* Mobile Menu */}
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
