import Link from 'next/link'
import Image from 'next/image'
import { img6, img3, img4, img5 } from '@/public/images'
import CheckboxIcon from '../shared/CheckboxIcon'

const Benefits = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div
        suppressHydrationWarning
        className="max-w-screen-lg mx-auto px-4 md:px-8 space-y-20"
      >
        <div
          suppressHydrationWarning
          className=" max-w-screen-md space-y-4 mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-700 ">Key Benefits</h2>
          <p suppressHydrationWarning className="mt-4 text-lg text-gray-500 ">
            Our innovative energy software solutions bring several key benefits
            to your business:
          </p>
        </div>

        {/* --- Flex container --- */}
        <div
          suppressHydrationWarning
          className="flex flex-wrap flex-col md:flex-row gap-12 items-center"
        >
          {/* --- Flex items --- */}
          {/* Image */}
          <div
            suppressHydrationWarning
            className="w-[50%] md:w-[calc(50%-2rem)]"
          >
            <div suppressHydrationWarning>
              <Image src={img5} alt="smth" className="object-contain" />
            </div>
          </div>

          {/* Benefit text */}
          <div
            suppressHydrationWarning
            className="w-[100%] md:w-[calc(50%-2rem)]"
          >
            <div suppressHydrationWarning>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Optimize Your Energy Efficiency
              </h2>
              <p
                suppressHydrationWarning
                className="leading-7 text-gray-600 mb-6"
              >
                Our energy monitoring software allows you to identify areas
                where you can save energy and reduce waste. By implementing our
                solutions, you can:
              </p>
              <ul className="list-disc list-inside mb-8">
                <li className="text-gray-700 mb-2">
                  Lower your energy bills and reduce your carbon footprint
                </li>
                <li className="text-gray-700 mb-2">
                  Improve your operational efficiency and productivity
                </li>
                <li className="text-gray-700 mb-2">
                  Enhance your reputation as a sustainable business
                </li>
              </ul>
              <Link
                href="#"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                Start now
              </Link>
            </div>
          </div>
        </div>

        {/* --- Flex container --- */}
        <div
          suppressHydrationWarning
          className="flex flex-wrap flex-col md:flex-row gap-12 items-center"
        >
          {/* Benefit text */}
          <div
            suppressHydrationWarning
            className="w-[100%] md:w-[calc(50%-2rem)] order-2 md:order-first"
          >
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Stay Ahead of the Competition
            </h2>
            <p
              suppressHydrationWarning
              className=" leading-7 text-gray-600 mb-6"
            >
              Our innovative technology solutions help you stay ahead of the
              competition and make data-driven decisions and improve your
              overall performance. With our products, you can:
            </p>
            <ul className="list-none list-inside">
              <li className="text-gray-700 mb-2 space-x-2">
                <CheckboxIcon />
                <span>
                  Gain a competitive advantage by improving your efficiency
                </span>
              </li>
              <li className="text-gray-700 mb-2 space-x-4">
                <CheckboxIcon />
                <span>Enhance the customer experience and satisfaction</span>
              </li>
              <li className="text-gray-700 mb-2 space-x-4">
                <CheckboxIcon />
                <span>Position your business as a leader in the industry</span>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div
            suppressHydrationWarning
            className="w-[50%] md:w-[calc(50%-2rem)]"
          >
            <Image src={img6} alt="img2" className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
