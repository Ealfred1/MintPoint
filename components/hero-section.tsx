"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const highlightClass =
  "relative inline-block px-1 before:absolute before:inset-0 before:-z-10 before:bg-[url('data:image/svg+xml,%3Csvg%20width=\'388\'%20height=\'64\'%20fill=\'none\'%20xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath%20d=\'M386%2024c-64%203-211%208-341%200%2061%206%20174%2014%20300%2014-37%202-148%204-343-6\'%20stroke=\'%23008B3A\'%20stroke-width=\'48\'/%3E%3C/svg%3E')] before:bg-no-repeat before:bg-cover before:rounded before:opacity-80"

const heroSlides = [
  {
    image: "/mintpoint-lady.jpg",
    title: (
      <>
        WE DON'T JUST <span className="marker-span marker-1">GIVE CASH.</span>
        <br />
        WE GIVE <span className="marker-span marker-2">CLEAN MONEY!</span>
      </>
    ),
    subtext:
      "Say goodbye to dirty, torn notes. With Mintpoint, you get crisp, clean Naira every time. Simple, reliable, and designed to give you confidence in every transaction.",
  },
  {
    image: "/mintpoint-card.jpg",
    title: (
      <>
        TURN YOUR <span className="marker-span marker-1">SMARTPHONE</span>
        <br />
        INTO A <span className="marker-span marker-2">POS TERMINAL</span>
      </>
    ),
    subtext:
      "Accept contactless payments on the go with your iPhone or Android device with Mintpoint App. Just download the app to get started.",
  },
  {
    image: "/mintpoint-bank.jpg",
    title: (
      <>
        WHERE SIMPLICITY MEETS <span className="marker-span marker-2">INNOVATION</span>
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

function SlideProgressIndicator({ currentIndex, progress, count = 3 }: { currentIndex: number; progress: number; count?: number }) {
  return (
    <div className="absolute left-0 right-0 bottom-0 z-20 w-full flex items-center justify-center px-0 pb-4 pointer-events-none">
      <div className="w-full max-w-[700px] md:max-w-[700px] flex gap-2 mx-auto">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-2 rounded-full bg-white/30 overflow-hidden relative"
            style={{ minWidth: 0 }}
          >
            {/* Progress fill for current */}
            {i === currentIndex ? (
              <div
                className="absolute left-0 top-0 h-full bg-white transition-all"
                style={{
                  width: `${progress * 100}%`,
                  borderRadius: '9999px',
                  transition: 'width 0.2s linear',
                }}
              />
            ) : null}
            {/* Solid fill for completed */}
            {i < currentIndex ? (
              <div className="absolute left-0 top-0 h-full w-full bg-white rounded-full" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

function HeroSectionMobile() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    let start = Date.now()
    let raf: number
    let lastIndex = currentIndex
    function animate() {
      const elapsed = Date.now() - start
      let prog = Math.min(elapsed / 5000, 1)
      setProgress(prog)
      if (prog < 1) {
        raf = requestAnimationFrame(animate)
      }
    }
    animate()
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length)
      start = Date.now()
      setProgress(0)
    }, 5000)
    return () => {
      clearInterval(interval)
      cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    setProgress(0)
    let start = Date.now()
    let raf: number
    function animate() {
      const elapsed = Date.now() - start
      let prog = Math.min(elapsed / 5000, 1)
      setProgress(prog)
      if (prog < 1) {
        raf = requestAnimationFrame(animate)
      }
    }
    animate()
    return () => cancelAnimationFrame(raf)
  }, [currentIndex])

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
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
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
      {/* Slide Progress Indicator */}
      <SlideProgressIndicator currentIndex={currentIndex} progress={progress} count={heroSlides.length} />
    </section>
  )
}

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const { windowHeight, ready } = useWindowHeightReady()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!ready) return
    setIsLoaded(true)
    let start = Date.now()
    let raf: number
    function animate() {
      const elapsed = Date.now() - start
      let prog = Math.min(elapsed / 5000, 1)
      setProgress(prog)
      if (prog < 1) {
        raf = requestAnimationFrame(animate)
      }
    }
    animate()
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length)
      start = Date.now()
      setProgress(0)
    }, 5000)
    return () => {
      clearInterval(interval)
      cancelAnimationFrame(raf)
    }
  }, [ready])

  useEffect(() => {
    setProgress(0)
    let start = Date.now()
    let raf: number
    function animate() {
      const elapsed = Date.now() - start
      let prog = Math.min(elapsed / 5000, 1)
      setProgress(prog)
      if (prog < 1) {
        raf = requestAnimationFrame(animate)
      }
    }
    animate()
    return () => cancelAnimationFrame(raf)
  }, [currentIndex])

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
                className="object-cover bg-black"
                priority={index === 0}
              />
              <div className="absolute inset-0 radgrad"></div>
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
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
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
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
      {/* Slide Progress Indicator */}
      <SlideProgressIndicator currentIndex={currentIndex} progress={progress} count={heroSlides.length} />
    </section>
      {/* Mobile version: only on mobile */}
      <HeroSectionMobile />
    </>
  )
}
