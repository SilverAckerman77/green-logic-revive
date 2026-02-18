// src/components/CyberVault.tsx
import { ShieldAlert, Lock, Search, Terminal } from 'lucide-react';

const CyberVault = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Scanning Laser Animation */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#0081ff]/50 shadow-[0_0_20px_#0081ff] animate-scan-line z-20" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#0081ff]/20 rounded-lg">
              <ShieldAlert className="text-[#0081ff]" size={20} />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081ff]">SECURITY PROTOCOL</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            DATA DESTRUCTION <br /> <span className="text-zinc-500 italic font-serif">THE VAULT</span>
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#0081ff]/30 transition-all">
              <Lock className="text-[#0081ff] shrink-0" />
              <p className="text-sm text-zinc-400">Military-grade software sanitization exceeding DoD 5220.22-M standards.</p>
            </div>
            <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-all">
              <Search className="text-emerald-500 shrink-0" />
              <p className="text-sm text-zinc-400">100% verified audit trails with serialized destruction certificates.</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-[#0081ff]/10 rounded-3xl blur-3xl group-hover:bg-[#0081ff]/20 transition-all" />
          <div className="relative bg-black rounded-3xl border border-white/10 p-8 font-mono text-xs overflow-hidden">
            <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-4 text-zinc-600">secure_wipe_process.log</span>
            </div>
            <div className="space-y-2 text-emerald-500/80">
              <p className="">[INFO] INITIALIZING DATA SANITIZATION...</p>
              <p className="">[OK] STORAGE MEDIA DETECTED: NVMe SSD 1TB</p>
              <p className="animate-pulse">[BUSY] PERFORMING 7-PASS OVERWRITE...</p>
              <p className="">[OK] BINARY ZERO-FILL COMPLETE</p>
              <p className="text-[#0081ff]">[CERTIFIED] DESTRUCTION KEY GENERATED</p>
            </div>
            <Terminal className="absolute bottom-4 right-4 text-white/5 w-24 h-24" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberVault;