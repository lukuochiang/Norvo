import { MapPin, LayoutList, ShieldCheck, Users } from 'lucide-react'

const points = [
  {
    icon: MapPin,
    title: 'Hyperlocal first',
    description: 'Built around neighborhoods and community relevance, not generic social reach.',
  },
  {
    icon: LayoutList,
    title: 'More organized than chat groups',
    description: 'Important posts and local information should not disappear in message streams.',
  },
  {
    icon: ShieldCheck,
    title: 'Designed for trust',
    description: 'A stronger local network needs accountability, moderation, and clearer community context.',
  },
  {
    icon: Users,
    title: 'Community-centered by design',
    description: 'Blocksy is made to support belonging, participation, and useful local connection.',
  },
]

export default function WhyBlocksy() {
  return (
    <section id="why-blocksy" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Why Blocksy
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {points.map((point, index) => (
            <div key={index} className="flex gap-5 group">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors">
                <point.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
