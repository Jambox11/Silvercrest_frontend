import { test } from 'vitest';
import assert from 'node:assert/strict';
import { isStellarPublicKey, explorerAccountUrl, horizonUrl, readFreighterPublicKey } from '@/lib/stellar';
import { MOCK_WALLET_PUBLIC_KEY } from '@/lib/constants';
import { sharesCost, ownershipPct, estimatedYield } from '@/lib/shareMath';
import { filterAndSortProperties, getRelatedProperties } from '@/lib/filterProperties';
import type { Property, Listing } from '@/lib/types';

test('accepts a valid Stellar account id', () => {
  assert.equal(isStellarPublicKey(MOCK_WALLET_PUBLIC_KEY), true);
});

test('rejects short or lowercase keys', () => {
  assert.equal(isStellarPublicKey('not-a-key'), false);
  assert.equal(isStellarPublicKey(MOCK_WALLET_PUBLIC_KEY.toLowerCase()), false);
});

test('builds testnet explorer and horizon URLs', () => {
  assert.match(explorerAccountUrl('testnet', MOCK_WALLET_PUBLIC_KEY), /stellar.expert\/explorer\/testnet\/account\//);
  assert.equal(horizonUrl('testnet'), 'https://horizon-testnet.stellar.org');
});

test('readFreighterPublicKey returns null without an API', async () => {
  assert.equal(await readFreighterPublicKey(undefined), null);
});

test('readFreighterPublicKey returns a valid Freighter key', async () => {
  const key = await readFreighterPublicKey({
    isConnected: async () => true,
    getPublicKey: async () => MOCK_WALLET_PUBLIC_KEY,
  });
  assert.equal(key, MOCK_WALLET_PUBLIC_KEY);
});

test('share math stays non-negative', () => {
  assert.equal(sharesCost(10, 25), 250);
  assert.equal(sharesCost(-1, 25), 0);
  assert.equal(ownershipPct(25, 100), 25);
  assert.equal(estimatedYield(1000, 5), 50);
});

const props: Property[] = [
  {
    id: 'a',
    title: 'Alpha Villa',
    location: 'Miami, FL',
    price: 100,
    currency: 'USD',
    owner: MOCK_WALLET_PUBLIC_KEY,
    nftContract: 'C',
    nftId: 'n1',
    metadataUri: 'ipfs://x',
    createdAt: 2,
    image: '',
    propertyType: 'house',
  },
  {
    id: 'b',
    title: 'Beta Loft',
    location: 'Austin, TX',
    price: 200,
    currency: 'USD',
    owner: MOCK_WALLET_PUBLIC_KEY,
    nftContract: 'C',
    nftId: 'n2',
    metadataUri: 'ipfs://x',
    createdAt: 1,
    image: '',
    propertyType: 'condo',
  },
];

const listings: Listing[] = [
  { id: 'l1', propertyId: 'a', seller: MOCK_WALLET_PUBLIC_KEY, price: 110, currency: 'USD', status: 'active', createdAt: 2 },
  { id: 'l2', propertyId: 'b', seller: MOCK_WALLET_PUBLIC_KEY, price: 190, currency: 'USD', status: 'sold', createdAt: 1 },
];

test('filters by query and status then sorts by price', () => {
  const filtered = filterAndSortProperties(props, listings, { query: 'villa', status: 'active', sort: 'price-desc' });
  assert.deepEqual(filtered.map(p => p.id), ['a']);
});

test('related listings prefer matching property type', () => {
  const related = getRelatedProperties(props, 'a', 1);
  assert.equal(related[0].id, 'b');
});
