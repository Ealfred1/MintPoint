"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const userTypes = [
  {
    id: 1,
    title: "New and existing agents looking for a smarter, cost-free way to run POS",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Side hustlers who want to earn extra using just their smartphones",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Business owners who want smooth, cashless operations",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "Everyday users looking for fast, reliable agents nearby",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function MintpointForSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const content = contentRef.current

    if (!section || !title || !content) return

    const handleScroll = () => {
      const sectionRect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight

      // Calculate scroll progress through the section
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionRect.top) / (sectionHeight + windowHeight)))

      // Keep title fixed at top when section is in view
      if (sectionRect.top <= 0 && sectionRect.bottom >= windowHeight) {
        title.style.position = "fixed"
        title.style.top = "120px"
        title.style.left = "50px"
        title.style.zIndex = "40"
      } else {
        title.style.position = "relative"
        title.style.top = "auto"
        title.style.left = "auto"
        title.style.zIndex = "auto"
      }

      // Animate content cards based on scroll progress
      const cards = content.querySelectorAll(".user-card")
      cards.forEach((card, index) => {
        const cardElement = card as HTMLElement
        const cardProgress = Math.max(0, Math.min(1, scrollProgress * userTypes.length - index))

        cardElement.style.transform = `translateY(${(1 - cardProgress) * 100}px)`
        cardElement.style.opacity = cardProgress.toString()
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[300vh] bg-black text-white">
      {/* Fixed Title */}
      <div ref={titleRef} className="w-1/3 p-12 transition-all duration-300">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">WHO'S MINTPOINT FOR?</h2>
      </div>

      {/* Scrolling Content */}
      <div ref={contentRef} className="absolute top-0 right-0 w-2/3 min-h-full p-12 pt-32">
        <div className="space-y-8">
          {userTypes.map((userType, index) => (
            <div
              key={userType.id}
              className="user-card relative rounded-3xl overflow-hidden bg-gray-900 opacity-0 transform translate-y-24 transition-all duration-700"
              style={{ height: "400px" }}
            >
              <Image src={userType.image || "/placeholder.svg"} alt={userType.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xl md:text-2xl font-semibold leading-relaxed text-white">{userType.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
