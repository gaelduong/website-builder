import Image from 'next/image'
import Link from 'next/link'
import { dashboard } from '@/public/images'

const Hero = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div
        suppressHydrationWarning
        className="max-w-screen-lg mx-auto px-4 md:px-8"
      >
        {/* Hero content */}
        <div
          suppressHydrationWarning
          className="flex flex-col sm:flex-col md:flex-row items-center mt-8 md:mt-0 gap-16 md:gap-8"
        >
          {/* Hero left */}
          <div suppressHydrationWarning className="max-w-[100%] md:max-w-[50%]">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-800 lg:leading-[1.14] mb-4 md:mb-6">
              Empower your energy operations with innovative tech
            </h1>
            <p
              suppressHydrationWarning
              className="text-gray-600 text-lg mb-8 md:mb-12"
            >
              From energy management software to mobile apps and dashboards, we
              offer products that improve efficiency, reduce costs, and enhance
              the customer experience.
            </p>
            <Link
              href="#"
              className="bg-indigo-500 hover:bg-indigo-600 shadow-xl text-white font-medium py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Learn more
            </Link>
            <Link
              href="#"
              className=" text-black font-medium py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
          {/* Hero right */}
          <div suppressHydrationWarning className="max-w-[95%] md:max-w-[50%] ">
            <Image
              src={dashboard}
              alt="Illustration"
              className="w-full rounded-xl md:max-w-full relative shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
