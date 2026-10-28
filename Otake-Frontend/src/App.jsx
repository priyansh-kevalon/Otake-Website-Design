import { useState, useEffect } from 'react'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Pricing from './pages/Pricing.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg transition-all hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.toLowerCase()
    if (hash === '#about') return 'about'
    if (hash === '#pricing') return 'pricing'
    if (hash === '#contact') return 'contact'
    if (hash === '#login' || hash === '#signin') return 'login'
    if (hash === '#register' || hash === '#signup' || hash === '#try-for-free') return 'register'
    return 'home'
  })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase()
      if (hash === '#about') {
        setCurrentPage('about')
        setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0)
      } else if (hash === '#pricing') {
        setCurrentPage('pricing')
        setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0)
      } else if (hash === '#contact') {
        setCurrentPage('contact')
        setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0)
      } else if (hash === '#login' || hash === '#signin') {
        setCurrentPage('login')
        setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0)
      } else if (hash === '#register' || hash === '#signup' || hash === '#try-for-free') {
        setCurrentPage('register')
        setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0)
      } else if (hash === '#home' || hash === '#top' || !hash) {
        setCurrentPage('home')
        setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.location.hash = page === 'home' ? '#home' : `#${page}`
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, 0)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main id="main-content">
        {currentPage === 'about' && <About />}
        {currentPage === 'pricing' && <Pricing />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'login' && <Login onNavigate={handleNavigate} />}
        {currentPage === 'register' && <Register onNavigate={handleNavigate} />}
        {currentPage === 'home' && <Home />}
      </main>
      <Footer onNavigate={handleNavigate} isAboutPage={currentPage === 'about'} />
      <BackToTopButton />
    </div>
  )
}

export default App

