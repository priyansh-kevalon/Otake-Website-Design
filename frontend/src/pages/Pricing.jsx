import { useState } from 'react'
import OtakeProductPreview from '../components/ui/OtakeProductPreview.jsx'
import GetStarted from '../components/sections/GetStarted.jsx'
import FAQ from '../components/sections/FAQ.jsx'

function PinkGemIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="pr-gem-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FED7AA" />
          <stop offset="40%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>
        <linearGradient id="pr-gem-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFF1F2" />
          <stop offset="100%" stopColor="#FECDD3" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="54" rx="16" ry="4" fill="#9F1239" opacity="0.15" />
      <path d="M22 16h20l12 14-22 22-22-22 12-14Z" fill="url(#pr-gem-a)" />
      <path d="M22 16l10 14 10-14H22Z" fill="url(#pr-gem-top)" />
      <path d="M10 30l12-14 10 14-22 0Z" fill="#FDA4AF" opacity="0.6" />
      <path d="M54 30l-12-14-10 14 22 0Z" fill="#F43F5E" opacity="0.7" />
      <path d="M32 52L22 30h20L32 52Z" fill="#BE123C" opacity="0.8" />
      <circle cx="28" cy="22" r="2" fill="#FFFFFF" opacity="0.8" />
    </svg>
  )
}

function CoralOrangeIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="pr-co-grad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FED7AA" />
          <stop offset="40%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#EA580C" />
        </radialGradient>
      </defs>
      <ellipse cx="32" cy="54" rx="16" ry="4" fill="#7C2D12" opacity="0.16" />
      <circle cx="25" cy="38" r="8" fill="url(#pr-co-grad)" />
      <circle cx="39" cy="38" r="8" fill="url(#pr-co-grad)" />
      <circle cx="20" cy="28" r="7.5" fill="url(#pr-co-grad)" />
      <circle cx="44" cy="28" r="7.5" fill="url(#pr-co-grad)" />
      <circle cx="26" cy="20" r="8" fill="url(#pr-co-grad)" />
      <circle cx="38" cy="20" r="8" fill="url(#pr-co-grad)" />
      <circle cx="32" cy="27" r="9.5" fill="url(#pr-co-grad)" />
      <circle cx="30" cy="24" r="2.2" fill="#FFFFFF" opacity="0.7" />
    </svg>
  )
}

function PastelShellIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="pr-shell-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="35%" stopColor="#F472B6" />
          <stop offset="70%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="54" rx="16" ry="4" fill="#4C1D95" opacity="0.14" />
      <path
        d="M20 44c-5-5-5-14 0-19 5-5 14-5 19 0l7 7c3 3 3 8 0 11-3 3-8 3-11 0l-4-4c-1-1-1-3 0-4 1-1 3-1 4 0l2 2"
        stroke="url(#pr-shell-grad)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="30" cy="26" r="2.5" fill="#FFFFFF" opacity="0.8" />
    </svg>
  )
}

function BrandLogo({ name, icon }) {
  return (
    <div className="flex items-center gap-2 text-neutral-800">
      <span className="text-neutral-900">{icon}</span>
      <span className="text-[17px] font-bold tracking-tight text-neutral-900">{name}</span>
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
      <section className="otake-about-hero relative w-full pt-8 pb-16 sm:pt-12 sm:pb-20">
        <div className="relative mx-auto max-w-[1080px] px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-[680px] text-center">
            {/* Ambient decorative 3D accents */}
            <span
              className="pointer-events-none absolute -left-8 top-1 hidden select-none drop-shadow sm:block"
              aria-hidden="true"
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <circle cx="17" cy="17" r="14" fill="#FB923C" />
                <circle cx="14" cy="13" r="3.5" fill="#FFFFFF" opacity="0.6" />
              </svg>
            </span>
            <span
              className="pointer-events-none absolute -right-8 top-12 hidden select-none drop-shadow sm:block"
              aria-hidden="true"
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M15 2L18 10L26 12L20 18L21 26L15 22L9 26L10 18L4 12L12 10L15 2Z" fill="#C084FC" />
              </svg>
            </span>

            <span className="inline-block rounded-full bg-[#FFE36A] px-3.5 py-1 text-[11px] font-semibold text-neutral-800">
              Pricing Plan
            </span>

            <h1 className="mt-5 text-[32px] font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-[42px] md:text-[48px]">
              Pricing To Suit All
              <br />
              Business Sizes
            </h1>

            <p className="mx-auto mt-4 max-w-[480px] text-[13.5px] leading-relaxed text-[#8B8A93] sm:text-[14.5px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br className="hidden sm:inline" /> Vivamus non enim lacus.
            </p>

            {/* Monthly / Yearly Billing Toggle */}
            <div className="mt-8 inline-flex items-center rounded-full border border-neutral-200/90 bg-white/80 p-1 shadow-sm backdrop-blur-sm">
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
          <div className="mx-auto mt-12 max-w-[840px] overflow-hidden rounded-[28px] border border-neutral-200/80 bg-white shadow-[0_24px_60px_rgba(150,130,200,0.16)] sm:rounded-[36px]">
            {/* Dark Top Bar */}
            <div className="flex flex-col justify-between gap-6 bg-[#0D0C10] p-6 text-white sm:flex-row sm:items-center sm:p-8">
              <div>
                <p className="text-[11.5px] font-semibold uppercase tracking-wider text-neutral-400">
                  Starter Plan
                </p>
                <div className="mt-1.5 flex items-baseline gap-1.5">
                  <span className="text-[36px] font-bold tracking-tight text-white sm:text-[42px]">
                    {price}
                  </span>
                  <span className="text-[15px] font-medium text-neutral-400">/mo</span>
                </div>
                <p className="mt-1 text-[12px] text-neutral-400">
                  {savings}
                </p>
              </div>

              <div className="sm:max-w-[280px]">
                <p className="text-[13px] leading-relaxed text-neutral-300">
                  For small teams and growing businesses who need powerful automation tools.
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-block rounded-full border border-neutral-700 bg-neutral-800/90 px-3.5 py-1 text-[11px] font-semibold text-neutral-200">
                  Popular Plan
                </span>
              </div>
            </div>

            {/* Card Body: 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column: Feature Checkpoints & Testimonial */}
              <div className="flex flex-col justify-between border-b border-neutral-100 p-6 sm:p-8 md:border-b-0 md:border-r">
                <div>
                  <p className="text-[14px] font-bold text-neutral-900">
                    What&apos;s included:
                  </p>
                  <ul className="mt-4 space-y-3.5 text-[13px] text-neutral-700">
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
              <div className="bg-[#FAFAFC] p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-neutral-900">Get Started</p>
                    <p className="text-[11px] text-neutral-500">Fill the details to begin your free trial</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                  <div>
                    <label htmlFor="pricing-name" className="text-[11px] font-medium text-neutral-600">
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
                      className="mt-1 h-10 w-full rounded-xl border border-neutral-200 bg-white px-3 text-[12.5px] text-neutral-900 placeholder-neutral-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="pricing-email" className="text-[11px] font-medium text-neutral-600">
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
                      className="mt-1 h-10 w-full rounded-xl border border-neutral-200 bg-white px-3 text-[12.5px] text-neutral-900 placeholder-neutral-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="pricing-company" className="text-[11px] font-medium text-neutral-600">
                      Company Name
                    </label>
                    <input
                      id="pricing-company"
                      name="company"
                      type="text"
                      placeholder="e.g. Acme Corp"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1 h-10 w-full rounded-xl border border-neutral-200 bg-white px-3 text-[12.5px] text-neutral-900 placeholder-neutral-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="pricing-phone" className="text-[11px] font-medium text-neutral-600">
                      Phone Number
                    </label>
                    <input
                      id="pricing-phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g. +1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 h-10 w-full rounded-xl border border-neutral-200 bg-white px-3 text-[12.5px] text-neutral-900 placeholder-neutral-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 flex h-11 w-full items-center justify-center rounded-xl bg-neutral-900 text-[13px] font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
                  >
                    {submitted ? 'Starting Trial...' : 'Continue'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-[480px] text-center text-[13px] leading-relaxed text-[#8B8A93]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
          </p>
        </div>
      </section>

      {/* ---------------- 2. 3 PRINCIPLES CARDS ---------------- */}
      <section className="w-full bg-[#FAFAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-[1040px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-[22px] border border-neutral-100 bg-white p-7 text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-lg">
              <div className="flex justify-center">
                <PinkGemIcon />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-neutral-900">
                Client Focussed
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-[#8B8A93]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
                Nullam congue blandit quam.
              </p>
            </div>

            <div className="rounded-[22px] border border-neutral-100 bg-white p-7 text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-lg">
              <div className="flex justify-center">
                <CoralOrangeIcon />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-neutral-900">
                Innovate & Optimize
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-[#8B8A93]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
                Nullam congue blandit quam.
              </p>
            </div>

            <div className="rounded-[22px] border border-neutral-100 bg-white p-7 text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-lg">
              <div className="flex justify-center">
                <PastelShellIcon />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-neutral-900">
                Community Driven
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-[#8B8A93]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
                Nullam congue blandit quam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. TRUSTED BY TECHNICAL TEAMS ---------------- */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1040px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-[22px] font-bold text-neutral-900 sm:text-[26px]">
            Trusted by technical teams at companies of all sizes
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
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
      </section>

      {/* ---------------- 4. FEATURE SPOTLIGHT: Create a product ---------------- */}
      <section className="w-full bg-[#FAFAFC] py-16 sm:py-24">
        <div className="mx-auto max-w-[1040px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
            {/* Left Column: Copy */}
            <div>
              <span className="inline-block rounded-full border border-neutral-300 px-3 py-[4px] text-[10.5px] font-medium text-neutral-600">
                Product Overview
              </span>

              <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-tight text-neutral-900 sm:text-[36px]">
                Create a product.
                <br />
                <span className="text-neutral-400">It&apos;s easy with Otake.</span>
              </h2>

              <p className="mt-4 max-w-[460px] text-[13.5px] leading-relaxed text-[#8B8A93]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
                Nullam congue blandit quam, sit amet scelerisque turpis pellentesque eu.
              </p>

              <button
                type="button"
                className="mt-6 inline-flex rounded-lg bg-neutral-900 px-5 py-2.5 text-[12px] font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
              >
                Find Out More
              </button>

              <ul className="mt-6 space-y-2.5 text-[13px] text-neutral-700">
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                  <span>Register users in seconds.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                  <span>Collect authorization via secure portals.</span>
                </li>
              </ul>
            </div>

            {/* Right Column: BrowserShell with OtakeProductPreview */}
            <div className="flex justify-center">
              <div className="w-full max-w-[360px] drop-shadow-xl">
                <OtakeProductPreview />
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
