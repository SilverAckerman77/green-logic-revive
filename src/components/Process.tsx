import { useState } from 'react';
import { Recycle, CheckCircle2, X, MapPin, Phone, Mail } from 'lucide-react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(null);

  const processDetails = {
    COLLECT: {
      title: 'Secure Collection',
      info: 'Utilizing our dedicated logistics fleet, we provide tracked doorstep collection from your office or industrial site.',
      fact: 'Ensuring a verified chain of custody from your door to our facility.'
    },
    SORT: {
      title: 'Strategic Sorting',
      info: 'At our specialized facility in Ranganathapura, we isolate data-bearing devices for high-priority security processing.',
      fact: 'Categorized for efficient material recovery and data destruction.'
    },
    DISMANTLE: {
      title: 'Manual Dismantling',
      info: 'We follow a strict manual dismantling process at our 4,000 sq. ft. unit to ensure zero toxic emissions.',
      fact: 'A 100% non-incineration policy to protect the environment.'
    },
    RECOVER: {
      title: 'Material Recovery',
      info: 'Extracting valuable metals and components from dismantled hardware for sustainable secondary use.',
      fact: 'Returning rare materials back into the manufacturing cycle.'
    },
    REFINE: {
      title: 'Purity Refining',
      info: 'Final processing to meet the high standards required by authorized downstream industrial smelters.',
      fact: 'Ensuring 100% compliance with CPCB environmental guidelines.'
    },
    REPURPOSE: {
      title: 'IT Refurbishment',
      info: 'Extending IT asset lifecycles through certified refurbishment, a Tech Logic specialty since 2004.',
      fact: 'Providing eco-friendly, cost-effective hardware for growing businesses.'
    }
  };

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
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase border border-emerald-200 rounded-full text-emerald-700 bg-emerald-50">
            Certified Workflow
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6">
            <span className="font-sans">THE SUSTAINABLE</span>
            <br />
            <span className="font-serif italic text-emerald-600">LIFECYCLE</span>
          </h2>
          <p className="text-zinc-500 text-[10px] font-mono tracking-[0.3em] uppercase animate-pulse">Click a stage for technical details</p>
        </div>

        {/* The Interactive Diagram */}
        <div className="relative flex items-center justify-center py-16">
          
          {/* Left Steps */}
          <div className="flex flex-col gap-10 items-end">
            {leftSteps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-4 group cursor-pointer" onClick={() => setActiveStep(step.label)}>
                <div className={`px-6 py-2.5 rounded-full border text-xs font-mono font-bold tracking-widest transition-all duration-300 ${activeStep === step.label ? 'bg-[#0081ff] text-white border-[#0081ff] shadow-xl shadow-blue-500/30' : 'bg-white border-zinc-200 text-zinc-500 group-hover:border-emerald-500 group-hover:text-emerald-600'}`}>
                  {step.label}
                </div>
                <div className={`w-20 md:w-40 h-[1.5px] bg-gradient-to-r from-transparent via-zinc-200 to-emerald-500 transition-all duration-500 ${activeStep === step.label ? 'opacity-100 scale-x-110' : 'opacity-40'}`} style={{ transform: `rotate(${index === 0 ? -18 : index === 2 ? 18 : 0}deg)`, transformOrigin: 'right center' }} />
              </div>
            ))}
          </div>

          {/* Center Hub Node */}
          <div className="mx-6 md:mx-12 relative">
            <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-3xl scale-150 animate-pulse" />
            <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full border border-zinc-100 bg-white shadow-inner flex items-center justify-center">
              {/* Rotating Outer Orbital */}
              <div className="absolute inset-0 animate-spin-slow">
                 <div className="w-3 h-3 rounded-full bg-[#0081ff] absolute top-0 left-1/2 -translate-x-1/2 shadow-lg" />
              </div>

              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white border-2 border-[#0081ff] flex items-center justify-center shadow-xl">
                <Recycle className="w-12 h-12 md:w-16 md:h-16 text-[#0081ff] animate-spin-slow" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Right Steps */}
          <div className="flex flex-col gap-10 items-start">
            {rightSteps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-4 group cursor-pointer" onClick={() => setActiveStep(step.label)}>
                <div className={`w-20 md:w-40 h-[1.5px] bg-gradient-to-l from-transparent via-zinc-200 to-emerald-500 transition-all duration-500 ${activeStep === step.label ? 'opacity-100 scale-x-110' : 'opacity-40'}`} style={{ transform: `rotate(${index === 0 ? 18 : index === 2 ? -18 : 0}deg)`, transformOrigin: 'left center' }} />
                <div className={`px-6 py-2.5 rounded-full border text-xs font-mono font-bold tracking-widest transition-all duration-300 ${activeStep === step.label ? 'bg-[#0081ff] text-white border-[#0081ff] shadow-xl shadow-blue-500/30' : 'bg-white border-zinc-200 text-zinc-500 group-hover:border-emerald-500 group-hover:text-emerald-600'}`}>
                  {step.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Panel - Blue Highlighted */}
        {activeStep && (
          <div className="mt-12 max-w-2xl mx-auto animate-fade-up">
            <div className="relative p-8 rounded-3xl bg-white border border-zinc-100 shadow-2xl shadow-blue-500/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0081ff]/5 rounded-bl-full pointer-events-none" />
              <button onClick={() => setActiveStep(null)} className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 transition-colors">
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 font-sans">{processDetails[activeStep].title}</h3>
              </div>
              <p className="text-zinc-600 leading-relaxed text-lg mb-6">{processDetails[activeStep].info}</p>
              <div className="pt-6 border-t border-zinc-100">
                <p className="text-[10px] font-mono text-[#0081ff] font-bold uppercase tracking-widest mb-1">Tech Logic Standard</p>
                <p className="text-sm text-zinc-500 italic">"{processDetails[activeStep].fact}"</p>
              </div>
            </div>
          </div>
        )}

        {/* Verified Facility Details */}
        <div className="mt-24 pt-12 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
                <MapPin className="text-[#0081ff]" size={24} />
                <p className="text-xs text-zinc-500 font-mono font-medium max-w-[300px]">
                  #36, 2nd Main, Ranganathapura, Bangalore 560079
                </p>
            </div>
            <div className="flex items-center gap-6">
                <a href="tel:+919880400016" className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-800 hover:text-[#0081ff] transition-colors">
                    <Phone size={16} /> +91 9880400016
                </a>
                <a href="mailto:Jagadish@e-wasterecyclers.com" className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-800 hover:text-[#0081ff] transition-colors">
                    <Mail size={16} /> Jagadish@e-wasterecyclers.com
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;