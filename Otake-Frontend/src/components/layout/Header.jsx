import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', page: 'home', href: '#home' },
  { label: 'About', page: 'about', href: '#about' },
  { label: 'Pricing', page: 'pricing', href: '#pricing' },
  { label: 'Contact', page: 'contact', href: '#contact' },
]

function Logo({ onNavigate }) {
  return (
    <a
      href="#home"
      onClick={(e) => {
        if (onNavigate) {
          e.preventDefault()
          onNavigate('home')
        }
      }}
      className="flex h-12 items-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
      aria-label="Otake home"
    >
      <img
        src="/images/otake-logo.png"
        alt="Otake"
        className="h-7 w-auto"
      />
    </a>
  )
}

function Header({ currentPage = 'home', onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = (e, link) => {
    if (link.page && onNavigate) {
      e.preventDefault()
      onNavigate(link.page)
    }
    setMenuOpen(false)
  }

  return (
    <header className="mt-6 w-full bg-white text-neutral-900">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-11 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Logo onNavigate={onNavigate} />

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = link.page && currentPage === link.page
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`rounded py-2 text-[12px] font-semibold tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${
                    isActive
                      ? 'text-neutral-900 underline decoration-pink-400 decoration-2 underline-offset-4'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="#login"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate('login')
              }
            }}
            className={`rounded py-2 text-[12px] tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${
              currentPage === 'login'
                ? 'font-bold text-neutral-900 underline decoration-pink-400 decoration-2 underline-offset-4'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Sign In
          </a>
          <a
            href="#register"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate('register')
              }
            }}
            className={`inline-flex h-9 items-center rounded-md px-4 text-[12px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${
              currentPage === 'register'
                ? 'bg-neutral-800 text-white ring-2 ring-purple-400'
                : 'bg-neutral-900 text-white hover:bg-neutral-800'
            }`}
          >
            Try for Free
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-nav" className="border-t border-neutral-200 md:hidden">
          <ul className="flex flex-col px-4 py-2">
            {NAV_LINKS.map((link) => {
              const isActive = link.page && currentPage === link.page
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`block rounded py-3 text-[13px] focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${
                      isActive
                        ? 'font-bold text-neutral-900'
                        : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                    onClick={(e) => handleLinkClick(e, link)}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
            <li>
              <a
                href="#login"
                className={`block rounded py-3 text-[13px] focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${
                  currentPage === 'login' ? 'font-bold text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  if (onNavigate) onNavigate('login')
                  setMenuOpen(false)
                }}
              >
                Sign In
              </a>
            </li>
            <li className="py-2">
              <a
                href="#register"
                className="inline-flex h-11 items-center rounded-md bg-neutral-900 px-4 text-[13px] font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                onClick={(e) => {
                  e.preventDefault()
                  if (onNavigate) onNavigate('register')
                  setMenuOpen(false)
                }}
              >
                Try for Free
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
