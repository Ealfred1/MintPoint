import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Your privacy matters to us</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Mintpoint by Africard, we respect your privacy and are committed to protecting your personal
                information. This Privacy Policy explains how we collect, use, store, and protect your data when you use
                our services, including the AI-powered SoftPOS and clean cash exchange features.
              </p>

              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
                  <p className="text-gray-700 mb-4">We may collect the following types of information:</p>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">a. Personal Information</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Full name</li>
                      <li>Phone number</li>
                      <li>Email address</li>
                      <li>BVN (Bank Verification Number) – where applicable</li>
                      <li>Government-issued ID (e.g., NIN, voter's card) – for agents</li>
                      <li>Bank account details</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">b. Transactional Data</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Payment history</li>
                      <li>Currency exchange logs</li>
                      <li>SoftPOS transaction records</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">c. Device & Usage Data</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Device type and model</li>
                      <li>IP address</li>
                      <li>Location (only with permission)</li>
                      <li>App interaction logs</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">We use your data to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Provide and improve Mintpoint services</li>
                    <li>Authenticate users and agents</li>
                    <li>Facilitate secure transactions and payments</li>
                    <li>Detect and prevent fraud or misuse</li>
                    <li>Communicate updates, support, and promotional offers (with your consent)</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Data Sharing and Disclosure</h2>
                  <p className="text-gray-700 mb-4">
                    We do not sell or rent your personal information. However, we may share your data with:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Africard and its subsidiaries, for operational purposes</li>
                    <li>Regulatory authorities (e.g., CBN, EFCC) if required by law</li>
                    <li>
                      Third-party service providers who help us deliver parts of our service (e.g., payment processors,
                      cloud storage, KYC verification platforms), all of whom are under strict confidentiality
                      obligations
                    </li>
                    <li>Law enforcement, when legally compelled</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Data Retention</h2>
                  <p className="text-gray-700 mb-4">We retain your information for as long as necessary to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Fulfill the purpose for which it was collected</li>
                    <li>Meet legal, regulatory, and operational requirements</li>
                    <li>Resolve disputes and enforce our policies</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    You can request data deletion at any time (except where legally restricted).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Your Rights</h2>
                  <p className="text-gray-700 mb-4">As a user, you have the right to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Access the data we hold about you</li>
                    <li>Correct any inaccurate or outdated information</li>
                    <li>Request deletion of your data</li>
                    <li>Withdraw consent for marketing communications</li>
                    <li>Opt-out of location tracking (via device settings)</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    To exercise your rights, email{" "}
                    <a href="mailto:privacy@mintpoint.app" className="text-blue-600 hover:underline">
                      privacy@mintpoint.app
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Cookies and Tracking</h2>
                  <p className="text-gray-700">
                    Mintpoint may use cookies or similar technologies to enhance app experience, analyze usage, and
                    remember user preferences. You can manage cookie permissions in your device or browser settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Data Security</h2>
                  <p className="text-gray-700 mb-4">
                    We implement advanced security measures to protect your data, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>End-to-end encryption</li>
                    <li>Multi-factor authentication</li>
                    <li>Secure cloud storage</li>
                    <li>Regular system audits and updates</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Despite our efforts, no system is 100% secure. You are advised to keep your login credentials
                    private.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Children's Privacy</h2>
                  <p className="text-gray-700">
                    Mintpoint services are not intended for children under the age of 18. We do not knowingly collect
                    personal data from minors. If we discover such data has been collected, we will delete it
                    immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Changes to This Policy</h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy occasionally. All changes will be communicated via the app or
                    email. Continued use of the platform after updates implies your acceptance of the revised policy.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Contact Us</h2>
                  <p className="text-gray-700">
                    For questions or privacy concerns, please contact:
                    <br />📧{" "}
                    <a href="mailto:privacy@mintpoint.app" className="text-blue-600 hover:underline">
                      privacy@mintpoint.app
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
