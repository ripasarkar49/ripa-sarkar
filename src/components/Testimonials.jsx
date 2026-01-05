import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO, TechStart Inc.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD62LFkea6PdFGBPgcJUDZl0a2yap2lzFkn7d0MQQ3hFmI6ggFzQh2yJXFhVPIvkyn4mE1TJPREr6xnRKKS756GO4q4Aqe3Fq_9wIqoGRWszJ2GHAonauP141VyVfZ1S1urEjSD9_MK2tW9YUT4OSM0iWvxENoAOCntMWreNIFzdiRYYDwMsWCnkPjVmtYRM9TU_7hT3Snx5p_9XRlbOUh4edqkxKJuBCwH8OksWiB1CYaiolaIOm_cmvy_WJegvpxsEFJxYkLPYubD",
      quote: "Ripa delivered our e-commerce platform ahead of schedule. The attention to detail in the backend architecture ensured our site runs smoothly even during high traffic. Highly recommended!",
      stars: 5,
      borderColor: "border-primary/20",
      groupColor: "group-hover:text-primary",
      hoverBorder: "hover:border-primary/50"
    },
    {
      name: "David Chen",
      role: "Product Manager",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBavuGI8AlaKakDQCcdMfJQdWhIiSos0PzKaFWE2hr2E6VLlkYIuGFTdTdjE6EkrIwFGL2E9oFpnnyuJ-THScUtDCHs0MtKHTxwvvB9WfpGfT8mAjc18NiIZ_NaXJBCB1N0wjyK5blzbgVXatj0NInQEQNXucNq-HzcBP6H2J0L-0yBLOBuHFMWqjXeYpIjDvZ6t9RnZo-uD_8adyylbV2-NsGP_d2Q9tvNaxXCLvEb-idesSzFQ10Rz1wqPsVu3rTpzjQUF_YA2Ygm",
      quote: "Working with Ripa was a fantastic experience. His expertise in React and state management helped us solve complex UI challenges. The final product is incredibly fast and user-friendly.",
      stars: 4.5,
      borderColor: "border-secondary/20",
      groupColor: "group-hover:text-secondary",
 hoverBorder: "hover:border-secondary/50"
    },
    {
      name: "Elena Rodriguez",
      role: "Founder, CreativeHub",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAD8ywSpa5qC-E4aH9SUqo3ezNJLo2IiseBkhSgTWRsfWKH6xO3JrPHeuYu-gV5YNYtN4AgMTp4YjzZ6ncm8FiCRqnESJLU_xcLiTlefse4lXuzy1esKvE0OGxH8PldXiW9YutkS-Ycsp_I-oadL9H_VxGEp5IAKtfmxIZOBoWEBf78-Wo8asSxifmksMQ7P40SUKXeDVVGlmvfxcwj9aWjWB9sr8yQLDKBTWD7QuiZK83U7X0Ld5BgOVPgdmr1dT07YP5UG8qXUFkY",
      quote: "From the initial concept to deployment, Ripa showed great professionalism. The custom dashboard he built has streamlined our internal operations significantly. A true MERN stack expert.",
      stars: 5,
      borderColor: "border-accent-pink/20",
      groupColor: "group-hover:text-accent-pink",
      hoverBorder: "hover:border-accent-pink/50"
    }
  ];

  const Stars = ({ count }) => {
    const fullStars = Math.floor(count);
    const hasHalf = count % 1 !== 0;
    return (
        <div className="mt-6 flex text-yellow-500 text-xs">
            {[...Array(fullStars)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
            {hasHalf && <i className="fas fa-star-half-alt"></i>}
        </div>
    )
  }

  return (
    <section id="testimonials" className="relative py-24 border-t border-gray-800/30 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-[100%] blur-[100px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 relative inline-block text-center">
            Client Testimonials
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl text-center">
            Feedback from clients and collaborators I've had the pleasure of working with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               viewport={{ once: true }}
               className={`bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 relative ${testimonial.hoverBorder} transition-all duration-300 group hover:-translate-y-1`}
             >
                <div className="absolute -top-4 -right-4 text-6xl text-white/5 font-serif group-hover:text-primary/10 transition-colors">"</div>
                <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${testimonial.borderColor} bg-gray-800`}>
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h4 className={`text-white font-bold text-lg ${testimonial.groupColor} transition-colors`}>{testimonial.name}</h4>
                        <p className="text-gray-500 text-xs uppercase tracking-wider font-medium">{testimonial.role}</p>
                    </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed text-sm">"{testimonial.quote}"</p>
                <Stars count={testimonial.stars} />
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
