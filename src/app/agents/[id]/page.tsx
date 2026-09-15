import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { getMockAgent, getMockAgents } from '@/mocks/agents';
import { truncateAddress } from '@/lib/format';
import Link from 'next/link';

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const agent = getMockAgent(id);
  if (!agent) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/agents" className="text-sm text-stellar-600 hover:underline">
        ← All agents
      </Link>
      <PageHeader eyebrow={agent.specialty} title={agent.name} subtitle={agent.title} />
      <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-3">
        <p className="text-gray-600">{agent.bio}</p>
        <p className="text-sm text-gray-500">{agent.location}</p>
        <p className="text-xs font-mono text-gray-400">{truncateAddress(agent.publicKey)}</p>
        <p className="text-sm">
          {agent.closedDeals} sample closes · {agent.rating.toFixed(1)} rating
        </p>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getMockAgents().map(agent => ({ id: agent.id }));
}
