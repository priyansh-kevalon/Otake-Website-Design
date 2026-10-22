import Header from './components/layout/Header.jsx'
import Hero from './components/sections/Hero.jsx'
import TrustedBrands from './components/sections/TrustedBrands.jsx'
import ProductFeatures from './components/sections/ProductFeatures.jsx'
import BusinessGrowth from './components/sections/BusinessGrowth.jsx'
import PowerfulSolutions from './components/sections/PowerfulSolutions.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import BlogArticles from './components/sections/BlogArticles.jsx'
import FAQ from './components/sections/FAQ.jsx'
import GetStarted from './components/sections/GetStarted.jsx'
import Footer from './components/layout/Footer.jsx'

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
        <FAQ />
        <GetStarted />
      </main>
      <Footer />
    </div>
  )
}

export default App
