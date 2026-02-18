// src/components/ExplodedHardware.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Monitor, Battery } from 'lucide-react';
import { useRef } from 'react';

const ExplodedHardware = () => {
  const containerRef = useRef(null);
  
  // We use the containerRef so progress is relative ONLY to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // I expanded the range [0.2 to 0.8] so the movement is slower and easier to see
  const y1 = useTransform(scrollYProgress, [0.2, 0.6], [0, -220]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 220]);
  const labelOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const mainOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 0.9], [0, 1, 1, 0]);

  return (
    // Height is set to 200vh to give you a long "scroll runway"
    <section ref={containerRef} className="relative h-[200vh] bg-white overflow-visible">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="text-center mb-16 relative z-50">
          <span className="text-[#0081ff] font-mono text-xs font-bold tracking-[0.3em] uppercase">Manual Dismantling</span>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mt-2 font-sans tracking-tight">TRANSPARENT RECOVERY</h2>
        </div>

        <div className="relative w-full max-w-lg h-96 flex items-center justify-center">
          
          {/* Top Layer: Exterior Case */}
          <motion.div style={{ y: y1 }} className="absolute z-30 p-8 rounded-3xl bg-zinc-100 border border-zinc-200 shadow-2xl flex items-center justify-center">
            <Monitor size={100} className="text-zinc-400" />
            
            {/* Label - ABS Plastic */}
            <motion.div style={{ opacity: labelOpacity }} className="absolute left-[110%] w-48 text-left hidden md:block">
               <div className="h-[1px] w-12 bg-zinc-300 absolute -left-14 top-1/2" />
               <p className="text-[10px] font-mono font-bold text-[#0081ff] uppercase tracking-widest">Secondary Material</p>
               <p className="text-sm font-bold text-zinc-900">ABS Plastic Recovery</p>
            </motion.div>
          </motion.div>

          {/* Middle Layer: The Core (Stays in center) */}
          <motion.div className="absolute z-20 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 shadow-xl flex items-center justify-center">
            <Cpu size={80} className="text-emerald-600 animate-pulse" />
            
            {/* Label - Rare Earth Metals */}
            <motion.div style={{ opacity: labelOpacity }} className="absolute left-[130%] w-48 text-left hidden md:block">
               <div className="h-[1px] w-16 bg-emerald-200 absolute -left-20 top-1/2" />
               <p className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest">High Value Recovery</p>
               <p className="text-sm font-bold text-zinc-900">Rare Earth Metals</p>
            </motion.div>
          </motion.div>

          {/* Bottom Layer: Battery */}
          <motion.div style={{ y: y2 }} className="absolute z-10 p-8 rounded-3xl bg-zinc-50 border border-zinc-100 flex items-center justify-center">
            <Battery size={60} className="text-[#0081ff]" />
            
            {/* Label - Lithium-Ion */}
            <motion.div style={{ opacity: labelOpacity }} className="absolute left-[130%] w-48 text-left hidden md:block">
               <div className="h-[1px] w-16 bg-zinc-300 absolute -left-20 top-1/2" />
               <p className="text-[10px] font-mono font-bold text-[#0081ff] uppercase tracking-widest">Hazardous Isolation</p>
               <p className="text-sm font-bold text-zinc-900">Lithium-Ion Safety</p>
            </motion.div>
          </motion.div>

        </div>

        <motion.div style={{ opacity: mainOpacity }} className="max-w-md text-center mt-32 px-6">
          <p className="text-zinc-500 font-medium text-sm leading-relaxed">
            Unlike industrial shredders, our technicians manually isolate every component to maximize purity and recover precious metals at our 4,000 sq. ft. Bangalore facility.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExplodedHardware;