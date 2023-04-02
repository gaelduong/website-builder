import Image from 'next/image'

interface TestimonialProps {
  text: string
  name: string
  jobTitle: string
  image: string
}

const Testimonial = ({ text, name, jobTitle, image }: TestimonialProps) => {
  return (
    <div
      suppressHydrationWarning
      className="md:max-w-[calc(50%-2rem)] lg:max-w-[calc(33.3%-2rem)]
    bg-gray-100 rounded-lg shadow-md overflow-hidden px-6 py-8
    flex flex-col justify-between"
    >
      <p suppressHydrationWarning className="text-lg text-gray-600">
        "{text}"
      </p>
      <div suppressHydrationWarning className="mt-6 flex items-center">
        <div suppressHydrationWarning className="flex-shrink-0">
          <Image
            className="h-12 w-12 rounded-full"
            loader={() => image}
            src={image}
            alt="person"
            width={12}
            height={12}
          />
        </div>
        <div suppressHydrationWarning className="ml-3">
          <p
            suppressHydrationWarning
            className="text-sm font-medium text-gray-900"
          >
            {name}
          </p>
          <p suppressHydrationWarning className="text-sm text-gray-500">
            {jobTitle}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
