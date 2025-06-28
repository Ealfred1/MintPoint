"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import VideoSection from "@/components/video-section"
import BentoSection from "@/components/bento-section"
import ParallaxSection from "@/components/parallax-section"
import TrustedBySection from "@/components/trusted-by-section"
import MintpointForSection from "@/components/mintpoint-for-section"
import BackedBySection from "@/components/backed-by-section"
import TestimonialSection from "@/components/testimonial-section"
import JoinMovementSection from "@/components/join-movement-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function HomePage() {
  useEffect(() => {
    // Initialize scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(".animate-on-scroll")
    animatableElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <BentoSection />
      <ParallaxSection />
      <TrustedBySection />
      <MintpointForSection />
      <BackedBySection />
      <TestimonialSection />
      <JoinMovementSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
