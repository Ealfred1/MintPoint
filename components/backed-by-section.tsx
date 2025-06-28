"use client"

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

// Mobile version (unchanged, stacked, centered)
function BackedBySectionMobile() {
  return (
    <section className="block md:hidden py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black mb-4">BACKED BY THE BEST</h2>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={company.image}
                alt={company.name}
                width={120}
                height={60}
                className="object-contain h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Desktop version: logos spread widely across the screen, with more padding and wrapping if needed
function BackedBySectionDesktop() {
  return (
    <section className="hidden md:block py-24 bg-gray-50">
      <div className="max-w-[1800px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">BACKED BY THE BEST</h2>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </div>
        <div
          className="
            flex flex-wrap
            items-center
            justify-center
            gap-x-24 gap-y-12
            px-8
          "
        >
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center flex-1 min-w-[160px] max-w-[220px]"
            >
              <Image
                src={company.image}
                alt={company.name}
                width={180}
                height={80}
                className="object-contain h-12 w-auto"
                style={{ maxWidth: "180px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function BackedBySection() {
  return (
    <>
      <BackedBySectionDesktop />
      <BackedBySectionMobile />
    </>
  )
}
