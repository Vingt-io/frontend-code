// "use client";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   return (
//     <motion.nav 
//       initial={{ y: -50, opacity: 0 }} 
//       animate={{ y: 0, opacity: 1 }} 
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 left-0 w-full bg-gray-900 p-4 z-50 flex justify-between items-center "
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
import { Menu, FileText, Mail, Rocket, Home, UsersRound, X } from "lucide-react";
import Link from "next/link";
import Logo from '@/assets/images/vingt_icons/white-logo.png';
import Logo_coloured from '@/assets/images/vingt_icons/logo.png';
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen , setMenuOpen]= useState(false);
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
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${scrolled ? "bg-primaryblue shadow-md " : "bg-transparent"} z-50`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* <img src={Logo.src} alt="Vingt.io Logo" className="h-14" /> */}
        <Link href='/'>
        <img src={scrolled ?Logo.src:Logo_coloured.src} alt="Vingt.io Logo" height={18} width={20} className={`${scrolled?'h-16':'ml-2'} h-14 w-auto`} />
        </Link>
        <ul className="hidden md:flex gap-6 ">
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

        <button onClick={()=>push('https://app.vingt.io/')} className="hidden md:block px-4 py-2 bg-white text-primaryblue rounded-lg font-semibold hover:bg-gray-200">
          Launch App <Rocket className="inline-block ml-2" size={18} />
        </button>

        {/* Mobile Menu */}
        <div className="flex gap-2">
        <Link href="https://app.vingt.io/" className="bg-primaryblue px-4 py-2 rounded-md  hover:bg-blue-700 transition text-center md:hidden" onClick={() => setMenuOpen(false)}>Launch App</Link>
        <button className="md:hidden  hover:bg-primaryblue" onClick={()=>setMenuOpen(!menuOpen)}>
          {menuOpen?<X size={24}/>:<Menu size={24} />}
        </button>
        {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black p-4 flex flex-col items-center space-y-4">
          <Link href="/" className="flex gap-2 " onClick={() => setMenuOpen(false)}><Home />Home</Link>
          <Link href="https://app.vingt.io/aboutUs" className="flex gap-2 " onClick={() => setMenuOpen(false)}><UsersRound />About Us</Link>
          <Link href="https://vingt-io.gitbook.io/vingt.io" className="flex gap-2 " onClick={() => setMenuOpen(false)}><FileText />Whitepaper</Link>
          <Link href="mailto:support@vingt.io" className="flex gap-2 " onClick={() => setMenuOpen(false)}><Mail />Contact Us</Link>
          <Link href="https://app.vingt.io/" className="bg-primaryblue px-4 py-2 rounded-md  hover:bg-blue-700 transition w-full text-center" onClick={() => setMenuOpen(false)}>Launch App</Link>
        </div>
      )}</div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
