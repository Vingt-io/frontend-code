"use client";
import Image from "next/image";
import Benzinga_colour from "@/assets/images/references/transreferences/Benzinga_colour.png";
import yahoofinance from '@/assets/images/references/transreferences/yahoofinance.png';
import yahoonews from '@/assets/images/references/transreferences/yahoonews.png';
import Excite_colour from '@/assets/images/references/transreferences/Excite_colour.png';
import coincodex_colour from '@/assets/images/references/transreferences/coincodex_colour.png';
import Be_In_Crypto_colour from '@/assets/images/references/transreferences/Be_In_Crypto_colour.png';
import Crypto_Potato_colour from '@/assets/images/references/transreferences/Crypto_Potato_colour.png';
import Cointelegraph_colour from '@/assets/images/references/transreferences/Cointelegraph_colour.png';
import icoholder_colour from '@/assets/images/references/transreferences/icoholder_colour.png';
import ICO_Listing_colour from '@/assets/images/references/transreferences/ICO_Listing_colour.png';
import ICO_Hot_List_colour from '@/assets/images/references/transreferences/ICO_Hot_List_colour.png';
import ICOmarks_colour from '@/assets/images/references/transreferences/ICO-marks_colour.png';
import British_Thoughts_Magazine__colour from '@/assets/images/references/transreferences/British_Thoughts_Magazine__colour.png';
import Zycrypto_colour from '@/assets/images/references/transreferences/Zycrypto_colour.png';
import Bitcoinist_colour from '@/assets/images/references/transreferences/Bitcoinist_colour.png';
import Bitcoin_com_colour from '@/assets/images/references/transreferences/Bitcoin_com_colour.png';
import Platinum_Crypto_Academy_colour from '@/assets/images/references/transreferences/Platinum_Crypto_Academy_colour.png';
import News_BTC_colour from '@/assets/images/references/transreferences/News_BTC_colour.png';
const companyLogos = [
    { src: Benzinga_colour, alt: 'Benzinga' },
    { src: yahoofinance, alt: 'Yahoo Finance' },
    { src: yahoonews, alt: 'Yahoo News' },
    { src: Excite_colour, alt: 'Excite Colour' },
    { src: coincodex_colour, alt: 'Coincodex Colour' },
    { src: Be_In_Crypto_colour, alt: 'BeInCrypto Colour' },
    { src: Crypto_Potato_colour, alt: 'CryptoPotato Colour' },
    { src: Cointelegraph_colour, alt: 'Cointelegraph Colour' },
    { src: icoholder_colour, alt: 'Icoholder Colour' },
    { src: ICO_Listing_colour, alt: 'ICO Listing Colour' },
    { src: ICO_Hot_List_colour, alt: 'ICO Hot List colour' },
    { src: ICOmarks_colour, alt: 'ICOmarks_colour' },
    { src: British_Thoughts_Magazine__colour, alt: 'British Thoughts Magazine colour' },
    { src: Zycrypto_colour, alt: 'Zycrypto colour' },
    { src: Bitcoinist_colour, alt: 'Bitcoinist colour' },
    { src: Bitcoin_com_colour, alt: 'Bitcoinist colour' },
    { src: Platinum_Crypto_Academy_colour, alt: 'Bitcoinist colour' },
    { src: News_BTC_colour, alt: 'Bitcoinist colour' },
    // Add more images as needed
  ];
// const companyLogos_x = [
//     Benzinga_colour,
//     yahoofinance,
//     yahoonews,
//     Excite_colour,
//     coincodex_colour,
//     Be_In_Crypto_colour,
//     Crypto_Potato_colour,
//     Cointelegraph_colour,
//     icoholder_colour,
//     ICO_Listing_colour,
//   // Add more logos here
// ];

const SeeWhosTalkin = () => {

  return (
    <section className="section">
      <h2 className="section-title">See Who's Talkin</h2>
      <p className="section-subtitle">Trusted by the best in the industry</p>

      <div className="relative w-full overflow-hidden py-5 whitespace-nowrap">
        <div className="flex items-center space-x-8 animate-marquee">
          {companyLogos.concat(companyLogos).map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={`${logo.alt} Logo`}
              width={120}
              height={60}
              className="w-[120px] h-[60px] m-[10px] object-contain logo-item"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeeWhosTalkin;

  