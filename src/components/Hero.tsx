import { ArrowRight, MapPin, Users, Calendar, MessageCircle, Grid3x3 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 lg:pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Hyperlocal community platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Bring neighbors closer,{' '}
              <span className="text-green-600">block by block.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Blocksy helps local communities stay connected through neighborhood updates, local 
              buy-and-sell, lost & found, community events, and trusted communication — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all shadow-xl shadow-green-600/30 hover:shadow-green-600/50 hover:-translate-y-1"
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all hover:-translate-y-1"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Grid3x3 className="w-5 h-5" />
                Explore Features
              </button>
            </div>

            <p className="text-sm text-gray-500">
              Built for neighborhoods, apartment communities, local organizers, and resident groups.
            </p>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-green-100 p-6 lg:p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Neighborhood Update</p>
                    <p className="text-gray-600 text-sm mt-1">Community garden cleanup this Saturday at 10am!</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                      <span>2 min ago</span>
                      <span>·</span>
                      <span>12 reactions</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Lost & Found</p>
                    <p className="text-gray-600 text-sm mt-1">Missing: Orange tabby cat near Oak Street. Please help!</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                      <span>15 min ago</span>
                      <span>·</span>
                      <span>8 shares</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Community Event</p>
                    <p className="text-gray-600 text-sm mt-1">Block party planning meeting - Tuesday 7pm</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                      <span>1 hour ago</span>
                      <span>·</span>
                      <span>23 interested</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  )
}
