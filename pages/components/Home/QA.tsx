interface QAProps {
  question: string
  answer: string
}

const QA = ({ question, answer }: QAProps) => {
  return (
    <div suppressHydrationWarning>
      <dt className="text-lg leading-6 font-medium text-gray-900">
        {question}
      </dt>
      <dd className="mt-2 text-base text-gray-500">{answer}</dd>
    </div>
  )
}

export default QA
