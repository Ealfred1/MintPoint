"use client"

import { useEffect, useRef } from "react"

const companies = [
  { name: "Sudo", color: "text-black" },
  { name: "Africard", color: "text-gray-800" },
  { name: "TransactPro", color: "text-blue-600" },
  { name: "POS", color: "text-gray-600" },
  { name: "AgendaRadar", color: "text-gray-700" },
  { name: "Safepay", color: "text-blue-500" },
  { name: "IdentityPass", color: "text-purple-600" },
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
                <div className={`text-2xl font-bold ${company.color}`}>{company.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
