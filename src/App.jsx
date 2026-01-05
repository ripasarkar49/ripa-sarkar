import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import LatestWorks from './components/LatestWorks'
import FeaturedProjects from './components/FeaturedProjects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <LatestWorks />
      <FeaturedProjects />
      <Testimonials />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default App
