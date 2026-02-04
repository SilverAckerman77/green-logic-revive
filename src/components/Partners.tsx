const Partners = () => {
  const partners = [
    { name: 'Lenovo', color: '#E2231A' },
    { name: 'brother', color: '#003D79' },
    { name: 'BARTEC', color: '#F7941D' },
    { name: 'EPSON', color: '#003399' },
  ];

  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="eco-container">
        <div className="text-center mb-8">
          <span className="eco-badge">Our Partners</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="text-2xl md:text-3xl font-bold tracking-tight opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              style={{ color: partner.color }}
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
