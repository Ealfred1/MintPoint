"use client"

import { useEffect, useRef } from "react"

const logos = [
  { name: "OPay", image: "/images/opay.png" },
  { name: "Moniepoint", image: "/images/moniepoint.png" },
  { name: "Paystack", image: "/images/paystack_logo.svg.svg" },
]

function TrustedBySectionMobile() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    // No clones, just animate the single set of logos
    let animationId: number
    let translateX = 0
    const speed = 0.4 // slightly slower for mobile

    const animate = () => {
      translateX -= speed
      const resetPoint = -marquee.offsetWidth

      if (translateX <= resetPoint) {
        translateX = marquee.parentElement ? marquee.parentElement.offsetWidth : 0
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
    <section className="block md:hidden py-10 bg-white text-black overflow-hidden">
      <div className="px-4 text-center mb-8">
        <h2 className="text-xl font-bold mb-4">
          TRUSTED BY AGENTS OF LEADING<br />POS COMPANIES
        </h2>
        <p className="text-sm text-[#6F6F6F] max-w-[280px] mx-auto leading-relaxed">
          Mintpoint powers agents across more than 15 top-tier POS platforms. From small-town vendors to high-volume operators, professionals across Nigeria trust Mintpoint to deliver fast, reliable, and intelligent payment solutions.
        </p>
      </div>
      {/* Infinite Scrolling Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        <div ref={marqueeRef} className="flex items-center space-x-8 py-4" style={{ width: "fit-content" }}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.image}
              alt={logo.name}
              className="h-8 w-auto object-contain"
              draggable="false"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function TrustedBySection() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    // No clones, just animate the single set of logos
    let animationId: number
    let translateX = 0
    const speed = 0.5

    const animate = () => {
      translateX -= speed
      const resetPoint = -marquee.offsetWidth

      if (translateX <= resetPoint) {
        translateX = marquee.parentElement ? marquee.parentElement.offsetWidth : 0
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
    <>
      {/* Desktop version: hidden on mobile */}
      <section className="py-20 bg-white text-black overflow-hidden hidden md:block">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            TRUSTED BY AGENTS OF LEADING
            <br />
            POS COMPANIES
          </h2>
          <p className="text-lg md:text-[18px] text-[#6F6F6F] max-w-3xl mx-auto">
            Mintpoint powers agents across more than 15 top-tier POS platforms.
            <br />
            From small-town vendors to high-volume operators, professionals across Nigeria trust Mintpoint to deliver fast, reliable, and intelligent payment&nbsp;solutions.
          </p>
        </div>
        {/* Infinite Scrolling Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          <div ref={marqueeRef} className="flex items-center space-x-12 py-8" style={{ width: "fit-content" }}>
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.image}
                alt={logo.name}
                className="h-12 w-auto object-contain"
                draggable="false"
              />
            ))}
          </div>
        </div>
      </section>
      {/* Mobile version: only on mobile */}
      <TrustedBySectionMobile />
    </>
  )
}
