"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function JoinMovementSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const imageContainer = imageRef.current

    if (!section || !imageContainer) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))

      // Animate image sliding from top
      const translateY = (1 - scrollProgress) * -50
      imageContainer.style.transform = `translateY(${translateY}px)`
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 bg-green-500 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="text-white pt-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">JOIN THE MOVEMENT</h2>

            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Thousands are switching to smarter transactions with Mintpoint. Why not you?
            </p>

            {/* User Avatars */}
            <div className="flex items-center mb-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-white/20 border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-white font-bold">👤</span>
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-white text-green-500 border-2 border-white flex items-center justify-center ml-2">
                  <span className="text-sm font-bold">+10K</span>
                </div>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <span className="text-black text-xs font-bold">📱</span>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </div>

              <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <span className="text-black text-xs font-bold">▶</span>
                </div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image - Positioned at top */}
          <div className="relative flex justify-end">
            <div
              ref={imageRef}
              className="relative transform transition-transform duration-1000"
              style={{ alignSelf: "flex-start" }}
            >
              <div className="relative">
                <Image
                  src="/join-movement.png"
                  alt="Join the Movement"
                  width={600}
                  height={400}
                  className="w-full h-auto max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white rounded-full"></div>
      </div>
    </section>
  )
}
