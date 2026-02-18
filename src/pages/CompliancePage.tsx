import { ShieldCheck, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CompliancePage = () => {
  const certificates = [
    {
      title: 'KSPCB Authorization',
      issuer: 'Karnataka State Pollution Control Board',
      description: 'State-level authorization for e-waste collection, storage, dismantling, and recycling operations.',
    },
    {
      title: 'CPCB Guidelines Compliance',
      issuer: 'Central Pollution Control Board',
      description: 'Adherence to central government guidelines for environmentally sound management of e-waste.',
    },
    {
      title: 'ISO 14001:2015',
      issuer: 'Environmental Management System',
      description: 'International standard for effective environmental management systems and sustainable practices.',
    },
    {
      title: 'ISO 27001',
      issuer: 'Information Security Management',
      description: 'Certification for secure data handling and destruction processes meeting global standards.',
    },
    {
      title: 'E-Waste Authorization (EWA)',
      issuer: 'Ministry of Environment',
      description: 'Federal authorization under E-Waste Management Rules for collection, dismantling, and recycling.',
    },
    {
      title: 'GST Registration',
      issuer: 'Government of India',
      description: 'Registered under Goods and Services Tax for transparent and compliant business operations.',
    },
    {
      title: 'TNPCB Authorization',
      issuer: 'Tamil Nadu Pollution Control Board',
      description: 'State-level authorization for our Chennai branch facility operations.',
    },
    {
      title: 'Trade License',
      issuer: 'Local Municipal Authority',
      description: 'Valid trade license for operation of e-waste recycling facility in the designated industrial area.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="eco-container">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <span className="eco-badge">Compliance</span>
          </div>
          <h1 className="eco-title-italic text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 animate-fade-up">
            <span className="italic">Government</span>
            <br />
            <span className="italic text-primary">Authorizations</span>
            <br />
            <span className="italic">& Certifications</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Tech Logic operates under strict adherence to all applicable environmental safety protocols
            and regulatory frameworks. Below are our key authorizations and certifications.
          </p>
        </div>
      </section>

      {/* Certificate Gallery */}
      <section className="eco-section-dark">
        <div className="eco-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className="eco-card-hover p-6 flex flex-col animate-fade-up"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                {/* Certificate Placeholder */}
                <div className="aspect-[3/4] bg-muted flex items-center justify-center rounded-lg border border-border mb-4">
                  <div className="text-center p-4">
                    <ShieldCheck className="w-10 h-10 text-primary/40 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground font-medium">Certificate Placeholder</p>
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-sans font-semibold text-foreground mb-1">{cert.title}</h3>
                <p className="text-xs text-primary mb-2">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {cert.description}
                </p>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 rounded-lg text-xs" disabled>
                    <Eye className="w-3.5 h-3.5 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 rounded-lg text-xs" disabled>
                    <Download className="w-3.5 h-3.5 mr-1" />
                    Download PDF
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 rounded-2xl bg-secondary border border-border">
            <p className="text-sm text-muted-foreground text-center">
              All certificates and authorizations shown above are placeholders. Actual scanned documents
              will be uploaded in their place. For verification of any license, please{' '}
              <a href="/contact" className="text-primary hover:underline">contact us</a> directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompliancePage;
