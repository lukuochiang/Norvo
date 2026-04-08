import { MessageSquare, ShoppingBag, Calendar, Shield } from 'lucide-react'

const problems = [
  {
    icon: MessageSquare,
    title: 'Scattered communication',
    description: 'Community updates, local requests, and announcements get buried across too many channels.',
  },
  {
    icon: ShoppingBag,
    title: 'No clear place for local exchange',
    description: 'Buy-and-sell posts, lost & found, and requests for help often disappear before the right people see them.',
  },
  {
    icon: Calendar,
    title: 'Events are hard to organize',
    description: 'From neighborhood meetups to volunteer activities, local events need better visibility and coordination.',
  },
  {
    icon: Shield,
    title: 'Trust is difficult to build',
    description: 'Generic social platforms are not designed around real local belonging, accountability, or moderation.',
  },
]

export default function Problem() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Local communities are active — but disconnected.
          </h2>
          <p className="text-lg text-gray-600">
            Important neighborhood information is often scattered across chat groups, bulletin boards, 
            and social feeds that were never built for real community coordination.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-5">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
