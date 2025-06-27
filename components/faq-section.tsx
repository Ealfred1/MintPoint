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

// Plus and minus SVGs for FAQ toggles
function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="none"/>
      <path d="M12 7v10M7 12h10" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
function MinusIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="none"/>
      <path d="M7 12h10" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1)

  return (
    <section className="bg-white w-full py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row">
          {/* Title */}
          <div className="w-full md:w-1/2 md:pr-16 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">FAQs</h2>
            <p className="text-lg text-[#6F6F6F] leading-relaxed">
              Everything you need to know about the product and billing. Can't find the answer you're looking for?
              Please{" "}
              <a href="#" className="text-green-500 underline">
                chat to our friendly team
              </a>
              .
            </p>
          </div>
          {/* FAQs */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-2">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <button
                    onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                  >
                    <span className="text-base md:text-lg font-medium text-black">
                      {faq.question}
                    </span>
                    <span className="ml-4 flex items-center justify-center border-2 border-[#98A2B3] h-[24px] w-[24px] rounded-full flex-shrink-0">
                      {openFAQ === faq.id ? (
                        <MinusIcon className="w-6 h-6 text-[#98A2B3]" />
                      ) : (
                        <PlusIcon className="w-6 h-6 text-[#98A2B3]" />
                      )}
                    </span>
                  </button>
                  {openFAQ === faq.id && (
                    <div className="pl-0 pr-8 pb-4">
                      <p className="text-[#6F6F6F] text-base md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
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
