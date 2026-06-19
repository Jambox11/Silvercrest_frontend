'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from '@/hooks/useWallet';
import { useToast } from '@/context/ToastProvider';
import { submitListing } from '@/lib/api';
import { WalletConnect } from '@/components/WalletConnect';
import { EmptyState } from '@/components/ui/EmptyState';
import { PROPERTY_TYPE_LABELS } from '@/lib/constants';
import type { PropertyType } from '@/lib/types';

const PROPERTY_TYPES = Object.keys(PROPERTY_TYPE_LABELS) as PropertyType[];

export default function ListPropertyPage() {
  const wallet = useWallet();
  const { showToast } = useToast();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    title: '',
    location: '',
    price: '',
    beds: '',
    baths: '',
    sqft: '',
    propertyType: 'house' as PropertyType,
    description: '',
  });

  const update = (field: string, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  if (!wallet.isConnected) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16">
        <EmptyState
          title="Connect to list a property"
          description="Connect your Stellar wallet to tokenize and list a property on the marketplace."
          action={<WalletConnect onConnect={wallet.connect} isLoading={wallet.isLoading} />}
        />
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallet.publicKey) return;

    setSubmitting(true);
    try {
      const property = await submitListing({
        title: form.title,
        location: form.location,
        price: Number(form.price),
        beds: form.beds ? Number(form.beds) : undefined,
        baths: form.baths ? Number(form.baths) : undefined,
        sqft: form.sqft ? Number(form.sqft) : undefined,
        propertyType: form.propertyType,
        description: form.description,
        owner: wallet.publicKey,
      });
      showToast(`${property.title} submitted for tokenization`);
      router.push(`/properties/${property.id}`);
    } catch {
      showToast('Failed to submit listing', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900">List a Property</h1>
      <p className="text-gray-500 mt-2">
        Tokenize your real estate asset and list it on the SilverKrest marketplace.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <Field label="Property Title" required>
          <input
            value={form.title}
            onChange={e => update('title', e.target.value)}
            className={inputClass}
            placeholder="Sunny Beachfront Villa"
            required
          />
        </Field>

        <Field label="Location" required>
          <input
            value={form.location}
            onChange={e => update('location', e.target.value)}
            className={inputClass}
            placeholder="Miami, FL"
            required
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Price (USD)" required>
            <input
              type="number"
              value={form.price}
              onChange={e => update('price', e.target.value)}
              className={inputClass}
              min={1}
              required
            />
          </Field>
          <Field label="Property Type">
            <select
              value={form.propertyType}
              onChange={e => update('propertyType', e.target.value)}
              className={inputClass}
            >
              {PROPERTY_TYPES.map(t => (
                <option key={t} value={t}>{PROPERTY_TYPE_LABELS[t]}</option>
              ))}
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Field label="Beds">
            <input type="number" value={form.beds} onChange={e => update('beds', e.target.value)} className={inputClass} min={0} />
          </Field>
          <Field label="Baths">
            <input type="number" value={form.baths} onChange={e => update('baths', e.target.value)} className={inputClass} min={0} />
          </Field>
          <Field label="Sq Ft">
            <input type="number" value={form.sqft} onChange={e => update('sqft', e.target.value)} className={inputClass} min={0} />
          </Field>
        </div>

        <Field label="Description">
          <textarea
            value={form.description}
            onChange={e => update('description', e.target.value)}
            className={`${inputClass} h-28 resize-none`}
            placeholder="Describe the property, amenities, and investment highlights..."
          />
        </Field>

        <p className="text-xs text-gray-400">
          Simulated submission — property will appear in demo mode. On-chain minting via Soroban coming soon.
        </p>

        <button
          type="submit"
          disabled={submitting}
          className="w-full px-6 py-3 bg-stellar-500 text-white rounded-lg font-semibold hover:bg-stellar-600 disabled:opacity-60 transition-colors"
        >
          {submitting ? 'Submitting...' : 'Submit for Tokenization'}
        </button>
      </form>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}{required && ' *'}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  'w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stellar-500';
