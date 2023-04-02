import { img2, img4, img6 } from '@/public/images'
import Image from 'next/image'

const Values = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div
        suppressHydrationWarning
        className="max-w-screen-lg mx-auto px-4 md:px-8 space-y-10"
      >
        <div suppressHydrationWarning className="max-w-screen-md">
          <h2 className="text-3xl font-bold text-gray-800 leading-tight mb-4 md:mb-6">
            Our Core Values
          </h2>
          <p suppressHydrationWarning className="mt-4 text-lg text-gray-500 ">
            Our company is committed to serving your business through our
            indispensable core values:
          </p>
        </div>
        <div suppressHydrationWarning className="flex flex-wrap flex-col gap-5">
          {/* Item */}
          <div
            suppressHydrationWarning
            className="w-full md:w-[calc(80%-2rem)]"
          >
            <div
              suppressHydrationWarning
              className="flex flex-wrap flex-row gap-4 items-center"
            >
              <div suppressHydrationWarning className="w-[calc(20%-2rem)]">
                <Image src={img6} alt="" />
              </div>
              <div
                suppressHydrationWarning
                className="w-full md:w-[calc(80%-2rem)]"
              >
                <h3
                  suppressHydrationWarning
                  className="text-xl md:text-xl lg:text-xl font-semibold text-gray-800 leading-tight mb-4"
                >
                  Customer focused
                </h3>
                <p suppressHydrationWarning className="text-gray-600 text-lg">
                  From energy management software to mobile apps and dashboards,
                  we offer products that improve efficiency, reduce costs, and
                  enhance the customer experience.
                </p>
              </div>
            </div>
          </div>
          {/* Item */}
          <div
            suppressHydrationWarning
            className="w-full md:w-[calc(80%-2rem)]"
          >
            <div
              suppressHydrationWarning
              className="flex flex-wrap flex-row gap-4 items-center"
            >
              <div suppressHydrationWarning className="w-[calc(20%-2rem)]">
                <Image src={img4} alt="" />
              </div>
              <div
                suppressHydrationWarning
                className="w-full md:w-[calc(80%-2rem)]"
              >
                <h3
                  suppressHydrationWarning
                  className="text-xl md:text-xl lg:text-xl font-semibold text-gray-800 leading-tight mb-4"
                >
                  Transparency
                </h3>
                <p suppressHydrationWarning className="text-gray-600 text-lg">
                  From energy management software to mobile apps and dashboards,
                  we offer products that improve efficiency, reduce costs, and
                  enhance the customer experience.
                </p>
              </div>
            </div>
          </div>
          {/* Item */}
          <div
            suppressHydrationWarning
            className="w-full md:w-[calc(80%-2rem)]"
          >
            <div
              suppressHydrationWarning
              className="flex flex-wrap flex-row gap-4 items-center"
            >
              <div suppressHydrationWarning className="w-[calc(20%-2rem)]">
                <Image src={img2} alt="" />
              </div>
              <div
                suppressHydrationWarning
                className="w-full md:w-[calc(80%-2rem)]"
              >
                <h3
                  suppressHydrationWarning
                  className="text-xl md:text-xl lg:text-xl font-semibold text-gray-800 leading-tight mb-4"
                >
                  Trust
                </h3>
                <p suppressHydrationWarning className="text-gray-600 text-lg">
                  From energy management software to mobile apps and dashboards,
                  we offer products that improve efficiency, reduce costs, and
                  enhance the customer experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
