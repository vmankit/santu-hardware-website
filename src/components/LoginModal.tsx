import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, CheckCircle2, ArrowRight, LogOut, Package } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeData';

const isValidMobile = (v: string) => /^[6-9]\d{9}$/.test(v);

export const LoginModal: React.FC = () => {
  const { isLoginModalOpen, closeLoginModal, customer, saveCustomer, logout, orders, walletBalance } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    if (isLoginModalOpen) {
      setName(customer?.name ?? '');
      setPhone(customer?.phone ?? '');
      setJustSaved(false);
    }
  }, [isLoginModalOpen, customer]);

  if (!isLoginModalOpen) return null;

  const canSubmit = name.trim().length >= 2 && isValidMobile(phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    saveCustomer({ name: name.trim(), phone });
    setJustSaved(true);
    setTimeout(closeLoginModal, 1100);
  };

  const showAccount = customer && !justSaved;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60" onClick={closeLoginModal} />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full p-6 z-10">
        <button
          onClick={closeLoginModal}
          aria-label="Close"
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-5">
          <img src={STORE_CONFIG.logoUrl} alt="Santu Hardware" className="h-12 w-auto mx-auto mb-3" />
          <h3 className="font-extrabold text-lg text-gray-900">
            {justSaved ? `Welcome, ${customer?.name ?? name}!` : showAccount ? 'Your account' : 'Login'}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            {justSaved
              ? 'Your details are saved on this phone.'
              : showAccount
              ? 'Saved on this device and added to every WhatsApp order.'
              : 'Save your name and number once — every WhatsApp order will include them automatically.'}
          </p>
        </div>

        {justSaved && <CheckCircle2 className="w-12 h-12 text-[#059669] mx-auto" />}

        {!justSaved && (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="login-name" className="block text-xs font-bold text-gray-700 mb-1.5">Your name</label>
              <input
                id="login-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                autoComplete="name"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20"
              />
            </div>

            <div>
              <label htmlFor="login-phone" className="block text-xs font-bold text-gray-700 mb-1.5">Mobile number</label>
              <div className="flex items-center rounded-xl border border-gray-300 bg-gray-50 px-3 focus-within:border-[#059669] focus-within:ring-2 focus-within:ring-[#059669]/20">
                <span className="text-sm font-bold text-gray-500 font-mono pr-2 border-r border-gray-300">+91</span>
                <input
                  id="login-phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="10 digit number"
                  autoComplete="tel-national"
                  className="w-full bg-transparent p-2.5 text-sm font-bold text-gray-900 font-mono outline-none"
                />
              </div>
              {phone.length === 10 && !isValidMobile(phone) && (
                <p className="text-[11px] text-red-600 mt-1">Enter a valid Indian mobile number.</p>
              )}
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full bg-[#111827] hover:bg-black disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold text-sm py-3 rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <span>{customer ? 'Update details' : 'Save & continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {showAccount && (
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-gray-600">
                <Package className="w-4 h-4" /> Orders sent from this phone
              </span>
              <span className="font-bold font-mono text-gray-900">{orders.length}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Santu Cash earned</span>
              <span className="font-bold font-mono text-[#059669]">₹{walletBalance}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                logout();
                closeLoginModal();
              }}
              className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-red-600 py-2"
            >
              <LogOut className="w-4 h-4" /> Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
