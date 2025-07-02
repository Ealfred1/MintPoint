"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
]

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href.startsWith('#')) {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
        scrolled ? "bg-black/20 backdrop-blur-md" : "bg-black/20"
      }`}
      style={{ height: 82 }}
    >
      <div className="max-w-[2440px] mx-auto px-6 md:px-10 py-4 h-full flex items-center">
        <div className="flex items-center w-full justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/mintpoint.svg" alt="Mintpoint Logo" className="h-8 w-auto" draggable="false" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/80 hover:scale-105  text-[15px] font-medium hover:text-white transition-all px-2"
                onClick={e => handleNavClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-[#008B3A] h-10 px-6 text-white rounded-[26px] transition-all duration-300  text-[15px] font-medium flex items-center gap-2 hover:bg-[#008B3A] hover:scale-105">
              Download App
              <ChevronRight className="text-white h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-7 w-7" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/30 backdrop-blur-lg border-none shadow-2xl p-0">
                <div className="flex flex-col h-full w-full py-8 px-6 gap-8">
                  <div className="flex items-center justify-between">
                    <img src="/images/mintpoint.svg" alt="Mintpoint Logo" className="h-8 w-auto" draggable="false" />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-white">
                        <span className="sr-only">Close menu</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </Button>
                    </SheetClose>
                  </div>
                  <div className="flex flex-col gap-6 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-white text-lg font-medium py-2 px-2 rounded-lg hover:bg-white/10 transition-all"
                        onClick={e => {
                          handleNavClick(e, link.href);
                          setSidebarOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Button className="w-full bg-[#008B3A] h-12 text-white rounded-[26px] text-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#008B3A] hover:scale-105">
                      Download App
                      <ChevronRight className="text-white h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
