import { ArrowRight, Recycle, Truck, ShieldAlert, FileText, MonitorSmartphone, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      number: '01',
      title: 'IT Asset Refurbishment',
      description: 'Extending hardware lifecycles through certified processes, a Tech Logic specialty since 2004.',
      icon: Recycle,
    },
    {
      number: '02',
      title: 'Doorstep Collection',
      description: 'Secure, tracked pickup services from your corporate location with full chain-of-custody documentation.',
      icon: Truck,
    },
    {
      number: '03',
      title: 'Data Destruction',
      description: 'Certified physical and software-based data destruction meeting international security standards.',
      icon: ShieldAlert,
    },
    {
      number: '04',
      title: 'Compliance Reporting',
      description: 'Government-authorized certificates and audit-ready documentation for your corporate ESG requirements.',
      icon: FileText,
    },
    {
      number: '05',
      title: 'ITAD Services',
      description: 'Comprehensive IT Asset Disposition covering valuation, remarketing, and responsible end-of-life recycling.',
      icon: MonitorSmartphone,
    },
    {
      number: '06',
      title: 'Manual Dismantling',
      description: 'Our 100% non-incineration policy ensures zero harmful emissions at our Bangalore facility.',
      icon: Wrench,
    },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0081ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase border border-emerald-200 rounded-full text-emerald-700 bg-emerald-50">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6">
              <span className="font-sans">BUILT FOR</span>
              <br />
              <span className="font-serif italic text-emerald-600">ENVIRONMENTAL IMPACT</span>
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              From our 4,000 sq. ft. Bangalore headquarters, we deliver CPCB-compliant solutions 
              that prioritize both data security and the circular economy.
            </p>
          </div>
          
          <button
            onClick={() => navigate('/services')}
            className="group inline-flex items-center gap-3 text-zinc-900 hover:text-[#0081ff] transition-colors font-bold uppercase text-xs tracking-widest"
          >
            View All Services
            <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-[#0081ff] group-hover:bg-[#0081ff]/5 transition-all">
              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-[#0081ff]" />
            </div>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="group relative p-8 rounded-3xl bg-white border border-zinc-100 hover:border-[#0081ff]/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 overflow-hidden"
            >
              {/* Service Number Accent */}
              <span className="absolute top-8 right-8 text-4xl font-black text-zinc-50 group-hover:text-[#0081ff]/5 transition-colors">
                {service.number}
              </span>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-zinc-900 mb-4 font-sans tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative Blue Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0081ff] group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;