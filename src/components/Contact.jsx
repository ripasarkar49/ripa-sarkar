import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, ChevronDown, Send, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
    // You can get these from your EmailJS dashboard: https://dashboard.emailjs.com/
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; 

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false);
          setStatus({ type: 'success', message: 'Transmission Successful! Message sent.' });
          form.current.reset();
          setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        },
        (error) => {
          setLoading(false);
          console.error('FAILED...', error.text);
          setStatus({ type: 'error', message: 'Transmission Failed. Please try again.' });
        },
      );
  };

  return (
    <section id="contact" className="relative py-24 bg-background-dark overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info */}
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="flex flex-col space-y-8"
          >
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-900/20 border border-blue-500/30 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-blue-400 text-xs font-mono tracking-widest uppercase">Signal Open</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black text-white leading-tight tracking-tight mb-2">
                LET'S<br/>
                <span className="text-gradient-collab">COLLABORATE</span>
              </h2>
              <div className="flex items-start space-x-4 mt-8 border-l-2 border-red-500/50 pl-6 py-2">
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                   Ready to upgrade your digital presence? Signal me for web development, UI design, or technical consultation.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 pt-4">
               {/* Email Card */}
              <div className="group relative w-full overflow-hidden rounded-2xl bg-[#0F1115] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                <div className="px-6 py-5 flex items-center space-x-5">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                     <Mail className="text-blue-500 w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Email_Transmission</span>
                    <span className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">ripasarkar49@gmail.com</span>
                  </div>
                </div>
                <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>

               {/* Phone Card */}
               <div className="group relative w-full overflow-hidden rounded-2xl bg-[#0F1115] border border-white/5 hover:border-green-500/30 transition-all duration-300">
                <div className="px-6 py-5 flex items-center space-x-5">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                     <Phone className="text-green-500 w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Secure_Chat</span>
                    <span className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-green-400 transition-colors">+880 13155 72442</span>
                  </div>
                </div>
                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="flex flex-col space-y-8"
          >
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-white/10 to-transparent">
               <div className="bg-black rounded-[23px] p-6 md:p-8 relative overflow-hidden">
                  <div className="flex items-center mb-8">
                     <i className="fas fa-bolt text-yellow-400 text-xl mr-3"></i>
                     <h3 className="text-2xl font-bold text-white">Send Message</h3>
                  </div>
                  
                  <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] text-gray-500 font-mono uppercase tracking-wider pl-1">Codename</label>
                          <input required name="user_name" type="text" placeholder="Enter Name" className="w-full cyber-input rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:ring-0 text-sm" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] text-gray-500 font-mono uppercase tracking-wider pl-1">Comm_ID</label>
                          <input required name="user_email" type="email" placeholder="Enter Email" className="w-full cyber-input rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:ring-0 text-sm" />
                       </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] text-gray-500 font-mono uppercase tracking-wider pl-1">Transmission_Data</label>
                        <textarea required name="message" rows="4" placeholder="Type your message..." className="w-full cyber-input rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:ring-0 text-sm resize-none"></textarea>
                    </div>
                    
                    {status.message && (
                        <div className={`p-3 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                            {status.message}
                        </div>
                    )}

                    <button disabled={loading} type="submit" className="w-full py-4 bg-white text-black font-black text-sm tracking-widest uppercase rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                        {loading ? (
                             <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>Transmitting...</span>
                             </>
                        ) : (
                             <>
                                <span>Initiate Send</span>
                                <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                             </>
                        )}
                    </button>
                  </form>
                  <div className="absolute bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-red-500 rounded-br-2xl"></div>
               </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center space-x-2 pl-1 mb-2">
                    <div className="w-1 h-4 bg-red-600"></div>
                    <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest">System Data</h4>
                </div>
                {["Initiate protocol: Web Design?", "Project timeline estimation?", "Security protocols?"].map((item, i) => (
                    <div key={i} className="w-full rounded-xl bg-[#0F1115] border border-white/5 p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors group">
                        <div className="flex items-center space-x-3">
                            <span className="text-blue-500 font-mono text-xs">[+]</span>
                            <span className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">{item}</span>
                        </div>
                        <ChevronDown className="text-gray-600 w-4 h-4" />
                    </div>
                ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
