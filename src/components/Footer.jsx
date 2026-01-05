import { Cpu, Github, Linkedin, Twitter, Instagram, ChevronRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Me", id: "about" },
    { name: "My Skills", id: "skills" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" }, 
  ];

 
  const socialLinks = [
    { icon: Github, href: "https://github.com/ripasarkar49", color: "hover:border-primary/50 hover:bg-primary/10" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ripa-sarkar/", color: "hover:border-blue-500/50 hover:bg-blue-500/10" },
    { icon: Twitter, href: "#", color: "hover:border-sky-400/50 hover:bg-sky-400/10" },
    { icon: Instagram, href: "https://www.instagram.com/ripa.sarkar49/", color: "hover:border-pink-500/50 hover:bg-pink-500/10" }
  ];

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#050505] pt-16 pb-8 overflow-hidden z-20">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-40 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Branding Section */}
            <div className="col-span-1 lg:col-span-1">
                <div className="flex items-center space-x-2 mb-6">
                    <div className="w-8 h-8 bg-gray-900 border border-primary/50 rounded flex items-center justify-center shadow-glow">
                        <Cpu className="text-primary w-4 h-4" />
                    </div>
                    <span className="text-lg font-extrabold tracking-wider text-white">RIPA<span className="text-primary">.IO</span></span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Crafting scalable web solutions with the MERN stack. Focused on clean code and exceptional user experiences.
                </p>
                
                <div className="flex space-x-4">
                    {socialLinks.map((item, i) => (
                        <a 
                          key={i} 
                          href={item.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white ${item.color} transition-all duration-300 group`}
                        >
                             <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                    ))}
                </div>
            </div>

            {/* ডাইনামিক Quick Links */}
            <div className="col-span-1">
                 <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                    Quick Links
                    <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
                </h4>
                <ul className="space-y-3">
                    {quickLinks.map((link, i) => (
                         <li key={i}>
                            <a 
                              href={`#${link.id}`} 
                              className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2 group"
                            >
                                <ChevronRight className="w-3 h-3 text-primary group-hover:translate-x-1 transition-transform" /> 
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Services (Static) */}
            <div className="col-span-1">
                 <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                    Services
                    <span className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-500 rounded-full"></span>
                </h4>
                <ul className="space-y-3">
                     {["Full-Stack Development", "React Interfaces", "Node.js Backends", "Database Design"].map((service, i) => (
                         <li key={i}><span className="text-gray-400 hover:text-white transition-colors text-sm cursor-default">{service}</span></li>
                     ))}
                </ul>
            </div>

            {/* Contact Card (Dynamic mailto link) */}
            <div className="col-span-1">
                 <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                    Direct Contact
                    <span className="absolute -bottom-2 left-0 w-8 h-1 bg-pink-500 rounded-full"></span>
                </h4>
                <div className="space-y-4">
                    <a href="mailto:ripasarkar49@gmail.com" className="block p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 transition-all group">
                        <p className="text-[10px] text-gray-500 font-mono uppercase mb-1">Email Me</p>
                        <p className="text-white text-sm font-bold truncate group-hover:text-primary transition-colors">ripasarkar49@gmail.com</p>
                    </a>
                    <a href="tel:+8801315572442" className="block p-4 bg-white/5 border border-white/10 rounded-xl hover:border-green-500/50 transition-all group">
                        <p className="text-[10px] text-gray-500 font-mono uppercase mb-1">Call Me</p>
                        <p className="text-white text-sm font-bold group-hover:text-green-400 transition-colors">+880 13155 72442</p>
                    </a>
                </div>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-gray-500 text-sm font-mono text-center md:text-left">
                Copyright © {currentYear} <span className="text-white">RipaSarkar.io</span>. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">Terms</a>
            </div>
        </div>
      </div>
    </footer>
  )
}