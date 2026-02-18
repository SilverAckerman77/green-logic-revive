import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is e-waste?',
      answer:
        'E-waste, or electronic waste, refers to discarded electronic devices and components such as computers, smartphones, batteries, and cables. Proper recycling at authorized facilities like Tech Logic helps recover valuable materials and prevents harmful substances from polluting the environment.',
    },
    {
      question: 'Know Before Recycling',
      answer:
        'Ensure all personal data is securely erased or physically destroyed—a service we provide as part of our certified process. Remove batteries if possible, and keep accessories together with the main device for comprehensive material recovery.',
    },
    {
      question: 'Why Recycle E-Waste?',
      answer:
        'E-waste contains valuable metals like gold, silver, and rare earth elements. Recycling prevents toxic substances like lead and mercury from contaminating soil while ensuring your organization meets all environmental compliance requirements.',
    },
    {
      question: 'How does the collection process work?',
      answer:
        'It’s simple: Contact us for a quote, schedule a pickup from your office, and our tracked fleet handles the transport. You receive weight receipts and CPCB-authorized certificates of recycling for your records.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase border border-emerald-200 rounded-full text-emerald-700 bg-emerald-50">
              Support
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6">
              <span className="font-sans uppercase">Frequently Asked</span>
              <br />
              <span className="font-serif italic text-emerald-600">Questions</span>
            </h2>
            <p className="text-zinc-600 max-w-md leading-relaxed mb-8">
              Get answers to common questions about e-waste management, our 20-year history in the industry, and how we help your organization stay compliant.
            </p>
            
            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0081ff]/10 flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6 text-[#0081ff]" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 text-sm">Still have questions?</h4>
                <p className="text-xs text-zinc-500 mt-1 mb-3">Our Bangalore facility experts are ready to assist you.</p>
                <button className="text-xs font-bold text-[#0081ff] hover:underline uppercase tracking-widest">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Modern Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-500 border ${
                  openIndex === index 
                    ? 'bg-white border-[#0081ff]/30 shadow-xl shadow-blue-500/5' 
                    : 'bg-zinc-100/50 border-zinc-200/50 hover:border-zinc-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`font-sans font-bold text-lg transition-colors duration-300 ${
                      openIndex === index ? 'text-zinc-900' : 'text-zinc-600'
                    }`}
                  >
                    <span className="text-[#0081ff] font-mono mr-4 opacity-50">0{index + 1}</span>
                    {faq.question}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-[#0081ff] shadow-lg shadow-blue-500/30'
                        : 'bg-zinc-200'
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-500 ${
                        openIndex === index ? 'rotate-180 text-white' : 'text-zinc-500'
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-8 pl-16">
                    <p className="text-zinc-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
