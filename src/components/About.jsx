import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group rounded-3xl bg-[#0A0A0A] border border-white/5 p-8 md:p-12 overflow-hidden shadow-glow"
        >
          {/* Background Blurs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col items-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 relative inline-block">
                About Me
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></span>
              </h2>
            </div>
            
            <div className="text-center space-y-6 mb-10">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello! I'm <span className="text-secondary font-semibold">Ripa</span>, a passionate <span className="text-primary font-semibold">MERN Stack Developer</span> who loves to build scalable web applications. My journey in web development started with a curiosity about how things work on the internet, which has now evolved into a career where I solve complex problems through code.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I enjoy working on projects where I can leverage  <span className="text-primary font-semibold">JavaScript, React, Node.js, MongoDB</span> along with modern UI frameworks like <span className='text-yellow-200 font-semibold'> Tailwind CSS.</span> My focus is on building responsive, fast, and scalable web applications with clean and maintainable code.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                When I'm not coding, you can find me exploring new places. <span className="text-accent-yellow font-semibold">Traveling</span> opens my mind to new cultures and experiences, which often inspires my creativity in development. I believe in continuous learning and always strive to stay updated with the latest technologies.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
               <span className="px-4 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:border-violet-500/50 hover:bg-violet-500/10 transition-colors cursor-default shadow-[0_0_10px_rgba(139,92,246,0.2)]"># MERN Stack</span>
               <span className="px-4 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:border-amber-400/50 hover:bg-amber-400/10 transition-colors cursor-default shadow-[0_0_10px_rgba(251,191,36,0.2)]"># JavaScript</span>
               <span className="px-4 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:border-sky-400/50 hover:bg-sky-400/10 transition-colors cursor-default shadow-[0_0_10px_rgba(56,189,248,0.2)]"># React</span>
               <span className="px-4 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors cursor-default shadow-[0_0_10px_rgba(16,185,129,0.2)]"># Node.js</span>
               <span className="px-4 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:border-teal-400/50 hover:bg-teal-400/10 transition-colors cursor-default shadow-[0_0_10px_rgba(45,212,191,0.2)]"># MongoDB</span>
               <span className="px-4 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:border-rose-500/50 hover:bg-rose-500/10 transition-colors cursor-default shadow-[0_0_10px_rgba(244,63,94,0.2)]"># Traveling</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
