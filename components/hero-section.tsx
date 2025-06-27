"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const heroSlides = [
  {
    image: "/mintpoint-lady.jpg",
    title: (
      <>
        WE DON'T JUST GIVE
        <br />
        <span className="text-green-400">CASH.</span> WE GIVE CLEAN
        <br />
        MONEY!
      </>
    ),
    subtext:
      "Say goodbye to dirty, torn notes. With Mintpoint, you get crisp, clean Naira every time. Simple, reliable, and designed to give you confidence in every transaction.",
  },
  {
    image: "/mintpoint-card.jpg",
    title: (
      <>
        TURN YOUR SMARTPHONE
        <br />
        INTO A POS TERMINAL
      </>
    ),
    subtext:
      "Accept contactless payments on the go with your iPhone or Android device with Mintpoint App. Just download the app to get started.",
  },
  {
    image: "/mintpoint-bank.jpg",
    title: (
      <>
        WELCOME TO MINTPOINT:
        <br />
        WHERE SIMPLICITY MEETS INNOVATION
      </>
    ),
    subtext:
      "Mintpoint by Africard, the AI-powered POS solution. Register today and start using your phone to receive fast card payments with a tap, USSD, and virtual accounts, all in one seamless platform.",
  },
]

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

function HeroSectionMobile() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="block md:hidden relative min-h-screen flex items-end justify-start overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover bg-black"
            />
            <div className="absolute inset-0 radgrad"></div>
          </div>
        ))}
      </div>
      {/* Content */}
      <div className="relative z-10 w-full px-4 pb-10 text-left">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-bold mb-4 leading-tight text-3xl sm:text-4xl max-w-[340px]">
            {heroSlides[currentIndex].title}
          </h1>
          <p
            className={`text-base text-white mb-6 max-w-xs transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {heroSlides[currentIndex].subtext}
          </p>
          <div
            className={`flex flex-col gap-3 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button className="bg-white w-full h-[40px] rounded-[26px] hover:bg-gray-100 border border-[#E1E4EA] text-sm text-[#525866] font-medium transition-all duration-300 hover:scale-105">
              Find Nearby POS
            </Button>
            <Button className="bg-[#008B3A] w-full h-[40px] rounded-[26px] text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-[#008B3A]">
              Join as an Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const { windowHeight, ready } = useWindowHeightReady()

  useEffect(() => {
    if (!ready) return
    setIsLoaded(true)

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [ready])

  // Don't render any content until we know the window height (client-side)
  if (!ready || windowHeight === null) {
    // Render the background images only, but not the text content
    return (
      <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={`Hero background ${index + 1}`}
                fill
                className="object-contain bg-black"
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
    <>
      {/* Desktop version: hidden on mobile */}
      <section className="relative min-h-screen flex items-end justify-start overflow-hidden hidden md:flex">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={`Hero background ${index + 1}`}
                fill
                className="object-cover bg-black"
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
            <h1 className={`font-bold mb-6 leading-tight max-w-[769px] ${headingSize}`}>
              {heroSlides[currentIndex].title}
            </h1>
            <p
              className={`text-lg md:text-xl text-white mb-8 max-w-2xl transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {heroSlides[currentIndex].subtext}
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
      {/* Mobile version: only on mobile */}
      <HeroSectionMobile />
    </>
  )
}
