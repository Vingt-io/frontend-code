"use client";
import Image from "next/image";
import ABDK from "@/assets/images/audited/transAudited/ABDK.png";
import Iosrio_e from '@/assets/images/audited/transAudited/Iosrio.png';
import OpenZepplin from '@/assets/images/audited/transAudited/OpenZepplin.png';
import Link from "next/link";

const auditCompanyLogos = [
    { src: ABDK, alt: 'Benzinga', href: 'https://abdk.consulting/' },
    { src: Iosrio_e, alt: 'Iosrio', href:'https://iosiro.com/'},
    { src: OpenZepplin, alt: 'Open Zepplin', href:'https://www.openzeppelin.com/' },
    
  ];

const AuditedBy = () => {
    return (
      <section className="w-full py-10 lg:py-20  text-center rounded-lg">
        <h2 className="section-title">Audited By </h2>
        <p className="section-subtitle">the best in the industry</p>

        <div className="relative w-full overflow-hidden  whitespace-nowrap">
          <div className="flex items-center justify-center space-x-8 ">
            {auditCompanyLogos.map((logo, index) => (
              <Link key={index}  className="logo-item" href={logo.href} target='_blank'>
              <Image src={logo.src} alt={`${logo.alt} Logo`} width={120} height={60} className="w-[120px] h-[60px] m-[10px] object-contain"/>
              <p>{logo.alt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
};

export default AuditedBy;

  