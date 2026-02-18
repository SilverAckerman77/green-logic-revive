import { Target, Eye, Leaf, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To provide environmentally responsible e-waste recycling services that protect our planet while creating value from electronic waste through sustainable practices.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'To be the leading e-waste recycler in the region, recognized for our commitment to environmental sustainability, regulatory compliance, and customer satisfaction.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description:
        'We are dedicated to minimizing environmental impact by ensuring proper disposal and maximizing material recovery from all electronic waste we process.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description:
        'We work closely with businesses, institutions, and individuals to create awareness about responsible e-waste management and its importance.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Blue/Green Background Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#0081ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase border border-emerald-200 rounded-full text-emerald-700 bg-emerald-50">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 mb-8 leading-tight">
            <span className="font-sans">Committed to a</span>
            <br />
            <span className="font-serif italic text-emerald-600">Sustainable Future</span>
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Tech Logic E-Waste Recyclers (Unit-II) is a government-authorized
            electronic waste recycling facility. Operating from our 4,000 sq. ft. Bangalore center, we are committed to 100% non-incineration and responsible disposal.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="relative p-8 rounded-3xl bg-zinc-50 border border-zinc-100 group hover:border-[#0081ff]/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 transition-all duration-300">
                  <value.icon className="w-7 h-7 text-emerald-700 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-zinc-900 mb-3 uppercase tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section - Reflecting Tech Logic Experience */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          {[
            { label: 'Years of Experience', value: '20+' }, // Updated for 2004 founding
            { label: 'Manual Dismantling', value: '100%' }, // Grounded in 100% manual process
            { label: 'Client Satisfaction', value: '99%' },
            { label: 'Regulatory Compliance', value: 'Full' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm group hover:border-[#0081ff]/30 transition-colors"
            >
              <div className="font-sans font-black text-3xl md:text-4xl text-[#0081ff] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;