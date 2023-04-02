interface FeatureProps {
  heading: string
  paragraph: string
}

const Feature = ({ heading, paragraph }: FeatureProps) => {
  return (
    <div
      suppressHydrationWarning
      className="md:w-[calc(50%-2rem)] lg:w-[calc(33.3%-2rem)]"
    >
      <div
        suppressHydrationWarning
        className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4"
      >
        <svg
          className="h-6 w-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h4 className="text-lg leading-6 font-medium text-gray-900">{heading}</h4>
      <p suppressHydrationWarning className="mt-2 text-base text-gray-500">
        {paragraph}
      </p>
    </div>
  )
}

export default Feature
