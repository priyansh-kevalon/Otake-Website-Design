import { useState, useEffect } from 'react'

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
  const [user, setUser] = useState(null)
  const [profileOpen, setProfileOpen] = useState(false)

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem('otake_site_user')
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser))
        } catch (e) {
          setUser(null)
        }
      } else {
        setUser(null)
      }
    }
    checkUser()
    window.addEventListener('storage', checkUser)
    return () => window.removeEventListener('storage', checkUser)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('otake_site_token')
    localStorage.removeItem('otake_site_user')
    setUser(null)
    setProfileOpen(false)
    setMenuOpen(false)
    if (onNavigate) onNavigate('home')
  }

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
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-2 py-1 pr-3 text-[12px] font-medium text-neutral-800 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
              >
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center text-xs font-semibold">
                  {user.firstName?.[0]}{user.lastName?.[0]}
                </div>
                <span>{user.firstName} {user.lastName}</span>
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-neutral-200 bg-white shadow-lg overflow-hidden z-50">
                  <div className="px-4 py-3 border-b border-neutral-100">
                    <p className="text-sm font-medium text-neutral-900 truncate">{user.firstName} {user.lastName}</p>
                    <p className="text-xs text-neutral-500 truncate">{user.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      setProfileOpen(false)
                      if (onNavigate) onNavigate('profile')
                      window.location.hash = '#profile'
                    }}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    My Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
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
            </>
          )}
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
            {user ? (
              <>
                <li className="py-3 border-t border-neutral-100 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center text-xs font-semibold">
                      {user.firstName?.[0]}{user.lastName?.[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{user.firstName} {user.lastName}</p>
                      <p className="text-xs text-neutral-500">{user.email}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setMenuOpen(false)
                      if (onNavigate) onNavigate('profile')
                      window.location.hash = '#profile'
                    }}
                    className="w-full text-left block rounded py-3 text-[13px] text-neutral-600 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                  >
                    My Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block rounded py-3 text-[13px] text-neutral-600 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
