import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Recycle, Zap, CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Thematic Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0081ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-xl w-full mx-auto px-6 relative z-10 text-center">
        {/* Animated Icon Section */}
        <div className="relative inline-block mb-12">
          <div className="absolute inset-0 bg-[#0081ff]/10 blur-3xl rounded-full animate-pulse" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-dashed border-zinc-200 flex items-center justify-center bg-white shadow-inner">
            <Recycle className="w-16 h-16 md:w-20 md:h-20 text-[#0081ff] opacity-20 absolute rotate-12" strokeWidth={1} />
            <span className="font-mono text-6xl md:text-7xl font-black text-zinc-900 relative">404</span>
          </div>
          
          {/* Floating Circuit Elements */}
          <div className="absolute -top-4 -right-4 p-3 bg-emerald-50 rounded-2xl border border-emerald-100 shadow-lg animate-bounce-slow">
            <Zap className="w-5 h-5 text-emerald-600" />
          </div>
        </div>

        {/* Text Content */}
        <span className="inline-block px-3 py-1 mb-6 text-[10px] font-mono font-bold tracking-[0.3em] uppercase border border-zinc-200 rounded-full text-zinc-400 bg-white">
          System Error: Component Not Found
        </span>
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6 uppercase">
          Lost in the <br />
          <span className="font-serif italic text-emerald-600 lowercase">circuit?</span>
        </h1>
        
        <p className="text-zinc-500 mb-10 leading-relaxed font-medium">
          The page you are looking for has been decommissioned or moved. Just like your old hardware, 
          it might need to be redirected back to the primary hub.
        </p>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="liquid-button rounded-full bg-[#0081ff] hover:bg-emerald-600 text-white px-8 h-14 font-bold shadow-xl shadow-blue-500/20 transition-all border-none"
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Hub
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-zinc-200 text-zinc-600 hover:bg-zinc-50 h-14 px-8 font-bold"
          >
            <Link to="/contact">Report Issue</Link>
          </Button>
        </div>

        {/* Brand Footer for 404 */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex items-center justify-center gap-2">
          <CircuitBoard className="w-4 h-4 text-zinc-300" />
          <span className="text-[9px] font-mono font-bold text-zinc-300 uppercase tracking-[0.4em]">
            Tech Logic Unit - II
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;