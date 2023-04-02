import { member1, member2, member3, member4, member5 } from '@/public/images'
import Image from 'next/image'

const members = [
  {
    id: 0,
    name: 'Alex Q Nguyen',
    title: 'CEO',
    image: member1
  },
  {
    id: 1,
    name: 'Julie Smith',
    title: 'Sales and Operations',
    image: member2
  },
  {
    id: 2,
    name: 'Chandai Sunpinar',
    title: 'CTO',
    image: member3
  },
  {
    id: 3,
    name: 'Duan Hoan',
    title: 'Lead Software Developer',
    image: member4
  },
  {
    id: 4,
    name: 'Sarah Kiev',
    title: 'UI/UX Designer',
    image: member5
  }
]

const TeamMembers = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div
        suppressHydrationWarning
        className="max-w-screen-lg mx-auto px-4 md:px-8 space-y-12"
      >
        <div suppressHydrationWarning className="max-w-screen-md">
          <h2 className="text-3xl font-bold text-gray-800 leading-tight mb-4 md:mb-6">
            Our Team Members
          </h2>
          <p suppressHydrationWarning className="mt-4 text-lg text-gray-500 ">
            Our team is filled with passionate individuals who is capable of
            delivering satisfaction to your business.
          </p>
        </div>
        <div
          suppressHydrationWarning
          className="flex flex-wrap flex-col sm:flex-row md:flex-row gap-8 items-stretch"
        >
          {members.map(member => (
            <div
              suppressHydrationWarning
              key={member.id}
              className="w-full sm:w-[calc(50%-2rem)] md:w-[calc(33%-2rem)] space-y-4"
            >
              <Image
                src={member.image}
                alt="member"
                className="rounded-lg  object-cover"
              />
              <div suppressHydrationWarning>
                <p
                  suppressHydrationWarning
                  className="text-base font-medium text-gray-900"
                >
                  {member.name}
                </p>
                <p suppressHydrationWarning className="text-base text-gray-500">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
