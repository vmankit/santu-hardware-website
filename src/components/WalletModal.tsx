import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Wallet, Coins, MessageCircle, ArrowRight } from 'lucide-react';

export const WalletModal: React.FC = () => {
  const { isWalletModalOpen, closeWalletModal, openLoginModal, customer, orders, walletBalance } = useCart();

  if (!isWalletModalOpen) return null;

  const recent = orders.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60" onClick={closeWalletModal} />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeWalletModal}
          aria-label="Close"
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Balance card */}
        <div className="rounded-2xl p-5 bg-gradient-to-br from-[#095e3d] to-[#042617] text-white mb-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F8C200]">Santu Cash</span>
            <Wallet className="w-6 h-6 text-[#F8C200]" />
          </div>
          <p className="text-[11px] text-emerald-200 mt-4">
            {customer ? `${customer.name}'s balance` : 'Your balance'}
          </p>
          <h2 className="text-3xl font-extrabold font-mono tracking-tight mt-0.5">₹ {walletBalance}</h2>
          <p className="text-[11px] text-emerald-200/90 mt-2 leading-snug">
            {orders.length === 0
              ? 'Earn 1% back on every order you send us.'
              : `From ${orders.length} order${orders.length > 1 ? 's' : ''} sent from this phone.`}
          </p>
        </div>

        {/* How it works */}
        <div className="space-y-3 mb-5">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
            <div className="size-8 rounded-lg bg-emerald-100 text-[#059669] flex items-center justify-center shrink-0">
              <Coins className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-extrabold text-xs text-gray-900">1% back on every order</h5>
              <p className="text-[11px] text-gray-600">Added here when you send an order from the cart.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
            <div className="size-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-extrabold text-xs text-gray-900">Redeem on your next order</h5>
              <p className="text-[11px] text-gray-600">
                Your balance is written into the WhatsApp order automatically. The shop deducts it when you pay on delivery.
              </p>
            </div>
          </div>
        </div>

        {recent.length > 0 && (
          <div className="mb-5">
            <h4 className="font-extrabold text-xs text-gray-900 uppercase tracking-wider mb-2">Recent orders</h4>
            <ul className="divide-y divide-gray-100 border border-gray-100 rounded-xl">
              {recent.map((o) => (
                <li key={o.id} className="flex items-center justify-between px-3 py-2 text-xs">
                  <div>
                    <p className="font-mono font-bold text-gray-900">{o.id}</p>
                    <p className="text-gray-500">
                      {new Date(o.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} · {o.itemCount} item
                      {o.itemCount > 1 ? 's' : ''} · ₹{o.total}
                    </p>
                  </div>
                  <span className="font-mono font-bold text-[#059669]">+₹{o.cashback}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!customer ? (
          <button
            onClick={() => {
              closeWalletModal();
              openLoginModal();
            }}
            className="w-full bg-[#F8C200] hover:bg-[#E5B200] text-gray-900 font-extrabold text-sm py-3 rounded-xl transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Login to save your balance</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <p className="text-[11px] text-center text-gray-500">
            Balance is kept on this phone. Clearing browser data resets it.
          </p>
        )}
      </div>
    </div>
  );
};
