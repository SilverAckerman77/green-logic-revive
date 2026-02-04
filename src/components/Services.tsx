import { ArrowRight, ArrowLeft, Recycle } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      number: '01',
      title: 'IT Product Refurbishment',
      description:
        'We extend the lifecycle of IT equipment through certified refurbishment processes, reducing e-waste while providing cost-effective solutions for businesses.',
      icon: Recycle,
    },
    {
      number: '02',
      title: 'Doorstep Collection',
      description:
        'Convenient pickup services from your location with complete documentation, secure transport, and chain of custody tracking.',
      icon: null,
    },
    {
      number: '03',
      title: 'Data Destruction',
      description:
        'Certified data wiping and physical destruction services ensuring complete data security and compliance with regulatory requirements.',
      icon: null,
    },
    {
      number: '04',
      title: 'Compliance Reporting',
      description:
        'Comprehensive documentation and certificates of recycling for regulatory compliance and environmental audits.',
      icon: null,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="eco-section-dark">
      <div className="eco-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <span className="eco-badge mb-6">(Services)</span>

            <h2 className="eco-title-italic text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              <span className="italic">BUILT FOR</span>
              <br />
              <span className="italic">IMPACT</span>
            </h2>

            <p className="text-muted-foreground max-w-md mb-8">
              From onboarding to reporting, Tech Logic delivers reliable,
              CPCB-compliant e-waste solutions that support sustainability and scale.
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 text-foreground group"
            >
              <span className="w-10 h-10 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                <ArrowRight className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
              </span>
              <span className="text-sm font-medium">Contact us</span>
            </button>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            {/* Navigation */}
            <div className="flex items-center gap-2 justify-end">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-muted-foreground" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {services.slice(0, 2).map((service, index) => (
                <div
                  key={service.number}
                  className={`rounded-2xl p-6 ${
                    index === 0 ? 'bg-white text-gray-900' : 'eco-card'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className={`font-sans font-semibold text-lg ${
                        index === 0 ? 'text-gray-900' : 'text-foreground'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <span
                      className={`text-xs ${
                        index === 0 ? 'text-gray-500' : 'text-muted-foreground'
                      }`}
                    >
                      ({service.number})
                    </span>
                  </div>

                  {service.icon && (
                    <div className="w-20 h-20 mb-4">
                      <service.icon
                        className={`w-full h-full ${
                          index === 0 ? 'text-primary' : 'text-primary'
                        }`}
                      />
                    </div>
                  )}

                  <p
                    className={`text-sm ${
                      index === 0 ? 'text-gray-600' : 'text-muted-foreground'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
