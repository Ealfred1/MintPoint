"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold">mintpoint</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              How it works
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              FAQs
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Contact
            </a>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
              Download App
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
