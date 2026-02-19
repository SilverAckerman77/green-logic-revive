import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Server, Monitor, Battery, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { RECOVERY_FACTORS, RECYCLABLE_ITEMS } from '@/constants/recycling';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const EcoSync = () => {
  const [step, setStep] = useState(1);
  const [inventory, setInventory] = useState<Record<string, number>>({});

  const updateQty = (id: string, delta: number) => {
    setInventory(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const recoveryImpact = Object.entries(inventory).reduce((acc, [id, qty]) => {
  const factors = RECOVERY_FACTORS[id as keyof typeof RECOVERY_FACTORS];
  if (!factors) return acc;
  
  return {
    gold: acc.gold + (factors.gold * qty),
    silver: acc.silver + (factors.silver * qty),
    copper: acc.copper + (factors.copper * qty),
    plastic: acc.plastic + (factors.plastic * qty),
  };
}, { gold: 0, silver: 0, copper: 0, plastic: 0 });

  const totalWeight = Object.entries(inventory).reduce((acc, [id, qty]) => {
    const item = RECYCLABLE_ITEMS.find(i => i.id === id);
    return acc + (item ? item.avgWeight * qty : 0);
  }, 0);

  const generatePDF = () => {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString();

    // 1. Header & Branding
    doc.setFontSize(22);
    doc.setTextColor(0, 129, 255); // Tech Logic Blue
    doc.text("TECH LOGIC E-WASTE RECYCLERS (UNIT-II)", 14, 22);
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text("CPCB Authorized Recycling Facility | Bangalore, India", 14, 30);
    doc.text(`Quote Date: ${date}`, 14, 35);

    // 2. Inventory Table
    const tableRows = Object.entries(inventory)
      .filter(([_, qty]) => qty > 0) // Only include items with quantity
      .map(([id, qty]) => {
        const item = RECYCLABLE_ITEMS.find(i => i.id === id);
        return [item?.label || id, qty, `${((item?.avgWeight || 0) * qty).toFixed(1)} kg` ];
      });

    autoTable(doc, {
      startY: 45,
      head: [['Item Description', 'Quantity', 'Est. Weight']],
      body: tableRows,
      headStyles: { fillColor: [0, 129, 255] },
    });

    // 3. Impact Summary
    const finalY = (doc as any).lastAutoTable.finalY + 10;
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text(`Total Estimated Load: ${totalWeight.toFixed(1)} KG`, 14, finalY);
    
    doc.setFontSize(10);
    doc.setTextColor(34, 197, 94); // Emerald Green
    doc.text("Estimated Recovery: Gold, Silver, and Copper (Certified Manual Dismantling)", 14, finalY + 7);

    // 4. Footer / Compliance
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text("Note: This is an automated estimate for logistics planning. Actual weights verified at facility.", 14, 280);

    doc.save(`TechLogic_Quote_${date.replace(/\//g, '-')}.pdf`);
  };

  return (
    <section className="relative py-24 overflow-hidden">
    {/* Background elements to match Hero */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
    
    <div className="max-w-4xl mx-auto px-6 relative z-10">
      {/* Step Indicator with better contrast */}
      <div className="flex justify-between mb-16">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex-1 px-2">
            <div className={`h-1.5 rounded-full transition-all duration-500 ${step >= s ? 'bg-[#0081ff] shadow-[0_0_10px_rgba(0,129,255,0.3)]' : 'bg-zinc-200'}`} />
            <span className={`text-[10px] font-bold mt-2 block uppercase tracking-tighter ${step >= s ? 'text-[#0081ff]' : 'text-zinc-400'}`}>Step 0{s}</span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-black text-zinc-900 tracking-tighter uppercase mb-2">Inventory Estimator</h2>
              <p className="text-zinc-500 font-medium italic">Select items for manual dismantling at our 4,000 sq. ft. facility.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {RECYCLABLE_ITEMS.map((item) => (
                <div key={item.id} className="group bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-zinc-200 hover:border-[#0081ff]/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-zinc-50 rounded-2xl text-zinc-900 group-hover:bg-[#0081ff] group-hover:text-white transition-colors duration-300">
                        {item.id === 'laptop' && <Laptop size={28} />}
                        {item.id === 'server' && <Server size={28} />}
                        {item.id === 'monitor' && <Monitor size={28} />}
                        {item.id === 'battery' && <Battery size={28} />}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-extrabold text-zinc-900 uppercase tracking-tight">{item.label}</span>
                        <span className="text-[10px] text-zinc-400 font-mono">Est. {item.avgWeight}kg/unit</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center bg-zinc-100 p-1.5 rounded-full border border-zinc-200">
                      <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-600 hover:bg-white transition-colors">-</button>
                      <span className="w-10 text-center font-black text-zinc-900 text-lg">{inventory[item.id] || 0}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-[#0081ff] transition-colors">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {totalWeight > 0 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-6 bg-emerald-50/50 border border-emerald-100 rounded-[32px] grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <div className="text-center">
                  <span className="block text-[9px] font-mono text-emerald-600 uppercase tracking-widest mb-1">Gold Recovered</span>
                  <span className="text-xl font-black text-zinc-900">{recoveryImpact.gold.toFixed(2)}g</span>
                </div>
                <div className="text-center border-l border-emerald-100">
                  <span className="block text-[9px] font-mono text-emerald-600 uppercase tracking-widest mb-1">Silver Salvage</span>
                  <span className="text-xl font-black text-zinc-900">{recoveryImpact.silver.toFixed(2)}g</span>
                </div>
                <div className="text-center border-l border-emerald-100">
                  <span className="block text-[9px] font-mono text-emerald-600 uppercase tracking-widest mb-1">Copper Wire</span>
                  <span className="text-xl font-black text-zinc-900">{recoveryImpact.copper.toFixed(1)}kg</span>
                </div>
                <div className="text-center border-l border-emerald-100">
                  <span className="block text-[9px] font-mono text-emerald-600 uppercase tracking-widest mb-1">Polymer ABS</span>
                  <span className="text-xl font-black text-zinc-900">{recoveryImpact.plastic.toFixed(1)}kg</span>
                </div>
              </motion.div>
            )}


            {/* Weight Readout with High Contrast */}
            <div className="bg-zinc-900 rounded-[32px] p-8 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 shadow-2xl">
              <div className="text-center md:text-left">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] block mb-1">Total Estimated Load</span>
                <span className="text-5xl font-black text-[#0081ff]">{totalWeight.toFixed(1)} <span className="text-xl text-white">KG</span></span>
              </div>
              <Button 
                onClick={() => setStep(2)} 
                className="liquid-button w-full md:w-auto h-16 px-12 rounded-full bg-white text-black font-black uppercase tracking-widest hover:bg-[#0081ff] hover:text-white transition-all duration-500"
                disabled={totalWeight === 0}
              >
                Validate Location
              </Button>
            </div>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
            <h2 className="text-3xl font-black mb-4 uppercase">Step 2: Service Zone</h2>
            <p className="text-zinc-500 mb-8 font-medium italic">Available for Industrial Logistics in Bangalore & Chennai.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <button className="p-8 border-2 border-[#0081ff] bg-blue-50/50 rounded-[32px] flex flex-col items-center gap-3">
                <MapPin className="text-[#0081ff]" />
                <span className="font-bold text-zinc-900">BANGALORE HQ</span>
              </button>
              <button className="p-8 border-2 border-zinc-100 bg-white rounded-[32px] flex flex-col items-center gap-3 grayscale opacity-50">
                <MapPin className="text-zinc-300" />
                <span className="font-bold text-zinc-400">CHENNAI UNIT</span>
              </button>
            </div>
            <Button onClick={() => setStep(3)} className="liquid-button w-full h-16 rounded-full bg-[#0081ff] text-white font-bold uppercase tracking-widest">
              Confirm Pickup Request
            </Button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
            <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/10">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-zinc-900">Request Prepared</h2>
            <p className="text-zinc-500 mb-10 max-w-md mx-auto font-medium">Your estimate for {totalWeight.toFixed(1)}kg is ready. Download your formal quote for internal auditing below.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={generatePDF} className="rounded-full bg-zinc-900 hover:bg-[#0081ff] text-white h-16 px-10 font-black uppercase tracking-widest transition-all duration-500 shadow-xl shadow-zinc-900/20">
                Download PDF Quote
              </Button>
              <Button onClick={() => { setInventory({}); setStep(1); }} variant="outline" className="rounded-full h-16 px-10 border-zinc-200 text-zinc-500 font-bold hover:bg-zinc-50">
                New Estimate
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </section>
  );
};

export default EcoSync;