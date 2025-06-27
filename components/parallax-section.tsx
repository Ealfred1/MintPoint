"use client"

import { useEffect, useRef, useState } from "react"
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

function ParallaxSectionMobile() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const slidesRef = useRef<HTMLDivElement[]>([])
  const [isPinned, setIsPinned] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const slides = slidesRef.current
    if (!section || slides.length === 0) return

    gsap.set(slides, { yPercent: 100 })
    gsap.set(slides[0], { yPercent: 0 })
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${(parallaxImages.length - 1) * window.innerHeight}`,
      pin: true,
      scrub: 0.5,
      anticipatePin: 1,
      onUpdate: self => {
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
        setIsPinned(self.isActive)
      },
    })
  }, [])

  // Marquee effect for mobile (same as desktop)
  const marqueeImages = [...parallaxImages, ...parallaxImages]

  return (
    <section
      ref={sectionRef}
      className={`block md:hidden w-full h-screen overflow-hidden bg-white z-[60] ${isPinned ? 'fixed top-0 left-0' : 'relative'} mb-40`}
      style={isPinned ? { width: '100vw', height: '100vh' } : {}}
    >
      {/* Parallax Slides */}
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
            className="absolute inset-0 w-full h-screen object-fit bg-black transition-all duration-700"
            draggable="false"
          />
        </div>
      ))}
      {/* Infinite Marquee (same as desktop) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <div
          className="flex items-center gap-8 animate-marquee whitespace-nowrap"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {marqueeImages.map((src, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center px-4" style={{ minWidth: 120 }}>
              <img
                src={src}
                alt="marquee parallax"
                width={120}
                height={60}
                className="object-contain h-12 w-auto"
                draggable="false"
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
      `}</style>
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