interface EmptyStateProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-12 text-center">
      <div className="text-4xl mb-4">🏠</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">{description}</p>
      {action}
    </div>
  );
}
