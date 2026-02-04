import { Recycle, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#process', label: 'Our Process' },
    { href: '#contact', label: 'Contact' },
  ];

  const services = [
    'Computer Recycling',
    'Laptop Disposal',
    'Mobile Device Recycling',
    'Battery Disposal',
    'IT Asset Management',
    'Data Destruction',
  ];

  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="eco-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Recycle className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display font-bold text-primary-foreground text-sm leading-tight block">
                  Tech Logic E-Waste Recyclers
                </span>
                <span className="text-xs text-primary-foreground/60">(Unit-II)</span>
              </div>
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              Government-authorized e-waste recycling facility committed to
              environmentally responsible disposal and recycling of electronic
              equipment.
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 rounded-full bg-primary-foreground/10 text-xs font-medium">
                CPCB Authorized
              </span>
              <span className="px-3 py-1 rounded-full bg-primary-foreground/10 text-xs font-medium">
                KSPCB Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-eco-mint flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Industrial Area, Phase 2<br />
                  Bengaluru, Karnataka - 560058
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-eco-mint flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-sm hover:text-primary-foreground transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-eco-mint flex-shrink-0" />
                <a
                  href="mailto:info@techlogicewaste.com"
                  className="text-sm hover:text-primary-foreground transition-colors"
                >
                  info@techlogicewaste.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="eco-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Tech Logic E-Waste Recyclers (Unit-II).
            All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors group"
          >
            Back to top
            <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
