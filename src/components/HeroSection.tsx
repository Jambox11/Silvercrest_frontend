import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-stellar-50 to-stellar-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Tokenized Real Estate on Stellar
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover, list, and trade property with blockchain certainty.
          Non-custodial wallet signing, transparent transactions, and instant settlements.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/discover"
            className="px-6 py-3 bg-stellar-500 text-white rounded-lg font-semibold hover:bg-stellar-600 transition-colors"
          >
            Start Exploring
          </Link>
          <Link
            href="/list"
            className="px-6 py-3 bg-white text-stellar-600 border border-stellar-200 rounded-lg font-semibold hover:bg-stellar-50 transition-colors"
          >
            List Property
          </Link>
          <Link
            href="/#features"
            className="px-6 py-3 text-stellar-600 font-semibold hover:underline"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
