import { Tag } from 'lucide-react'

const tags = [
  'Early access communities',
  'Resident groups',
  'Local organizers',
  'Neighborhood networks',
]

export default function SocialProof() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Growing with communities that want something better.
          </h2>
          
          <p className="text-lg text-gray-600 mb-10">
            Norvo is being built for neighborhoods and local groups that want a clearer,
            more trusted, and more useful way to stay connected.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-100"
              >
                <Tag className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-gray-700">{tag}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 italic mb-4">
              "We can't wait for Norvo to bring our neighborhood together. Everything else feels too scattered."
            </p>
            <p className="text-sm font-medium text-gray-900">— Sarah, Maple Street Resident</p>
          </div>
        </div>
      </div>
    </section>
  )
}
