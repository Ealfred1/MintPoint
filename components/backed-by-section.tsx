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
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const logos = entry.target.querySelectorAll(".company-logo")
          logos.forEach((logo, index) => {
            setTimeout(() => {
              logo.classList.add("animate-in")
            }, index * 100)
          })
        }
      })
    }, observerOptions)

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">BACKED BY THE BEST</h2>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="company-logo opacity-0 transform translate-y-8 transition-all duration-700 hover:scale-110"
            >
              <div className="text-center p-4">
                <Image
                  src={company.image}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
