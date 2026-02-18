import { Truck, ShieldCheck, MonitorSmartphone, Wrench, Recycle, Leaf, FileCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Truck,
      title: 'Doorstep E-Waste Collection',
      description:
        'Convenient pickup services from your location with complete documentation, secure transport, and full chain of custody tracking for every item collected.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Data Destruction',
      description:
        'Certified data wiping and physical destruction services that meet international data security standards, ensuring complete data security and regulatory compliance.',
    },
    {
      icon: MonitorSmartphone,
      title: 'IT Asset Disposition (ITAD)',
      description:
        'End-to-end lifecycle management of IT assets including valuation, remarketing, refurbishment, and certified recycling with full audit trails.',
    },
    {
      icon: Wrench,
      title: 'Manual Dismantling',
      description:
        'Careful manual dismantling of electronic components by trained technicians to maximize material recovery rates while minimizing environmental impact.',
    },
    {
      icon: Recycle,
      title: 'IT Product Refurbishment',
      description:
        'Extending the lifecycle of IT equipment through certified refurbishment processes, reducing e-waste while providing cost-effective solutions for businesses.',
    },
    {
      icon: FileCheck,
      title: 'Compliance Reporting',
      description:
        'Comprehensive documentation and certificates of recycling for regulatory compliance, environmental audits, and corporate sustainability reporting.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="eco-container">
          <span className="eco-badge mb-6">Our Services</span>
          <h1 className="eco-title-italic text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 animate-fade-up">
            <span className="italic">Comprehensive</span>
            <br />
            <span className="italic text-primary">E-Waste Solutions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            From doorstep collection to certified destruction — we handle every stage of
            the e-waste lifecycle with transparency, compliance, and environmental responsibility.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="eco-section-dark">
        <div className="eco-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="eco-card-hover border-border bg-card animate-fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="font-sans text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Incineration Highlight */}
      <section className="eco-section-dark border-t border-border">
        <div className="eco-container">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background p-10 md:p-16">
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-8 h-8 text-primary" />
                <span className="eco-badge">Our Commitment</span>
              </div>
              <h2 className="eco-title-italic text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                <span className="italic">100% Non-Incineration</span>
                <br />
                <span className="italic text-primary">Processing</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We are committed to environmentally safe processing methods. Our facility uses
                zero-incineration techniques, ensuring that no harmful emissions are released during
                the recycling process. All materials are manually dismantled, sorted, and sent to
                authorized downstream processors for safe recovery.
              </p>
              <Button
                variant="default"
                size="lg"
                className="rounded-full px-8"
                onClick={() => navigate('/contact')}
              >
                Request a Pickup
              </Button>
            </div>

            {/* Decorative glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
