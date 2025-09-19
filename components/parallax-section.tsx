"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectCoverflow, Autoplay, Navigation } from "swiper/modules"
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

// Desktop version: Swiper-based carousel, same as mobile but bigger
function ParallaxSectionDesktop() {
  const [activeSlide, setActiveSlide] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index)
    }
  }

  return (
    <section id="how-it-works" className="hidden md:block w-full bg-white py-20 lg:min-h-[800px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">HOW IT WORKS</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience our platform through these key features and see how we're transforming the way you handle payments.
          </p>
        </div>
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={500}
            touchRatio={1}
            touchAngle={45}
            threshold={5}
            longSwipesRatio={0.5}
            longSwipesMs={300}
            followFinger={true}
            allowTouchMove={true}
            resistance={true}
            resistanceRatio={0.85}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            className="parallax-swiper-desktop"
          >
            {parallaxImages.map((src, index) => (
              <SwiperSlide key={index} className="!w-[500px]">
                <div className="relative h-[600px] rounded-3xl overflow-hidden mx-2 shadow-2xl">
                  <Image 
                    src={src} 
                    alt={`Slide ${index + 1}`} 
                    fill 
                    className="object-cover"
                    priority={index < 2}
                    loading={index < 2 ? "eager" : "lazy"}
                    sizes="500px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Custom Indicators */}
        <div className="flex justify-center mt-8 space-x-4">
          {parallaxImages.map((_, idx) => (
            <button
              key={idx}
              className={`h-4 w-4 rounded-full transition-all duration-300 hover:scale-125 ${
                idx === activeSlide ? "bg-gray-800 w-12 shadow-lg" : "bg-gray-300 opacity-40 hover:opacity-70"
              }`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <style jsx global>{`
        .parallax-swiper-desktop {
          padding: 20px 0 40px 0;
          overflow: visible;
        }
        .parallax-swiper-desktop .swiper-slide {
          transition: transform 0.3s ease-out, opacity 0.3s ease-out;
          will-change: transform, opacity;
          transform: translateZ(0);
        }
        .parallax-swiper-desktop .swiper-slide:not(.swiper-slide-active) {
          transform: scale(0.9) translateZ(0);
          opacity: 0.7;
        }
        .parallax-swiper-desktop .swiper-slide-active {
          transform: scale(1) translateZ(0);
          opacity: 1;
        }
        .parallax-swiper-desktop .swiper-wrapper {
          transform: translateZ(0);
        }
        .parallax-swiper-desktop .swiper-container {
          overflow: visible;
        }
      `}</style>
    </section>
  )
}

export default function ParallaxSection() {
  return (
    <>
      {/* Desktop version: Swiper carousel */}
      <ParallaxSectionDesktop />
      {/* Mobile version: Swiper carousel */}
      <ParallaxSectionMobile />
    </>
  )
}