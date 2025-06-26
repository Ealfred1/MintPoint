"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"

const parallaxSlides = [
  {
    id: 1,
    title: "POS INSIGHT",
    subtitle: "Know what works. See peak hours, top customers, and sales trends.",
    image: "/parallax-1.png",
    bgColor: "from-purple-600 via-pink-500 to-orange-400",
  },
  {
    id: 2,
    title: "AGENTRADAR",
    subtitle: "Users see agents like you first, when and where they need you.",
    image: "/parallax-2.png",
    bgColor: "from-gray-900 to-black",
  },
  {
    id: 3,
    title: "TRANSACT PRO",
    subtitle: "Smart, lightning-fast sales. Let AI handle the heavy lifting.",
    image: "/parallax-3.png",
    bgColor: "from-purple-500 via-pink-500 to-orange-400",
  },
  {
    id: 4,
    title: "SUPPORTBOT",
    subtitle: "Round-the-clock help, powered by AI. Ask anything, anytime.",
    image: "/parallax-4.png",
    bgColor: "from-gray-900 to-black",
  },
  {
    id: 5,
    title: "SAFEPAY AI",
    subtitle: "Fraud alert tech that protects your wallet in real-time.",
    image: "/parallax-5.png",
    bgColor: "from-orange-400 via-pink-500 to-purple-600",
  },
]

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isParallaxActive, setIsParallaxActive] = useState(false)
  const [canScrollPast, setCanScrollPast] = useState(false)

  const totalSlides = parallaxSlides.length
  const scrollAccumulator = useRef(0)

  const handleScroll = useCallback(
    (e: WheelEvent) => {
      if (!containerRef.current) return

      const container = containerRef.current
      const containerRect = container.getBoundingClientRect()

      // Check if we're in the parallax section
      const isInSection = containerRect.top <= 0 && containerRect.bottom >= window.innerHeight

      if (isInSection && !canScrollPast) {
        e.preventDefault()
        setIsParallaxActive(true)

        // Accumulate scroll delta for smoother control
        scrollAccumulator.current += e.deltaY * 0.4

        // Calculate progress through all slides (0 to 1)
        const maxScroll = totalSlides * 1000 // Each slide needs 1000px of scroll
        const progress = Math.max(0, Math.min(1, scrollAccumulator.current / maxScroll))

        setScrollProgress(progress)

        // Determine current slide based on progress
        const slideIndex = Math.floor(progress * totalSlides)
        const clampedSlideIndex = Math.max(0, Math.min(totalSlides - 1, slideIndex))
        setCurrentSlide(clampedSlideIndex)

        // Allow scrolling past when we've completed all slides
        if (progress >= 0.99) {
          setCanScrollPast(true)
          setIsParallaxActive(false)
        }
      } else if (!isInSection) {
        setIsParallaxActive(false)
        // Reset when leaving section from top
        if (containerRect.top > 0) {
          scrollAccumulator.current = 0
          setScrollProgress(0)
          setCurrentSlide(0)
          setCanScrollPast(false)
        }
      }
    },
    [canScrollPast, totalSlides],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Add wheel event listener with passive: false to allow preventDefault
    window.addEventListener("wheel", handleScroll, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleScroll)
    }
  }, [handleScroll])

  // Calculate individual slide progress and transforms
  const getSlideTransform = (slideIndex: number) => {
    const slideProgress = scrollProgress * totalSlides - slideIndex
    const normalizedProgress = Math.max(0, Math.min(1, slideProgress))

    let scale = 0.4
    let opacity = 0
    let translateY = 200

    if (slideIndex === currentSlide) {
      // Current slide: grows from 0.4 to 1.0 and becomes visible
      scale = 0.4 + normalizedProgress * 0.6 // 0.4 to 1.0
      opacity = normalizedProgress
      translateY = (1 - normalizedProgress) * 200
    } else if (slideIndex === currentSlide - 1 && currentSlide > 0) {
      // Previous slide: shrinks to minimum before next appears
      const exitProgress = Math.max(0, Math.min(1, slideProgress))
      scale = 1.0 - exitProgress * 0.6 // 1.0 to 0.4
      opacity = Math.max(0, 1 - exitProgress * 2) // Fade out completely
      translateY = -exitProgress * 150
    } else if (slideIndex < currentSlide) {
      // Already shown slides: completely hidden
      scale = 0.4
      opacity = 0
      translateY = -150
    } else {
      // Future slides: hidden below
      scale = 0.4
      opacity = 0
      translateY = 200
    }

    return {
      transform: `scale(${scale}) translateY(${translateY}px)`,
      opacity: opacity.toString(),
      zIndex: slideIndex === currentSlide ? 10 : slideIndex === currentSlide - 1 ? 5 : 1,
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-black"
      style={{
        position: isParallaxActive ? "fixed" : "relative",
        top: isParallaxActive ? 0 : "auto",
        left: isParallaxActive ? 0 : "auto",
        right: isParallaxActive ? 0 : "auto",
        zIndex: isParallaxActive ? 50 : "auto",
      }}
    >
      {/* Slides Container */}
      <div className="absolute inset-0">
        {parallaxSlides.map((slide, index) => {
          const slideTransform = getSlideTransform(index)

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${slide.bgColor} transition-all duration-500 ease-out`}
              style={slideTransform}
            >
              {/* Content */}
              <div className="container mx-auto px-6 text-center text-white relative z-10">
                <div
                  className="transition-all duration-700 ease-out"
                  style={{
                    transform: `translateY(${index === currentSlide ? 0 : 30}px)`,
                    opacity: index === currentSlide ? 1 : 0,
                  }}
                >
                  <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{slide.title}</h2>
                  <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* Feature Image */}
                  <div className="relative max-w-4xl mx-auto">
                    <div
                      className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl transition-all duration-700"
                      style={{
                        transform: `scale(${index === currentSlide ? 1 : 0.8})`,
                        opacity: index === currentSlide ? 1 : 0,
                      }}
                    >
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index <= 1}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Background overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
