"use client"

import { useEffect, useRef, useState } from "react"
import { Play } from "lucide-react" // Import Pay icon

// Dynamically import gsap for client-side only
let gsap: typeof import("gsap") | null = null
if (typeof window !== "undefined") {
  // @ts-ignore
  import("gsap").then((mod) => {
    gsap = mod
  })
}

function useVideoInView(
  videoRef: React.RefObject<HTMLVideoElement>,
  containerRef: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!videoRef.current || !containerRef.current) return

    let observer: IntersectionObserver | null = null

    const handlePlayPause = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!videoRef.current) return
        if (entry.isIntersecting) {
          // Animate in and play
          if (gsap) {
            gsap.to(videoRef.current, {
              scale: 1,
              borderRadius: "1rem",
              duration: 0.7,
              ease: "power3.out",
            })
          } else {
            videoRef.current.style.filter = "grayscale(0)"
            videoRef.current.style.transform = "scale(1)"
            videoRef.current.style.borderRadius = "1rem"
          }
          videoRef.current.play().catch(() => {})
        } else {
          // Animate out and pause
          if (gsap) {
            gsap.to(videoRef.current, {
              filter: "grayscale(1)",
              scale: 0.97,
              borderRadius: "1rem",
              duration: 0.7,
              ease: "power3.inOut",
            })
          } else {
            videoRef.current.style.filter = "grayscale(1)"
            videoRef.current.style.transform = "scale(0.97)"
            videoRef.current.style.borderRadius = "1rem"
          }
          videoRef.current.pause()
        }
      })
    }

    observer = new window.IntersectionObserver(handlePlayPause, {
      threshold: 0.5,
    })

    observer.observe(containerRef.current)

    return () => {
      if (observer && containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [videoRef, containerRef])
}

function VideoSectionMobile() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLElement>(null)

  const handlePlay = () => {
    setIsOverlayVisible(false)
  }

  useVideoInView(videoRef, containerRef)

  return (
    <section ref={containerRef} className="block md:hidden py-10 bg-black">
      <div className="px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 leading-tight">EXPERIENCE A NEW WAY FORWARD</h2>
        <p className="text-base font-medium text-white/80 mb-8 max-w-xs mx-auto">
          No hardware? No problem. No hardware required, just download the Mintpoint App to start accepting contactless payments.
        </p>
        {/* App Store Buttons */}
        <div className="flex gap-3 justify-center items-center mb-10 w-full max-w-xs mx-auto">
          <img src="/images/appstore-btn.svg" alt="Download on the App Store" className="h-8 w-auto transition-all hover:brightness-200 hover:scale-105 cursor-pointer" draggable="false" />
          <img src="/images/playstore-btn.svg" alt="Download on Play Store" className="h-8 w-auto transition-all hover:brightness-200 hover:scale-105 cursor-pointer" draggable="false" />
        </div>
        {/* Video Placeholder */}
        <div className="relative w-full max-w-xs mx-auto">
          <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden relative group cursor-pointer">
            <video
              ref={videoRef}
              src="/video/video.mp4"
              className="w-full h-full object-cover transition-all duration-500 rounded-xl"
              autoPlay
              loop
              muted
              playsInline
              onPlay={handlePlay}
              onClick={() => setIsOverlayVisible(false)}
              style={{
                cursor: isOverlayVisible ? "pointer" : "default",
                transform: isOverlayVisible ? "scale(0.97)" : "scale(1)",
                borderRadius: "1rem",
                background: "black",
              }}
            />
            {isOverlayVisible && (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300">
                    {/* Show the Pay icon from lucide-react */}
                    <Play className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 pointer-events-none z-10"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isOverlayVisible, setIsOverlayVisible] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Parallax effect
    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
      const translateY = (scrollProgress - 0.5) * 50
      section.style.transform = `translateY(${translateY}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // GSAP play/pause and animation on in-view
  useEffect(() => {
    if (!videoRef.current || !sectionRef.current) return

    let observer: IntersectionObserver | null = null

    const handlePlayPause = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!videoRef.current) return
        if (entry.isIntersecting) {
          // Animate in and play
          if (gsap) {
            gsap.to(videoRef.current, {
              filter: "grayscale(0)",
              scale: 1,
              borderRadius: "1rem",
              duration: 0.7,
              ease: "power3.out",
            })
          } else {
            videoRef.current.style.transform = "scale(1)"
            videoRef.current.style.borderRadius = "1rem"
          }
          videoRef.current.play().catch(() => {})
        } else {
          // Animate out and pause
          if (gsap) {
            gsap.to(videoRef.current, {
              filter: "grayscale(1)",
              scale: 0.97,
              borderRadius: "1rem",
              duration: 0.7,
              ease: "power3.inOut",
            })
          } else {
            videoRef.current.style.transform = "scale(0.97)"
            videoRef.current.style.borderRadius = "1rem"
          }
          videoRef.current.pause()
        }
      })
    }

    observer = new window.IntersectionObserver(handlePlayPause, {
      threshold: 0.5,
    })

    observer.observe(sectionRef.current)

    return () => {
      if (observer && sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const handlePlay = () => {
    setIsOverlayVisible(false)
  }

  return (
    <>
      {/* Desktop version: hidden on mobile */}
      <section ref={sectionRef} className="py-20 bg-black animate-on-scroll hidden md:block">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-[37px] font-bold mb-6">EXPERIENCE A NEW WAY FORWARD</h2>

          <p className="text-lg font-medium text-white/80 mb-12 max-w-3xl mx-auto">
            No hardware? No problem. No hardware required, just download the Mintpoint App to start accepting contactless payments.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <img src="/images/appstore-btn.svg" alt="Download on the App Store" className="transition-all hover:brightness-200 hover:scale-[1.1] cursor-pointer" draggable="false" />
            <img src="/images/playstore-btn.svg" alt="Download on Play Store" className="transition-all hover:brightness-200 hover:scale-[1.1] cursor-pointer" draggable="false" />
          </div>

          {/* Video Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden relative group cursor-pointer">
              <video
                ref={videoRef}
                src="/video/video.mp4"
                className="w-full h-full object-cover transition-all duration-500 rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
                onPlay={handlePlay}
                onClick={() => setIsOverlayVisible(false)}
                style={{
                  cursor: isOverlayVisible ? "pointer" : "default",
                  transform: isOverlayVisible ? "scale(0.97)" : "scale(1)",
                  borderRadius: "1rem",
                  background: "black",
                }}
              />
              {isOverlayVisible && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300">
                      {/* Show the Pay icon from lucide-react */}
                      <Play className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 pointer-events-none z-10"></div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Mobile version: only on mobile */}
      <VideoSectionMobile />
    </>
  )
}
