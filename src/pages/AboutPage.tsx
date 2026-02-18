import { Target, Eye, Leaf, Users, Building2, MapPin, Calendar, Award } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide environmentally responsible e-waste recycling services that protect our planet while creating value from electronic waste through sustainable practices.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading e-waste recycler in the region, recognized for our commitment to environmental sustainability, regulatory compliance, and customer satisfaction.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We are dedicated to minimizing environmental impact by ensuring proper disposal and maximizing material recovery from all electronic waste we process.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'We work closely with businesses, institutions, and individuals to create awareness about responsible e-waste management and its importance.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden border-b border-zinc-100">
        {/* Blueprint Grid & Soft Glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-3 py-1 mb-8 text-xs font-bold tracking-widest uppercase border border-emerald-200 rounded-full text-emerald-700 bg-emerald-50">
            About Us
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-zinc-900 font-extrabold tracking-tight leading-tight mb-8">
            <span className="font-sans">PIONEERING</span>
            <br />
            <span className="font-serif italic text-emerald-600">SUSTAINABILITY</span>
            <br />
            <span className="font-sans text-zinc-900 text-4xl md:text-5xl lg:text-6xl">SINCE 2004</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Tech Logic E-Waste Recyclers (Unit-II) has been at the forefront of responsible electronic waste management for over two decades, providing highly secure, government-authorized recycling services across South India.
          </p>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-24 relative bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            
            {/* Left - Infrastructure Info */}
            <div>
              <span className="text-[#0081ff] font-mono text-xs font-bold tracking-[0.2em] mb-4 block uppercase">01 — Our Infrastructure</span>
              <h2 className="text-4xl md:text-5xl text-zinc-900 font-extrabold mb-8 leading-tight">
                <span className="font-sans uppercase">State-of-the-Art</span>
                <br />
                <span className="font-serif italic text-emerald-600 text-3xl md:text-4xl">Processing Centers</span>
              </h2>
              <p className="text-zinc-600 mb-10 leading-relaxed text-lg">
                Proper e-waste management requires specialized facilities. Our primary unit spans over 4,000 sq. ft. in Bangalore, equipped with advanced manual dismantling and material recovery infrastructure. We also operate in Chennai to ensure rapid compliance support across the region.
              </p>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Building2, title: '4,000+ sq. ft.', sub: 'Primary Facility' },
                  { icon: MapPin, title: '2 Locations', sub: 'Bangalore & Chennai' },
                  { icon: Calendar, title: 'Est. 2004', sub: '20+ Years Exp.' },
                  { icon: Award, title: 'Authorized', sub: 'CPCB Compliant' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-zinc-100 shadow-sm group hover:border-[#0081ff]/30 transition-all">
                    <stat.icon className="w-6 h-6 text-[#0081ff] flex-shrink-0 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                    <div>
                      <p className="font-sans font-bold text-zinc-900 text-sm">{stat.title}</p>
                      <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider mt-1">{stat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image Grid */}
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              <div className="space-y-4">
                <div className="h-[350px] rounded-3xl overflow-hidden border border-zinc-200 bg-white group">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Facility Interior" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="h-[234px] rounded-3xl overflow-hidden border border-zinc-200 bg-white group">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" alt="Hardware" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-[234px] rounded-3xl overflow-hidden border border-zinc-200 bg-white group">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Testing" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="h-[350px] rounded-3xl overflow-hidden border border-zinc-200 bg-white group">
                  <img src="https://images.unsplash.com/photo-1530836369250-ef71a3f5e4bf?q=80&w=2000&auto=format&fit=crop" alt="Eco Recycling" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </div>

          </div>

          {/* Values Section */}
          <div className="pt-24 border-t border-zinc-200">
            <span className="text-[#0081ff] font-mono text-xs font-bold tracking-[0.2em] mb-12 block text-center uppercase">02 — Our Core Values</span>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group relative rounded-3xl p-8 bg-white border border-zinc-100 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 overflow-hidden"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-500 shadow-sm">
                      <value.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-xl text-zinc-900 mb-3 uppercase tracking-tight">
                        {value.title}
                      </h3>
                      <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default AboutPage;