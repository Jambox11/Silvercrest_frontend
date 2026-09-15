import type { FaqItem } from '@/lib/types';

export const MOCK_FAQS: FaqItem[] = [
  {
    id: 'faq_001',
    category: 'Getting started',
    question: 'Is this live mainnet trading?',
    answer:
      'No. SilverKrest currently ships with dummy marketplace data and simulated wallet flows so the product can be explored without signing real transactions.',
  },
  {
    id: 'faq_002',
    category: 'Getting started',
    question: 'Do I need a Stellar wallet?',
    answer:
      'Connect is simulated in demo mode. The UI still follows a non-custodial pattern: the app never asks for a secret key.',
  },
  {
    id: 'faq_003',
    category: 'Tokenization',
    question: 'What does tokenizing a property mean here?',
    answer:
      'A property NFT is registered on the dummy Soroban registry with metadata, owner, and listing state. Ownership transfer is coordinated by the contract, not by holding user funds.',
  },
  {
    id: 'faq_004',
    category: 'Tokenization',
    question: 'Can I buy a fraction of a listing?',
    answer:
      'Some dummy listings expose sharePrice, totalShares, and availableShares. Fractional purchase is mocked in the UI and API.',
  },
  {
    id: 'faq_005',
    category: 'Offers',
    question: 'How do offers settle?',
    answer:
      'Offers move pending → accepted → sale finalized. In this demo the steps are recorded against mock ledgers and activity events.',
  },
  {
    id: 'faq_006',
    category: 'Compliance',
    question: 'Is KYC required?',
    answer:
      'The demo includes a dummy KYC profile so the settings and profile screens can show verified / pending states. It is not a real identity check.',
  },
  {
    id: 'faq_007',
    category: 'Network',
    question: 'Which Stellar network is used?',
    answer:
      'The default is testnet. You can switch networks in the header; explorer links follow the selected network.',
  },
  {
    id: 'faq_008',
    category: 'Data',
    question: 'Where does listing data come from?',
    answer:
      'By default NEXT_PUBLIC_USE_MOCK=true serves local dummy catalogs. Set it to false to prefer the FastAPI backend, with mock fallback on errors.',
  },
];

export function getMockFaqs(category?: string): FaqItem[] {
  if (!category || category === 'all') return MOCK_FAQS;
  return MOCK_FAQS.filter(item => item.category === category);
}

export function getFaqCategories(): string[] {
  return Array.from(new Set(MOCK_FAQS.map(item => item.category)));
}
