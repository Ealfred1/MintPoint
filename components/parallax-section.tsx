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
          modules={[Pagination, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="parallax-swiper-mobile"
        >
          {parallaxImages.map((src, index) => (
            <SwiperSlide key={index} className="!w-[300px]">
              <div className="relative h-[350px] rounded-2xl overflow-hidden mx-2 shadow-lg">
                <Image src={src} alt={`Slide ${index + 1}`} fill className="object-cover" />
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
        }
        .parallax-swiper-mobile .swiper-slide {
          transition: transform 0.4s ease;
        }
        .parallax-swiper-mobile .swiper-slide:not(.swiper-slide-active) {
          transform: scale(0.85);
        }
        .parallax-swiper-mobile .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
        }
      `}</style>
    </section>
  )
}

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const slidesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const slides = slidesRef.current
    if (!section || slides.length === 0) return

    // Set initial positions
    gsap.set(slides, { yPercent: 100 })
    gsap.set(slides[0], { yPercent: 0 })

    // Remove all previous triggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    // Pin the section for (images.length - 1) * 100vh
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${(parallaxImages.length - 1) * window.innerHeight}`,
      pin: true,
      scrub: 0.5,
      anticipatePin: 1,
      onUpdate: self => {
        // Calculate which image should be visible
        const progress = self.progress
        const total = parallaxImages.length - 1
        const index = Math.round(progress * total)
        slides.forEach((slide, i) => {
          if (i < index) {
            gsap.set(slide, { yPercent: -100 })
          } else if (i === index) {
            gsap.set(slide, { yPercent: 0 })
          } else {
            gsap.set(slide, { yPercent: 100 })
          }
        })
      },
    })
  }, [])

  return (
    <>
      {/* Desktop version: hidden on mobile */}
      <section id="how-it-works" ref={sectionRef} className="relative z-[60] w-full h-screen overflow-hidden bg-white hidden md:block">
        {parallaxImages.map((src, index) => (
          <div
            key={src}
            ref={el => { if (el) slidesRef.current[index] = el }}
            className="absolute inset-0 w-full h-full transition-all duration-700"
            style={{ zIndex: parallaxImages.length - index }}
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