import { PageTransition } from '../components/Layout/PageTransition';
import { data } from '../config/data';
import { SessionCard } from '../features/sessions/components/SessionCard';
import { useTitle } from '../hooks/useTitle';

export function Sessions() {
  useTitle('Sessions');
  const sortedSessions = [...data.sessions].sort((a, b) => b.number - a.number);

  return (
    <PageTransition>
      <div className="mb-12">
        <h1 className="font-serif text-48 font-bold mb-4">Sessions Timeline</h1>
        <p className="text-16 text-muted">A record of past discussions and a look at what's ahead.</p>
      </div>

      <div className="max-w-[800px] mx-auto relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-border" />
        <div className="space-y-12">
          {sortedSessions.map((session) => (
            <div key={session.id} className="pl-4">
              <SessionCard session={session} />
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
