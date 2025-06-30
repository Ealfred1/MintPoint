import Navbar  from "@/components/navbar"
import Footer  from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              WELCOME TO MINTPOINT: WHERE SIMPLICITY MEETS INNOVATION
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Mintpoint by Africard is an AI-powered SoftPOS and clean cash exchange platform built to improve how
                Nigerians handle, receive, and experience physical money.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At its core, Mintpoint turns any compatible smartphone into a secure, intelligent payment terminal that
                accepts card and digital transactions without the need for bulky POS hardware. We're making payments
                smarter, faster, and more accessible to agents, small businesses, and everyday people.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">But we didn't stop there.</p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Mintpoint also solves a major problem many Nigerians face daily: the struggle to access clean, spendable
                naira notes. Through our agent network, users can exchange old, dirty, or torn notes for crisp new
                currency quickly, reliably, and for a small fee.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                We're on a mission to build Nigeria's most trusted softPOS and clean cash network, where digital
                convenience meets real world value.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-16">
                Mintpoint is proudly powered by Africard, a next-gen financial company building smart solutions for
                Africa's payment future.
              </p>

              {/* Mission Section */}
              <div className="bg-blue-50 rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To simplify payments and cash access for Nigerians by providing an AI-powered SoftPOS solution and a
                  reliable network for clean currency exchange, empowering individuals, agents, and businesses to
                  operate with ease, speed, and trust.
                </p>
              </div>

              {/* Vision Section */}
              <div className="bg-indigo-50 rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become Nigeria's most trusted platform for smart payments and clean money, setting new standards in
                  convenience, accessibility, and financial innovation across Africa.
                </p>
              </div>

              {/* Values Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Simplicity</h3>
                    <p className="text-gray-700">
                      We believe financial tools should be easy to use. From clean cash exchange to AI-powered SoftPOS,
                      we design every feature with clarity and convenience in mind.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Trust</h3>
                    <p className="text-gray-700">
                      We're building a platform people can rely on, whether they're exchanging old notes or processing
                      payments. Integrity and transparency guide everything we do.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Innovation</h3>
                    <p className="text-gray-700">
                      We leverage AI and smart technology to solve everyday financial problems in unique and practical
                      ways. We're not here to follow trends, we're here to lead change.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Accessibility</h3>
                    <p className="text-gray-700">
                      From major cities to underserved communities, our goal is to ensure every Nigerian can access
                      clean money and modern payment tools, without barriers.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Empowerment</h3>
                    <p className="text-gray-700">
                      We support agents, vendors, and small business owners with the tools they need to grow, earn, and
                      serve their communities confidently.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Efficiency</h3>
                    <p className="text-gray-700">
                      Time is money. Our systems are built to deliver speed, whether it's a quick exchange of notes or a
                      seamless payment transaction.
                    </p>
                  </div>
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
