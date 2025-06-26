"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const heroImages = ["/images/bg1.png", "/images/bg2.jpg"]

// Custom hook to get window height on client before rendering
function useWindowHeightReady() {
  const [windowHeight, setWindowHeight] = useState<number | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Set initial height
    setWindowHeight(window.innerHeight)
    setReady(true)

    // Optionally, update on resize
    const handleResize = () => setWindowHeight(window.innerHeight)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { windowHeight, ready }
}

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const { windowHeight, ready } = useWindowHeightReady()

  useEffect(() => {
    if (!ready) return
    setIsLoaded(true)

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [ready])

  // Don't render any content until we know the window height (client-side)
  if (!ready || windowHeight === null) {
    // Render the background images only, but not the text content
    return (
      <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Hero background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 radgrad"></div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  // Determine heading size based on window height
  let headingSize = "text-7xl"
  if (windowHeight <= 720) {
    headingSize = "text-5xl"
  } else if (windowHeight <= 900) {
    headingSize = "text-6xl"
  }

  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 radgrad"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[700px] px-6 pb-12 md:pb-20 lg:pb-24 text-left">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className={`
              font-bold mb-6 leading-tight max-w-[669px] ${headingSize}
            `}
          >
            WE DON’T JUST GIVE
            <br />
            <span className="text-green-400">CASH.</span>WE GIVE CLEAN
            <br />
            MONEY!
          </h1>

          <p
            className={`text-lg md:text-xl text-white mb-8 max-w-2xl transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Welcome to Mintpoint, the AI-powered POS. Register today and start using your phone to receive fast card
            payments with a tap, USSD, and virtual accounts, all in one platform.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button className="bg-white w-[137px] h-[40px] rounded-[26px] hover:bg-gray-100 px-8 py-3 border border-[#E1E4EA] text-sm text-[#525866] font-medium transition-all duration-300 hover:scale-105">
              Find Nearby POS
            </Button>
            <Button className="bg-[#008B3A] w-[135px] h-[40px] rounded-[26px] text-white px-8 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-[#008B3A]">
              Join as an Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
