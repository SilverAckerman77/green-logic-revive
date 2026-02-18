import { useState } from 'react';
import { MapPin, Mail, Phone, ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    alert('Thank you for your inquiry. Tech Logic will contact you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // Modern input styling for white theme
  const inputStyles = "w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#0081ff] focus:ring-1 focus:ring-[#0081ff] transition-all duration-300 shadow-sm";

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left - Form Section */}
          <div>
            <span className="inline-block px-3 py-1 mb-8 text-xs font-bold tracking-widest uppercase border border-emerald-200 rounded-full text-emerald-700 bg-emerald-50">
              Connect With Us
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-zinc-900 font-extrabold tracking-tight mb-12">
              <span className="font-sans">READY TO</span>
              <br />
              <span className="font-serif italic text-emerald-600">GET STARTED?</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className={inputStyles}
                    />
                    <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={inputStyles}
                    />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Corporate Email Address"
                  required
                  className={inputStyles}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we assist with your IT asset disposition?"
                  required
                  rows={5}
                  className={`${inputStyles} resize-none`}
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full rounded-full bg-[#0081ff] hover:bg-emerald-600 text-white h-16 text-lg font-bold shadow-xl shadow-blue-500/20 transition-all duration-300 border-none"
              >
                Send Inquiry
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>

          {/* Right - Info & Location */}
          <div className="space-y-8">
            
            {/* Interactive Location Panel */}
            <div className="rounded-3xl bg-zinc-50 border border-zinc-100 p-8 space-y-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#0081ff]/10 flex items-center justify-center group-hover:bg-[#0081ff] transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-[#0081ff] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-sans font-black text-zinc-900 uppercase tracking-tighter text-sm mb-2">
                    Headquarters
                  </h4>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                    Tech Logic E-Waste Recyclers (Unit-II)<br />
                    #36, P.I.D No. 36-139-63, 2nd Main, Ranganathapura<br />
                    Bangalore, Karnataka - 560079
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-sans font-black text-zinc-900 uppercase tracking-tighter text-sm mb-2">
                    Direct Email
                  </h4>
                  <a
                    href="mailto:Jagadish@e-wasterecyclers.com"
                    className="text-sm text-[#0081ff] font-bold hover:underline"
                  >
                    Jagadish@e-wasterecyclers.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-sans font-black text-zinc-900 uppercase tracking-tighter text-sm mb-2">
                    Phone
                  </h4>
                  <a
                    href="tel:+919880400016"
                    className="text-sm text-zinc-600 font-bold hover:text-[#0081ff] transition-colors"
                  >
                    +91 9880400016
                  </a>
                </div>
              </div>
            </div>

            {/* Map Integration */}
            <div className="rounded-3xl overflow-hidden h-72 border border-zinc-200 shadow-lg group relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8722522096973!2d77.52774012491848!3d12.980021587336099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dc5ccbf3eeb%3A0xb95e5e1e0785ad9a!2sTECHLOGIC%20UNIT%202!5e0!3m2!1sen!2sin!4v1771436416889!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Tech Logic Ranganathapura Facility"
                className="grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;