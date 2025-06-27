"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const parallaxImages = [
  "/images/parallax-1.svg",
  "/images/parallax-2.svg",
  "/images/parallax-3.svg",
  "/images/parallax-4.svg",
  "/images/parallax-5.svg",
]

// Mobile version: just render all images normally, no parallax, no slider, no pin
function ParallaxSectionMobile() {
  return (
    <section className="block md:hidden w-full bg-white z-[60] relative mb-40 py-10">
      <div className="flex flex-col items-center gap-8">
        {parallaxImages.map((src, index) => (
          <div key={src} className="w-full flex justify-center">
            <img
              src={src}
              alt={`parallax slide ${index + 1}`}
              className="object-cover bg-black rounded-xl w-full max-w-xs"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const slidesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const slides = slidesRef.current
    if (!section || slides.length === 0) return

    // Set initial positions
    gsap.set(slides, { yPercent: 100 })
    gsap.set(slides[0], { yPercent: 0 })

    // Remove all previous triggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    // Pin the section for (images.length - 1) * 100vh
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${(parallaxImages.length - 1) * window.innerHeight}`,
      pin: true,
      scrub: 0.5,
      anticipatePin: 1,
      onUpdate: self => {
        // Calculate which image should be visible
        const progress = self.progress
        const total = parallaxImages.length - 1
        const index = Math.round(progress * total)
        slides.forEach((slide, i) => {
          if (i < index) {
            gsap.set(slide, { yPercent: -100 })
          } else if (i === index) {
            gsap.set(slide, { yPercent: 0 })
          } else {
            gsap.set(slide, { yPercent: 100 })
          }
        })
      },
    })
  }, [])

  return (
    <>
      {/* Desktop version: hidden on mobile */}
      <section ref={sectionRef} className="relative z-[60] w-full h-screen overflow-hidden bg-white hidden md:block">
        {parallaxImages.map((src, index) => (
          <div
            key={src}
            ref={el => { if (el) slidesRef.current[index] = el }}
            className="absolute inset-0 w-full h-full transition-all duration-700"
            style={{ zIndex: parallaxImages.length - index }}
          >
            <img
              src={src}
              alt="parallax slide"
              className="absolute inset-0 w-full h-full object-cover bg-white transition-all duration-700"
              draggable="false"
            />
          </div>
        ))}
      </section>
      {/* Mobile version: only on mobile */}
      <ParallaxSectionMobile />
    </>
  )
}