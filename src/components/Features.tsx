import { MessageCircle, ShoppingBag, Calendar, Bell, Shield, Smartphone } from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: 'Community updates',
    description: 'Post neighborhood news, questions, recommendations, and local updates in a feed built for nearby people.',
  },
  {
    icon: ShoppingBag,
    title: 'Buy, sell, and share locally',
    description: 'Make it easier for residents to exchange items, report lost belongings, or ask for help.',
  },
  {
    icon: Calendar,
    title: 'Organize local events',
    description: 'Create events, share details, and help your community show up.',
  },
  {
    icon: Bell,
    title: 'Announcements and notifications',
    description: 'Keep important information visible, timely, and easier to act on.',
  },
  {
    icon: Shield,
    title: 'Designed for trust',
    description: 'Norvo is built around local relevance, community identity, and safer participation.',
  },
  {
    icon: Smartphone,
    title: 'Accessible across platforms',
    description: 'Designed to support modern community access across mobile, web, and more.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Everything your community needs, in one place.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
