import Link from 'next/link'
import Image from 'next/image'
import { img1 } from '@/public/images'

const Hero = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div
        suppressHydrationWarning
        className="max-w-screen-lg mx-auto px-4 md:px-8"
      >
        <div
          suppressHydrationWarning
          className="flex flex-wrap flex-col md:flex-row gap-8 items-center"
        >
          <div
            suppressHydrationWarning
            className="w-full md:w-[calc(50%-2rem)]"
          >
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4 md:mb-6">
              About us
            </h1>
            <p
              suppressHydrationWarning
              className="text-gray-600 text-lg mb-8 md:mb-12"
            >
              From energy management software to mobile apps and dashboards, we
              offer products that improve efficiency, reduce costs, and enhance
              the customer experience. This educe costs, and enhance the
              customer experience.
            </p>
            <Link
              href="#"
              className="bg-indigo-500 hover:bg-indigo-600 shadow-xl text-white font-medium py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Talk to Us
            </Link>
          </div>
          <div
            suppressHydrationWarning
            className="w-full md:w-[calc(50%-2rem)]"
          >
            <Image src={img1} alt="about-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
