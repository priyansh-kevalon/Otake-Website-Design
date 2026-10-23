import { useEffect, useRef, useState } from 'react'

const HIGHLIGHTS = [
  { key: 'innovation', title: 'INNOVATION' },
  { key: 'cloud', title: 'CLOUD SECURE' },
  { key: 'growth', title: 'GROWTH DRIVEN' },
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

function Innovation3DIcon() {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center">
      <span
        aria-hidden="true"
        className="absolute -bottom-3 h-5 w-16 rounded-full bg-orange-950/60 blur-md"
      />
      <svg
        width="80"
        height="80"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="relative z-10"
      >
        <defs>
          <radialGradient id="inno-sphere-1" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="35%" stopColor="#FF7043" />
            <stop offset="100%" stopColor="#BF360C" />
          </radialGradient>
          <radialGradient id="inno-sphere-2" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFD54F" />
            <stop offset="40%" stopColor="#FF8A65" />
            <stop offset="100%" stopColor="#D84315" />
          </radialGradient>
        </defs>

        <circle cx="24" cy="38" r="9" fill="url(#inno-sphere-1)" />
        <circle cx="40" cy="38" r="9" fill="url(#inno-sphere-1)" />
        <circle cx="32" cy="42" r="8" fill="url(#inno-sphere-1)" />

        <circle cx="18" cy="28" r="8.5" fill="url(#inno-sphere-2)" />
        <circle cx="46" cy="28" r="8.5" fill="url(#inno-sphere-2)" />
        <circle cx="25" cy="20" r="9" fill="url(#inno-sphere-1)" />
        <circle cx="39" cy="20" r="9" fill="url(#inno-sphere-1)" />
        <circle cx="32" cy="15" r="7.5" fill="url(#inno-sphere-2)" />

        <circle cx="32" cy="28" r="11" fill="url(#inno-sphere-1)" />

        <circle cx="30" cy="24" r="2.5" fill="#FFFFFF" opacity="0.65" />
        <circle cx="23" cy="18" r="1.8" fill="#FFFFFF" opacity="0.5" />
        <circle cx="38" cy="18" r="1.8" fill="#FFFFFF" opacity="0.5" />
      </svg>
    </div>
  )
}

function CloudSecure3DIcon() {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center">
      <span
        aria-hidden="true"
        className="absolute -bottom-3 h-5 w-16 rounded-full bg-violet-950/70 blur-md"
      />
      <svg
        width="80"
        height="80"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="relative z-10"
      >
        <defs>
          <linearGradient id="cloud-pill-a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#EDE9FE" />
            <stop offset="100%" stopColor="#C4B5FD" />
          </linearGradient>
          <linearGradient id="cloud-pill-b" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E0E7FF" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>
        </defs>

        <path
          d="M16 42c-4 0-8 3-8 7s4 7 8 7h32c4 0 8-3 8-7s-4-7-8-7H16Z"
          fill="url(#cloud-pill-b)"
          opacity="0.85"
        />
        <path
          d="M14 34c-4.5 0-8 3.5-8 8s3.5 8 8 8h36c4.5 0 8-3.5 8-8s-3.5-8-8-8H14Z"
          fill="url(#cloud-pill-a)"
        />

        <circle cx="25" cy="25" r="9" fill="url(#cloud-pill-a)" />
        <circle cx="38" cy="23" r="11" fill="url(#cloud-pill-a)" />
        <circle cx="48" cy="30" r="7.5" fill="url(#cloud-pill-a)" />

        <ellipse cx="36" cy="18" rx="4.5" ry="2" fill="#FFFFFF" opacity="0.8" />
      </svg>
    </div>
  )
}

function GrowthDriven3DIcon() {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center">
      <span
        aria-hidden="true"
        className="absolute -bottom-3 h-5 w-16 rounded-full bg-amber-950/60 blur-md"
      />
      <svg
        width="80"
        height="80"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="relative z-10"
      >
        <defs>
          <linearGradient id="growth-gold-1" x1="0.2" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#FFF59D" />
            <stop offset="45%" stopColor="#FFCA28" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>
          <linearGradient id="growth-gold-2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="50%" stopColor="#FFB300" />
            <stop offset="100%" stopColor="#EF6C00" />
          </linearGradient>
        </defs>

        <rect x="18" y="28" width="10" height="22" rx="5" fill="url(#growth-gold-1)" />
        <rect x="36" y="24" width="10" height="26" rx="5" fill="url(#growth-gold-1)" />
        <rect x="27" y="14" width="11" height="36" rx="5.5" fill="url(#growth-gold-2)" />

        <circle cx="32.5" cy="18" r="2.2" fill="#FFFFFF" opacity="0.75" />
        <circle cx="23" cy="32" r="1.6" fill="#FFFFFF" opacity="0.6" />
        <circle cx="41" cy="28" r="1.6" fill="#FFFFFF" opacity="0.6" />
      </svg>
    </div>
  )
}

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
    <div className="relative my-8 flex items-center justify-center">
      <div className="h-[1px] w-full bg-white/[0.08]" />
      <span
        aria-hidden="true"
        className="absolute h-2 w-2 rounded-full bg-neutral-600 ring-2 ring-[#0B0A0F]"
      />
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

function Footer({ onNavigate }) {
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
    <footer id="contact" className="w-full scroll-mt-6 pb-3 pt-4 sm:pb-4">
      <h2 className="sr-only">Otake footer</h2>

      <div className="otake-footer relative mx-auto w-[98%] rounded-[28px] border border-white/[0.08] px-6 py-10 sm:rounded-[36px] sm:px-10 sm:py-14 lg:px-16">
        <PerspectiveWireframe />

        {/* ---------------- 1. TOP TIER: 3 Feature Highlights ---------------- */}
        <div className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {HIGHLIGHTS.map((highlight, index) => (
            <div
              key={highlight.key}
              className={`flex flex-col items-center text-center ${
                index === HIGHLIGHTS.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {highlight.key === 'innovation' && <Innovation3DIcon />}
              {highlight.key === 'cloud' && <CloudSecure3DIcon />}
              {highlight.key === 'growth' && <GrowthDriven3DIcon />}

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
        <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-[520px]">
            <p className="text-[19px] font-semibold text-white">
              Subscribe to our newsletter for updates:
            </p>
            <p className="mt-2 text-[15px] text-[#8B8A93]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
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
        <div className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-3">
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
        <div className="relative z-10 mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-[13px] text-[#8B8A93] sm:flex-row">
          <p>
            © Otake Template | Build by <span className="text-white">Flowbase</span> - Powered by{' '}
            <span className="text-white">Webflow</span>
          </p>

          <a
            href="#top"
            className="inline-flex min-h-[26px] items-center gap-2 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
