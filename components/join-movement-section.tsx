"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const avatarImages = [
  "/images/avatar1.png",
  "/images/av1.svg",
  "/images/av2.svg",
  "/images/av3.svg",
  "/images/av4.svg",
  "/images/av5.svg",
  "/images/av6.svg",
]

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
    <section 
      ref={sectionRef} 
      className="relative py-20 bg-[#008B3A] h-[459px] overflow-hidden"
    >
      {/* Background rough image with 10% opacity */}
      <div className="absolute inset-0 opacity-10 z-0">
        <Image
          src="/images/rough.png"
          alt="Background texture"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="text-white pt-8">
            <h2 className="text-[37px] font-bold mb-1 leading-tight">JOIN THE MOVEMENT</h2>

            <p className="text-lg mb-8 leading-relaxed">
              Thousands are switching to smarter transactions with<br /> Mintpoint. Why not you?
            </p>

            {/* User Avatars */}
            <div className="flex items-center mb-8">
              <div className="flex -space-x-5">
                {avatarImages.map((src, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`User avatar ${i + 1}`}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <img src="/images/appstore-btn.svg" alt="Download on the App Store" className="transition-all hover:brightness-200 hover:scale-[1.1] cursor-pointer" draggable="false" />

                <img src="/images/playstore-btn.svg" alt="Download on Play Store" className="transition-all hover:brightness-200 hover:scale-[1.1] cursor-pointer" draggable="false" />
            </div>
          </div>

          {/* Right Image - Enhanced positioning and sizing */}
          <div className="relative flex justify-end items-center min-h-[600px] lg:min-h-[800px]">
            <div
              ref={imageRef}
              className="relative transform transition-transform duration-1000 flex items-center justify-center"
              style={{ 
                // transform: "rotate(119deg)"
              }}
            >
              <div className="relative -translate-y-[230px] w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] xl:w-[800px] xl:h-[800px]">
                <Image
                  src="/images/join-d-movement.png"
                  alt="Join the Movement"
                  fill
                  className="object-contain absolute top-0 -rotate-[120deg]"
                  sizes="(max-width: 768px) 400px, (max-width: 1024px) 600px, 800px"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
