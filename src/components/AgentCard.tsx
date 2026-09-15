import Link from 'next/link';
import type { AgentProfile } from '@/lib/types';

export function AgentCard({ agent }: { agent: AgentProfile }) {
  return (
    <Link
      href={`/agents/${agent.id}`}
      className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-stellar-200 hover:shadow-sm transition-all"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={agent.avatar} alt="" className="h-16 w-16 rounded-full object-cover bg-gray-100" />
      <div>
        <h3 className="font-semibold text-gray-900">{agent.name}</h3>
        <p className="text-sm text-stellar-600">{agent.title}</p>
        <p className="text-xs text-gray-500 mt-1">
          {agent.location} · {agent.closedDeals} sample closes · {agent.rating.toFixed(1)} rating
        </p>
      </div>
    </Link>
  );
}
