export const MOCK_WALLET_PUBLIC_KEY =
  'GDZST3XVCDTUJ76ZAV2HA72KYFL3JCPBHQ4PXESVXHMZQ5MDDG2WXYUP';

export const MOCK_SELLER_2 =
  'GBBO4ZDDZTSM2I4RGR24QFA4M2BHAX3STREIXLIQT7S5X6W3L3NEXMP';

export const MOCK_BUYER_2 =
  'GDQP2KPQGKAJY5TPHFMWECV526QRSRKRHLHDMAGJJAAZKQTXGRLGUAA';

export const MOCK_AGENT_KEY =
  'GCVPDL2QCDPSYDGKIKDL35QCCG3G6X776I4X6ZGMXHK4YQ7S5X6W3L3N';

export const STELLAR_EXPLORER_BASE: Record<'testnet' | 'mainnet', string> = {
  testnet: 'https://stellar.expert/explorer/testnet',
  mainnet: 'https://stellar.expert/explorer/public',
};

export const PROPERTY_TYPE_LABELS: Record<string, string> = {
  house: 'House',
  condo: 'Condo',
  penthouse: 'Penthouse',
  cabin: 'Cabin',
  commercial: 'Commercial',
  land: 'Land',
};

export const DOCUMENT_KIND_LABELS: Record<string, string> = {
  deed: 'Deed',
  inspection: 'Inspection',
  appraisal: 'Appraisal',
  insurance: 'Insurance',
  tax: 'Tax record',
  hoa: 'HOA',
};

export const PLATFORM_NAME = 'SilverKrest';
export const PLATFORM_TAGLINE = 'Tokenized real estate on Stellar';
export const DEFAULT_CURRENCY = 'USD';
export const FRACTIONAL_MIN_SHARES = 1;
export const WATCHLIST_STORAGE_KEY = 'sk_watchlist';
export const COMPARE_STORAGE_KEY = 'sk_compare';
