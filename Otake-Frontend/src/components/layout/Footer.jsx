import { useEffect, useRef, useState } from 'react'

const HIGHLIGHTS = [
  { key: 'innovation', title: 'INNOVATION', image: '/images/footer-innovation.png' },
  { key: 'cloud', title: 'CLOUD SECURE', image: '/images/footer-cloud-secure.png' },
  { key: 'growth', title: 'GROWTH DRIVEN', image: '/images/footer-growth-driven.png' },
]

const PAGE_LINKS = [
  { label: 'Home', href: '#home', page: 'home' },
  { label: 'About', href: '#about', page: 'about' },
  { label: 'Pricing', href: '#pricing', page: 'pricing' },
  { label: 'Contact', href: '#contact', page: 'contact', badge: true },
]

const SOLUTION_LINKS = [
  { label: 'Startup Support', href: '#solutions' },
  { label: 'Growth AI', href: '#growth', badge: true },
  { label: 'Business Support', href: '#features' },
  { label: 'Shipping', href: '#shipping' },
]

const RESOURCE_LINKS = [
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Get Started', href: '#try-for-free' },
  { label: 'Contact', href: '#contact', badge: true },
]

const SOCIAL_LINKS = [
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    path: null,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
]

function OtakeLogoWhite() {
  return (
    <a
      href="#top"
      className="inline-flex items-center gap-2.5 rounded text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
      aria-label="Otake — back to top"
    >
      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
        <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="ft-otake-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA489" />
              <stop offset="35%" stopColor="#F472B6" />
              <stop offset="70%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>
          <path
            d="M22 3.5 h20 a6 6 0 0 1 4.24 1.76 l13 13 A6 6 0 0 1 61 22.5 v19 a6 6 0 0 1 -1.76 4.24 l-13 13 A6 6 0 0 1 42 60.5 H22 a6 6 0 0 1 -4.24 -1.76 l-13 -13 A6 6 0 0 1 3 41.5 v-19 a6 6 0 0 1 1.76 -4.24 l13 -13 A6 6 0 0 1 22 3.5 Z"
            fill="url(#ft-otake-grad)"
          />
          <path
            d="M26 21 c-3 0 -5 2 -5 5 v11 c0 6 5 10 11 10 h7 c6 0 9 -4 9 -10 v-7 c0 -6 -4 -9 -9 -9 h-8 c-1.5 0 -2.5 0 -5 0 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
      <span className="text-[27px] font-bold tracking-tight text-white">
        Otake<span className="text-[11px] align-super font-normal text-[#8B8A93]">™</span>
      </span>
    </a>
  )
}

function PerspectiveWireframe() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 top-0 h-56 w-full"
      viewBox="0 0 1200 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="0" x2="250" y2="140" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="200" y1="0" x2="250" y2="140" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="400" y1="0" x2="600" y2="140" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="600" y1="0" x2="600" y2="140" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="800" y1="0" x2="600" y2="140" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="1000" y1="0" x2="950" y2="140" stroke="#ffffff" strokeOpacity="0.04" />
      <line x1="1200" y1="0" x2="950" y2="140" stroke="#ffffff" strokeOpacity="0.04" />

      <line x1="100" y1="70" x2="1100" y2="70" stroke="#ffffff" strokeOpacity="0.025" />
    </svg>
  )
}

function SectionDivider() {
  return (
    <div className="relative mx-auto my-8 flex w-full max-w-[1136px] items-center justify-center xl:my-14">
      <div className="h-[1px] flex-1 bg-white/[0.08]" />
      <span
        aria-hidden="true"
        className="absolute h-2 w-2 rounded-full bg-neutral-600 ring-2 ring-[#0B0A0F]"
      />
      <div className="h-[1px] flex-1 bg-white/[0.08]" />
    </div>
  )
}

function NewBadge() {
  return (
    <span className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-2.5 py-1 text-[11px] font-medium text-purple-200">
      <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(192,132,252,0.8)]" />
      New
    </span>
  )
}

function SocialIcon({ link }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={link.label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#8B8A93] transition-colors hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
    >
      {link.path ? (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={link.path} />
        </svg>
      ) : (
        <svg
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )}
    </a>
  )
}

function LinkColumn({ title, links, label, onNavigate }) {
  return (
    <nav aria-label={label}>
      <p className="text-[16px] font-semibold text-white">{title}</p>
      <ul className="mt-5 space-y-2 text-[15px]">
        {links.map((link) => (
          <li key={link.label} className="flex items-center">
            <a
              href={link.href}
              onClick={(e) => {
                if (link.page && onNavigate) {
                  e.preventDefault()
                  onNavigate(link.page)
                }
              }}
              className="inline-flex min-h-[26px] items-center text-[#8B8A93] transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
            >
              {link.label}
            </a>
            {link.badge && <NewBadge />}
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Footer({ onNavigate, isAboutPage = false }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const resetTimer = useRef(null)

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current)
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = email.trim()
    if (!value) return
    setStatus(`Thanks! We'll send your free trial details to ${value}.`)
    setEmail('')
    if (resetTimer.current) clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setStatus(''), 4000)
  }

  return (
    <footer
      id="contact"
      className={`w-full scroll-mt-6 pb-3 sm:pb-4 ${
        isAboutPage ? 'pt-0' : 'pt-12 sm:pt-16'
      }`}
    >
      <h2 className="sr-only">Otake footer</h2>

      <div className="otake-footer relative mx-auto w-[98%] rounded-[24px] border border-white/[0.08] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 xl:h-[988px] xl:pb-8 xl:pt-[140px]">
        <PerspectiveWireframe />

        {/* ---------------- 1. TOP TIER: 3 Feature Highlights ---------------- */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1136px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {HIGHLIGHTS.map((highlight, index) => (
            <div
              key={highlight.key}
              className={`flex flex-col items-center text-center ${
                index === HIGHLIGHTS.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <img
                src={highlight.image}
                alt=""
                aria-hidden="true"
                className="h-16 w-16 object-contain"
              />

              <h3 className="mt-6 text-[17px] font-bold tracking-wider text-white">
                {highlight.title}
              </h3>
              <p className="mt-3 max-w-[340px] text-[14px] leading-relaxed text-[#8B8A93]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim lacus.
              </p>
            </div>
          ))}
        </div>

        <SectionDivider />

        {/* ---------------- 2. SECOND TIER: Newsletter & Free Trial ---------------- */}
        <div className="relative z-10 mx-auto flex w-full max-w-[944px] flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-[520px]">
            <p className="text-[19px] font-semibold text-white">
              Subscribe to our newsletter for updates:
            </p>
            <p className="mt-2 text-[15px] text-[#8B8A93]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 lg:w-[360px]">
            <p className="text-[14.5px] font-medium text-[#B4B2BD]">
              30 Day Free Trial No Credit Card Required:
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-[560px] flex-col gap-2 rounded-2xl border border-white/[0.08] bg-[#14131A] p-2 focus-within:border-purple-400/60 sm:flex-row sm:items-center"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (status) setStatus('')
                }}
                required
                className="h-11 w-full min-w-0 bg-transparent px-3 text-[14px] text-white placeholder-neutral-400 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex h-11 w-full shrink-0 items-center justify-center rounded-xl bg-[#9585FF] px-6 text-[13.5px] font-medium tracking-tight text-white transition-colors hover:bg-[#8575F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 sm:w-auto"
              >
                Get Started – it&apos;s free
              </button>
            </form>
            <p className="min-h-[18px] text-[13px] text-[#8B8A93]" aria-live="polite">
              {status}
            </p>
          </div>
        </div>

        <SectionDivider />

        {/* ---------------- 3. THIRD TIER: Navigation Columns ---------------- */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1136px] grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <OtakeLogoWhite />

            <div className="mt-6 flex items-center gap-2 text-[#8B8A93]">
              {SOCIAL_LINKS.map((link) => (
                <SocialIcon key={link.label} link={link} />
              ))}
            </div>

            <p className="mt-6 max-w-[360px] text-[13.5px] leading-relaxed text-[#8B8A93]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula.
            </p>
          </div>

          <LinkColumn title="Pages" label="Footer pages" links={PAGE_LINKS} onNavigate={onNavigate} />
          <LinkColumn title="Solutions" label="Footer solutions" links={SOLUTION_LINKS} onNavigate={onNavigate} />
          <LinkColumn title="Resources" label="Footer resources" links={RESOURCE_LINKS} onNavigate={onNavigate} />
        </div>

        {/* ---------------- 4. BOTTOM TIER: Copyright & License ---------------- */}
        <div className="relative z-10 mx-auto mt-10 flex w-full max-w-[1136px] flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-[13px] text-[#8B8A93] sm:flex-row">
          <p>
            © Otake Template | Build by <span className="text-white">Flowbase</span> - Powered by{' '}
            <span className="text-white">Webflow</span>
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer
