import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is e-waste?',
      answer:
        'E-waste, or electronic waste, refers to discarded electronic devices and components such as computers, smartphones, batteries, cables, and other tech gadgets that are no longer wanted or functional. Proper recycling of e-waste helps recover valuable materials and prevents harmful substances from polluting the environment.',
    },
    {
      question: 'Know Before Recycling',
      answer:
        'Before recycling your electronics, ensure all personal data is backed up and securely erased. Remove batteries if possible, as they often require separate handling. Check if the manufacturer offers take-back programs. Keep accessories and cables together with the main device for complete processing.',
    },
    {
      question: 'Why Recycle E-Waste',
      answer:
        'E-waste contains valuable materials like gold, silver, copper, and rare earth elements that can be recovered and reused. Proper recycling prevents toxic substances like lead, mercury, and cadmium from contaminating soil and water. It conserves natural resources, reduces energy consumption, and helps meet environmental compliance requirements.',
    },
    {
      question: 'How does the collection process work?',
      answer:
        'Our collection process is simple: Contact us with details of your e-waste, we provide a quote, schedule a pickup at your convenience, and our certified team handles secure transport to our facility. You receive complete documentation including weight receipts and certificates of recycling.',
    },
  ];

  return (
    <section id="faq" className="eco-section-dark">
      <div className="eco-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="eco-title-italic text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              <span className="italic">FAQ</span>
            </h2>
            <p className="text-muted-foreground max-w-md">
              Get answers to common questions about e-waste recycling, our
              processes, and how we can help your organization manage electronic
              waste responsibly.
            </p>
          </div>

          {/* Right Content - Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'bg-white' : 'bg-secondary'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`font-sans font-semibold text-lg ${
                      openIndex === index ? 'text-gray-900' : 'text-foreground'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors ${
                      openIndex === index
                        ? 'bg-primary'
                        : 'bg-primary'
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 text-primary-foreground transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p
                    className={`px-6 pb-6 ${
                      openIndex === index ? 'text-gray-600' : 'text-muted-foreground'
                    }`}
                  >
                    {faq.answer}
                  </p>
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
