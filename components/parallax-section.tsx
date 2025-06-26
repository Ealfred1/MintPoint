"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const parallaxSlides = [
  {
    id: 1,
    title: "POS INSIGHT",
    subtitle: "Know what works. See peak hours, top customers, and sales trends.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "AGENTRADAR",
    subtitle: "Users see agents like you first, when and where they need you.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "TRANSACT PRO",
    subtitle: "Smart, lightning-fast sales. Let AI handle the heavy lifting.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "SUPPORTBOT",
    subtitle: "Round-the-clock help, powered by AI. Ask anything, anytime.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "SAFEPAY AI",
    subtitle: "Fraud alert tech that protects your wallet in real-time.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop",
  },
]

gsap.registerPlugin(ScrollTrigger)

export default function RealParallaxScroll() {
  const containerRef = useRef(null)
  const slidesRef = useRef([])

  useEffect(() => {
    const container = containerRef.current
    const slides = slidesRef.current

    if (!container || !slides.length) return

    // Set initial positions
    gsap.set(slides, { yPercent: 100 })
    gsap.set(slides[0], { yPercent: 0 })

    // Create scroll timeline for each slide
    slides.forEach((slide, index) => {
      if (index === 0) return // Skip first slide as it's already visible

      ScrollTrigger.create({
        trigger: container,
        start: `${index * 20}% center`,
        end: `${(index + 1) * 20}% center`,
        scrub: 1,
        animation: gsap.timeline()
          .to(slides[index - 1], { yPercent: -100, duration: 1 })
          .to(slides[index], { yPercent: 0, duration: 1 }, 0)
      })
    })

    // Parallax effect for background images
    slides.forEach((slide, index) => {
      const img = slide.querySelector('img')
      if (img) {
        ScrollTrigger.create({
          trigger: container,
          start: `${index * 20}% bottom`,
          end: `${(index + 1) * 20}% top`,
          scrub: 1,
          animation: gsap.fromTo(img, 
            { yPercent: -20 },
            { yPercent: 20, ease: "none" }
          )
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="relative">
      {/* Content before parallax */}
      <div className="h-screen bg-gray-900 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Scroll down for parallax effect</h1>
      </div>

      {/* Parallax container */}
      <div 
        ref={containerRef}
        className="relative h-[500vh] overflow-hidden"
      >
        {parallaxSlides.map((slide, index) => (
          <div
            key={slide.id}
            ref={el => slidesRef.current[index] = el}
            className="absolute inset-0 w-full h-screen"
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8">
                <h2 className="text-5xl font-bold mb-6 text-center">
                  {slide.title}
                </h2>
                <p className="text-xl max-w-2xl text-center leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content after parallax */}
      <div className="h-screen bg-gray-800 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-white">End of parallax section</h2>
      </div>
    </div>
  )
}