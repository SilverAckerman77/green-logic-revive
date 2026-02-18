import { Target, Eye, Leaf, Users, Building2, MapPin, Calendar, Award } from 'lucide-react';

const AboutPage = () => {
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
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="eco-container">
          <span className="eco-badge mb-6">About Us</span>
          <h1 className="eco-title-italic text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 animate-fade-up">
            <span className="italic">Pioneering</span>
            <br />
            <span className="italic text-primary">Sustainable E-Waste</span>
            <br />
            <span className="italic">Management Since 2004</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Tech Logic E-Waste Recyclers (Unit-II) has been at the forefront of responsible electronic waste management
            for over two decades, providing government-authorized recycling services across South India.
          </p>
        </div>
      </section>

      {/* Facility Section with Bento Grid */}
      <section className="eco-section-dark">
        <div className="eco-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="eco-badge mb-6">Our Facilities</span>
              <h2 className="eco-title-italic text-4xl md:text-5xl text-foreground mb-6">
                <span className="italic">State-of-the-Art</span>
                <br />
                <span className="italic text-primary">Processing Centers</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our primary facility spans over 8,000 sq. ft. in Bangalore, equipped with advanced dismantling
                and material recovery infrastructure. We also operate a branch facility in Chennai to serve
                clients across Tamil Nadu.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary">
                  <Building2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-sans font-semibold text-sm text-foreground">8,000+ sq. ft.</p>
                    <p className="text-xs text-muted-foreground">Primary Facility</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-sans font-semibold text-sm text-foreground">2 Locations</p>
                    <p className="text-xs text-muted-foreground">Bangalore & Chennai</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-sans font-semibold text-sm text-foreground">Est. 2004</p>
                    <p className="text-xs text-muted-foreground">20+ Years Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-sans font-semibold text-sm text-foreground">CPCB Authorized</p>
                    <p className="text-xs text-muted-foreground">Govt. Compliant</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Grid Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://placehold.co/600x400/1a1a1a/22c55e?text=Facility+Image"
                  alt="Tech Logic recycling facility"
                  className="w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <img
                  src="https://placehold.co/600x300/1a1a1a/22c55e?text=Processing+Area"
                  alt="E-waste processing area"
                  className="w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://placehold.co/600x300/1a1a1a/22c55e?text=Dismantling+Unit"
                  alt="Dismantling unit"
                  className="w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <img
                  src="https://placehold.co/600x400/1a1a1a/22c55e?text=Warehouse"
                  alt="Warehouse and storage"
                  className="w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>
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
        </div>
      </section>
    </>
  );
};

export default AboutPage;
