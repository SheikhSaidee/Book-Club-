import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  color?: 'sage' | 'gold' | 'terracotta' | 'ink';
  animated?: boolean;
}

export function ProgressBar({ value, color = 'sage', animated = true }: ProgressBarProps) {
  const colors = {
    sage: 'bg-sage',
    gold: 'bg-gold',
    terracotta: 'bg-terracotta',
    ink: 'bg-ink'
  };

  return (
    <div className="w-full bg-border rounded-full h-2 overflow-hidden">
      <motion.div
        className={`h-full ${colors[color]} rounded-full`}
        initial={animated ? { width: 0 } : { width: `${value}%` }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </div>
  );
}
