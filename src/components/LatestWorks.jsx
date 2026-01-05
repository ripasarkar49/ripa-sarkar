import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import pawmart from '../assets/pawmart.png'
import toy from '../assets/toy.png'
import blood from '../assets/blood.png'
gsap.registerPlugin(ScrollTrigger)

export default function LatestWorks() {
  const works = [
    {
      id: "01",
      title: "BloodCare",
      subtitle: "Blood Donation & Management Platform",
      tags: ["MongoDB", "Express", "React", "Node"],
      image: blood,
      link: "https://blood-care-1.netlify.app/",
      github: "https://github.com/ripasarkar49/blood-donation-client"
    },
    {
      id: "02",
      title: "Pawmart",
      subtitle: "Pet Care & Product Marketplace",
      tags: ["MongoDB", "Express", "React", "Node"],
      image: pawmart,
      link: "https://pawmart-app.netlify.app/",
      github: "https://github.com/ripasarkar49/pawmart-client-side"
    },
    {
      id: "03",
      title: "ToyNook",
      subtitle: "Kids Toy Marketplace",
      tags: ["React", "Recharts", "Tailwind", "JSON"],
      image: toy,
      link: "https://toynook.netlify.app/",
      github: "https://github.com/ripasarkar49/toyNook-app"
    }
  ];

  return (
    <section id="latest-works" className="relative py-24 border-t border-gray-800/30 overflow-hidden">
      <div className="absolute top-40 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-40 -right-64 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
            Showcase
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
            Latest <span className="text-secondary italic">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
               key={work.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               viewport={{ once: true }}
               className="group relative rounded-3xl overflow-hidden bg-[#0F0F11] border border-white/5 hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className="relative h-[420px] w-full overflow-hidden bg-[#1a1a1a]">
                <div 
                    ref={el => {
                        if (el) {
                            gsap.to(el, {
                                y: -20,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: el.parentElement,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: true
                                }
                            })
                        }
                    }}
                    className="w-full h-[120%] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: `url('${work.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col h-full justify-end">
                  <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-2">{work.subtitle}</span>
                  <h3 className="text-3xl font-extrabold text-white mb-6">{work.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {work.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-[10px] font-bold tracking-wider text-gray-300 bg-white/5 border border-white/10 rounded-full uppercase">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 w-full">
                    <a href={work.link} className="flex-1 flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-6 rounded-full transition-colors uppercase text-xs tracking-wider">
                       Case Study <i className="fas fa-arrow-right -rotate-45 text-xs"></i>
                    </a>
                    <a href={work.github} className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 text-white transition-colors">
                      <i className="fab fa-github text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-xs font-mono text-gray-400">
                  {work.id}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a href="#projects" className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full border border-white/20 hover:border-white/50 transition-all duration-300">
            <span className="relative z-10 text-xs font-bold tracking-[0.2em] text-white uppercase group-hover:text-white transition-colors">Explore Full Archive</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/5"></div>
          </a>
        </div>
      </div>
    </section>
  )
}
