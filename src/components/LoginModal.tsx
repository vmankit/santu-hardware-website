import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeData';

export const LoginModal: React.FC = () => {
  const { isLoginModalOpen, closeLoginModal } = useCart();
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState<'phone' | 'otp' | 'success'>('phone');
  const [otp, setOtp] = useState(['', '', '', '']);

  if (!isLoginModalOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 10) {
      setStep('otp');
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
      closeLoginModal();
      setStep('phone');
      setPhone('');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={closeLoginModal} />
      
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full p-6 z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={closeLoginModal}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <img
            src={STORE_CONFIG.logoUrl}
            alt="Santu Hardware"
            className="h-10 w-auto mx-auto mb-2"
          />
          <h3 className="font-extrabold text-lg text-gray-900">
            {step === 'phone' ? 'Login or Sign Up' : step === 'otp' ? 'Enter 4-Digit OTP' : 'Welcome to Santu Hardware!'}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            {step === 'phone'
              ? 'Get instant wholesale contractor prices & 1% cashback'
              : step === 'otp'
              ? `We sent an SMS code to +91 ${phone}`
              : 'Your session has been authenticated'}
          </p>
        </div>

        {step === 'phone' && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">Mobile Number</label>
              <div className="flex items-center rounded-xl border border-gray-300 focus-within:border-[#059669] focus-within:ring-2 focus-within:ring-[#059669]/20 px-3 bg-gray-50">
                <span className="text-xs font-bold text-gray-500 font-mono pr-2 border-r border-gray-300">
                  +91
                </span>
                <input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter 10 digit number"
                  className="w-full bg-transparent p-2.5 text-xs font-bold text-gray-900 font-mono outline-none"
                  autoFocus
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={phone.length !== 10}
              className="w-full bg-[#111827] hover:bg-black disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold text-xs py-3 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>Continue with OTP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {step === 'otp' && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="flex justify-center gap-2">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    const newOtp = [...otp];
                    newOtp[idx] = val;
                    setOtp(newOtp);
                    if (val && idx < 3) {
                      document.getElementById(`otp-${idx + 1}`)?.focus();
                    }
                  }}
                  className="size-11 rounded-xl border border-gray-300 text-center font-mono font-bold text-base focus:border-[#059669] outline-none bg-gray-50"
                  autoFocus={idx === 0}
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs py-3 rounded-xl transition-colors shadow-sm"
            >
              Verify &amp; Enter
            </button>

            <button
              type="button"
              onClick={() => setStep('phone')}
              className="w-full text-center text-xs text-gray-500 hover:text-black font-semibold"
            >
              Change Mobile Number
            </button>
          </form>
        )}

        {step === 'success' && (
          <div className="text-center py-4 space-y-2 animate-in zoom-in-95">
            <CheckCircle2 className="w-12 h-12 text-[#059669] mx-auto" />
            <p className="font-bold text-sm text-gray-900">Successfully Logged In!</p>
            <p className="text-xs text-gray-500">Redirecting to your orders...</p>
          </div>
        )}

      </div>
    </div>
  );
};
