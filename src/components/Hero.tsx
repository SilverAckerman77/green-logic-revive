import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Soft color glows to match your theme */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#0081ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-bold tracking-widest uppercase border border-emerald-200 rounded-full text-emerald-700 bg-emerald-50">
              <Zap className="w-3 h-3 fill-emerald-500" />
              CPCB Authorized Since 2004
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] mb-8">
              <span className="block">REDEFINING</span>
              <span className="font-serif italic text-emerald-600">ELECTRONIC</span>
              <span className="block text-[#0081ff]">RECYCLING.</span>
            </h1>

            <p className="text-xl text-zinc-600 max-w-lg mb-10 leading-relaxed">
              Tech Logic (Unit-II) provides secure, government-approved IT asset disposition. 
              With a 100% non-incineration policy, we protect your data and our planet from our 4,000 sq. ft. Bangalore facility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="liquid-button rounded-full bg-[#0081ff] hover:bg-emerald-600 text-white h-14 px-8 text-base font-bold shadow-xl shadow-blue-500/20 transition-all duration-300 border-none"
                onClick={() => navigate('/contact')}
              >
                Schedule a Pickup
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-zinc-200 text-zinc-700 hover:bg-zinc-50 h-14 px-8"
                onClick={() => navigate('/services')}
              >
                Explore Services
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap gap-8 pt-8 border-t border-zinc-100">
              <div className="flex items-center gap-2 text-zinc-500">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-mono font-bold tracking-tighter uppercase">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <Globe className="w-5 h-5 text-[#0081ff]" />
                <span className="text-xs font-mono font-bold tracking-tighter uppercase">Zero Landfill Policy</span>
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="relative lg:block">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-200 bg-zinc-50/50 p-4 group">
              {/* Glassmorphism Inner Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm z-10 pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2101&auto=format&fit=crop" 
                alt="Electronic processing" 
                className="w-full h-[500px] object-cover rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Floating Status Label */}
              <div className="absolute top-10 right-10 z-20 bg-white/90 backdrop-blur-md border border-emerald-100 p-4 rounded-2xl shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-zinc-800 font-mono">FACILITY ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;