import Link from 'next/link'

const LastCTA = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div
        suppressHydrationWarning
        className="max-w-screen-lg mx-auto px-4 md:px-8"
      >
        <div suppressHydrationWarning className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
            Ready to get started?
          </h2>
          <p
            suppressHydrationWarning
            className="mt-4 text-lg leading-6 text-gray-500"
          >
            Get in touch to create an account.
          </p>
          <div suppressHydrationWarning className="mt-8 flex justify-center">
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-500 hover:bg-indigo-600"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LastCTA
