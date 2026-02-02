import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      {/* Background Blurs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 relative inline-block">
            Educational Qualification
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl text-center">
            Academic background and professional certifications.
          </p>
        </div>

        <div className="space-y-6">
          {/* BSc */}
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
             viewport={{ once: true }}
             className="group relative p-6 md:p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-colors">
                  <i className="fas fa-graduation-cap text-xl text-secondary group-hover:text-primary transition-colors"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">B.Sc. in Computer Science</h3>
                  <p className="text-gray-300 font-medium mt-1">Sonargaon University</p>
                  <p className="text-sm text-gray-500 mt-2">Major in Software Engineering</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 text-sm font-mono text-gray-400 group-hover:text-white transition-colors shrink-0">
                <i className="far fa-calendar-alt text-primary"></i>
                <span>2022 - 2025</span>
              </div>
            </div>
          </motion.div>

          {/* Diploma */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             viewport={{ once: true }}
             className="group relative p-6 md:p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-secondary/10"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shrink-0 group-hover:border-secondary/30 transition-colors">
                  <i className="fas fa-university text-xl text-accent-pink group-hover:text-secondary transition-colors"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">Diploma in Computer Science and Technology</h3>
                  <p className="text-gray-300 font-medium mt-1">Habiganj Polytechnic Institute</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 text-sm font-mono text-gray-400 group-hover:text-white transition-colors shrink-0">
                <i className="far fa-calendar-alt text-accent-pink"></i>
                <span>2016 - 2020</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
