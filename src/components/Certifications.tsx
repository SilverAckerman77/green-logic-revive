import { Shield, Award, FileCheck, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: Shield,
      acronym: 'CPCB',
      title: 'Central Pollution Control Board',
      description:
        'Authorized by CPCB as a registered e-waste recycler and dismantler under the E-Waste Management Rules.',
      features: [
        'Registered Recycler License',
        'Annual Compliance Audits',
        'Environmental Standards Met',
      ],
    },
    {
      icon: Award,
      acronym: 'KSPCB',
      title: 'Karnataka State Pollution Control Board',
      description:
        'Licensed by KSPCB to operate as an authorized e-waste collection and recycling facility in Karnataka.',
      features: [
        'State Level Authorization',
        'Consent to Operate',
        'Regular Inspections Cleared',
      ],
    },
    {
      icon: FileCheck,
      acronym: 'EWA',
      title: 'E-Waste (Management) Rules',
      description:
        'Fully compliant with E-Waste (Management) Rules, 2016 and subsequent amendments for safe e-waste handling.',
      features: [
        'Extended Producer Responsibility',
        'Channelization Compliance',
        'Documentation & Reporting',
      ],
    },
  ];

  return (
    <section id="certifications" className="eco-section bg-eco-sage/30">
      <div className="eco-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eco-badge mb-4">Certifications</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Trusted & <span className="text-primary">Government Authorized</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our facility operates under strict regulatory oversight with all
            necessary authorizations and certifications to handle electronic waste
            responsibly.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.acronym}
              className="eco-card p-8 text-center group hover:shadow-eco-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <cert.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <div className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-4">
                {cert.acronym}
              </div>

              <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                {cert.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-6">
                {cert.description}
              </p>

              <ul className="space-y-3">
                {cert.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-eco-mint flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-primary text-primary-foreground text-center">
          <h3 className="font-display font-bold text-2xl mb-4">
            100% Regulatory Compliance Guaranteed
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Every piece of electronic waste processed at our facility is handled
            according to government regulations with complete documentation and
            traceability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
