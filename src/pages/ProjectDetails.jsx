import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Layers, AlertCircle, Lightbulb } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/" className="text-cyan-400 hover:text-cyan-300">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-[#050505]">
             {/* Back Button */}
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/>
                    <span className="text-sm font-medium tracking-wide uppercase">Back to Projects</span>
                </Link>
            </div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video md:aspect-[21/9] mb-12 group"
                >
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${project.image}')` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <motion.span 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase"
                                >
                                    {project.subtitle}
                                </motion.span>
                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight"
                                >
                                    {project.title}
                                </motion.h1>
                            </div>
                            
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex gap-4"
                            >
                                <a 
                                    href={project.liveLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-6 rounded-full transition-colors uppercase text-xs tracking-wider"
                                >
                                    Live Demo <ExternalLink size={16} />
                                </a>
                                <a 
                                    href={project.githubLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold py-3 px-6 rounded-full transition-colors uppercase text-xs tracking-wider"
                                >
                                    GitHub <Github size={16} />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
                                PROJECT OVERVIEW
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {project.description}
                            </p>
                        </motion.section>

                        {/* Challenges */}
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <AlertCircle className="text-red-400" size={24} />
                                Challenge & Solutions
                            </h3>
                            <ul className="space-y-4">
                                {project.challenges.map((challenge, index) => (
                                    <li key={index} className="flex gap-4 text-gray-400">
                                        <span className="flex-none mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/50"></span>
                                        <span>{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                         {/* Future Plans */}
                         <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-cyan-900/10 to-purple-900/10 border border-white/10 rounded-2xl p-8"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <Lightbulb className="text-yellow-400" size={24} />
                                Future Improvements
                            </h3>
                             <ul className="space-y-4">
                                {project.improvements.map((improvement, index) => (
                                    <li key={index} className="flex gap-4 text-gray-400">
                                        <span className="flex-none mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400/50"></span>
                                        <span>{improvement}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-32 p-6 rounded-2xl border border-white/10 bg-[#0F0F11]"
                        >
                             <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                                <Layers className="text-cyan-500" size={24} />
                                <h3 className="text-lg font-bold text-white">Tech Stack</h3>
                             </div>
                             
                             <div className="space-y-4">
                                {project.mainTechStack.map((tech, index) => (
                                    <div key={index} className="flex items-center gap-3 group">
                                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                                            <span className="text-xs font-mono text-cyan-400">{index + 1}</span>
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium">{tech}</span>
                                    </div>
                                ))}
                             </div>

                             <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Tags</div>
                                <div className="flex flex-wrap gap-2">
                                     {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-[10px] font-bold tracking-wider text-gray-400 bg-white/5 border border-white/5 rounded-full uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                             </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
