import { motion } from 'framer-motion'

export default function Skills() {
    const frontendSkills = [
        { name: "HTML5", percentage: "95%", iconColor: "text-orange-500", barFrom: "from-orange-400", barTo: "to-orange-600", iconClass: "fab fa-html5" },
        { name: "CSS3", percentage: "90%", iconColor: "text-blue-500", barFrom: "from-blue-400", barTo: "to-blue-600", iconClass: "fab fa-css3-alt" },
        { name: "JavaScript", percentage: "85%", iconColor: "text-yellow-400", barFrom: "from-yellow-300", barTo: "to-yellow-500", iconClass: "fab fa-js" },
        { name: "React.js", percentage: "88%", iconColor: "text-cyan-400", barFrom: "from-cyan-300", barTo: "to-cyan-500", iconClass: "fab fa-react" },
        { name: "TailwindCSS", percentage: "92%", iconColor: "text-teal-400", barFrom: "from-teal-300", barTo: "to-teal-500", iconClass: "fas fa-wind" },
    ];
    
    const backendSkills = [
        { name: "Node.js", percentage: "80%", iconColor: "text-green-600", barFrom: "from-green-500", barTo: "to-green-700", iconClass: "fab fa-node-js" },
        { name: "Express.js", percentage: "85%", iconColor: "text-gray-400", barFrom: "from-gray-300", barTo: "to-gray-500", iconClass: "fas fa-network-wired" },
        { name: "MongoDB", percentage: "82%", iconColor: "text-green-400", barFrom: "from-green-300", barTo: "to-green-500", iconClass: "fas fa-database" },
        { name: "REST API", percentage: "90%", iconColor: "text-purple-400", barFrom: "from-purple-400", barTo: "to-purple-600", iconClass: "fas fa-exchange-alt" },
        { name: "Firebase", percentage: "75%", iconColor: "text-orange-500", barFrom: "from-orange-400", barTo: "to-yellow-500", iconClass: "fas fa-fire" },
    ];

    const toolsSkills = [
        { name: "Git", percentage: "88%", iconColor: "text-red-500", barFrom: "from-red-400", barTo: "to-red-600", iconClass: "fab fa-git-alt" },
        { name: "GitHub", percentage: "90%", iconColor: "text-white", barFrom: "from-gray-200", barTo: "to-gray-500", iconClass: "fab fa-github" },
        { name: "VS Code", percentage: "95%", iconColor: "text-blue-400", barFrom: "from-blue-400", barTo: "to-indigo-500", iconClass: "fas fa-terminal" },
        { name: "Postman", percentage: "85%", iconColor: "text-orange-400", barFrom: "from-orange-300", barTo: "to-orange-500", iconClass: "fas fa-rocket" },
        { name: "Figma", percentage: "70%", iconColor: "text-purple-400", barFrom: "from-pink-400", barTo: "to-purple-500", iconClass: "fab fa-figma" },
    ];

    const SkillCard = ({ title, iconClass, iconColor, skills }) => (
        <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                <i className={`${iconClass} ${iconColor}`}></i>
                {title}
            </h3>
            <div className="space-y-6">
                {skills.map((skill, index) => (
                    <div key={index} className="group">
                        <div className="flex justify-between mb-1">
                             <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <i className={`${skill.iconClass} ${skill.iconColor}`}></i> {skill.name}
                            </span>
                            <span className="text-sm font-medium text-gray-400">{skill.percentage}</span>
                        </div>
                        <div className="skill-progress-bar w-full bg-gray-700 h-2.5 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: skill.percentage }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: true }}
                                className={`skill-progress-fill bg-gradient-to-r ${skill.barFrom} ${skill.barTo} h-2.5 rounded-full relative`}
                            ></motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 relative inline-block">
            My Skills
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl text-center">
             Technologies and tools I leverage to create high-performance web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard title="Frontend Development" iconClass="fas fa-code" iconColor="text-secondary" skills={frontendSkills} />
            <SkillCard title="Backend Development" iconClass="fas fa-server" iconColor="text-green-500" skills={backendSkills} />
            <SkillCard title="Tools & Others" iconClass="fas fa-tools" iconColor="text-pink-500" skills={toolsSkills} />
        </div>
      </div>
    </section>
  )
}
