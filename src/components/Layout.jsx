import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Layout({ children }) {
  useEffect(() => {
    const lenis = new Lenis()

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Add Lenis's requestAnimationFrame to GSAP's ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Disable GSAP's own lag smoothing for smoother scroll with Lenis
    gsap.ticker.lagSmoothing(0)

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
        lenis.destroy()
        gsap.ticker.remove(lenis.raf)
    }
  }, [])


  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300 font-sans relative overflow-x-hidden selection:bg-primary/30 selection:text-white">
        {/* Global Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
             <div className="absolute top-[60%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent transform rotate-[5deg] opacity-40 blur-[1px]"></div>
             <div className="absolute top-[70%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent transform -rotate-[5deg] opacity-30 blur-[1px]"></div>
             <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10">
            {children}
        </div>
    </div>
  )
}
