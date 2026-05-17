import type { Session } from '../../../types/index';
import { getMemberById } from '../../../config/data';
import { QuoteBlock } from '../../../components/Elements/QuoteBlock';
import { Calendar, User } from 'lucide-react';
import { cn } from '../../../utils/index';

export function SessionCard({ session }: { session: Session }) {
  const presenter = getMemberById(session.presenter);

  const statusColors = {
    completed: 'border-sage',
    upcoming: 'border-terracotta border-dashed',
    'in progress': 'border-gold',
  };

  return (
    <div className={cn(
      "bg-surface rounded-lg p-6 shadow-sm border-l-4 relative hover:shadow-md transition-shadow duration-300 ml-4",
      statusColors[session.status]
    )}>
      <div className="absolute -left-6 top-6 w-10 h-10 rounded-full bg-primary border-2 border-border flex items-center justify-center font-mono text-16 font-bold z-10 text-ink shadow-sm">
        {session.number}
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 text-14 text-muted mb-4 border-b border-border pb-4 ml-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gold" />
          <span>{new Date(session.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-gold" />
          <span>Led by <strong className="text-ink font-medium">{presenter?.name}</strong></span>
        </div>
        <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
        <div className="inline-flex items-center">
          <span className={cn(
            "px-2 py-0.5 rounded text-12 font-medium uppercase tracking-wider",
            session.status === 'completed' ? 'bg-sage/10 text-sage' : session.status === 'upcoming' ? 'bg-terracotta/10 text-terracotta' : 'bg-gold/10 text-gold'
          )}>
            {session.status}
          </span>
        </div>
      </div>

      <div className="ml-6">
        <h3 className="font-serif text-32 font-bold text-ink mb-4">{session.topic}</h3>
        
        {session.takeaways && session.takeaways.length > 0 && (
          <div className="mb-6">
            <h4 className="text-14 font-bold text-ink uppercase tracking-wider mb-3">Key Takeaways</h4>
            <ul className="space-y-2">
              {session.takeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3 text-16 text-muted">
                  <span className="text-gold mt-1">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {session.quoteOfSession && (
          <QuoteBlock text={session.quoteOfSession.text} author={session.quoteOfSession.author} />
        )}
      </div>
    </div>
  );
}
