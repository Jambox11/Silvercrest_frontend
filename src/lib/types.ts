export type StellarNetwork = 'testnet' | 'mainnet';

export interface WalletState {
  isConnected: boolean;
  publicKey: string | null;
  network: StellarNetwork;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  currency: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  owner: string;
}

export interface Listing {
  id: string;
  propertyId: string;
  seller: string;
  price: number;
  currency: string;
  status: 'active' | 'pending' | 'sold';
  createdAt: Date;
}
