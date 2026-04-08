import { ArrowRight, Mail } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="cta" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Bring Blocksy to your community.
            </h2>
            
            <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto">
              Join the waitlist, request early access, or get in touch to explore how Blocksy 
              can support your local community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-green-50 text-green-600 font-bold rounded-full transition-all shadow-xl hover:-translate-y-1"
                onClick={() => {
                  const modal = document.getElementById('waitlist-modal')
                  if (modal) modal.classList.remove('hidden')
                }}
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-full border-2 border-white/50 hover:border-white transition-all"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      <div
        id="waitlist-modal"
        className="hidden fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => {
            const modal = document.getElementById('waitlist-modal')
            if (modal) modal.classList.add('hidden')
          }}
        />
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 max-h-[90vh] overflow-y-auto">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            onClick={() => {
              const modal = document.getElementById('waitlist-modal')
              if (modal) modal.classList.add('hidden')
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Join the Blocksy waitlist
            </h3>
            <p className="text-gray-600 text-sm">
              Be the first to hear about product updates, early access, and launch opportunities 
              for your neighborhood or community.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              const modal = document.getElementById('waitlist-modal')
              if (modal) modal.classList.add('hidden')
              const success = document.getElementById('success-message')
              if (success) {
                success.classList.remove('hidden')
                setTimeout(() => success.classList.add('hidden'), 3000)
              }
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Full name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Community or organization <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., Oak Street Neighbors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Notes <span className="text-gray-400">(optional)</span>
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                placeholder="Tell us about your community..."
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-green-600/25"
            >
              Join Waitlist
            </button>
          </form>

          <div id="success-message" className="hidden mt-6 p-4 bg-green-50 rounded-lg text-center">
            <p className="text-green-700 font-medium">
              Thanks for your interest — we'll keep you updated.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
