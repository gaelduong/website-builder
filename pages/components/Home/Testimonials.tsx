import Testimonial from './Testimonial'

const testimonials = [
  {
    id: 0,
    text: 'Working with eQuantum has been a game-changer for our business. The software allowed us to reduce our energy consumption and save money on our bills!',
    name: 'Jane Doe',
    jobTitle: 'COO, XYZ Energy',
    image: 'https://randomuser.me/api/portraits/women/0.jpg'
  },
  {
    id: 1,
    text: 'Their innovative technology has allowed us to improve our performance and stay ahead of the competition. We highly recommend them to any business in the energy industry.',
    name: 'Tom Jones',
    jobTitle: 'COO, EnergyCo',
    image: 'https://randomuser.me/api/portraits/men/41.jpg'
  },
  {
    id: 2,
    text: "They're a partner that truly cares about our success. Their team is always available to help us with any questions or issues we may have. We appreciate their dedication and commitment to our business.",
    name: 'Smith Johnson',
    jobTitle: 'CEO, ABC Energy',
    image: 'https://randomuser.me/api/portraits/men/94.jpg'
  }
]

const Testimonials = () => {
  return (
    <section className="py-12 bg-[#F7F8F9]">
      <div
        suppressHydrationWarning
        className="max-w-screen-lg mx-auto px-4 md:px-8 space-y-12"
      >
        <div
          suppressHydrationWarning
          className="max-w-screen-md space-y-4 mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-700 ">
            What Our Customers Are Saying
          </h2>
          <p suppressHydrationWarning className="mt-4 text-lg text-gray-500 ">
            We have successfully served various clients with great results.
          </p>
        </div>

        <div
          suppressHydrationWarning
          className="flex flex-wrap flex-col md:flex-row gap-8"
        >
          {testimonials.map(testimonial => (
            <Testimonial
              key={testimonial.id}
              text={testimonial.text}
              name={testimonial.name}
              jobTitle={testimonial.jobTitle}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
