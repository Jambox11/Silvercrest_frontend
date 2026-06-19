'use client';

import { useState } from 'react';
import type { Property, Listing } from '@/lib/types';
import { formatPrice } from '@/lib/format';
import { submitOffer } from '@/lib/api';
import { useWallet } from '@/hooks/useWallet';
import { useToast } from '@/context/ToastProvider';

interface MakeOfferModalProps {
  property: Property;
  listing: Listing;
  onClose: () => void;
  onSuccess?: () => void;
}

export function MakeOfferModal({ property, listing, onClose, onSuccess }: MakeOfferModalProps) {
  const wallet = useWallet();
  const { showToast } = useToast();
  const [amount, setAmount] = useState(Math.round(listing.price * 0.95).toString());
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallet.publicKey) return;

    const price = Number(amount);
    if (!price || price <= 0) {
      showToast('Enter a valid offer amount', 'error');
      return;
    }

    setSubmitting(true);
    try {
      await submitOffer({ listingId: listing.id, buyer: wallet.publicKey, price });
      showToast(`Offer of ${formatPrice(price)} submitted for ${property.title}`);
      onSuccess?.();
      onClose();
    } catch {
      showToast('Failed to submit offer', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
        onClick={e => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-gray-900">Make an Offer</h3>
        <p className="text-gray-500 text-sm mt-1">{property.title}</p>
        <p className="text-stellar-600 font-semibold mt-2">
          Listed at {formatPrice(listing.price, listing.currency)}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Offer (USD)
            </label>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stellar-500"
              min={1}
              required
            />
          </div>

          <p className="text-xs text-gray-400">
            This is a simulated offer. On-chain signing via Freighter coming soon.
          </p>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 px-4 py-2 bg-stellar-500 text-white rounded-lg text-sm font-semibold hover:bg-stellar-600 disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Submit Offer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
