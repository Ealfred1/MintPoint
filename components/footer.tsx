"use client"

import { Twitter, Linkedin, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold">mintpoint</span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              Mintpoint by Africard is a POS solution designed to revolutionize how everyday people access and provide
              financial services by turning smartphones into powerful tools for cash transactions, agent discovery, and
              real-time cash availability across all POS terminals nationwide.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="bg-white text-black px-4 py-2 rounded-lg flex items-center space-x-3 hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-xs">📱</span>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-bold text-sm">App Store</div>
                </div>
              </div>

              <div className="bg-white text-black px-4 py-2 rounded-lg flex items-center space-x-3 hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-xs">▶</span>
                </div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="font-bold text-sm">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
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
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <p className="text-gray-400">Have questions or need help?</p>
              <div className="space-y-2">
                <a href="tel:+2348000000000" className="text-gray-400 hover:text-white transition-colors block">
                  📞 +234 800 000 0000
                </a>
                <a
                  href="mailto:support@mintpoint.africa"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  ✉️ support@mintpoint.africa
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© Africard. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
