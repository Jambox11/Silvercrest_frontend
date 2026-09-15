export function sharesCost(shares: number, sharePrice: number): number {
  return Math.max(0, shares) * Math.max(0, sharePrice);
}

export function ownershipPct(shares: number, totalShares: number): number {
  if (!totalShares) return 0;
  return (shares / totalShares) * 100;
}

export function estimatedYield(amount: number, capRate: number): number {
  return amount * (capRate / 100);
}
