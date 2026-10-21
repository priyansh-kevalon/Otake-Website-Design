import { useState } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

function Logo() {
  return (
    <a
      href="#top"
      className="flex items-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
      aria-label="Otake home"
    >
      <img
        src="/images/otake-logo.png"
        alt="Otake"
        className="h-5 w-auto"
      />
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="mt-6 w-full bg-white text-neutral-900">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-11 max-w-[1440px] items-center justify-between px-4"
      >
        <Logo />

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="rounded text-[12px] font-semibold tracking-wide text-neutral-700 transition-colors hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="#signin"
            className="rounded text-[12px] text-neutral-500 transition-colors hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
          >
            Sign In
          </a>
          <a
            href="#try-for-free"
            className="inline-flex h-9 items-center rounded-md bg-neutral-900 px-4 text-[12px] font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
          >
            Try for Free
          </a>
        </div>

        <button
          type="button"
          className="rounded p-1 text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 md:hidden"
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
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded py-2 text-[13px] text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#signin"
                className="block rounded py-2 text-[13px] text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </a>
            </li>
            <li className="py-2">
              <a
                href="#try-for-free"
                className="inline-flex h-9 items-center rounded-md bg-neutral-900 px-4 text-[13px] font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                onClick={() => setMenuOpen(false)}
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
