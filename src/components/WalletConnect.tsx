interface WalletConnectProps {
  onConnect: () => void;
  isLoading: boolean;
}

export function WalletConnect({ onConnect, isLoading }: WalletConnectProps) {
  return (
    <button
      onClick={onConnect}
      disabled={isLoading}
      className="px-4 py-2 bg-stellar-500 text-white rounded-lg font-medium hover:bg-stellar-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {isLoading ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
}
