import Header from './components/layout/Header.jsx'
import Hero from './components/sections/Hero.jsx'
import TrustedBrands from './components/sections/TrustedBrands.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustedBrands />
      </main>
    </div>
  )
}

export default App
