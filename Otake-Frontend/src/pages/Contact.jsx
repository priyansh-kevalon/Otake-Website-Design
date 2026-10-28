import { useState } from 'react'
import GetStarted from '../components/sections/GetStarted.jsx'
import FAQ from '../components/sections/FAQ.jsx'

function Message3DIcon() {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center">
      <span
        aria-hidden="true"
        className="absolute -bottom-2 h-4 w-12 rounded-full bg-indigo-950/20 blur-md"
      />
      <img
        src="/images/contact-message-illustration.png"
        alt=""
        aria-hidden="true"
        className="relative z-10 h-14 w-14 object-contain"
      />
    </div>
  )
}

function Phone3DIcon() {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center">
      <span
        aria-hidden="true"
        className="absolute -bottom-2 h-4 w-12 rounded-full bg-rose-950/20 blur-md"
      />
      <img
        src="/images/contact-phone-illustration.png"
        alt=""
        aria-hidden="true"
        className="relative z-10 h-14 w-14 object-contain"
      />
    </div>
  )
}

function Pin3DIcon() {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center">
      <span
        aria-hidden="true"
        className="absolute -bottom-2 h-4 w-12 rounded-full bg-amber-950/20 blur-md"
      />
      <img
        src="/images/contact-location-illustration.png"
        alt=""
        aria-hidden="true"
        className="relative z-10 h-14 w-14 object-contain"
      />
    </div>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Online Shopping Assistant',
    message: '',
    agreed: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || 'contact@otake.com'
  const supportPhone = import.meta.env.VITE_SUPPORT_PHONE || '+1 (555) 000-1234'
  const supportPhoneHref = `tel:${supportPhone.replace(/[^\d+]/g, '')}`

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'Online Shopping Assistant',
        message: '',
        agreed: false,
      })
    }, 4000)
  }

  return (
    <div className="w-full">
      {/* ---------------- 1. CONTACT HERO & CHANNEL CARDS ---------------- */}
      <section className="otake-contact-hero-gradient relative w-full pt-6 pb-12 sm:pt-16 sm:pb-20 lg:pt-24">
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-[680px] text-center">
            <span className="inline-block rounded-[4px] bg-[#FFE36A] px-3.5 py-1 text-[11px] font-semibold text-neutral-800">
              Contact Us
            </span>

            <h1 className="mt-5 text-[32px] font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-[42px] md:text-[48px]">
              Contact Our Team
            </h1>

            <p className="mx-auto mt-4 max-w-[480px] text-[13.5px] leading-relaxed text-neutral-900 sm:text-[14.5px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
            </p>

            {/* Checklist bullets */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] text-neutral-900 sm:text-[13px]">
              <span className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-white">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Register users in seconds.</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-white">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Collect authorization via secure.</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-white">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Custom security controls.</span>
              </span>
            </div>
          </div>

          {/* 3 Contact Channel Cards */}
          <div className="mx-auto mt-12 grid w-full max-w-[1152px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* Card 1: Message Us */}
            <div className="h-[302.39px] w-full max-w-[368px] rounded-[24px] border border-white/80 bg-white p-6 shadow-[0_16px_36px_rgba(150,130,200,0.08)] transition-all hover:-translate-y-1 hover:shadow-xl sm:p-7">
              <Message3DIcon />
              <h3 className="mt-5 text-[28px] font-bold text-neutral-900">
                Message Us
              </h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-[#8B8A93]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim.
              </p>
              <div className="mt-6">
                <a
                  href={`mailto:${supportEmail}`}
                  className="inline-flex min-h-[44px] items-center gap-2 py-1 text-[12.5px] font-semibold text-neutral-900 transition-colors hover:text-purple-600"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#9B83FF]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
                      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {supportEmail}
                </a>
              </div>
            </div>

            {/* Card 2: Call Us */}
            <div className="h-[302.39px] w-full max-w-[368px] rounded-[24px] border border-white/80 bg-white p-6 shadow-[0_16px_36px_rgba(150,130,200,0.08)] transition-all hover:-translate-y-1 hover:shadow-xl sm:p-7">
              <Phone3DIcon />
              <h3 className="mt-5 text-[28px] font-bold text-neutral-900">
                Call Us
              </h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-[#8B8A93]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim.
              </p>
              <div className="mt-6">
                <a
                  href={supportPhoneHref}
                  className="inline-flex min-h-[44px] items-center gap-2 py-1 text-[12.5px] font-semibold text-neutral-900 transition-colors hover:text-purple-600"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#9B83FF]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                      <path d="M7.2 3.8 9.5 3a1.7 1.7 0 0 1 2.1 1l1 2.5a1.7 1.7 0 0 1-.5 1.9l-1.4 1.1a14 14 0 0 0 4 4l1.1-1.4a1.7 1.7 0 0 1 1.9-.5l2.5 1a1.7 1.7 0 0 1 1 2.1l-.8 2.3a2.2 2.2 0 0 1-2.2 1.5C10.8 18.8 5.2 13.2 5.5 5.9a2.2 2.2 0 0 1 1.7-2.1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {supportPhone}
                </a>
              </div>
            </div>

            {/* Card 3: Address */}
            <div className="h-[302.39px] w-full max-w-[368px] rounded-[24px] border border-white/80 bg-white p-6 shadow-[0_16px_36px_rgba(150,130,200,0.08)] transition-all hover:-translate-y-1 hover:shadow-xl sm:p-7">
              <Pin3DIcon />
              <h3 className="mt-5 text-[28px] font-bold text-neutral-900">
                Address
              </h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-[#8B8A93]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim.
              </p>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-neutral-900">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#9B83FF]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                  Sydney, Australia 2000
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 2. MESSAGE FORM SECTION ---------------- */}
      <section className="relative w-full bg-white py-16 sm:py-24">
        {/* Ambient floating 3D elements on sides */}
        <div className="pointer-events-none absolute left-[calc(50%-440px)] top-1/3 z-10 hidden translate-y-16 xl:block">
          <img
            src="/images/contact-form-box.png"
            alt=""
            width="80"
            height="80"
            className="h-20 w-20 object-contain"
          />
        </div>
        <div className="pointer-events-none absolute right-[calc(50%-440px)] top-[58%] z-10 hidden translate-y-16 xl:block">
          <img
            src="/images/contact-form-vr-headset.png"
            alt=""
            width="80"
            height="80"
            className="h-20 w-20 object-contain"
          />
        </div>

        <div className="relative mx-auto max-w-[640px] px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block rounded-[4px] bg-[#FFE36A] px-3.5 py-1 text-[11px] font-semibold text-neutral-800">
              Contact Us
            </span>

            <h2 className="mt-4 text-[32px] font-bold tracking-tight text-neutral-900 sm:text-[40px]">
              Leave our team a message.
            </h2>

            <p className="mx-auto mt-3 max-w-[480px] text-[13px] leading-relaxed text-neutral-900 sm:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
              Nullam congue blandit quam, sit amet scelerisque.
            </p>
          </div>

          {/* The Contact Form */}
          <div className="relative mt-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 -top-28 -bottom-28 w-screen -translate-x-1/2"
              style={{
                backgroundImage:
                  'radial-gradient(ellipse 48% 62% at 50% 50%, rgba(229,210,254,0.95) 0%, rgba(238,223,254,0.8) 40%, rgba(247,240,255,0.42) 68%, rgba(255,255,255,0) 100%)',
              }}
            />
            <form onSubmit={handleSubmit} className="relative space-y-4">
            {/* First and Last Name */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="text-[11.5px] font-medium text-neutral-600">
                  First name
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-[13px] text-neutral-900 placeholder:text-neutral-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100"
                />
              </div>

              <div>
                <label htmlFor="last-name" className="text-[11.5px] font-medium text-neutral-600">
                  Last name
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-[13px] text-neutral-900 placeholder:text-neutral-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="text-[11.5px] font-medium text-neutral-600">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="hello@email.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-[13px] text-neutral-900 placeholder:text-neutral-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="contact-phone" className="text-[11.5px] font-medium text-neutral-600">
                Phone number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-[13px] text-neutral-900 placeholder:text-neutral-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100"
              />
            </div>

            {/* Select Service */}
            <div>
              <label htmlFor="contact-service" className="text-[11.5px] font-medium text-neutral-600">
                Select Service
              </label>
              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="mt-1 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-[13px] text-neutral-900 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100"
              >
                <option value="Online Shopping Assistant">Online Shopping Assistant</option>
                <option value="Automation & Workflows">Automation & Workflows</option>
                <option value="Data Analytics Suite">Data Analytics Suite</option>
                <option value="Enterprise Custom Solution">Enterprise Custom Solution</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="text-[11.5px] font-medium text-neutral-600">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Leave us a message..."
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-neutral-200 bg-white p-3.5 text-[13px] text-neutral-900 placeholder:text-neutral-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input
                id="contact-agreed"
                name="agreed"
                type="checkbox"
                required
                checked={formData.agreed}
                onChange={handleChange}
                className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-purple-400"
              />
              <label htmlFor="contact-agreed" className="text-[12px] text-neutral-600">
                I agree to our <a href="#privacy" className="inline-flex min-h-[24px] items-center underline hover:text-neutral-900">Terms &amp; Privacy</a>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-neutral-900 text-[13.5px] font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
              >
                {submitted ? 'Message Sent Successfully!' : 'Send Message'}
              </button>
            </div>
          </form>
          </div>
        </div>
      </section>

      {/* ---------------- 3. GET STARTED CTA BANNER ---------------- */}
      <GetStarted />

      {/* ---------------- 4. FREQUENTLY ASKED QUESTIONS ---------------- */}
      <FAQ />
    </div>
  )
}

export default Contact
