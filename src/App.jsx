import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" setLoading={setLoading} />
        ) : (
          <>
            <Navbar />
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default App
