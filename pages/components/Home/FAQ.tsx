import QA from './QA'

const QAs = [
  {
    id: 0,
    question: 'What kind of businesses do you work with?',
    answer:
      'We work with a variety of businesses in the energy and utilities industry, from small startups to large corporations. Our solutions can be tailored to meet the specific needs of each client.'
  },
  {
    id: 1,
    question: 'What kind of data can I monitor with your solutions?',
    answer:
      'Our solutions can monitor a wide range of data, including energy usage, performance metrics, and operational data. We can also integrate with other systems and data sources to provide a comprehensive view of your operations.'
  },
  {
    id: 2,
    question: 'How long does it take to implement your solutions?',
    answer:
      'Implementation times vary depending on the complexity of your operations and the specific solutions you need. However, we work quickly and efficiently to minimize downtime and ensure a smooth transition to our solutions.'
  },
  {
    id: 3,
    question: 'Can your solutions help me save money on energy costs?',
    answer:
      'Yes, our solutions are designed to help you identify areas where you can reduce energy consumption and optimize performance. This can lead to significant cost savings over time.'
  },
  {
    id: 4,
    question: 'How secure is my data with your solutions?',
    answer:
      'We take data security very seriously and have implemented multiple layers of security measures to protect your data. Our solutions are designed with industry-standard security protocols and our team regularly updates and monitors our systems to ensure maximum security.'
  }
]

const FAQ = () => {
  return (
    <section className="bg-white py-20">
      <div
        suppressHydrationWarning
        className="max-w-screen-lg mx-auto px-4 md:px-8 space-y-12"
      >
        <div
          suppressHydrationWarning
          className="max-w-screen-md space-y-4 mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-700">FAQs</h2>
          <p suppressHydrationWarning className="mt-4 text-lg text-gray-500">
            Here are some frequently asked questions about our service.
          </p>
        </div>

        <div suppressHydrationWarning className="mt-6">
          <dl className="space-y-8 max-w-3xl">
            {QAs.map(qa => (
              <QA key={qa.id} question={qa.question} answer={qa.answer} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default FAQ
