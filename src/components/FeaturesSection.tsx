export function FeaturesSection() {
  const features = [
    {
      title: 'Non-Custodial',
      description: 'Your keys, your assets. Sign transactions directly from your Freighter wallet.',
      icon: '🔐',
    },
    {
      title: 'Instant Settlement',
      description: 'Transparent on-chain transactions with atomic swap guarantees.',
      icon: '⚡',
    },
    {
      title: 'RWA Verified',
      description: 'Smart contracts verify property ownership and transfer rights.',
      icon: '✓',
    },
    {
      title: 'Portfolio Tracking',
      description: 'Monitor your holdings, pending offers, and transaction history.',
      icon: '📊',
    },
    {
      title: 'Network Flexibility',
      description: 'Testnet exploration or mainnet trading—switch anytime.',
      icon: '🌐',
    },
    {
      title: 'Developer Friendly',
      description: 'Open source design system and Soroban contract examples.',
      icon: '👨‍💻',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Why SilverKrest?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
