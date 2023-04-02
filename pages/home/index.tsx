import Benefits from '../components/Home/Benefits'
import FAQ from '../components/Home/FAQ'
import Features from '../components/Home/Features'
import Hero from '../components/Home/Hero'
import LastCTA from '../components/shared/LastCTA'
import Testimonials from '../components/Home/Testimonials'
import Footer from '../components/shared/Footer'
import Nav from '../components/shared/Nav'

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <FAQ />
      <LastCTA />
      <Footer />
    </>
  )
}

export default Home
