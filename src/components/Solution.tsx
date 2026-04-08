import { Rss, Store, CalendarCheck, ShieldCheck } from 'lucide-react'

const solutions = [
  {
    icon: Rss,
    title: 'Neighborhood Feed',
    description: 'Share updates, announcements, questions, and everyday moments with people in your local community.',
  },
  {
    icon: Store,
    title: 'Local Marketplace & Lost Found',
    description: 'Create a reliable space for secondhand items, lost & found, requests, and practical neighborhood help.',
  },
  {
    icon: CalendarCheck,
    title: 'Community Events',
    description: 'Promote local activities, gatherings, and initiatives — and make it easier for people to join in.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Moderation',
    description: 'Support healthier communities through structured spaces, reporting tools, and better local accountability.',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            A better way to organize neighborhood life.
          </h2>
          <p className="text-lg text-gray-600">
            Norvo brings local conversation, community exchange, and neighborhood participation
            into one simple and trusted experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 lg:p-8 border border-green-100 hover:border-green-200 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <solution.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
