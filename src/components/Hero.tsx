import { ArrowRight, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      {/* Hero Content */}
      <div className="eco-container relative z-10 pt-28 pb-8 flex-1 flex flex-col">
        <div className="max-w-2xl">
          <h1 className="eco-title-italic text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 animate-fade-up">
            <span className="text-primary">SMART</span>
            <br />
            <span className="text-primary">RECYCLING</span>
          </h1>

          <p
            className="text-lg text-muted-foreground max-w-lg mb-8 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            From onboarding to reporting, Tech Logic delivers reliable,
            CPCB-compliant e-waste solutions that support sustainability and scale.
          </p>
        </div>

        {/* Service Cards */}
        <div
          className="grid md:grid-cols-2 gap-6 mt-auto max-w-4xl animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/80 to-primary p-6 text-primary-foreground">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-sans font-semibold text-xl mb-2">
                  Doorstep E-Waste Collection
                </h3>
                <p className="text-sm opacity-90 max-w-xs">
                  Convenient pickup services from your location with complete
                  documentation and chain of custody.
                </p>
              </div>
              <div className="w-24 h-24 rounded-xl bg-accent/20 flex items-center justify-center">
                <Recycle className="w-12 h-12" />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/80 to-accent p-6 text-primary-foreground">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-sans font-semibold text-xl mb-2">
                  IT Product Refurbishment
                </h3>
                <p className="text-sm opacity-90 max-w-xs">
                  Extending product lifecycle through certified refurbishment
                  and responsible remarketing.
                </p>
              </div>
              <div className="w-24 h-24 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Pattern - Right Side */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/50 to-background z-10" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Bottom CTA Button */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:block animate-fade-up" style={{ animationDelay: '0.3s' }}>
        <Button
          variant="default"
          size="lg"
          onClick={() => scrollToSection('#contact')}
          className="rounded-full px-6"
        >
          Contact us
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
