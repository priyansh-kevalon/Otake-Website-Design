function OtakeIconBadge() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Rounded Octagon Badge */}
      <div className="relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
        <svg
          viewBox="0 0 64 64"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Multi-stop smooth pastel gradient matching Otake brand mark */}
            <linearGradient id="otake-badge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA489" />
              <stop offset="30%" stopColor="#F472B6" />
              <stop offset="70%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>

            <linearGradient id="pebble-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F5F0FF" />
            </linearGradient>
          </defs>

          {/* Rounded octagon path */}
          <path
            d="M22 3.5 h20 a6 6 0 0 1 4.24 1.76 l13 13 A6 6 0 0 1 61 22.5 v19 a6 6 0 0 1 -1.76 4.24 l-13 13 A6 6 0 0 1 42 60.5 H22 a6 6 0 0 1 -4.24 -1.76 l-13 -13 A6 6 0 0 1 3 41.5 v-19 a6 6 0 0 1 1.76 -4.24 l13 -13 A6 6 0 0 1 22 3.5 Z"
            fill="url(#otake-badge-grad)"
          />

          {/* Inner smooth white Otake pebble / leaf glyph */}
          <path
            d="M26 21 c-3 0 -5 2 -5 5 v11 c0 6 5 10 11 10 h7 c6 0 9 -4 9 -10 v-7 c0 -6 -4 -9 -9 -9 h-8 c-1.5 0 -2.5 0 -5 0 Z"
            fill="url(#pebble-fill)"
            className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)]"
          />
        </svg>
      </div>
    </div>
  )
}

function FacetedMeshBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 800 420"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="card-inner-glow" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#1E1C27" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#111016" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0B0A0E" stopOpacity="1" />
        </radialGradient>
      </defs>

      {/* Base radial darkness */}
      <rect width="800" height="420" fill="url(#card-inner-glow)" />

      {/* Low-poly faceted triangles */}
      <polygon points="400,0 400,160 200,100" fill="#ffffff" fillOpacity="0.018" />
      <polygon points="400,0 600,100 400,160" fill="#ffffff" fillOpacity="0.026" />
      <polygon points="0,0 200,100 0,160" fill="#ffffff" fillOpacity="0.012" />
      <polygon points="800,0 600,100 800,160" fill="#ffffff" fillOpacity="0.02" />
      <polygon points="200,100 400,160 280,260" fill="#ffffff" fillOpacity="0.014" />
      <polygon points="600,100 520,260 400,160" fill="#ffffff" fillOpacity="0.024" />
      <polygon points="0,160 200,100 120,280" fill="#ffffff" fillOpacity="0.009" />
      <polygon points="800,160 600,100 680,280" fill="#ffffff" fillOpacity="0.016" />
      <polygon points="120,280 280,260 400,340" fill="#ffffff" fillOpacity="0.016" />
      <polygon points="680,280 400,340 520,260" fill="#ffffff" fillOpacity="0.01" />
      <polygon points="280,260 400,160 520,260 400,340" fill="#ffffff" fillOpacity="0.022" />
      <polygon points="0,160 120,280 0,420" fill="#ffffff" fillOpacity="0.013" />
      <polygon points="800,160 800,420 680,280" fill="#ffffff" fillOpacity="0.011" />
      <polygon points="120,280 400,340 240,420 0,420" fill="#ffffff" fillOpacity="0.008" />
      <polygon points="680,280 800,420 560,420 400,340" fill="#ffffff" fillOpacity="0.015" />
      <polygon points="400,340 240,420 560,420" fill="#ffffff" fillOpacity="0.02" />

      {/* Subtle crystal wireframe lines */}
      <line x1="400" y1="0" x2="400" y2="160" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="0" y1="0" x2="200" y2="100" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="800" y1="0" x2="600" y2="100" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="200" y1="100" x2="400" y2="160" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="600" y1="100" x2="400" y2="160" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="400" y1="160" x2="280" y2="260" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="400" y1="160" x2="520" y2="260" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="280" y1="260" x2="520" y2="260" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="280" y1="260" x2="400" y2="340" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="520" y1="260" x2="400" y2="340" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="0" y1="160" x2="200" y2="100" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="800" y1="160" x2="600" y2="100" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="120" y1="280" x2="280" y2="260" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="680" y1="280" x2="520" y2="260" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="400" y1="340" x2="240" y2="420" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="400" y1="340" x2="560" y2="420" stroke="#ffffff" strokeOpacity="0.04" />
    </svg>
  )
}

import { useState } from 'react'

function GetStarted() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    role: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('http://127.0.0.1:5000/api/template-applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setIsOpen(false)
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            companyName: '',
            website: '',
            role: '',
            message: '',
          })
        }, 3000)
      }
    } catch (error) {
      console.error('Error submitting application:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section id="try-for-free" className="relative w-full scroll-mt-6 bg-white px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="relative mx-auto w-full max-w-[840px]">
          {/* Top Floating Otake Badge (half above card) */}
          <div className="absolute -top-7 left-1/2 z-20 -translate-x-1/2 sm:-top-8">
            <OtakeIconBadge />
          </div>

          {/* Main Dark Card Container */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0B0A0E] px-6 pb-12 pt-16 text-center shadow-[0_24px_60px_-15px_rgba(0,0,0,0.5)] sm:rounded-[36px] sm:px-12 sm:pb-16 sm:pt-20">
            {/* Faceted Mesh Background */}
            <FacetedMeshBackground />

            {/* Card Content */}
            <div className="relative z-10 mx-auto max-w-[620px]">
              <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-white sm:text-[38px] md:text-[42px]">
                Get Started With Otake.
              </h2>

              <p className="mx-auto mt-3 max-w-[500px] text-[12.5px] leading-relaxed text-[#8B8A93] sm:mt-4 sm:text-[14px]">
                Explore a new realm of efficiency and success with our cutting-edge SaaS.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-[13px] font-semibold text-white sm:mt-7 sm:gap-x-3 sm:text-[14px]">
                <span>120 Employes</span>
                <span className="text-neutral-500" aria-hidden="true">
                  •
                </span>
                <span>$31.5M Raised</span>
                <span className="text-neutral-500" aria-hidden="true">
                  •
                </span>
                <span>7 Years old</span>
              </div>

              <div className="mt-7 sm:mt-8">
                <button
                  onClick={() => setIsOpen(true)}
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-[12px] font-medium tracking-tight text-[#111015] transition-all hover:bg-neutral-100 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
                >
                  Apply Now ~ Otake Template
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => !loading && setIsOpen(false)} />
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900">Apply for Otake Template</h3>
              <button
                onClick={() => !loading && setIsOpen(false)}
                className="text-neutral-500 hover:text-neutral-900"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            {submitted ? (
              <div className="px-6 py-10 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">Application Submitted!</h4>
                <p className="text-sm text-neutral-600">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
                <div>
                  <label className="text-sm font-medium text-neutral-700">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full h-10 px-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium text-neutral-700">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full h-10 px-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neutral-700">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full h-10 px-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-400"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium text-neutral-700">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="mt-1 w-full h-10 px-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neutral-700">Website</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://"
                      className="mt-1 w-full h-10 px-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-700">Role/Designation</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="mt-1 w-full h-10 px-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-700">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="mt-1 w-full px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-10 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default GetStarted
