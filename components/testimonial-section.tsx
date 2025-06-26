"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    quote: "I started with just my phone. Now I'm making money every day.",
    name: "Blessing I.",
    role: "POS Agent, Lagos",
    flag: "🇳🇬",
    fullQuote:
      "Mintpoint made it possible for me to run a full POS business without buying a machine. I get paid instantly, and people around me can now find me easily. This is real hustle support.",
  },
  {
    id: 2,
    quote: "The best decision I made for my business this year.",
    name: "Chidi O.",
    role: "Business Owner, Abuja",
    flag: "🇳🇬",
    fullQuote:
      "Switching to Mintpoint transformed my small shop. No more cash handling stress, instant payments, and my customers love the convenience. My revenue has doubled!",
  },
  {
    id: 3,
    quote: "Simple, fast, and reliable. Everything I needed.",
    name: "Fatima A.",
    role: "Side Hustler, Kano",
    flag: "🇳🇬",
    fullQuote:
      "As a student, Mintpoint helps me earn extra income easily. The app is so simple to use, and I can serve customers anywhere. It's perfect for my lifestyle.",
  },
]

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Testimonial Content */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {testimonials[currentSlide].fullQuote}
            </p>

            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-8">
              "{testimonials[currentSlide].quote}"
            </div>

            {/* User Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="text-4xl">{testimonials[currentSlide].flag}</div>
              <div className="text-left">
                <div className="font-bold text-lg text-black">{testimonials[currentSlide].name}</div>
                <div className="text-gray-600">{testimonials[currentSlide].role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
