import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="eco-section bg-eco-sage/30">
      <div className="eco-container">
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-16"
          style={{
            background:
              'linear-gradient(135deg, hsl(150 55% 22%) 0%, hsl(158 45% 30%) 50%, hsl(160 40% 35%) 100%)',
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-eco-mint/10 rounded-full blur-2xl" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
              Ready to Dispose Your E-Waste Responsibly?
            </h2>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
              Get in touch with us today for a free assessment and quote.
              We'll help you dispose of your electronic waste in an environmentally
              responsible manner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                size="xl"
                onClick={scrollToContact}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                onClick={scrollToContact}
              >
                Schedule Pickup
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@techlogicewaste.com"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@techlogicewaste.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
