import { PageHeader } from '@/components/PageHeader';
import { AgentCard } from '@/components/AgentCard';
import { getMockAgents } from '@/mocks/agents';

export default function AgentsPage() {
  const agents = getMockAgents();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="People"
        title="Marketplace agents"
        subtitle="Dummy specialist profiles attached to listings. Not real licensed brokers."
      />
      <div className="space-y-4">
        {agents.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
}
