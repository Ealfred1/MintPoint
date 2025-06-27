"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const companies = [
  { name: "Sudo", image: "/images/sudo.png" },
  { name: "Africard", image: "/images/africard.png" },
  { name: "TransactPro", image: "/images/transactpro.png" },
  { name: "POS", image: "/images/pos.png" },
  { name: "AgendaRadar", image: "/images/AgendaRadar.svg" },
  { name: "Safepay", image: "/images/safepay.png" },
  { name: "IdentityPass", image: "/images/identitypass.png" },
]

export default function BackedBySection() {
  // Marquee effect using CSS animation
  // Duplicate the companies array to make the marquee seamless
  const marqueeCompanies = [...companies, ...companies]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">BACKED BY THE BEST</h2>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </div>
        {/* Marquee Row */}
        <div className="overflow-hidden w-full">
          <div
            className="flex items-center gap-8 animate-marquee whitespace-nowrap"
            style={{
              animation: "marquee 30s linear infinite"
            }}
          >
            {marqueeCompanies.map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center px-4"
                style={{ minWidth: 120 }}
              >
                <Image
                  src={company.image}
                  alt={company.name}
                  width={100}
                  height={48}
                  className="object-contain h-10 md:h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
        <style jsx global>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (max-width: 768px) {
            .animate-marquee > div {
              min-width: 80px !important;
            }
            .animate-marquee img {
              height: 32px !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
