import { PageHeader } from '@/components/PageHeader';
import { FaqList } from '@/components/FaqList';
import { getMockFaqs } from '@/mocks/faqs';

export default function FaqPage() {
  const items = getMockFaqs();
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Help"
        title="Frequently asked questions"
        subtitle="Answers for the sample marketplace: wallets, tokenization, offers, and testnet."
      />
      <FaqList items={items} />
    </div>
  );
}
