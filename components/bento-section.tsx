"use client"

import { useEffect, useRef } from "react"

const bentoItems = [
  {
    title: "ACCEPT ALL PAYMENTS",
    description: "Card, USSD, transfers, and virtual accounts",
    bgColor: "from-gray-900 to-black",
    illustration: "💳", // Credit card with checkmark
    size: "normal",
  },
  {
    title: "GET DISCOVERED",
    description: "Nearby users find you easily with AgentRadar",
    bgColor: "from-gray-800 to-gray-900",
    illustration: "🎯", // Radar device
    size: "normal",
  },
  {
    title: "GO HARDWARE-FREE",
    description: "Use just your phone to run your POS business",
    bgColor: "from-gray-900 to-black",
    illustration: "📱", // Phone with POS terminal
    size: "tall",
  },
  {
    title: "STAY SECURE",
    description: "SafePay AI fights fraud while you focus on sales",
    bgColor: "from-gray-900 to-black",
    illustration: "🔒", // Blue safe/locker
    size: "tall",
  },
  {
    title: "WORK SMARTER",
    description: "POS Insight helps you track, learn, and grow",
    bgColor: "from-gray-800 to-gray-900",
    illustration: "📊", // Colorful bar charts
    size: "normal",
  },
  {
    title: "GET 24/7 HELP",
    description: "SupportBot is always online, so you never lose steam",
    bgColor: "from-gray-900 to-black",
    illustration: "❓", // Globe with FAQ bubble
    size: "wide",
  },
]

export default function BentoSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll(".bento-card")
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-in")
            }, index * 150)
          })
        }
      })
    }, observerOptions)

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">WHY MINTPOINT?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Mintpoint is not just a soft POS. It's your full financial assistant. Whether you're a roadside agent or a
            retail business, we give you the tools to:
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-6 max-w-6xl mx-auto h-[800px]">
          {/* Row 1 */}
          <div
            className={`bento-card col-span-1 row-span-1 relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${bentoItems[0].bgColor} text-white transform transition-all duration-700 opacity-0 translate-y-8 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-lg font-bold mb-3 leading-tight">{bentoItems[0].title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{bentoItems[0].description}</p>
            </div>
          </div>

          <div
            className={`bento-card col-span-1 row-span-1 relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${bentoItems[1].bgColor} text-white transform transition-all duration-700 opacity-0 translate-y-8 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-lg font-bold mb-3 leading-tight">{bentoItems[1].title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{bentoItems[1].description}</p>
            </div>
          </div>

          <div
            className={`bento-card col-span-1 row-span-2 relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${bentoItems[2].bgColor} text-white transform transition-all duration-700 opacity-0 translate-y-8 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-4 leading-tight">{bentoItems[2].title}</h3>
              <p className="text-white/80 text-base leading-relaxed">{bentoItems[2].description}</p>
            </div>
          </div>

          {/* Row 2 */}
          <div
            className={`bento-card col-span-1 row-span-2 relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${bentoItems[3].bgColor} text-white transform transition-all duration-700 opacity-0 translate-y-8 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-4 leading-tight">{bentoItems[3].title}</h3>
              <p className="text-white/80 text-base leading-relaxed">{bentoItems[3].description}</p>
            </div>
          </div>

          <div
            className={`bento-card col-span-1 row-span-1 relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${bentoItems[4].bgColor} text-white transform transition-all duration-700 opacity-0 translate-y-8 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-lg font-bold mb-3 leading-tight">{bentoItems[4].title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{bentoItems[4].description}</p>
            </div>
          </div>

          {/* Row 3 */}
          <div
            className={`bento-card col-span-2 row-span-1 relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${bentoItems[5].bgColor} text-white transform transition-all duration-700 opacity-0 translate-y-8 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-4 leading-tight">{bentoItems[5].title}</h3>
              <p className="text-white/80 text-base leading-relaxed">{bentoItems[5].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
