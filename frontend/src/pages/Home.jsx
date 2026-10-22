import Hero from '../components/sections/Hero.jsx'
import TrustedBrands from '../components/sections/TrustedBrands.jsx'
import ProductFeatures from '../components/sections/ProductFeatures.jsx'
import BusinessGrowth from '../components/sections/BusinessGrowth.jsx'
import PowerfulSolutions from '../components/sections/PowerfulSolutions.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import BlogArticles from '../components/sections/BlogArticles.jsx'
import FAQ from '../components/sections/FAQ.jsx'
import GetStarted from '../components/sections/GetStarted.jsx'
import Footer from '../components/layout/Footer.jsx'

function Home() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <ProductFeatures />
      <BusinessGrowth />
      <PowerfulSolutions />
      <Testimonials />
      <BlogArticles />
      <FAQ />
      <GetStarted />
      <Footer />
    </>
  )
}

export default Home
