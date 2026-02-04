import { ArrowRight, Leaf, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 opacity-95"
        style={{
          background: 'linear-gradient(135deg, hsl(150 55% 22%) 0%, hsl(158 45% 30%) 50%, hsl(160 40% 35%) 100%)',
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-eco-mint/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl animate-float" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="eco-container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-up">
              <Leaf className="w-4 h-4 text-eco-mint" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Government Authorized Recycler
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Responsible E-Waste
              <span className="block text-eco-mint">Recycling Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Protecting the environment through certified electronic waste management.
              We transform e-waste into sustainable resources with complete regulatory compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection('#services')}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                onClick={() => scrollToSection('#contact')}
              >
                Request Pickup
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col items-center lg:items-start gap-2 p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm">
                <Shield className="w-6 h-6 text-eco-mint" />
                <span className="text-xs font-medium text-primary-foreground/80 text-center lg:text-left">CPCB Authorized</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2 p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm">
                <Award className="w-6 h-6 text-eco-mint" />
                <span className="text-xs font-medium text-primary-foreground/80 text-center lg:text-left">KSPCB Certified</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2 p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm">
                <Leaf className="w-6 h-6 text-eco-mint" />
                <span className="text-xs font-medium text-primary-foreground/80 text-center lg:text-left">EWA Compliant</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-96 h-96">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-foreground/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-primary-foreground/10" />
              <div className="absolute inset-8 rounded-full bg-primary-foreground/5 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-eco-mint/20 flex items-center justify-center">
                    <Leaf className="w-12 h-12 text-eco-mint" />
                  </div>
                  <p className="text-primary-foreground font-display font-semibold text-lg">
                    Sustainable Future
                  </p>
                  <p className="text-primary-foreground/60 text-sm mt-1">
                    One device at a time
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-eco-mint/20 backdrop-blur-sm flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <Shield className="w-8 h-8 text-eco-mint" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
