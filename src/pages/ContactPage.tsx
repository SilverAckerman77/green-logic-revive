import { useState } from 'react';
import { MapPin, Mail, Phone, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you soon!');
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="eco-container">
          <span className="eco-badge mb-6">Get In Touch</span>
          <h1 className="eco-title-italic text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 animate-fade-up">
            <span className="italic">Let's Work</span>
            <br />
            <span className="italic text-primary">Together</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Ready to responsibly manage your e-waste? Get in touch with our team for a consultation,
            pickup request, or any questions about our services.
          </p>
        </div>
      </section>

      {/* Split Layout */}
      <section className="eco-section-dark">
        <div className="eco-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Info & Map */}
            <div className="space-y-6">
              {/* Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="eco-card p-6">
                  <MapPin className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-sans font-semibold text-foreground mb-2">Bangalore Office</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tech Logic E-Waste Recyclers (Unit-II)
                    <br />
                    Industrial Area, Phase 2
                    <br />
                    Bengaluru, Karnataka - 560058
                  </p>
                </div>

                <div className="eco-card p-6">
                  <Phone className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-sans font-semibold text-foreground mb-2">Phone</h3>
                  <a
                    href="tel:+919876543210"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                  >
                    +91 98765 43210
                  </a>
                  <a
                    href="tel:+919876543211"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block mt-1"
                  >
                    +91 98765 43211
                  </a>
                </div>

                <div className="eco-card p-6">
                  <Mail className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-sans font-semibold text-foreground mb-2">Email</h3>
                  <a
                    href="mailto:info@techlogicewaste.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                  >
                    info@techlogicewaste.com
                  </a>
                </div>

                <div className="eco-card p-6">
                  <Clock className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-sans font-semibold text-foreground mb-2">Working Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Mon – Sat: 9:00 AM – 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-muted rounded-2xl flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary/40 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Google Map Placeholder</p>
                  <p className="text-xs text-muted-foreground mt-1">Embed your map here</p>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="eco-card p-8 md:p-10">
              <h2 className="font-sans font-bold text-2xl text-foreground mb-2">Request a Pickup</h2>
              <p className="text-sm text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your e-waste recycling needs..."
                    required
                    rows={5}
                    className="eco-input-dark w-full resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-lg mt-2">
                  Request Pickup
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
