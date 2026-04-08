import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Product', href: '#solution' },
  { label: 'Use Cases', href: '#usecases' },
  { label: 'About', href: '#why-blocksy' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#cta' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="flex items-center gap-2">
            <img src="/blocksy.svg" alt="Blocksy" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">Blocksy</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-green-600/25 hover:shadow-green-600/40 hover:-translate-y-0.5"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join the Waitlist
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => {
              const menu = document.getElementById('mobile-menu')
              if (menu) menu.classList.toggle('hidden')
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="hidden lg:hidden bg-white border-t">
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-base font-medium text-gray-600 hover:text-gray-900 py-2"
            >
              {item.label}
            </a>
          ))}
          <button
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all mt-4"
            onClick={() => {
              document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
              const menu = document.getElementById('mobile-menu')
              if (menu) menu.classList.add('hidden')
            }}
          >
            Join the Waitlist
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  )
}
