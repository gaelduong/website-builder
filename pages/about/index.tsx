import Hero from '../components/About/Hero'
import Mission from '../components/About/Mission'
import TeamMembers from '../components/About/TeamMembers'
import Values from '../components/About/Values'
import Footer from '../components/shared/Footer'
import LastCTA from '../components/shared/LastCTA'
import Nav from '../components/shared/Nav'

const About = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Mission />
      <Values />
      <TeamMembers />
      <LastCTA />
      <Footer />
    </>
  )
}

export default About
