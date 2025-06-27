"use client"

import { Twitter, Linkedin, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 ">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        <div className="flex flex-col px-3 md:flex-row md:items-start md:justify-between gap-12">
          {/* Left: Logo, Description */}
          <div className="md:w-[38%] flex-shrink-0 flex flex-col">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/images/mintpoint.svg" alt="Mintpoint Logo" className="h-8 w-auto" draggable="false" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md text-sm">
              Mintpoint by Africard is a POS solution designed to revolutionize how everyday people access and provide financial services by turning smartphones into powerful tools for cash transactions, agent discovery, and real-time cash availability across all POS terminals nationwide.
            </p>
          </div>

          {/* Spacer for justified layout */}
          <div className="flex-1"></div>

          {/* Right: Quick Links & Get in Touch */}
          <div className="flex flex-col md:flex-row md:space-x-20 w-full md:w-auto justify-end">
            {/* Quick Links */}
            <div className="md:w-[180px] flex-shrink-0 flex flex-col mb-12 md:mb-0">
              <h3 className="text-base font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4 text-sm mb-6">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Become an Agent
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact Support
                  </a>
                </li>
              </ul>
              {/* App Store Buttons under Quick Links */}
              <div className="flex space-x-4">
                <img
                  src="/images/appstore-btn.svg"
                  alt="Download on the App Store"
                  className="h-10 w-auto transition-all hover:brightness-200 hover:scale-[1.1] cursor-pointer"
                  draggable="false"
                />
                <img
                  src="/images/playstore-btn.svg"
                  alt="Download on Play Store"
                  className="h-10 w-auto transition-all hover:brightness-200 hover:scale-[1.1] cursor-pointer"
                  draggable="false"
                />
              </div>
            </div>
            {/* Add more space between the two right sections */}
            <div className="hidden md:block" style={{ minWidth: 24 }}></div>
            {/* Get in Touch */}
            <div className="md:w-[220px] md:mr-12 flex-shrink-0">
              <h3 className="text-base font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4 text-sm">
                <p className="text-gray-400">Have questions or need help?</p>
                <div className="space-y-2">
                  <a href="tel:+2348000000000" className="text-gray-400 hover:text-white transition-colors block">
                    +234 800 000 0000
                  </a>
                  <a
                    href="mailto:support@mintpoint.africa"
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    support@mintpoint.africa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© Africard. All rights reserved.</p>
          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
