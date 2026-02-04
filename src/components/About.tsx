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
    <section id="about" className="eco-section-dark">
      <div className="eco-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eco-badge mb-6">About Us</span>
          <h2 className="eco-title-italic text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            <span className="italic">Committed to a</span>
            <br />
            <span className="italic text-primary">Sustainable Future</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tech Logic E-Waste Recyclers (Unit-II) is a government-authorized
            electronic waste recycling facility committed to environmentally
            responsible disposal and recycling of electronic equipment.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="eco-card-hover p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Years of Experience', value: '10+' },
            { label: 'Certified Processes', value: '100%' },
            { label: 'Client Satisfaction', value: '99%' },
            { label: 'Regulatory Compliance', value: 'Full' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-secondary border border-border"
            >
              <div className="font-sans font-bold text-3xl md:text-4xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
