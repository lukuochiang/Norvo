import { User, Users, Building, HeartHandshake, Shield } from 'lucide-react'

const useCases = [
  {
    icon: User,
    title: 'Residents',
    description: 'Stay informed, ask for help, share updates, and connect with nearby people.',
  },
  {
    icon: Users,
    title: 'Community organizers',
    description: 'Coordinate activities, post announcements, and encourage participation more easily.',
  },
  {
    icon: Building,
    title: 'Apartment and neighborhood groups',
    description: 'Create a more structured and useful space than fragmented chat threads.',
  },
  {
    icon: HeartHandshake,
    title: 'Local volunteers and helpers',
    description: 'Make support more visible, discoverable, and actionable.',
  },
  {
    icon: Shield,
    title: 'Community admins',
    description: 'Moderate content, manage reports, and support healthier neighborhood interaction.',
  },
]

export default function UseCases() {
  return (
    <section id="usecases" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Built for the people who keep communities connected.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-5 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <useCase.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm text-gray-600">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
