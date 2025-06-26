"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const navLinks = [
  { label: "How it works", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Contact", href: "#" },
]

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
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#FFFFFF00] backdrop-blur-md" : "bg-transparent"
      }`}
      style={{ height: 82 }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-4 h-full flex items-center">
        <div className="flex items-center w-full justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/mintpoint.svg" alt="Mintpoint Logo" className="h-8 w-auto" draggable="false" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/80 hover:scale-105  text-[15px] font-medium hover:text-white transition-all px-2"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-[#008B3A] h-10 px-6 text-white rounded-[26px] transition-all duration-300  text-[15px] font-medium flex items-center gap-2 hover:bg-[#008B3A] hover:scale-105">
              Download App
              <ChevronRight className="text-white h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
