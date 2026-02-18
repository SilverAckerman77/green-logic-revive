import { useState } from 'react';
import { MapPin, Mail, Phone, ArrowRight, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
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
    alert('Thank you for your inquiry. Tech Logic will contact you soon!');
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  // Modern input styling for white theme
  const inputStyles = "w-full bg-white border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#0081ff] focus:ring-1 focus:ring-[#0081ff] transition-all duration-300 shadow-sm";

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden border-b border-zinc-100">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Soft Theme Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#0081ff]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-3 py-1 mb-8 text-xs font-bold tracking-widest uppercase border border-emerald-200 rounded-full text-emerald-700 bg-emerald-50">
            Connect With Us
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-zinc-900 font-extrabold tracking-tight leading-tight mb-8">
            <span className="font-sans uppercase">LET'S WORK</span>
            <br />
            <span className="font-serif italic text-emerald-600">TOGETHER</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed">
            Ready to responsibly manage your e-waste? Get in touch with our team for a consultation, 
            pickup request, or any questions about our 20+ years of certified recycling excellence.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 relative bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left - Contact Info & Map */}
            <div className="space-y-8">
              {/* Info Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm group hover:border-[#0081ff]/30 transition-all">
                  <MapPin className="w-8 h-8 text-[#0081ff] mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h3 className="font-sans font-black text-zinc-900 text-xs uppercase tracking-widest mb-3">Headquarters</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                    #36, P.I.D No. 36-139-63, 2nd Main, Ranganathapura, Bangalore 560079
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm group hover:border-[#0081ff]/30 transition-all">
                  <Phone className="w-8 h-8 text-[#0081ff] mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h3 className="font-sans font-black text-zinc-900 text-xs uppercase tracking-widest mb-3">Direct Phone</h3>
                  <a href="tel:+919880400016" className="text-xs font-bold text-[#0081ff] hover:underline transition-colors block">
                    +91 9880400016
                  </a>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm group hover:border-emerald-500/30 transition-all">
                  <Mail className="w-8 h-8 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h3 className="font-sans font-black text-zinc-900 text-xs uppercase tracking-widest mb-3">Contact Email</h3>
                  <a href="mailto:Jagadish@e-wasterecyclers.com" className="text-xs font-bold text-emerald-600 hover:underline transition-colors block">
                    Jagadish@e-wasterecyclers.com
                  </a>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm group hover:border-emerald-500/30 transition-all">
                  <Clock className="w-8 h-8 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h3 className="font-sans font-black text-zinc-900 text-xs uppercase tracking-widest mb-3">Working Hours</h3>
                  <p className="text-xs text-zinc-500 font-medium">
                    Mon – Sat: 9:00 AM – 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Map Integration */}
              <div className="rounded-[2rem] overflow-hidden h-72 border border-zinc-200 shadow-lg group relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8722522096973!2d77.52774012491848!3d12.980021587336099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dc5ccbf3eeb%3A0xb95e5e1e0785ad9a!2sTECHLOGIC%20UNIT%202!5e0!3m2!1sen!2sin!4v1771436416889!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Tech Logic Facility Location"
                  className="grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Right - Form Container */}
            <div className="p-10 md:p-12 rounded-[2.5rem] bg-white border border-zinc-100 shadow-2xl shadow-blue-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0081ff]/5 rounded-bl-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="text-[#0081ff] w-6 h-6" />
                  <h2 className="font-sans font-bold text-2xl text-zinc-900 uppercase tracking-tight">Request a Pickup</h2>
                </div>
                <p className="text-zinc-500 text-sm mb-10 leading-relaxed font-medium">
                  Operating our primary 4,000+ sq. ft. facility in Bangalore, we ensure your requests are handled with maximum security.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest ml-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className={inputStyles}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest ml-1">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Organization Name"
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest ml-1">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className={inputStyles}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest ml-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest ml-1">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your corporate e-waste recycling requirements..."
                      required
                      rows={5}
                      className={`${inputStyles} resize-none`}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full rounded-full bg-[#0081ff] hover:bg-emerald-600 text-white h-16 text-lg font-bold shadow-xl shadow-blue-500/20 transition-all duration-300 border-none mt-4"
                  >
                    Send Pickup Request
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <div className="flex items-center justify-center gap-2 mt-6">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">CPCB Certified Secure Process</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;