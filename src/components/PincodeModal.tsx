import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, MapPin, Zap, AlertCircle } from 'lucide-react';

export const PincodeModal: React.FC = () => {
  const { isPincodeModalOpen, closePincodeModal, selectedPincode, changePincode } = useCart();
  const [pin, setPin] = useState(selectedPincode);
  const [result, setResult] = useState<{ serviceable: boolean; time: string } | null>(null);

  if (!isPincodeModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.length === 6) {
      const res = changePincode(pin);
      setResult(res);
      if (res.serviceable) {
        setTimeout(() => {
          closePincodeModal();
        }, 1200);
      }
    }
  };

  const samplePincodes = [
    { pin: '841411', area: 'Ishauvpur, Saran', time: 'Same day' },
  ];

  const handleSelectQuick = (p: string) => {
    setPin(p);
    const res = changePincode(p);
    setResult(res);
    setTimeout(() => {
      closePincodeModal();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={closePincodeModal} />
      
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={closePincodeModal}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-3">
          <div className="size-10 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-base text-gray-900">Check Delivery Time</h3>
            <p className="text-xs text-gray-500">Delivery area around Ishauvpur, Saran</p>
          </div>
        </div>

        <p className="text-xs text-gray-600 mb-4 leading-relaxed">
          Enter your 6-digit pincode and we will tell you if it falls in our free 30 km delivery area.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              maxLength={6}
              value={pin}
              onChange={(e) => {
                setPin(e.target.value.replace(/\D/g, ''));
                setResult(null);
              }}
              placeholder="e.g. 841411"
              className="flex-1 bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono font-bold text-gray-900 outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20"
              autoFocus
            />
            <button
              type="submit"
              className="bg-[#111827] hover:bg-black text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors"
            >
              Verify
            </button>
          </div>
        </form>

        {result && (
          <div
            className={`mt-4 p-3.5 rounded-xl border text-xs font-semibold flex items-center gap-2 animate-in fade-in ${
              result.serviceable
                ? 'bg-emerald-50 border-emerald-200 text-[#059669]'
                : 'bg-amber-50 border-amber-200 text-amber-800'
            }`}
          >
            {result.serviceable ? (
              <>
                <Zap className="w-4 h-4 fill-current shrink-0" />
                <span>🎉 <strong>{result.time} Express Delivery</strong> confirmed for {pin}!</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Pincode {pin} is outside 60-min express grid. Same-day available.</span>
              </>
            )}
          </div>
        )}

        {/* Quick select chips */}
        <div className="mt-5 pt-4 border-t border-gray-100">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
            Our delivery area:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {samplePincodes.map((sp) => (
              <button
                key={sp.pin}
                type="button"
                onClick={() => handleSelectQuick(sp.pin)}
                className="flex items-center justify-between p-2 rounded-xl bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 border border-gray-200 text-left transition-colors"
              >
                <div>
                  <span className="font-extrabold text-xs text-gray-900 font-mono">{sp.pin}</span>
                  <p className="text-[10px] text-gray-500">{sp.area}</p>
                </div>
                <span className="text-[10px] font-extrabold text-[#059669] bg-white px-2 py-0.5 rounded-md border border-gray-200">
                  {sp.time}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
