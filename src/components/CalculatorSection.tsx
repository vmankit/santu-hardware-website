import React, { useState } from 'react';
import { Calculator, PhoneCall } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeData';

export const CalculatorSection: React.FC = () => {
  const [area, setArea] = useState<number>(1200);
  const [quality, setQuality] = useState<'standard' | 'premium' | 'luxury'>('premium');
  const [floors, setFloors] = useState<number>(1);

  // Multipliers based on quality
  const qualityRate = {
    standard: 1650,
    premium: 1950,
    luxury: 2400
  }[quality];

  const totalSqft = area * floors;
  const estimatedTotalCost = totalSqft * qualityRate;

  // Paintable wall area is roughly 3.5x the floor area once walls and ceilings are counted.
  const wallArea = Math.round(totalSqft * 3.5);
  // One litre covers about 110 sq.ft per coat; interiors are normally two coats.
  const interiorLiters = Math.round((wallArea * 0.75 * 2) / 110);
  const exteriorLiters = Math.round((wallArea * 0.25 * 2) / 110);
  const primerLiters = Math.round(wallArea / 140);
  const puttyKg = Math.round(wallArea * 0.11);

  const handleWhatsAppInquiry = () => {
    const msg = `Hi Santu Hardware! I used your paint calculator:
• Floor area: ${area} sq.ft (${floors} floor${floors > 1 ? 's' : ''})
• Paintable wall area: approx ${wallArea} sq.ft
• Finish: ${quality.toUpperCase()}
• Interior emulsion: approx ${interiorLiters} L
• Exterior emulsion: approx ${exteriorLiters} L
• Primer: approx ${primerLiters} L
• Wall putty: approx ${puttyKg} kg
Please share today's rate for Asian Paints / JK Maxx / Birla Opus and confirm stock.`;
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="py-8 md:py-14 bg-gradient-to-br from-amber-50/50 via-white to-emerald-50/30 border-y border-gray-100" id="calculator-section">
      <div className="max-w-7xl mx-auto px-3.5 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#F8C200]/20 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Santu Hardware Contractor Tools</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            Paint Quantity Calculator
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1.5">
            Estimate how much paint, primer and putty your walls need in seconds.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden max-w-4xl mx-auto p-5 md:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Input Controls */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Built-up area slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-gray-700">Built-Up Area (Per Floor):</label>
                  <span className="text-base font-extrabold text-[#059669] font-mono bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-100">
                    {area.toLocaleString()} sq.ft
                  </span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="6000"
                  step="50"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#059669]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-1">
                  <span>400 sq.ft (1 BHK)</span>
                  <span>2,500 sq.ft (Villa)</span>
                  <span>6,000 sq.ft</span>
                </div>
              </div>

              {/* Number of Floors */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Number of Floors:</label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFloors(f)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                        floors === f
                          ? 'bg-[#111827] text-white border-black shadow-sm'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {f === 1 ? 'G' : `G+${f - 1}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Construction Quality */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Construction Quality:</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'standard', name: 'Standard', sub: 'Basic ISI' },
                    { id: 'premium', name: 'Premium', sub: 'Branded' },
                    { id: 'luxury', name: 'Luxury', sub: 'High-end' }
                  ].map((q) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setQuality(q.id as any)}
                      className={`p-2.5 text-left rounded-xl border transition-all ${
                        quality === q.id
                          ? 'bg-emerald-50 border-[#059669] text-[#059669] ring-2 ring-[#059669]/20'
                          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <p className="text-xs font-extrabold">{q.name}</p>
                      <p className="text-[10px] text-gray-500">{q.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary Stats */}
              <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100 space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Total Built-Up Area:</span>
                  <span className="font-bold text-gray-900 font-mono">{totalSqft.toLocaleString()} sq.ft</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Estimated Total Turnkey:</span>
                  <span className="font-bold text-[#059669] font-mono">₹ {(estimatedTotalCost / 100000).toFixed(2)} Lakhs</span>
                </div>
              </div>

            </div>

            {/* Right: Calculated Materials Breakdown */}
            <div className="lg:col-span-7 bg-gray-50/70 p-5 md:p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
                  <h3 className="font-extrabold text-sm md:text-base text-gray-900">
                    Required Material Estimates
                  </h3>
                  <span className="text-[11px] font-bold text-[#059669] bg-emerald-100/60 px-2 py-0.5 rounded-full">
                    IS 456 Standards
                  </span>
                </div>

                {/* 6 Material Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  
                  <div className="bg-white p-3 rounded-xl border border-gray-200/70 shadow-xs">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Wall area</p>
                    <p className="text-lg font-extrabold text-gray-900 font-mono mt-0.5">{wallArea.toLocaleString()}</p>
                    <p className="text-[10px] text-gray-500">Sq.ft to paint</p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-gray-200/70 shadow-xs">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Interior paint</p>
                    <p className="text-lg font-extrabold text-gray-900 font-mono mt-0.5">{interiorLiters}</p>
                    <p className="text-[10px] text-gray-500">Litres, 2 coats</p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-gray-200/70 shadow-xs">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Exterior paint</p>
                    <p className="text-lg font-extrabold text-gray-900 font-mono mt-0.5">{exteriorLiters}</p>
                    <p className="text-[10px] text-gray-500">Litres, 2 coats</p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-gray-200/70 shadow-xs">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Primer</p>
                    <p className="text-lg font-extrabold text-gray-900 font-mono mt-0.5">{primerLiters}</p>
                    <p className="text-[10px] text-gray-500">Litres, 1 coat</p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-gray-200/70 shadow-xs">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Wall putty</p>
                    <p className="text-lg font-extrabold text-gray-900 font-mono mt-0.5">{puttyKg}</p>
                    <p className="text-[10px] text-gray-500">Kg, 2 coats</p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-gray-200/70 shadow-xs">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Brands</p>
                    <p className="text-sm font-extrabold text-gray-900 mt-1 leading-tight">Asian Paints<br />JK Maxx &middot; Birla Opus</p>
                  </div>

                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs py-3 px-5 rounded-xl transition-all shadow-sm active:scale-95 shrink-0"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>WhatsApp Quote</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
