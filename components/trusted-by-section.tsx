"use client"

import { useEffect, useRef } from "react"

const logos = [
  { name: "OPay", color: "text-green-500", bg: "bg-green-500/10" },
  { name: "Moniepoint", color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "Paystack", color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { name: "Flutterwave", color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "Kuda", color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "PalmPay", color: "text-pink-500", bg: "bg-pink-500/10" },
  { name: "Interswitch", color: "text-red-500", bg: "bg-red-500/10" },
  { name: "Zenith Bank", color: "text-yellow-500", bg: "bg-yellow-500/10" },
]

export default function TrustedBySection() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    // Clone the logos for seamless loop
    const firstSet = marquee.children[0] as HTMLElement
    const clone = firstSet.cloneNode(true) as HTMLElement
    marquee.appendChild(clone)

    // Start animation
    let animationId: number
    let translateX = 0
    const speed = 0.5

    const animate = () => {
      translateX -= speed
      const resetPoint = -firstSet.offsetWidth

      if (translateX <= resetPoint) {
        translateX = 0
      }

      marquee.style.transform = `translateX(${translateX}px)`
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <section className="py-20 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          TRUSTED BY AGENTS OF LEADING
          <br />
          POS COMPANIES
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Mintpoint powers agents across more than 15 top-tier POS platforms.
          <br />
          From small-town operators to high-volume hubs, they all trust Mintpoint.
        </p>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        <div ref={marqueeRef} className="flex items-center space-x-12 py-8" style={{ width: "fit-content" }}>
          <div className="flex items-center space-x-12">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`flex items-center justify-center px-8 py-4 rounded-2xl ${logo.bg} border border-gray-200 hover:scale-105 transition-transform duration-300 min-w-[200px]`}
              >
                <span className={`text-2xl font-bold ${logo.color}`}>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
