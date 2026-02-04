import {
  Monitor,
  Laptop,
  Smartphone,
  Printer,
  HardDrive,
  Battery,
  Cpu,
  Server,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Computer & Monitors',
      description:
        'Safe disposal and recycling of desktop computers, monitors, and display units with complete data destruction.',
      items: ['Desktop PCs', 'LCD/LED Monitors', 'CRT Monitors', 'All-in-One PCs'],
    },
    {
      icon: Laptop,
      title: 'Laptops & Tablets',
      description:
        'Secure recycling of portable computing devices including laptops, notebooks, and tablet computers.',
      items: ['Laptops', 'Notebooks', 'Tablets', 'E-readers'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Devices',
      description:
        'Responsible recycling of smartphones, feature phones, and other mobile communication devices.',
      items: ['Smartphones', 'Feature Phones', 'Pagers', 'Mobile Accessories'],
    },
    {
      icon: Printer,
      title: 'Printers & Peripherals',
      description:
        'Eco-friendly disposal of printers, scanners, and office peripherals with toner cartridge recycling.',
      items: ['Inkjet Printers', 'Laser Printers', 'Scanners', 'Fax Machines'],
    },
    {
      icon: HardDrive,
      title: 'Storage Devices',
      description:
        'Secure destruction and recycling of data storage devices with certified data wiping procedures.',
      items: ['Hard Drives', 'SSDs', 'USB Drives', 'Memory Cards'],
    },
    {
      icon: Battery,
      title: 'Batteries & UPS',
      description:
        'Safe handling and recycling of batteries and uninterruptible power supply systems.',
      items: ['Lead-acid Batteries', 'Lithium Batteries', 'UPS Systems', 'Power Banks'],
    },
    {
      icon: Cpu,
      title: 'IT Components',
      description:
        'Recovery and recycling of IT components including circuit boards and electronic parts.',
      items: ['Motherboards', 'RAM Modules', 'Graphics Cards', 'Cables'],
    },
    {
      icon: Server,
      title: 'Servers & Networking',
      description:
        'Enterprise-grade recycling services for servers, network equipment, and data center hardware.',
      items: ['Rack Servers', 'Routers', 'Switches', 'Network Cables'],
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="eco-section">
      <div className="eco-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eco-badge mb-4">Our Services</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Comprehensive <span className="text-primary">E-Waste Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We handle all types of electronic waste with certified processes,
            ensuring environmentally responsible recycling and maximum material
            recovery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="eco-card-hover p-6 group cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {service.description}
              </p>

              <ul className="space-y-1">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" onClick={scrollToContact}>
            Request a Service Quote
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
