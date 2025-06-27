"use client"

import { useEffect, useRef } from "react"

function VideoSectionMobile() {
  return (
    <section className="block md:hidden py-10 bg-black">
      <div className="px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 leading-tight">EXPERIENCE A NEW WAY FORWARD</h2>
        <p className="text-base font-medium text-white/80 mb-8 max-w-xs mx-auto">
          High fees, hidden charges, and delayed payments shouldn't stand between you and your earnings.
        </p>
        {/* App Store Buttons */}
        <div className="flex gap-3 justify-center items-center mb-10 w-full max-w-xs mx-auto">
          <img src="/images/appstore-btn.svg" alt="Download on the App Store" className="h-8 w-auto transition-all hover:brightness-200 hover:scale-105 cursor-pointer" draggable="false" />
          <img src="/images/playstore-btn.svg" alt="Download on Play Store" className="h-8 w-auto transition-all hover:brightness-200 hover:scale-105 cursor-pointer" draggable="false" />
        </div>
        {/* Video Placeholder */}
        <div className="relative w-full max-w-xs mx-auto">
          <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                <div className="w-0 h-0 border-l-6 border-l-white border-t-3 border-t-transparent border-b-3 border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))

      // Parallax effect
      const translateY = (scrollProgress - 0.5) * 50
      section.style.transform = `translateY(${translateY}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop version: hidden on mobile */}
      <section ref={sectionRef} className="py-20 bg-black animate-on-scroll hidden md:block">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-[37px] font-bold mb-6">EXPERIENCE A NEW WAY FORWARD</h2>

        <p className="text-lg font-medium text-white/80 mb-12 max-w-3xl mx-auto">
          High fees, hidden charges, and delayed payments shouldn't stand between you and your earnings.
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <img src="/images/appstore-btn.svg" alt="Download on the App Store" className="transition-all hover:brightness-200 hover:scale-[1.1] cursor-pointer" draggable="false" />
          <img src="/images/playstore-btn.svg" alt="Download on Play Store" className="transition-all hover:brightness-200 hover:scale-[1.1] cursor-pointer" draggable="false" />
        </div>

        {/* Video Placeholder */}
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </div>
    </section>
      {/* Mobile version: only on mobile */}
      <VideoSectionMobile />
    </>
  )
}
