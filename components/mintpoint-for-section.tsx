"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const userTypes = [
  {
    id: 1,
    title: "New and existing agents looking for a smarter, cost-free way to run POS",
    image: "/images/who1.jpg",
  },
  {
    id: 2,
    title: "Side hustlers who want to earn extra using just their smartphones",
    image: "/images/who2.jpg",
  },
  {
    id: 3,
    title: "Business owners who want smooth, cashless operations",
    image: "/images/who3.jpg",
  },
  {
    id: 4,
    title: "Everyday users looking for fast, reliable agents nearby",
    image: "/images/who4.jpg",
  },
]

function MintpointForSectionMobile() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    if (!section || !title) return

    const handleScroll = () => {
      const sectionRect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Fix title at top center when section is in view
      if (sectionRect.top <= 0 && sectionRect.bottom >= windowHeight) {
        title.style.position = "fixed"
        title.style.top = "0px"
        title.style.left = "0"
        title.style.right = "0"
        title.style.margin = "0 auto"
        title.style.zIndex = "40"
        title.style.width = "100vw"
        title.style.textAlign = "center"
        title.style.background = "white"
        title.style.padding = "20px 0"
        title.style.boxShadow = "0 2px 8px 0 rgba(0,0,0,0.03)"
      } else {
        title.style.position = "relative"
        title.style.top = "auto"
        title.style.left = "auto"
        title.style.right = "auto"
        title.style.margin = ""
        title.style.zIndex = "auto"
        title.style.width = "100%"
        title.style.textAlign = "center"
        title.style.background = "transparent"
        title.style.padding = "0"
        title.style.boxShadow = "none"
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="block md:hidden relative bg-white min-h-[200vh] text-white pb-8">
      {/* Fixed Title */}
      <div ref={titleRef} className="relative bg-white z-[60] w-full px-4 pt-6">
        <h2 className="text-2xl font-bold text-black leading-tight">WHO'S MINTPOINT FOR?</h2>
      </div>
      {/* Cards */}
      <div className="flex flex-col gap-6 px-4 pt-28">
        {userTypes.map((userType, index) => (
          <div
            key={userType.id}
            className="user-card relative rounded-3xl overflow-hidden bg-gray-900 w-full"
            style={{ height: "340px" }}
          >
            <Image src={userType.image || "/placeholder.svg"} alt={userType.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-lg font-semibold leading-relaxed text-white">{userType.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

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

      // Animate content cards based on scroll progress - removed opacity animation
      const cards = content.querySelectorAll(".user-card")
      cards.forEach((card, index) => {
        const cardElement = card as HTMLElement
        const cardProgress = Math.max(0, Math.min(1, scrollProgress * userTypes.length - index))

        cardElement.style.transform = `translateY(${(1 - cardProgress) * 100}px)`
        // Removed opacity animation - cards will be visible normally
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop version: hidden on mobile */}
      <section ref={sectionRef} className="relative bg-white min-h-[350vh] text-white hidden md:block">
        {/* Fixed Title */}
        <div ref={titleRef} className="relative z-10 w-1/3 p-12 transition-all duration-300">
          <h2 className="text-4xl font-bold text-black leading-tight">WHO'S MINTPOINT FOR?</h2>
        </div>
        {/* Scrolling Content */}
        <div ref={contentRef} className="absolute top-0 right-0 w-2/3 min-h-full p-12 pt-32 z-5">
          <div className="space-y-8">
            {userTypes.map((userType, index) => (
              <div
                key={userType.id}
                className="user-card relative rounded-3xl overflow-hidden bg-gray-900 transform translate-y-24 transition-all duration-700"
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
      {/* Mobile version: only on mobile */}
      <MintpointForSectionMobile />
    </>
  )
}
