"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"

gsap.registerPlugin(ScrollTrigger)

const parallaxImages = [
  "/images/parallax-1.svg",
  "/images/parallax-2.svg",
  "/images/parallax-3.svg",
  "/images/parallax-4.svg",
  "/images/parallax-5.svg",
]

// Mobile version: Swiper-based carousel, only on mobile
function ParallaxSectionMobile() {
  const [activeSlide, setActiveSlide] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index)
    }
  }

  return (
    <section id="how-it-works" className="block md:hidden w-full bg-white py-10 lg:min-h-[700px]">
      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={20}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={300}
          touchRatio={1}
          touchAngle={45}
          threshold={5}
          longSwipesRatio={0.5}
          longSwipesMs={300}
          followFinger={true}
          allowTouchMove={true}
          resistance={true}
          resistanceRatio={0.85}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="parallax-swiper-mobile"
        >
          {parallaxImages.map((src, index) => (
            <SwiperSlide key={index} className="!w-[300px]">
              <div className="relative h-[350px] rounded-2xl overflow-hidden mx-2 shadow-lg">
                <Image 
                  src={src} 
                  alt={`Slide ${index + 1}`} 
                  fill 
                  className="object-cover"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                  sizes="300px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {parallaxImages.map((_, idx) => (
            <button
              key={idx}
              className={`h-3 w-3 rounded-full transition-all duration-300 hover:scale-125 ${
                idx === activeSlide ? "bg-gray-800 w-8 shadow-lg" : "bg-gray-300 opacity-40 hover:opacity-70"
              }`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
            </div>
      </div>
      <style jsx global>{`
        .parallax-swiper-mobile {
          padding: 20px 0 40px 0;
          overflow: visible;
        }
        .parallax-swiper-mobile .swiper-slide {
          transition: transform 0.2s ease-out, opacity 0.2s ease-out;
          will-change: transform, opacity;
          transform: translateZ(0);
        }
        .parallax-swiper-mobile .swiper-slide:not(.swiper-slide-active) {
          transform: scale(0.9) translateZ(0);
          opacity: 0.7;
        }
        .parallax-swiper-mobile .swiper-slide-active {
          transform: scale(1) translateZ(0);
          opacity: 1;
        }
        .parallax-swiper-mobile .swiper-wrapper {
          transform: translateZ(0);
        }
        .parallax-swiper-mobile .swiper-container {
          overflow: visible;
        }
      `}</style>
    </section>
  )
}

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const slidesRef = useRef<HTMLDivElement[]>([])
  const currentImageIndex = useRef(0)

  useEffect(() => {
    // Only run GSAP ScrollTrigger on desktop
    if (window.innerWidth < 768) return

    const section = sectionRef.current
    const slides = slidesRef.current
    if (!section || slides.length === 0) return

    // Set initial positions - all images stacked, only first visible
    gsap.set(slides, { 
      yPercent: 0, 
      opacity: 0,
      zIndex: 1
    })
    gsap.set(slides[0], { 
      opacity: 1,
      zIndex: 2
    })

    // Remove all previous triggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    // Create fixed section with image transitions - only when you reach this section
    ScrollTrigger.create({
      trigger: section,
      start: "top top", // Only starts when section reaches top of viewport
      end: `+=${parallaxImages.length * window.innerHeight}`, // Each image gets full viewport height
      pin: true,
      pinSpacing: false, // Remove spacing to truly lock the section
      onUpdate: self => {
        const progress = self.progress
        const totalImages = parallaxImages.length
        const imageIndex = Math.floor(progress * totalImages)
        const clampedIndex = Math.min(imageIndex, totalImages - 1)
        
        // Always update the image based on scroll progress (no transition lock)
        if (clampedIndex !== currentImageIndex.current) {
          currentImageIndex.current = clampedIndex
          
          // Hide all images first
          slides.forEach((slide, i) => {
            if (i === clampedIndex) {
              gsap.set(slide, { opacity: 1, zIndex: 2 })
            } else {
              gsap.set(slide, { opacity: 0, zIndex: 1 })
            }
          })
        }
      },
    })
  }, [])

  return (
    <>
      {/* Desktop version: hidden on mobile */}
      <section id="how-it-works" ref={sectionRef} className="relative z-[60] w-full h-screen overflow-hidden bg-white hidden md:block parallax-desktop-container">
        {parallaxImages.map((src, index) => (
          <div
            key={src}
            ref={el => { if (el) slidesRef.current[index] = el }}
            className="parallax-slide"
            style={{ zIndex: 1 }}
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