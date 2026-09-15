import type { AgentProfile } from '@/lib/types';
import { MOCK_AGENT_KEY, MOCK_SELLER_2, MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';

export const MOCK_AGENTS: AgentProfile[] = [
  {
    id: 'agent_001',
    name: 'Elena Vasquez',
    title: 'Coastal Markets Lead',
    location: 'Miami, FL',
    bio: 'Dummy profile for the demo marketplace. Specializes in tokenized oceanfront assets and fractional beach inventory.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
    rating: 4.9,
    closedDeals: 42,
    specialty: 'Waterfront',
    publicKey: MOCK_AGENT_KEY,
  },
  {
    id: 'agent_002',
    name: 'Marcus Chen',
    title: 'Mountain Portfolio Advisor',
    location: 'Aspen, CO',
    bio: 'Demo advisor covering ski markets, chalets, and seasonal rental yield models.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    rating: 4.8,
    closedDeals: 31,
    specialty: 'Ski & mountain',
    publicKey: MOCK_SELLER_2,
  },
  {
    id: 'agent_003',
    name: 'Priya Shah',
    title: 'Urban Tokenization Desk',
    location: 'New York, NY',
    bio: 'Works penthouses, lofts, and mixed-use buildings on the dummy Stellar registry.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200',
    rating: 4.7,
    closedDeals: 55,
    specialty: 'Urban luxury',
    publicKey: MOCK_WALLET_PUBLIC_KEY,
  },
  {
    id: 'agent_004',
    name: 'Jonah Brooks',
    title: 'Sunbelt Acquisitions',
    location: 'Austin, TX',
    bio: 'Dummy coverage for Texas and Arizona residential inventory.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    rating: 4.6,
    closedDeals: 22,
    specialty: 'Sunbelt residential',
    publicKey: MOCK_SELLER_2,
  },
];

export function getMockAgents(): AgentProfile[] {
  return MOCK_AGENTS;
}

export function getMockAgent(id: string): AgentProfile | undefined {
  return MOCK_AGENTS.find(a => a.id === id);
}
