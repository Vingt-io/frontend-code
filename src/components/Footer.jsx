import { FaDiscord, FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo_coloured from '@/assets/images/vingt_icons/logo.png';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0e1a] text-white py-10 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left - Logo & Name */}
        <div className="flex items-center gap-2">
          <img src={Logo_coloured.src} alt="Vingt.io Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-primaryblue">Vingt.io</span>
        </div>

        {/* Center - Links */}
        <div className="flex gap-8 text-sm md:text-base font-medium text-gray-300">
          <Link href="https://hzpnphtag8t.typeform.com/to/FVnYq110" target="_blank" className="hover:text-primaryblue transition">VingtLabs</Link>
          <Link href="https://vingt-io.gitbook.io/vingt.io/miscellaneous/legal/terms-of-service-dapp" target="_blank" className="hover:text-primaryblue transition">Terms Of Service</Link>
          <Link href="/pdf/seed-deck.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primaryblue transition">Seed Deck</Link>
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-6 text-xl">
          <Link href="https://discord.com/invite/eTzGEP4jmr" target="_blank" className="hover:text-primaryblue transition"><FaDiscord /></Link>
          <Link href="https://x.com/vingtofficial" target="_blank" className="hover:text-primaryblue transition"><FaXTwitter /></Link>
          <Link href="https://t.me/vingtofficial" target="_blank" className="hover:text-primaryblue transition"><FaTelegramPlane /></Link>
          <Link href="https://www.linkedin.com/company/vingt-io/" target="_blank" className="hover:text-primaryblue transition"><FaLinkedin /></Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} Vingt.io. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
