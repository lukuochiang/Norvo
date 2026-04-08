import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import ProductPreview from './components/ProductPreview'
import UseCases from './components/UseCases'
import WhyBlocksy from './components/WhyBlocksy'
import SocialProof from './components/SocialProof'
import FinalCTA from './components/FinalCTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <Features />
          <ProductPreview />
          <UseCases />
          <WhyBlocksy />
          <SocialProof />
          <FinalCTA />
          <FAQ />
        </main>
        <Footer />
      </div>
  )
}

export default App
