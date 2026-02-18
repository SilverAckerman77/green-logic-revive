import { Truck, ShieldCheck, MonitorSmartphone, Wrench, Recycle, Leaf, FileCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import CyberVault from "@/components/CyberVault";

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Truck,
      title: 'Doorstep E-Waste Collection',
      description: 'Convenient pickup services from your location with complete documentation, secure transport, and full chain of custody tracking for every item collected.',
      accent: 'emerald'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Data Destruction',
      description: 'Certified data wiping and physical destruction services that meet international data security standards, ensuring complete data security and regulatory compliance.',
      accent: 'blue'
    },
    {
      icon: MonitorSmartphone,
      title: 'IT Asset Disposition (ITAD)',
      description: 'End-to-end lifecycle management of IT assets including valuation, remarketing, refurbishment, and certified recycling with full audit trails.',
      accent: 'blue'
    },
    {
      icon: Wrench,
      title: 'Manual Dismantling',
      description: 'Careful manual dismantling of electronic components by trained technicians to maximize material recovery rates while minimizing environmental impact.',
      accent: 'emerald'
    },
    {
      icon: Recycle,
      title: 'IT Product Refurbishment',
      description: 'Extending the lifecycle of IT equipment through certified refurbishment processes, reducing e-waste while providing cost-effective solutions for businesses.',
      accent: 'blue'
    },
    {
      icon: FileCheck,
      title: 'Compliance Reporting',
      description: 'Comprehensive documentation and certificates of recycling for regulatory compliance, environmental audits, and corporate sustainability reporting.',
      accent: 'emerald'
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden border-b border-zinc-100">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Soft Theme Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#0081ff]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-3 py-1 mb-8 text-xs font-bold tracking-widest uppercase border border-emerald-200 rounded-full text-emerald-700 bg-emerald-50">
            Our Solutions
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-zinc-900 font-extrabold tracking-tight leading-tight mb-8">
            <span className="font-sans">COMPREHENSIVE</span>
            <br />
            <span className="font-serif italic text-emerald-600">E-WASTE SERVICES</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed">
            From doorstep collection to certified destruction — we handle every stage of the e-waste lifecycle with transparency, compliance, and absolute environmental responsibility.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative rounded-3xl p-8 bg-white border border-zinc-100 hover:border-[#0081ff]/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 overflow-hidden"
              >
                {/* Icon Container with conditional coloring */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 ${
                  service.accent === 'blue' 
                    ? 'bg-blue-50 group-hover:bg-[#0081ff]' 
                    : 'bg-emerald-50 group-hover:bg-emerald-600'
                }`}>
                  <service.icon className={`w-8 h-8 group-hover:text-white transition-colors duration-500 ${
                    service.accent === 'blue' ? 'text-[#0081ff]' : 'text-emerald-600'
                  }`} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-sans font-bold text-zinc-900 mb-3 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors text-sm">
                  {service.description}
                </p>

                {/* Subtle Interactive Bottom Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0081ff] group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vault highlights your data defense expertise */}
      <CyberVault />

      {/* Commitment Feature */}
      <section className="pb-24 pt-12 relative px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-white border border-zinc-100 shadow-xl p-10 md:p-16 group">
            
            {/* Background Accent */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-700" />
            
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-emerald-50">
                  <Leaf className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
                </div>
                <span className="text-emerald-700 font-bold text-xs uppercase tracking-[0.2em]">Our Commitment</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl text-zinc-900 font-extrabold mb-8 leading-tight">
                <span className="font-sans uppercase">100% Non-Incineration</span>
                <br />
                <span className="font-serif italic text-emerald-600">Processing Strategy</span>
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed mb-10">
                We are committed to environmentally safe processing methods. Our 4,000 sq. ft. Bangalore facility uses zero-incineration techniques, ensuring no harmful emissions are released. All materials are manually dismantled by trained technicians to maximize recovery.
              </p>
              
              <Button
                size="lg"
                className="rounded-full bg-[#0081ff] hover:bg-emerald-600 text-white h-14 px-8 text-base font-bold shadow-lg shadow-blue-500/20 hover:shadow-emerald-500/20 transition-all duration-300 border-none"
                onClick={() => navigate('/contact')}
              >
                Schedule a Secure Pickup
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default ServicesPage;