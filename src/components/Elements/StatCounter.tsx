import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export function StatCounter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      if (value === 0) {
        setCount(0);
        return;
      }
      let start = 0;
      const end = value;
      const duration = 1500;
      const incrementTime = Math.max(16, duration / end);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [value, inView]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="font-mono text-48 font-bold text-ink">{count}</span>
      <span className="text-14 text-muted uppercase tracking-wider">{label}</span>
    </div>
  );
}
