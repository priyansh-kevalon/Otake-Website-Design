import { useState, useEffect } from 'react'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash.toLowerCase() === '#about' ? 'about' : 'home'
  })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase()
      if (hash === '#about') {
        setCurrentPage('about')
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
    window.location.hash = page === 'about' ? '#about' : '#home'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main id="main-content">
        {currentPage === 'about' ? <About /> : <Home />}
      </main>
      <Footer onNavigate={handleNavigate} />

      {/* Floating Fast Page Switcher for quick testing/preview */}
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
      </aside>
    </div>
  )
}

export default App
