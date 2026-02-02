import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'
import { socialLinks } from '../data/socials'
import { Download, ArrowRight } from 'lucide-react'
import ripa from '../assets/ripa.jpeg'
import gsap from 'gsap'

export default function Hero() {
  const imageRef = useRef(null)

  useEffect(() => {
    if (imageRef.current) {
        gsap.to(imageRef.current, {
            rotation: 360,
            duration: 10,
            repeat: -1,
            ease: "linear"
        })
    }
  }, [])

  return (
    <section className="relative z-10 pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center min-h-[calc(100vh-8rem)] pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Text Content */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
        >
          <p className="font-mono text-primary text-sm tracking-wide animate-pulse-slow">
           Hello.......! I'm
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
             <span className="text-gray-400 mr-3">Ripa</span><span className="text-gray-300"></span>
            <span className="block mt-2 bg-gradient-to-r from-accent-yellow via-yellow-200 to-yellow-500 text-gradient relative inline-block">
               Sarkar
              
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 italic">
            MERN Stack Developer
          </h2>
          <div className="flex space-x-4 pl-1">
            <div className="w-1 bg-primary h-auto rounded-full shadow-glow"></div>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
              My expertise lies in the MERN stack, providing seamless end-to-end solutions from <span className="text-gray-300 font-semibold border-b border-secondary/30">MongoDB</span> to building backend APIs with <span className="text-gray-300 font-semibold border-b border-primary/30">Express & Node.js</span>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Download CV বাটন অংশ */}
<a 
  href="/Ripa_Sarkar_Resume.pdf"
  download="Ripa_Sarkar_Resume.pdf" 
  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-glow hover:shadow-glow-strong transform hover:-translate-y-1 text-sm tracking-widest uppercase group"
>
  Download CV <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
</a>
             <a href="#latest-works" className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-1 text-sm tracking-widest uppercase group">
              View Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
             {socialLinks.map((social, index) => (
                <a 
                    key={index} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                >
                    <social.icon size={20} />
                </a>
             ))}
          </div>
        </motion.div>

        {/* Image / Visuals */}
        <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative order-1 lg:order-2 flex justify-center items-center h-[500px]"
        >
          <div className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px]">
            <div ref={imageRef} className="absolute inset-0 rounded-full glow-circle border-[3px] border-l-primary border-t-purple-600 border-r-accent-pink border-b-primary opacity-80"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden z-20 bg-gray-900">
              <img 
                src={ripa}
                alt="ripa sarkar"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
              />
            </div>

            {/* Floating Icons */}
            {/* React */}
            <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                className="absolute -top-4 -left-4 z-30"
            >
              <div className="w-14 h-14 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center shadow-lg hover:border-secondary transition-colors group">
                <i className="fab fa-react text-2xl text-secondary group-hover:scale-110 transition-transform"></i>
              </div>
            </motion.div>
            
             {/* Node */}
            <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                className="absolute bottom-8 -left-4 z-30"
            >
              <div className="w-14 h-14 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center shadow-lg hover:border-green-600 transition-colors group">
                 <i className="fab fa-node-js text-2xl text-green-600 group-hover:scale-110 transition-transform"></i>
              </div>
            </motion.div>

            {/* JS */}
             <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
                className="absolute bottom-4 right-0 z-30"
            >
              <div className="w-14 h-14 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center shadow-lg hover:border-yellow-400 transition-colors group">
                 <i className="fab fa-js text-2xl text-yellow-400 group-hover:scale-110 transition-transform"></i>
              </div>
            </motion.div>

            {/* Leaf (MongoDB) */}
             <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-8 -right-4 z-30"
            >
              <div className="w-14 h-14 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center shadow-lg hover:border-green-500 transition-colors group">
                 <i className="fas fa-leaf text-2xl text-green-500 group-hover:scale-110 transition-transform"></i>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
