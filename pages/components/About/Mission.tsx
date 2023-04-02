import { img2 } from '@/public/images'
import Image from 'next/image'

const Mission = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div
        suppressHydrationWarning
        className="max-w-screen-lg mx-auto px-4 md:px-8"
      >
        <div
          suppressHydrationWarning
          className="flex flex-wrap flex-col md:flex-row gap-8"
        >
          <div
            suppressHydrationWarning
            className="w-full md:w-[calc(50%-2rem)]"
          >
            <Image src={img2} alt="about-img" />
          </div>
          <div
            suppressHydrationWarning
            className="w-full md:w-[calc(50%-2rem)]"
          >
            <h2 className="text-3xl font-bold text-gray-800 leading-tight mb-4 md:mb-6">
              Our Mission
            </h2>
            <p
              suppressHydrationWarning
              className="text-gray-600 text-lg mb-8 md:mb-12"
            >
              From energy management software to mobile apps and dashboards, we
              offer products that improve efficiency, reduce costs, and enhance
              the customer experience. From energy management software to mobile
              apps and dashboards, we offer products that improve efficiency,
              reduce costs, and enhance the customer experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
