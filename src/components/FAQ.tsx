import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is Norvo?',
    answer: 'Norvo is a platform designed to help local communities stay connected through neighborhood updates, local exchange, events, and trusted communication.',
  },
  {
    question: 'Who is Norvo for?',
    answer: 'Norvo is built for residents, apartment communities, neighborhood groups, local organizers, and community admins.',
  },
  {
    question: 'Is Norvo a mobile app or a website?',
    answer: 'Norvo is being designed as a multi-platform experience, including mobile-friendly access and broader web support.',
  },
  {
    question: 'Can I use Norvo for my local community?',
    answer: 'Yes. You can join the waitlist or contact us to explore early access for your neighborhood or group.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <p className="px-6 pb-6 text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about Norvo.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="#cta" className="text-green-600 hover:text-green-700 font-medium">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
