import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Sparkles, ArrowRight, ShieldCheck, Coins } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeData';

export const WalletModal: React.FC = () => {
  const { isWalletModalOpen, closeWalletModal, openLoginModal } = useCart();

  if (!isWalletModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={closeWalletModal} />
      
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={closeWalletModal}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Santu Cash Top Banner Card */}
        <div className="relative rounded-2xl p-5 bg-gradient-to-br from-[#095e3d] to-[#042617] text-white overflow-hidden shadow-lg border border-[#388468] mb-5">
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F8C200]">
                Santu Cash
              </span>
              <img
                src={STORE_CONFIG.walletIconUrl}
                alt="Wallet"
                className="w-7 h-5 object-contain"
              />
            </div>

            <div className="mt-4 mb-2">
              <p className="text-[11px] text-emerald-200">Available Cashback Balance</p>
              <h2 className="text-3xl font-extrabold text-white font-mono tracking-tight mt-0.5">
                ₹ 150.00
              </h2>
            </div>

            <p className="text-[10px] text-emerald-200/90 leading-tight">
              Auto-applies at checkout on orders above ₹500
            </p>
          </div>
        </div>

        {/* Benefits breakdown */}
        <div className="space-y-3 mb-6">
          <h4 className="font-extrabold text-xs text-gray-900 uppercase tracking-wider">
            How Santu Cash Works:
          </h4>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
            <div className="size-8 rounded-lg bg-emerald-100 text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
              <Coins className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-extrabold text-xs text-gray-900">Earn 1% on Every Order</h5>
              <p className="text-[11px] text-gray-500">Every paint bucket, wire coil and fitting adds real cash to your wallet.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
            <div className="size-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-extrabold text-xs text-gray-900">Redeem on Orders Above ₹500</h5>
              <p className="text-[11px] text-gray-500">Zero expiry dates, no confusing voucher codes. It deducts straight from your bill total.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
            <div className="size-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-extrabold text-xs text-gray-900">Contractor Tier Bonuses</h5>
              <p className="text-[11px] text-gray-500">High-volume site purchases unlock additional quarterly cashback rebates.</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => {
            closeWalletModal();
            openLoginModal();
          }}
          className="w-full bg-[#F8C200] hover:bg-[#E5B200] text-gray-900 font-extrabold text-xs py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 active:scale-95"
        >
          <span>Login to View Your Personal Balance</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
