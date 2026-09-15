import { DOCUMENT_KIND_LABELS } from '@/lib/constants';
import { formatDate } from '@/lib/format';
import type { PropertyDocument } from '@/lib/types';

export function DocumentList({ documents }: { documents: PropertyDocument[] }) {
  if (!documents.length) {
    return <p className="text-sm text-gray-500">No sample documents attached.</p>;
  }

  return (
    <ul className="divide-y divide-gray-100 border border-gray-200 rounded-xl bg-white">
      {documents.map(doc => (
        <li key={doc.id} className="px-4 py-3 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-gray-900">{doc.title}</p>
            <p className="text-xs text-gray-500">
              {DOCUMENT_KIND_LABELS[doc.kind]} · {formatDate(doc.uploadedAt)}
            </p>
          </div>
          <span className="text-xs font-mono text-gray-400 truncate max-w-[10rem]">{doc.uri}</span>
        </li>
      ))}
    </ul>
  );
}
