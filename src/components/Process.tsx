import { Recycle } from 'lucide-react';

const Process = () => {
  const steps = [
    { label: 'COLLECT', position: 'left-top' },
    { label: 'SORT', position: 'left-mid' },
    { label: 'DISMANTLE', position: 'left-bottom' },
    { label: 'RECOVER', position: 'right-top' },
    { label: 'REFINE', position: 'right-mid' },
    { label: 'REPURPOSE', position: 'right-bottom' },
  ];

  const leftSteps = steps.filter((s) => s.position.startsWith('left'));
  const rightSteps = steps.filter((s) => s.position.startsWith('right'));

  return (
    <section id="process" className="eco-section-dark">
      <div className="eco-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="eco-badge mb-6">(Process)</span>
          <h2 className="eco-title-italic text-4xl md:text-5xl lg:text-6xl text-foreground">
            <span className="italic">CERTIFIED</span>
            <br />
            <span className="italic">PROCESS</span>
          </h2>
        </div>

        {/* Process Diagram */}
        <div className="relative flex items-center justify-center py-16">
          {/* Left Steps */}
          <div className="flex flex-col gap-8 items-end">
            {leftSteps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-4">
                <div className="px-5 py-2.5 rounded-full bg-secondary text-sm font-medium text-foreground">
                  {step.label}
                </div>
                <div
                  className="w-24 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-primary"
                  style={{
                    transform: `rotate(${index === 0 ? -15 : index === 2 ? 15 : 0}deg)`,
                    transformOrigin: 'right center',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Center Icon */}
          <div className="mx-8 md:mx-16 relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl scale-150" />

            {/* Outer Ring */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center animate-pulse-glow">
              {/* Inner Circle */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center">
                <Recycle className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Right Steps */}
          <div className="flex flex-col gap-8 items-start">
            {rightSteps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-4">
                <div
                  className="w-24 md:w-32 h-0.5 bg-gradient-to-l from-transparent via-primary/50 to-primary"
                  style={{
                    transform: `rotate(${index === 0 ? 15 : index === 2 ? -15 : 0}deg)`,
                    transformOrigin: 'left center',
                  }}
                />
                <div className="px-5 py-2.5 rounded-full bg-secondary text-sm font-medium text-foreground">
                  {step.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
