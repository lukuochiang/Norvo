import { Heart, Layers, Users, Shield, FileText, ArrowRight } from 'lucide-react'

const footerColumns = [
  {
    title: 'Blocksy',
    content: 'A better way to connect local communities.',
    isLogo: true,
  },
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Use Cases', href: '#usecases' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#why-blocksy' },
      { label: 'Contact', href: '#cta' },
      { label: 'Waitlist', href: '#cta' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {footerColumns.map((column, index) => (
            <div key={index} className={index === 0 ? 'lg:col-span-2' : ''}>
              {column.isLogo ? (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <img src="/blocksy.svg" alt="Blocksy" className="w-8 h-8" />
                    <span className="text-xl font-bold text-white">{column.title}</span>
                  </div>
                  <p className="text-gray-400 max-w-xs">
                    {column.content}
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <Users className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <Layers className="w-5 h-5" />
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <h4 className="text-white font-semibold mb-4">{column.title}</h4>
                  <ul className="space-y-3">
                    {column.links?.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                        >
                          {link.label}
                          {link.label === 'Contact' && (
                            <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-1 transition-all" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Blocksy. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> for communities
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
