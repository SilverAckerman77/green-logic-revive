import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, ArrowRight } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white relative overflow-hidden border-t border-zinc-100 pt-24 pb-12">
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-4 pr-8">
            <Link to="/" className="flex items-center gap-3 mb-8 group w-fit">
              <div className="relative">
                <div className="absolute inset-0 bg-[#0081ff]/10 blur-lg rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src="/logo.png" 
                  alt="Tech Logic Logo" 
                  className="h-10 w-auto relative z-10"
                />
              </div>
              <div className="flex flex-col border-l border-zinc-200 pl-3">
                <span className="font-sans font-extrabold text-sm text-zinc-900 leading-tight tracking-tight">
                  TECH LOGIC
                </span>
                <span className="text-[9px] font-mono text-[#0081ff] font-bold tracking-[0.2em]">
                  UNIT - II
                </span>
              </div>
            </Link>
            <p className="text-zinc-500 leading-relaxed mb-8 text-sm">
              Pioneering responsible IT asset disposition and secure e-waste management since 2004. 
              Operating a 100% non-incineration facility in Bangalore, protecting both your data and the planet.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-black text-zinc-900 mb-8 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Compliance', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} 
                    className="text-sm font-medium text-zinc-500 hover:text-emerald-600 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Compliance Info */}
          <div className="lg:col-span-3">
            <h4 className="font-sans font-black text-zinc-900 mb-8 uppercase tracking-widest text-xs">Compliance</h4>
            <ul className="space-y-4">
              {[
                'CPCB Authorizations',
                'EPR Certificates',
                'Data Security Policy',
                'Environmental Policy'
              ].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-sm font-medium text-zinc-500 hover:text-[#0081ff] transition-colors flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-sans font-black text-zinc-900 mb-8 uppercase tracking-widest text-xs">Headquarters</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0" strokeWidth={1.5} />
                <span className="text-xs font-medium text-zinc-500 leading-relaxed">
                  Tech Logic (Unit-II)<br />
                  #36, P.I.D No. 36-139-63, 2nd Main, Ranganathapura<br />
                  Bangalore, Karnataka 560079
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0" strokeWidth={1.5} />
                <a href="tel:+919880400016" className="text-xs font-bold text-zinc-700 hover:text-[#0081ff] transition-colors">
                  +91 9880400016
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-emerald-600 shrink-0" strokeWidth={1.5} />
                <a href="mailto:Jagadish@e-wasterecyclers.com" className="text-xs font-bold text-zinc-700 hover:text-[#0081ff] transition-colors">
                  Jagadish@e-wasterecyclers.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-zinc-400 font-mono font-bold uppercase tracking-[0.3em]">
            &copy; {currentYear} TECH LOGIC E-WASTE RECYCLERS (UNIT-II)
          </p>
          
          {/* Scroll to Top Button */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-bold text-zinc-500 hover:text-[#0081ff] transition-colors uppercase tracking-widest"
          >
            Back to top
            <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center bg-white group-hover:bg-[#0081ff]/5 group-hover:border-[#0081ff]/50 transition-all duration-300 shadow-sm">
              <ArrowUp className="w-4 h-4 text-zinc-400 group-hover:text-[#0081ff]" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;