import React from 'react';
import { Flame, FlameKindling } from 'lucide-react';

export function StreakBadge({ count }: { count: number }) {
  if (count === 0) {
    return (
      <div className="inline-flex items-center gap-1 text-muted bg-surface-elevated px-2 py-1 rounded-md text-12 font-bold font-mono border border-border shadow-sm">
        <FlameKindling className="w-4 h-4" />
        0 in a row
      </div>
    );
  }
  return (
    <div className="inline-flex items-center gap-1 text-terracotta bg-terracotta/10 px-2 py-1 rounded-md text-12 font-bold font-mono border border-terracotta/20 shadow-sm">
      <Flame className="w-4 h-4" />
      {count} in a row
    </div>
  );
}
