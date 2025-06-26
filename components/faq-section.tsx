"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Is the Mintpoint app free to use?",
    answer: "Absolutely. Download the app from the App Store or Google Play for free, no subscription fees.",
  },
  {
    id: 2,
    question: "What makes Mintpoint cash different from regular cash?",
    answer:
      "Mintpoint enables digital transactions through your smartphone, eliminating the need for physical cash handling while providing instant, secure payments.",
  },
  {
    id: 3,
    question: "How do I find a Mintpoint agent near me?",
    answer:
      "Use our AgentRadar feature in the app to locate verified Mintpoint agents in your area. You can see their availability and distance from your location.",
  },
  {
    id: 4,
    question: "Who are the agents, and how are they verified?",
    answer:
      "Our agents are verified individuals and businesses who have completed our registration process. They undergo background checks and maintain high service standards.",
  },
  {
    id: 5,
    question: "How can I become a Mintpoint agent?",
    answer:
      "Download the app, complete the agent registration process, verify your identity, and start earning by providing POS services in your community.",
  },
  {
    id: 6,
    question: "What if an agent runs out of cash?",
    answer:
      "Our system monitors agent cash levels in real-time. If an agent is low on cash, the app will redirect you to nearby agents with available funds.",
  },
]

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1)
  const titleRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const faqsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const faqsContainer = faqsRef.current

    if (!section || !title || !faqsContainer) return

    const handleScroll = () => {
      const sectionRect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight

      // Keep title fixed when section is in view
      if (sectionRect.top <= 120 && sectionRect.bottom >= windowHeight) {
        title.style.position = "fixed"
        title.style.top = "120px"
        title.style.left = "50px"
        title.style.width = "calc(33.333% - 50px)"
        title.style.zIndex = "40"

        // Keep FAQs on the right side
        faqsContainer.style.marginLeft = "33.333%"
        faqsContainer.style.width = "66.667%"
      } else {
        title.style.position = "relative"
        title.style.top = "auto"
        title.style.left = "auto"
        title.style.width = "auto"
        title.style.zIndex = "auto"

        // Reset FAQs position
        faqsContainer.style.marginLeft = "0"
        faqsContainer.style.width = "100%"
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[150vh] bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex">
          {/* Fixed Title */}
          <div ref={titleRef} className="w-1/3 p-12 transition-all duration-300">
            <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">FAQs</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Everything you need to know about the product and billing. Can't find the answer you're looking for?
              Please{" "}
              <a href="#" className="text-green-500 underline">
                chat to our friendly team
              </a>
              .
            </p>
          </div>

          {/* Scrollable FAQs */}
          <div ref={faqsRef} className="w-2/3 p-12 pt-32 transition-all duration-300">
            <div className="space-y-4 max-w-3xl">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-black pr-4">{faq.question}</span>
                    <div className="flex-shrink-0">
                      {openFAQ === faq.id ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {openFAQ === faq.id && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
