import { Quote } from 'lucide-react';

interface QuoteBlockProps {
  text: string;
  author: string;
}

export function QuoteBlock({ text, author }: QuoteBlockProps) {
  return (
    <blockquote className="relative p-6 bg-surface-elevated rounded-lg mt-4 border border-border">
      <Quote className="absolute top-4 left-4 w-8 h-8 text-gold/20" />
      <p className="relative z-10 font-serif text-20 italic text-ink mb-2 leading-relaxed pl-6">
        "{text}"
      </p>
      <footer className="relative z-10 text-14 text-muted pl-6">— {author}</footer>
    </blockquote>
  );
}
