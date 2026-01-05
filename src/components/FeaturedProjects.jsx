import { motion } from 'framer-motion'

export default function FeaturedProjects() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      desc: "A comprehensive admin dashboard for managing products, orders, and customer data. Features real-time analytics and inventory tracking.",
      tags: [{n:"React", c:"primary"}, {n:"Node.js", c:"green-400"}, {n:"MongoDB", c:"yellow-400"}],
      icon: "fas fa-shopping-bag",
      iconColor: "text-secondary",
    },
    {
      title: "Task Master Pro",
      desc: "Collaborative project management tool allowing teams to organize tasks, set deadlines, and track progress with Kanban boards.",
      tags: [{n:"TypeScript", c:"blue-400"}, {n:"Redux", c:"primary"}, {n:"Express", c:"white"}],
      icon: "fas fa-tasks",
      iconColor: "text-accent-pink",
    },
    {
      title: "Real-time Chat App",
      desc: "Instant messaging application utilizing WebSockets for real-time communication, featuring group chats and media sharing.",
      tags: [{n:"Socket.io", c:"primary"}, {n:"React", c:"secondary"}, {n:"Node.js", c:"green-400"}],
      icon: "fas fa-comments",
      iconColor: "text-secondary",
    }
  ];

  return (
    <section id="projects" className="relative py-24 border-t border-gray-800/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10 text-center">
            <span className="text-gray-200">Featured</span> <span className="text-primary animate-pulse-slow">Projects</span>
          </h2>
          <div className="flex items-center space-x-2">
            <span className="h-1 w-2 bg-secondary rounded-full"></span>
            <span className="h-1 w-16 bg-gradient-to-r from-secondary to-primary rounded-full"></span>
            <span className="h-1 w-2 bg-primary rounded-full"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               viewport={{ once: true }}
               className="group relative flex flex-col h-full rounded-2xl bg-[#0A0A0A] border border-white/5 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/30 transition-colors">
                    <i className={`${project.icon} text-2xl ${project.iconColor} group-hover:text-primary transition-colors`}></i>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" title="View Code" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><i className="fab fa-github text-xl"></i></a>
                    <a href="#" title="Live Demo" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><i className="fas fa-external-link-alt text-lg"></i></a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.tags.map((tag, i) => (
                    <span 
                        key={i} 
                        className={`px-2 py-1 text-xs font-mono rounded border ${
                            tag.c === 'primary' ? 'text-primary bg-primary/10 border-primary/20' :
                            tag.c === 'secondary' ? 'text-secondary bg-secondary/10 border-secondary/20' :
                            tag.c === 'green-400' ? 'text-green-400 bg-green-400/10 border-green-400/20' :
                            tag.c === 'yellow-400' ? 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' :
                            tag.c === 'blue-400' ? 'text-blue-400 bg-blue-400/10 border-blue-400/20' :
                            'text-white bg-gray-700/50 border-gray-600'
                        }`}
                    >
                      {tag.n}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
