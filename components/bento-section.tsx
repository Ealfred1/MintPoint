"use client"

import { useEffect, useRef } from "react"

const bentoItems = [
  {
    title: "ACCEPT ALL PAYMENTS",
    description: "Card, USSD, transfers, and virtual accounts",
    bgColor: "#000",
    image: "/images/accept-pay.png",
    backgroundImage: "/images/bento/card-bg.png",
    size: "normal",
    imageStyle: { bottom: "-10px", left: "50%", transform: "translateX(-50%) scale(1.5)" },
    imageClass: "",
  },
  {
    title: "GET DISCOVERED",
    description: "Nearby users find you easily with AgentRadar",
    bgColor: "#000",
    image: "/images/get-discovered.png",
    backgroundImage: "/images/bg-why.png",
    size: "normal",
    imageStyle: { top: "100px", right: "12px", width: "225px", height: "225px", transform: "scale(1.2)" },
    imageClass: "",
  },
  {
    title: "GO HARDWARE-FREE",
    description: "Use just your phone to run your POS business",
    bgColor: "#000",
    image: "/images/go-hardware.png",
    backgroundImage: "/images/bg-why5.png",
    size: "tall",
    imageStyle: { bottom: "-100px", left: "-43px", transform: "scale(2)", width: "319px", height: "319px" },
    imageClass: "",
  },
  {
    title: "STAY SECURE",
    description: "SafePay AI fights fraud while you focus on sales",
    bgColor: "#000",
    image: "/images/stay-secure.png",
    backgroundImage: "/images/bg-why3.png",
    size: "tall",
    imageStyle: { bottom: "0px", left: "50%", transform: "translateX(-50%) scale(1.5)", width: "319px", height: "319px" },
    imageClass: "",
  },
  {
    title: "WORK SMARTER",
    description: "POS Insight helps you track, learn, and grow",
    bgColor: "#000",
    image: "/images/work-smarter.png",
    backgroundImage: "/images/bg-why2.png",
    size: "normal",
    imageStyle: { bottom: "-50px", left: "50%", transform: "translateX(-50%) scale(1.2)" },
     imageClass: "",
  },
  {
    title: "GET 24/7 HELP",
    description: "SupportBot is always online, so you never lose steam",
    bgColor: "#000",
    image: "/images/faq.png",
    backgroundImage: "/images/bg-why4.svg",
    size: "wide",
    imageStyle: { bottom: "-40px", right: "20px", width: "319px", height: "319px" },
    imageClass: "",
  },
]

// Mobile component moved outside to prevent re-creation on every render
function BentoSectionMobile() {
  // Use the same imageStyle for all cards as 'ACCEPT ALL PAYMENTS',
  // but override for 'GO HARDWARE-FREE' and 'WORK SMARTER'
  const mobileImageStyle = { bottom: "-10px", left: "50%", transform: "translateX(-50%) scale(1.5)" }
  return (
    <section className="block md:hidden py-10 bg-white text-black">
      <div className="px-4">
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">WHY MINTPOINT?</h2>
          <p className="text-base text-gray-600 max-w-xs">
            Mintpoint is not just a soft POS. It's your full financial assistant. Whether you're a roadside agent or a retail business, we give you the tools to:
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {bentoItems.map((item, idx) => {
            // Custom style for GO HARDWARE-FREE and WORK SMARTER
            let customImageStyle = mobileImageStyle
            let customImgSize = { width: 120, height: 120 }
            if (item.title === "GO HARDWARE-FREE") {
              customImageStyle = { bottom: "-32px", left: "50%", transform: "translateX(-50%) scale(1.9)" }
              customImgSize = { width: 160, height: 160 }
            } else if (item.title === "WORK SMARTER") {
              customImageStyle = { bottom: "-32px", left: "50%", transform: "translateX(-50%) scale(1.2)" }
              customImgSize = { width: 160, height: 160 }
            }
            return (
              <div
                key={item.title}
                className="bento-card relative overflow-hidden rounded-2xl p-5 text-white bg-black"
                style={{ minHeight: 220 }}
              >
                {/* Background overlay for gradient */}
                <div className="absolute inset-0 z-0" style={{ background: "rgba(0,0,0,0.25)" }}></div>
                {/* Card background image as an inset image */}
                {item.backgroundImage && (
                  <img
                    src={item.backgroundImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
                    style={{ opacity: 0.2 }}
                    draggable="false"
                  />
                )}
                {/* Card content */}
                <div className="relative z-10 h-full flex flex-col pb-20">
                  <h3 className="text-base font-bold mb-2 leading-tight">{item.title}</h3>
                  <p className="text-xs text-white/80 leading-relaxed">{item.description}</p>
                </div>
                {/* Icon image, positioned absolutely at the bottom using customImageStyle */}
                <div
                  className={`z-20 absolute`}
                  style={customImageStyle}
                >
                  <img
                    src={item.image}
                    alt={item.title + " icon"}
                    className="object-contain drop-shadow-lg"
                    draggable="false"
                    style={{ width: customImgSize.width, height: customImgSize.height, maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

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

  // Helper to render a bento card
  const renderBentoCard = (
    item: typeof bentoItems[number],
    idx: number,
    extraClasses = ""
  ) => (
    <div
      key={item.title}
      className={`bento-card relative overflow-hidden rounded-3xl p-8 text-white transform transition-all duration-700 opacity-0 translate-y-8 hover:scale-105 hover:shadow-2xl ${extraClasses}`}
      style={{
        background: `linear-gradient(to bottom right, rgba(0,0,0,1), rgba(0,0,0,1))`,
        // Remove backgroundImage from here
      }}
    >
      {/* Background overlay for gradient */}
      <div className="absolute inset-0 z-0" style={{ background: "rgba(0,0,0,0.25)" }}></div>
      {/* Card background image as an inset image */}
      {item.backgroundImage && (
        <img
          src={item.backgroundImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
          style={{ opacity: 0.2 }}
          draggable="false"
        />
      )}
      {/* Card content */}
      <div className="relative z-10 h-full flex flex-col pb-20">
        <h3 className={`${item.size === "tall" || item.size === "wide" ? "text-xl mb-4" : "text-lg mb-3"} font-bold leading-tight`}>
          {item.title}
        </h3>
        <p className={`${item.size === "tall" || item.size === "wide" ? "text-base" : "text-sm"} text-white/80 leading-relaxed`}>
          {item.description}
        </p>
      </div>
      {/* Icon image, positioned absolutely at the bottom using item.imageClass and item.imageStyle */}
      <div
        className={`z-20 absolute ${item.imageClass || ""}`}
        style={item.imageStyle}
      >
        <img
          src={item.image}
          alt={item.title + " icon"}
          className="object-contain drop-shadow-lg"
          draggable="false"
        />
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop version: hidden on mobile */}
      <section ref={sectionRef} className="py-20 bg-white sticky top-[-35rem] z-25 text-black hidden md:block">
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
            {renderBentoCard(bentoItems[0], 0, "col-span-1 row-span-1")}
            {renderBentoCard(bentoItems[1], 1, "col-span-1 row-span-1")}
            {renderBentoCard(bentoItems[2], 2, "col-span-1 row-span-2")}
            {/* Row 2 */}
            {renderBentoCard(bentoItems[3], 3, "col-span-1 row-span-2")}
            {renderBentoCard(bentoItems[4], 4, "col-span-1 row-span-1")}
            {/* Row 3 */}
            {renderBentoCard(bentoItems[5], 5, "col-span-2 row-span-1")}
          </div>
        </div>
      </section>
      {/* Mobile version: only on mobile */}
      <BentoSectionMobile />
    </>
  )
}
