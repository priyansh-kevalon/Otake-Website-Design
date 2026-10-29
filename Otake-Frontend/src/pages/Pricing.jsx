import { useState } from 'react'
import BrowserShell from '../components/ui/BrowserShell.jsx'
import GetStarted from '../components/sections/GetStarted.jsx'
import FAQ from '../components/sections/FAQ.jsx'

function BrandLogo({ name, icon }) {
  return (
    <div className="flex items-center gap-2.5 text-neutral-800">
      <span className="text-neutral-900 [&>svg]:h-[22px] [&>svg]:w-[22px]">{icon}</span>
      <span className="text-[19px] font-bold tracking-[0.12em] text-neutral-900">{name}</span>
    </div>
  )
}

function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly') // 'monthly' | 'yearly'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const price = billingPeriod === 'yearly' ? '$14' : '$18'
  const savings = billingPeriod === 'yearly' ? 'billed annually (save $48/yr)' : 'billed monthly'

  return (
    <div className="w-full">
      {/* ---------------- 1. PRICING HERO SECTION ---------------- */}
      <section className="otake-about-hero otake-pricing-hero-color relative w-full pt-6 pb-12 sm:pt-16 sm:pb-16 lg:pt-24">
        <div className="relative mx-auto max-w-[1080px] px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-[680px] text-center">
            {/* Ambient decorative 3D accents */}
            <span
              className="pointer-events-none absolute -left-10 top-16 hidden select-none sm:block lg:-left-40"
              aria-hidden="true"
            >
              <img
                src="/images/6d78f5c25e29d1b3c3efb378a0895ab50206643b.png"
                alt=""
                width="84"
                height="84"
                className="h-[84px] w-[84px] object-contain"
              />
            </span>
            <span
              className="pointer-events-none absolute -right-10 top-28 hidden select-none sm:block lg:-right-40"
              aria-hidden="true"
            >
              <img
                src="/images/73d9b74f1e858692091fb4e1a35f610182e1e25f.png"
                alt=""
                width="80"
                height="80"
                className="h-[80px] w-[80px] object-contain"
              />
            </span>

            <span className="inline-block rounded-[4px] bg-[#FFE36A] px-4 py-1.5 text-[13px] font-semibold text-neutral-800">
              Pricing Plan
            </span>

            <h1 className="mt-5 text-[38px] font-bold leading-[1.12] tracking-tight text-neutral-900 sm:text-[50px] md:text-[58px]">
              Pricing To Suit All
              <br />
              Business Sizes
            </h1>

            <p className="mx-auto mt-4 max-w-[540px] text-[16px] leading-relaxed text-neutral-900 sm:text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br className="hidden sm:inline" /> Vivamus non enim lacus.
            </p>

            {/* Monthly / Yearly Billing Toggle */}
            <div className="mt-8 inline-flex items-center rounded-full border border-neutral-200/90 bg-gradient-to-r from-pink-100/70 via-white/90 to-amber-100/70 p-1 shadow-sm backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setBillingPeriod('monthly')}
                className={`rounded-full px-5 py-1.5 text-[12px] font-semibold transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod('yearly')}
                className={`flex items-center gap-1.5 rounded-full px-5 py-1.5 text-[12px] font-semibold transition-all ${
                  billingPeriod === 'yearly'
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <span>Yearly</span>
                <span className="rounded-full bg-yellow-300 px-2 py-0.5 text-[10px] font-bold text-neutral-900">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* ---------------- MAIN INTERACTIVE PRICING CARD ---------------- */}
          <div className="relative mx-auto mt-12 w-full max-w-[944px] overflow-x-hidden px-2 sm:px-0">
            <div className="relative z-10 flex flex-col rounded-[20px] border border-neutral-200/80 bg-white shadow-[0_24px_60px_rgba(150,130,200,0.16)] sm:rounded-[28px] md:min-h-[725.59px] md:rounded-[36px]">
            {/* Dark Top Bar */}
            <div className="m-2 flex flex-col justify-between gap-4 rounded-[16px] bg-[#0D0C10] p-4 text-white sm:m-3 sm:flex-row sm:items-center sm:gap-6 sm:rounded-[18px] sm:p-5 md:rounded-[24px] md:p-7">
              <div>
                <p className="text-[14px] font-semibold uppercase tracking-wider text-neutral-400 sm:text-[15px]">
                  Starter Plan
                </p>
                <div className="mt-1.5 flex items-baseline gap-1.5">
                  <span className="text-[36px] font-bold tracking-tight text-white sm:text-[44px] md:text-[50px]">
                    <span className="relative -top-2 mr-0.5 text-[18px] font-medium text-neutral-300 sm:-top-3 sm:text-[20px] md:text-[22px]">$</span>
                    {price.slice(1)}
                  </span>
                  <span className="text-[36px] font-medium text-white sm:text-[44px] md:text-[50px]">/mo</span>
                </div>
                <p className="mt-1 text-[14px] text-neutral-400">
                  {savings}
                </p>
              </div>

              <div className="w-full sm:max-w-[320px]">
                <p className="text-[13px] leading-relaxed text-neutral-300 sm:text-[15px] md:text-[16px]">
                  For small teams and growing businesses who need powerful automation tools.
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center gap-2 rounded-md bg-[#211f27] px-3 py-1.5 text-[11px] font-medium text-neutral-200 sm:px-4 sm:py-2 sm:text-[12px] md:text-[13px]">
                  <span>Discount</span>
                  <span className="text-neutral-400" aria-hidden="true">~</span>
                  <span className="text-neutral-400 line-through">$18</span>
                </span>
              </div>
            </div>

            {/* Card Body: 2 Columns */}
            <div className="grid flex-1 grid-cols-1 md:grid-cols-2">
              {/* Left Column: Feature Checkpoints & Testimonial */}
              <div className="flex flex-col justify-between border-b border-neutral-100 p-4 pt-8 sm:p-6 sm:pt-12 md:border-b-0 md:border-r md:p-8 md:pt-16">
                <div>
                  <p className="text-[14px] font-bold text-neutral-900">
                    What&apos;s included:
                  </p>
                  <ul className="mt-6 space-y-3.5 text-[13px] text-neutral-700">
                    {[
                      'Unlimited active projects',
                      '24/7 dedicated customer support',
                      'Real-time data analytics',
                      'Integrated with 50+ platforms',
                      'Custom security & role controls',
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial Quote in card */}
                <div className="mt-8 rounded-2xl bg-neutral-50 p-4 border border-neutral-100">
                  <p className="text-[15px] font-bold tracking-tight text-neutral-900">
                    dokez.
                  </p>
                  <p className="mt-2 text-[12px] leading-relaxed text-neutral-500">
                    &ldquo;Otake transformed how our operations team delivers. Setup took less than 10 minutes.&rdquo;
                  </p>
                  <div className="mt-3 flex items-center gap-2.5">
                    <img
                      src="/images/e07579d072467e7af019063cb6ec6e26b735e97a.png"
                      alt="Jane Doe"
                      className="h-7 w-7 rounded-full object-cover ring-2 ring-white"
                    />
                    <div>
                      <p className="text-[11.5px] font-bold text-neutral-900">Jane Doe</p>
                      <p className="text-[10px] text-neutral-500">Founder, Dokez</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Checkout / Signup Form */}
              <div className="rounded-[18px] bg-[#FAFAFC] p-4 sm:rounded-[24px] sm:p-5 md:rounded-l-[24px] md:rounded-r-[36px] md:p-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-orange-100 text-orange-600">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[12px] font-bold text-neutral-900">Get Started</p>
                    <p className="text-[10px] text-neutral-500">Fill the details to begin your free trial</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-4 space-y-2.5">
                  <div>
                    <label htmlFor="pricing-name" className="text-[10px] font-medium text-neutral-600">
                      Full Name
                    </label>
                    <input
                      id="pricing-name"
                      name="name"
                      type="text"
                      placeholder="e.g. John Doe"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 h-9 w-full rounded-lg border border-neutral-200 bg-white px-2.5 text-[11.5px] text-neutral-900 placeholder-neutral-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="pricing-email" className="text-[10px] font-medium text-neutral-600">
                      Email Address
                    </label>
                    <input
                      id="pricing-email"
                      name="email"
                      type="email"
                      placeholder="e.g. name@company.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 h-9 w-full rounded-lg border border-neutral-200 bg-white px-2.5 text-[11.5px] text-neutral-900 placeholder-neutral-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="pricing-company" className="text-[10px] font-medium text-neutral-600">
                      Company Name
                    </label>
                    <input
                      id="pricing-company"
                      name="company"
                      type="text"
                      placeholder="e.g. Acme Corp"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1 h-9 w-full rounded-lg border border-neutral-200 bg-white px-2.5 text-[11.5px] text-neutral-900 placeholder-neutral-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="pricing-phone" className="text-[10px] font-medium text-neutral-600">
                      Phone Number
                    </label>
                    <input
                      id="pricing-phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g. +1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 h-9 w-full rounded-lg border border-neutral-200 bg-white px-2.5 text-[11.5px] text-neutral-900 placeholder-neutral-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-3 flex h-10 w-full items-center justify-center rounded-lg bg-neutral-900 text-[12px] font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
                  >
                    {submitted ? 'Starting Trial...' : 'Continue'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

          <p className="relative z-10 mx-auto mt-8 max-w-[480px] text-center text-[13px] leading-relaxed text-[#8B8A93]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
          </p>
        </div>
      </section>

      {/* ---------------- 2. PRINCIPLES & TRUSTED BY ---------------- */}
      <section className="otake-soft-purple w-full py-16 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1152px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            <div className="w-full rounded-[18px] border border-neutral-100 bg-white p-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-lg sm:h-[256.39px] sm:rounded-[22px] sm:p-7">
              <div className="flex justify-center">
                <img
                  src="/images/pricing-client-focused.png"
                  alt=""
                  aria-hidden="true"
                  className="h-[64px] w-[64px] object-contain sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <h3 className="mt-3 text-[22px] font-bold text-neutral-900 sm:mt-4 sm:text-[26px] md:text-[28px]">
                Client Focussed
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-black sm:mt-2.5 sm:text-[15px] md:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
              </p>
            </div>

            <div className="w-full rounded-[18px] border border-neutral-100 bg-white p-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-lg sm:h-[256.39px] sm:rounded-[22px] sm:p-7">
              <div className="flex justify-center">
                <img
                  src="/images/pricing-innovate-optimize.png"
                  alt=""
                  aria-hidden="true"
                  className="h-[64px] w-[64px] object-contain sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <h3 className="mt-3 text-[22px] font-bold text-neutral-900 sm:mt-4 sm:text-[26px] md:text-[28px]">
                Innovate & Optimize
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-black sm:mt-2.5 sm:text-[15px] md:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
              </p>
            </div>

            <div className="w-full rounded-[18px] border border-neutral-100 bg-white p-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-lg sm:col-span-2 sm:h-[256.39px] sm:justify-self-center sm:rounded-[22px] sm:p-7 lg:col-span-1">
              <div className="flex justify-center">
                <img
                  src="/images/pricing-community-driven.png"
                  alt=""
                  aria-hidden="true"
                  className="h-[64px] w-[64px] object-contain sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <h3 className="mt-3 text-[22px] font-bold text-neutral-900 sm:mt-4 sm:text-[26px] md:text-[28px]">
                Community Driven
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-black sm:mt-2.5 sm:text-[15px] md:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-[22px] font-bold text-neutral-900 sm:text-[26px]">
              Trusted by technical teams at companies of all sizes
            </h2>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-11 sm:gap-[88px]">
              <BrandLogo
                name="Cyrus"
                icon={
                  <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true">
                    <rect x="3" y="3" width="3" height="3" rx="0.5" fill="currentColor" />
                    <rect x="7.5" y="3" width="3" height="3" rx="0.5" fill="currentColor" />
                    <rect x="12" y="3" width="3" height="3" rx="0.5" fill="currentColor" />
                  </svg>
                }
              />
              <BrandLogo
                name="Jambo"
                icon={
                  <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true">
                    <path d="M7 5l3 4-3 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                  </svg>
                }
              />
              <BrandLogo
                name="Kadu"
                icon={
                  <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true">
                    <path d="M5 6l4-3v6l-4-3Z" fill="currentColor" />
                  </svg>
                }
              />
              <BrandLogo
                name="Vario"
                icon={
                  <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true">
                    <rect x="4" y="5" width="2" height="8" rx="1" fill="currentColor" />
                    <rect x="8" y="7" width="2" height="6" rx="1" fill="currentColor" />
                    <rect x="12" y="4" width="2" height="9" rx="1" fill="currentColor" />
                  </svg>
                }
              />
              <BrandLogo
                name="Aspect"
                icon={
                  <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true">
                    <circle cx="6" cy="9" r="2" fill="currentColor" />
                    <circle cx="12" cy="9" r="2" fill="currentColor" />
                  </svg>
                }
              />
            </div>

            <p className="mx-auto mt-8 max-w-[460px] text-[13px] leading-relaxed text-[#8B8A93]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
            </p>

            <div className="mt-6">
              <a
                href="#case-studies"
                className="inline-flex items-center rounded-lg bg-neutral-900 px-5 py-2.5 text-[12px] font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
              >
                Explore Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 4. FEATURE SPOTLIGHT: Create a product ---------------- */}
      <section className="otake-pricing-product-overview flex w-full items-center pt-48 pb-16 sm:pt-56 sm:pb-24 lg:min-h-[760px]">
        <div className="mx-auto max-w-[944px] px-4 sm:px-6 lg:px-8">
          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <img
              src="/images/solutions-cloud-decoration.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-[42%] top-[64%] z-10 hidden h-20 w-20 -translate-x-1/2 object-contain lg:block"
            />
            {/* Left Column: Copy */}
            <div>
              <span className="inline-block rounded-full border border-neutral-300 px-3 py-[4px] text-[10.5px] font-medium text-neutral-600">
                Product Features
              </span>

              <h2 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-neutral-400 sm:text-[42px] lg:text-[48px]">
                <span className="text-neutral-900">Create a product.</span>
                <br />
                <span className="text-neutral-900">It&apos;s</span> easy with Otake.
              </h2>

              <p className="mt-4 max-w-[500px] text-[15px] leading-relaxed text-neutral-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
                Nullam congue blandit quam, sit amet scelerisque turpis pellentesque eu.
              </p>

              <button
                type="button"
                className="mt-6 inline-flex rounded-lg bg-neutral-900 px-5 py-2.5 text-[12px] font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
              >
                Contact Us
              </button>

              <ul className="mt-6 space-y-2.5 text-[13px] text-neutral-700">
                <li className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white" aria-hidden="true">
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path d="m2.5 6 2.2 2.2L9.5 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Register users in seconds.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white" aria-hidden="true">
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path d="m2.5 6 2.2 2.2L9.5 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Collect authorization via secure portals.</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Product preview */}
            <div className="flex justify-center">
              <div className="w-full max-w-[420px]">
                <BrowserShell>
                  <img
                    src="/images/product-feature-preview.png"
                    alt="Otake product preview highlighting user experience and customization features"
                    className="mx-[-18px] block h-auto w-[calc(100%+36px)] max-w-none rounded-[18px]"
                  />
                </BrowserShell>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 5. GET STARTED CTA BANNER ---------------- */}
      <GetStarted />

      {/* ---------------- 6. FREQUENTLY ASKED QUESTIONS ---------------- */}
      <FAQ />
    </div>
  )
}

export default Pricing
