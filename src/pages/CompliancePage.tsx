import { FileCheck, ShieldCheck, Award, Scale, Download, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CompliancePage = () => {
  const certifications = [
    {
      title: 'CPCB Authorization',
      authority: 'Central Pollution Control Board',
      description: 'Fully authorized for the collection, storage, and manual dismantling of e-waste under national E-Waste (Management) Rules.',
      icon: FileCheck,
    },
    {
      title: 'ISO 14001:2015',
      authority: 'Environmental Management',
      description: 'Certified for international standards in minimizing environmental footprint and ensuring strict legal compliance at our Bangalore facility.',
      icon: Award,
    },
    {
      title: 'ISO 9001:2015',
      authority: 'Quality Management System',
      description: 'Ensuring consistent quality in IT asset refurbishment and recycling processes through rigorous internal audits.',
      icon: ShieldCheck,
    },
    {
      title: 'EPR Compliance',
      authority: 'Extended Producer Responsibility',
      description: 'Authorized to help manufacturers and importers meet their annual e-waste recycling targets through secure processing.',
      icon: Scale,
    },
  ];

  const documents = [
    { name: 'Green Certificate (Sample)', size: '1.2 MB', type: 'PDF' },
    { name: 'Data Destruction Certificate', size: '850 KB', type: 'PDF' },
    { name: 'E-Waste Management Policy', size: '2.4 MB', type: 'PDF' },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden border-b border-zinc-100">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Soft Theme Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#0081ff]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-3 py-1 mb-8 text-xs font-bold tracking-widest uppercase border border-blue-200 rounded-full text-[#0081ff] bg-blue-50">
            Regulatory Excellence
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-zinc-900 font-extrabold tracking-tight leading-tight mb-8">
            <span className="font-sans">CERTIFIED FOR</span>
            <br />
            <span className="font-serif italic text-emerald-600">RESPONSIBILITY</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Fully authorized by the CPCB and SPCB since 2004 to handle IT asset disposition with a 100% zero-landfill and non-incineration policy.
          </p>
        </div>
      </section>

      {/* Main Certifications Grid */}
      <section className="py-24 relative bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="group relative rounded-3xl p-8 bg-white border border-zinc-100 shadow-sm hover:border-[#0081ff]/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 overflow-hidden"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-500">
                    <cert.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-1 font-sans uppercase tracking-tight">{cert.title}</h3>
                    <p className="text-[#0081ff] font-mono text-[10px] font-bold tracking-[0.2em] mb-4 uppercase">{cert.authority}</p>
                    <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
                {/* Subtle Interactive Bottom Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0081ff] group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Downloads Section */}
      <section className="py-24 bg-white border-t border-zinc-100 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: Text */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl text-zinc-900 font-extrabold mb-6 font-sans uppercase tracking-tight leading-tight">
                Audit-Ready <br /> <span className="text-emerald-600 italic font-serif lowercase">Documentation</span>
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-8">
                Every pickup is followed by a comprehensive audit trail. We provide the necessary environmental permits and certificates required for your corporate ESG reporting and ISO audits.
              </p>
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-inner">
                <p className="text-emerald-800 text-sm font-bold italic leading-relaxed">
                  "Tech Logic operates a strictly manual dismantling facility, ensuring no harmful chemicals are released, staying 100% compliant with National Environmental Standards."
                </p>
              </div>
            </div>

            {/* Right side: Download Cards */}
            <div className="lg:col-span-7 space-y-4">
              {documents.map((doc, i) => (
                <div 
                  key={i}
                  className="flex items-center justify-between p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-[#0081ff]/20 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-zinc-200 text-zinc-400 group-hover:text-[#0081ff] transition-colors shadow-sm">
                      <Download className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-zinc-900 font-bold text-sm uppercase tracking-tight">{doc.name}</h4>
                      <p className="text-[10px] text-zinc-400 font-mono mt-1 font-bold uppercase tracking-wider">{doc.type} • {doc.size}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-[#0081ff] group-hover:bg-blue-50 transition-all font-bold text-xs uppercase tracking-widest">
                    View
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Trust Band / CTA */}
      <section className="py-24 text-center px-6 bg-zinc-50/50">
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-8 font-sans uppercase tracking-tight">Need an environmental audit?</h2>
        <Button 
          size="lg" 
          className="rounded-full bg-[#0081ff] hover:bg-emerald-600 text-white h-16 px-10 text-base font-bold shadow-xl shadow-blue-500/20 hover:shadow-emerald-500/20 transition-all duration-300 border-none"
          onClick={() => window.location.href = '/contact'}
        >
          Consult with a Compliance Expert
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </section>

    </div>
  );
};

export default CompliancePage;