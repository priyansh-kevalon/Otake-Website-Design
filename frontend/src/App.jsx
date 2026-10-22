import { useState, useEffect } from 'react'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Pricing from './pages/Pricing.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

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
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#pricing') {
        setCurrentPage('pricing')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#contact') {
        setCurrentPage('contact')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#login' || hash === '#signin') {
        setCurrentPage('login')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#register' || hash === '#signup' || hash === '#try-for-free') {
        setCurrentPage('register')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#home' || hash === '#top' || !hash) {
        setCurrentPage('home')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.location.hash = page === 'home' ? '#home' : `#${page}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
      <Footer onNavigate={handleNavigate} />

      {/* Floating Fast Page Switcher for quick previewing */}
      <aside
        aria-label="Page switcher"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-1.5 rounded-full border border-neutral-200/90 bg-white/95 px-3 py-1.5 text-[11.5px] font-medium text-neutral-800 shadow-xl backdrop-blur-md"
      >
        <span className="text-[10px] uppercase tracking-wider text-neutral-400">Page:</span>
        <button
          type="button"
          onClick={() => handleNavigate('home')}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            currentPage === 'home'
              ? 'bg-neutral-900 font-semibold text-white'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('about')}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            currentPage === 'about'
              ? 'bg-neutral-900 font-semibold text-white'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          About
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('pricing')}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            currentPage === 'pricing'
              ? 'bg-neutral-900 font-semibold text-white'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          Pricing
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('contact')}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            currentPage === 'contact'
              ? 'bg-neutral-900 font-semibold text-white'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          Contact
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('login')}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            currentPage === 'login'
              ? 'bg-neutral-900 font-semibold text-white'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('register')}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            currentPage === 'register'
              ? 'bg-neutral-900 font-semibold text-white'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          Register
        </button>
      </aside>
    </div>
  )
}

export default App

