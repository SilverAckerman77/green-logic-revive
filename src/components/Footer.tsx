import { Recycle, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/compliance', label: 'Compliance & Licenses' },
    { to: '/contact', label: 'Contact' },
  ];

  const services = [
    'IT Refurbishment',
    'Doorstep Collection',
    'Data Destruction',
    'Battery Disposal',
    'Compliance Reports',
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="eco-container py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Recycle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-sans font-bold text-foreground">
                TECHLOGIC
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Government-authorized e-waste recycling facility committed to
              environmentally responsible disposal and recycling.
            </p>
            <div className="flex gap-3">
              <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                CPCB Authorized
              </span>
              <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                KSPCB Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-foreground mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Industrial Area, Phase 2<br />Bengaluru, Karnataka - 560058
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@techlogicewaste.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  info@techlogicewaste.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="eco-container px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Tech Logic E-Waste Recyclers (Unit-II). All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Back to top
            <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:text-primary-foreground" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
