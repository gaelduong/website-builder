import React from 'react'
import Feature from './Feature'

const features = [
  {
    id: 0,
    heading: 'Energy Monitoring',
    paragraph:
      'Our software provides a detailed breakdown of your energy consumption, allowing you to identify areas where you can reduce costs and improve efficiency. Our energy monitoring solution can help you achieve your sustainability goals.'
  },
  {
    id: 1,
    heading: 'Customizable Dashboards',
    paragraph:
      'Our customizable dashboards allow you to access important data and insights in one place. Whether you want to track energy consumption, costs, or customer engagement, our dashboards can be tailored to your specific needs.'
  },
  {
    id: 2,
    heading: 'Mobile Access',
    paragraph:
      'Our mobile app lets you access your energy data from anywhere, at any time. You can monitor your energy usage, view reports, and receive alerts on-the-go. Our app is designed with a user-friendly interface, making it easy to access the data you need.'
  }
]

const Features = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div
        suppressHydrationWarning
        className="max-w-screen-lg mx-auto px-4 md:px-8"
      >
        <div
          suppressHydrationWarning
          className="flex flex-wrap flex-col md:flex-row gap-8 "
        >
          {features.map(feature => (
            <Feature
              key={feature.id}
              heading={feature.heading}
              paragraph={feature.paragraph}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
