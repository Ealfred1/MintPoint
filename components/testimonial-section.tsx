"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"

const testimonials = [
  {
    id: 1,
    quote: "I started with just my phone. Now I'm making money every day.",
    name: "Blessing I.",
    role: "POS Agent, Lagos",
    countryImg: "/images/flag-n.svg",
    fullQuote:
      "Mintpoint made it possible for me to run a full POS business without buying a machine. I get paid instantly, and people around me can now find me easily. This is real hustle support.",
  },
  {
    id: 2,
    quote: "Mintpoint changed the way I do business.",
    name: "Samuel T.",
    role: "Electronics Store Owner, Port Harcourt",
    countryImg: "/images/flag-n.svg",
    fullQuote:
      "Before Mintpoint, I used to wait for bank alerts and deal with network issues. Now, transactions are faster, more secure, and my customers trust me more. I've even stopped using my old POS machine.",
  },
  {
    id: 3,
    quote: "It's the first POS platform that actually helps me grow.",
    name: "Zainab M.",
    role: "Agent & Boutique Owner, Kaduna",
    countryImg: "/images/flag-n.svg",
    fullQuote:
      "With the business insights and AI support, I now know what hours bring me the most customers. It's not just about collecting money, Mintpoint is helping me scale smart.",
  },
  {
    id: 4,
    quote: "I found an agent just when I needed cash. No stress.",
    name: "Tunde O.",
    role: "App User, Abuja",
    countryImg: "/images/flag-n.svg",
    fullQuote:
      "I was stranded and needed cash urgently. Opened Mintpoint, saw an agent two streets away with cash available. Walked there, got my money. No drama. No guesswork.",
  },
  {
    id: 5,
    quote: "Their support bot is better than most banks' customer service.",
    name: "Rita A.",
    role: "Fashion Retailer, Ibadan",
    countryImg: "/images/flag-n.svg",
    fullQuote:
      "One time I had a failed transaction at night. I got help immediately from the Mintpoint bot  and it fixed everything without waiting till the next day. That sealed it for me.",
  },
]

function TestimonialSectionMobile() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const startX = useRef<number | null>(null)
  const deltaX = useRef<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    if (startX.current !== null) {
      deltaX.current = e.touches[0].clientX - startX.current
    }
  }
  const handleTouchEnd = () => {
    if (deltaX.current > 50) {
      // Swipe right
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    } else if (deltaX.current < -50) {
      // Swipe left
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }
    startX.current = null
    deltaX.current = 0
  }

  // Auto-slide effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section className="block md:hidden py-10 bg-white">
      <div className="px-3 w-full max-w-md mx-auto">
        <div className="min-h-[340px] flex flex-col items-center justify-center">
          <div
            ref={containerRef}
            className="w-full flex flex-col items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Full Quote */}
            <p className="text-sm text-[#6F6F6F] mb-4 leading-relaxed text-center max-w-xs">
              {testimonials[currentSlide].fullQuote}
            </p>
            {/* Highlighted Quote */}
            <div className="text-base font-bold text-[#008B3A] mb-4 px-4 py-2 rounded-xl text-center">
              &quot;<span className="text-[#008B3A]">{testimonials[currentSlide].quote}</span>&quot;
            </div>
            {/* User Info */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center mb-2">
                <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md">
                  <Image
                    src={testimonials[currentSlide].countryImg}
                    alt="Country flag"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-base text-black mb-0.5">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-gray-600 text-xs">
                  {testimonials[currentSlide].role}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 w-6 rounded-full transition-all duration-300 ease-out transform ${
                idx === currentSlide 
                  ? "bg-green-600 w-6" 
                  : "bg-gray-300 w-2"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLParagraphElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)
  const roleRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const animateIn = () => {
    const tl = gsap.timeline()
    
    tl.set([quoteRef.current, highlightRef.current, avatarRef.current, nameRef.current, roleRef.current], {
      opacity: 0,
      y: 50,
      scale: 0.95
    })
    
    tl.to(quoteRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out"
    })
    .to(highlightRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.4")
    .to(avatarRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    }, "-=0.3")
    .to([nameRef.current, roleRef.current], {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.2")
  }

  const animateOut = () => {
    const tl = gsap.timeline()
    
    tl.to([quoteRef.current, highlightRef.current, avatarRef.current, nameRef.current, roleRef.current], {
      opacity: 0,
      y: -50,
      scale: 0.95,
      duration: 0.4,
      ease: "power2.in"
    })
  }

  const goToSlide = (idx: number) => {
    if (idx === currentSlide) return
    
    animateOut()
    
    setTimeout(() => {
      setCurrentSlide(idx)
      setTimeout(animateIn, 50)
    }, 400)
  }

  // Auto-slide with GSAP animations
  useEffect(() => {
    // Initial animation
    setTimeout(animateIn, 100)

    intervalRef.current = setInterval(() => {
      animateOut()
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
        setTimeout(animateIn, 50)
      }, 400)
    }, 6000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [currentSlide])

  return (
    <>
      {/* Desktop version: hidden on mobile */}
      <section className="py-20 bg-white hidden md:block">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 relative min-h-[500px] flex flex-col items-center justify-center">
            {/* Animated Testimonial Content */}
            <div
              ref={containerRef}
              className="w-full flex flex-col items-center justify-center"
            >
              {/* Full Quote with staggered animation */}
              <p 
                ref={quoteRef}
                className="text-lg md:text-[28px] text-[#6F6F6F] mb-8 leading-relaxed max-w-3xl"
              >
                {testimonials[currentSlide].fullQuote}
              </p>
              {/* Highlighted Quote with bounce effect */}
              <div 
                ref={highlightRef}
                className="text-2xl font-bold text-[#008B3A] mb-8 px-6 py-3 rounded-2xl"
              >
                &quot;<span className="text-[#008B3A]">{testimonials[currentSlide].quote}</span>&quot;
              </div>
              {/* User Info with elastic animation */}
              <div className="flex flex-col items-center justify-center">
                {/* Country Flag Image with elastic bounce */}
                <div className="flex justify-center mb-4">
                  <div 
                    ref={avatarRef}
                    className="h-[64px] w-[64px] rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg hover:scale-110 transition-transform duration-300"
                  >
                    <Image
                      src={testimonials[currentSlide].countryImg}
                      alt="Country flag"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div 
                    ref={nameRef}
                    className="font-bold text-lg text-black mb-1"
                  >
                    {testimonials[currentSlide].name}
                  </div>
                  <div 
                    ref={roleRef}
                    className="text-gray-600"
                  >
                    {testimonials[currentSlide].role}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Enhanced Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`h-3 w-3 rounded-full transition-all duration-500 ease-out transform hover:scale-125 ${
                  idx === currentSlide 
                    ? "bg-green-600 w-8 shadow-lg" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
      {/* Mobile version: only on mobile */}
      <TestimonialSectionMobile />
    </>
  )
}
