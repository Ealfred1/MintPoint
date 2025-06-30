import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-100">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
            <p className="text-xl text-gray-600">Welcome to Mintpoint by Africard</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                By accessing or using our app, platform, or services, you agree to comply with and be bound by the
                following terms and conditions. Please read them carefully.
              </p>

              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Overview</h2>
                  <p className="text-gray-700 mb-4">Mintpoint is a service owned and operated by Africard, offering:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      An AI-powered SoftPOS for accepting payments via card or digital means without traditional POS
                      hardware.
                    </li>
                    <li>
                      A clean cash exchange service that allows users to swap old, worn, or mutilated naira notes for
                      clean ones through registered agents or approved Mintpoint centers.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Eligibility</h2>
                  <p className="text-gray-700 mb-4">To use Mintpoint, you must:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Be at least 18 years old or have the consent of a legal guardian.</li>
                    <li>Provide accurate, complete information during registration.</li>
                    <li>Use the platform only for lawful purposes.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">3. User Obligations</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>You agree not to misuse or tamper with the platform or services.</li>
                    <li>You are responsible for safeguarding your login credentials.</li>
                    <li>Transactions processed via your account are your responsibility.</li>
                    <li>You will not use the platform for fraud, money laundering, or any illegal activities.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Agent Terms</h2>
                  <p className="text-gray-700 mb-4">If you register as an agent:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>You must follow Mintpoint's cash handling and exchange guidelines.</li>
                    <li>You may charge only the approved service fee to customers.</li>
                    <li>
                      You are responsible for maintaining the quality of cash exchanged and ensuring compliance with CBN
                      guidelines on currency handling.
                    </li>
                    <li>You must not hoard or counterfeit currency.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Fees and Charges</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      Clean cash exchanges may incur a service fee as displayed on the app or communicated by the agent.
                    </li>
                    <li>
                      Card payment processing via SoftPOS may be subject to transaction fees, which are transparently
                      stated during use.
                    </li>
                    <li>
                      Africard reserves the right to revise fees, and such changes will be communicated in advance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Payment & Settlement</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      For SoftPOS users: Transactions processed will be settled into your linked Africard account or a
                      supported third-party account, based on our payout schedule.
                    </li>
                    <li>
                      For agents: Mintpoint may provide float or liquidity options. Terms of engagement will be governed
                      by separate service-level agreements (SLAs).
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Data and Privacy</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      We collect and use your personal data in accordance with our{" "}
                      <a href="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </li>
                    <li>
                      Your data is used only to provide services, enhance user experience, and comply with legal
                      obligations.
                    </li>
                    <li>Mintpoint uses encryption and security protocols to protect user data.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Limitation of Liability</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      Mintpoint and Africard will not be liable for indirect, incidental, or consequential damages
                      arising from your use of the platform.
                    </li>
                    <li>
                      We are not responsible for delays or failure caused by unforeseen events (e.g., network outages,
                      regulatory changes, force majeure).
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Termination</h2>
                  <p className="text-gray-700 mb-4">We may suspend or terminate your access to Mintpoint if you:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Violate any of these terms.</li>
                    <li>Engage in fraudulent, abusive, or harmful behavior.</li>
                    <li>Fail to comply with agent or user obligations.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Modifications</h2>
                  <p className="text-gray-700">
                    We reserve the right to update or modify these Terms at any time. Users will be notified via app,
                    email, or SMS. Continued use of Mintpoint after changes constitutes acceptance of the new terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Governing Law</h2>
                  <p className="text-gray-700">
                    These Terms shall be governed by and interpreted in accordance with the laws of the Federal Republic
                    of Nigeria. Any disputes shall be resolved in Nigerian courts.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Contact Us</h2>
                  <p className="text-gray-700">
                    If you have any questions or concerns, contact our support team at:
                    <br />📧{" "}
                    <a href="mailto:support@mintpoint.app" className="text-blue-600 hover:underline">
                      support@mintpoint.app
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
