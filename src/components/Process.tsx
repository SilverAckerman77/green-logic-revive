import {
  Phone,
  Truck,
  ClipboardCheck,
  Recycle,
  FileText,
  ArrowRight,
} from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Phone,
      step: '01',
      title: 'Contact Us',
      description:
        'Reach out to us via phone, email, or our contact form to discuss your e-waste recycling needs.',
    },
    {
      icon: ClipboardCheck,
      step: '02',
      title: 'Assessment',
      description:
        'We assess the type and quantity of e-waste and provide a detailed quote for our services.',
    },
    {
      icon: Truck,
      step: '03',
      title: 'Collection',
      description:
        'Our team arranges convenient pickup from your location with proper handling and transportation.',
    },
    {
      icon: Recycle,
      step: '04',
      title: 'Processing',
      description:
        'E-waste is processed at our facility using environmentally approved methods and equipment.',
    },
    {
      icon: FileText,
      step: '05',
      title: 'Certification',
      description:
        'Receive a certificate of recycling confirming proper disposal and compliance documentation.',
    },
  ];

  return (
    <section id="process" className="eco-section">
      <div className="eco-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eco-badge mb-4">Our Process</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            How <span className="text-primary">It Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined process ensures hassle-free e-waste disposal with
            complete transparency and documentation at every step.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-background border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[60px] right-0 translate-x-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                )}

                <div className="text-xs font-semibold text-primary mb-2">
                  STEP {step.step}
                </div>

                <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="eco-card p-6 text-center">
            <div className="text-3xl font-display font-bold text-primary mb-2">
              24-48 hrs
            </div>
            <p className="text-sm text-muted-foreground">
              Typical pickup scheduling time
            </p>
          </div>
          <div className="eco-card p-6 text-center">
            <div className="text-3xl font-display font-bold text-primary mb-2">
              7 Days
            </div>
            <p className="text-sm text-muted-foreground">
              Processing and certification
            </p>
          </div>
          <div className="eco-card p-6 text-center">
            <div className="text-3xl font-display font-bold text-primary mb-2">
              100%
            </div>
            <p className="text-sm text-muted-foreground">
              Documented chain of custody
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
