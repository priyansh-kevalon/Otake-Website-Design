import Header from './components/layout/Header.jsx'
import Hero from './components/sections/Hero.jsx'
import TrustedBrands from './components/sections/TrustedBrands.jsx'
import ProductFeatures from './components/sections/ProductFeatures.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustedBrands />
        <ProductFeatures />
      </main>
    </div>
  )
}

export default App
