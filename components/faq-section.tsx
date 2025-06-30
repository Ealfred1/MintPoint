"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import gsap from "gsap"

const faqs = [
  {
    id: 1,
    question: "What is Mintpoint?",
    answer: "Mintpoint is a smart, AI-powered soft POS platform that allows agents to accept payments and run a POS business using just their smartphone — no hardware needed. It also helps users find nearby agents for fast cash transactions.",
  },
  {
    id: 2,
    question: "Do I need to buy a POS machine to use Mintpoint?",
    answer: "No! That's the beauty of Mintpoint. Your smartphone becomes the POS. You can receive card payments through tap, USSD, virtual accounts, and more — all without spending money on traditional POS hardware.",
  },
  {
    id: 3,
    question: "How do customers find me if I'm an agent?",
    answer: "With AgentRadar, nearby users can see your POS location in real time, especially when you're available and have cash. You can also upload photos of your stand to make it easier to identify you.",
  },
  {
    id: 4,
    question: "Is Mintpoint safe and secure?",
    answer: "Yes. SafePay AI constantly monitors for suspicious activity and alerts you instantly if something feels off. We prioritize fraud prevention, so you can do business with peace of mind.",
  },
  {
    id: 5,
    question: "What kind of payments can I accept?",
    answer: "You can accept card payments (via tap), USSD codes, bank transfers, and payments through virtual accounts. We support major Nigerian banks and card networks.",
  },
  {
    id: 6,
    question: "Can I use Mintpoint if I'm already an agent with another POS company?",
    answer: "Absolutely. Mintpoint is designed to work alongside your current setup. Many of our agents use it to expand their service or reduce costs.",
  },
  {
    id: 7,
    question: "What do I need to get started?",
    answer: "All you need is a smartphone, your BVN or NIN for verification, and a bank account to receive payments. Once you register, you can start using Mintpoint almost immediately.",
  },
  {
    id: 8,
    question: "Is there any registration or monthly fee?",
    answer: "No registration fee. No monthly charges. You only pay small transaction fees, just like traditional POS systems — but with more features and flexibility.",
  },
  {
    id: 9,
    question: "What happens if I run into issues?",
    answer: "Our 24/7 SupportBot is always available in-app to help you with anything — whether it's a failed transaction, a setup issue, or something technical. You can also escalate to a human when needed.",
  },
  {
    id: 10,
    question: "Can users really find agents with cash near them?",
    answer: "Yes. Mintpoint users can see nearby agents who have marked themselves as 'cash available.' This helps reduce wasted trips and ensures you always find cash when you need it.",
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
  // Refs for each FAQ item (for question and answer)
  const faqRefs = useRef<(HTMLDivElement | null)[]>([])
  const answerRefs = useRef<(HTMLDivElement | null)[]>([])

  // Animate in all FAQ questions on mount (staggered)
  useEffect(() => {
    if (faqRefs.current.length) {
      gsap.set(faqRefs.current, { opacity: 0, y: 40 })
      gsap.to(faqRefs.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        overwrite: "auto",
      })
    }
  }, [])

  // Animate answer in/out when openFAQ changes
  useEffect(() => {
    answerRefs.current.forEach((el, idx) => {
      if (!el) return
      if (faqs[idx].id === openFAQ) {
        gsap.fromTo(
          el,
          { height: 0, opacity: 0, y: 20 },
          {
            height: "auto",
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
            overwrite: "auto",
            display: "block",
          }
        )
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          y: 20,
          duration: 0.3,
          ease: "power2.in",
          overwrite: "auto",
          onComplete: () => {
            if (el) el.style.display = "none"
          },
        })
      }
    })
  }, [openFAQ])

  return (
    <section className="bg-white w-full py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row">
          {/* Title */}
          <div className="w-full md:w-1/2 md:pr-16 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">FAQs</h2>
            <p className="text-lg text-[#6F6F6F] leading-relaxed">
            Everything you need to know about Mintpoint by Africard.
            </p>
          </div>
          {/* FAQs */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-2">
              {faqs.map((faq, idx) => (
                <div
                  key={faq.id}
                  ref={el => (faqRefs.current[idx] = el)}
                  className="overflow-hidden"
                >
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
                  <div
                    ref={el => (answerRefs.current[idx] = el)}
                    style={{
                      overflow: "hidden",
                      display: openFAQ === faq.id ? "block" : "none",
                    }}
                  >
                    <div className="pl-0 pr-8 pb-4">
                      <p className="text-[#6F6F6F] text-base md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
