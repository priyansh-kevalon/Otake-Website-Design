import Header from './components/layout/Header.jsx'
import Hero from './components/sections/Hero.jsx'
import TrustedBrands from './components/sections/TrustedBrands.jsx'
import ProductFeatures from './components/sections/ProductFeatures.jsx'
import BusinessGrowth from './components/sections/BusinessGrowth.jsx'
import PowerfulSolutions from './components/sections/PowerfulSolutions.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import BlogArticles from './components/sections/BlogArticles.jsx'
import GetStarted from './components/sections/GetStarted.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustedBrands />
        <ProductFeatures />
        <BusinessGrowth />
        <PowerfulSolutions />
        <Testimonials />
        <BlogArticles />
        <GetStarted />
      </main>
    </div>
  )
}

export default App
