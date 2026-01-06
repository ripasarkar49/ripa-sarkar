import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ setLoading }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 800); // Wait a bit after 100%
          return 100;
        }
        // Non-linear increment for realism
        const increment = prev < 50 ? 5 : prev < 80 ? 3 : 1; 
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, [setLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -500, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div className="w-full max-w-md px-6">
        <div className="flex justify-between items-end mb-4">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="text-white font-black text-4xl tracking-tighter"
            >
                WEL<span className="text-cyan-500">COME</span>
            </motion.div>
             <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="text-white font-mono text-xl"
             >
                {count}%
            </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
             <motion.div 
                className="absolute top-0 left-0 h-full bg-cyan-500"
                initial={{ width: "0%" }}
                animate={{ width: `${count}%` }}
                transition={{ ease: "linear" }}
             />
        </div>
        
        <div className="mt-2 text-right">
             <span className="text-white/30 text-[10px] uppercase tracking-widest">Loading Portfolio...</span>
        </div>
      </div>
    </motion.div>
  );
}
