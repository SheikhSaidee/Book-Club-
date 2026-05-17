import { PageTransition } from '../components/Layout/PageTransition';
import { data } from '../config/data';
import { ProgressBar } from '../components/Elements/ProgressBar';
import { Bookmark, FileVideo } from 'lucide-react';
import { useTitle } from '../hooks/useTitle';

export function BookDetail() {
  useTitle('Book Details');
  const { currentBook, members } = data;
  const progress = (currentBook.currentSession / currentBook.totalSessions) * 100;

  // Find assigned topics
  const assignedTopics = members.filter(m => m.assignedTopic).sort((a, b) => (a.assignedSession || 0) - (b.assignedSession || 0));

  return (
    <PageTransition>
      <div className="bg-gradient-to-br from-surface-elevated to-surface rounded-2xl p-8 md:p-16 mb-12 shadow-sm border border-border">
        <h1 className="font-serif text-48 md:text-[64px] font-bold text-ink mb-4">{currentBook.title}</h1>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <p className="font-sans text-20 text-muted uppercase tracking-wider">{currentBook.author}</p>
          <div className="w-1.5 h-1.5 rounded-full bg-border" />
          <div className="flex gap-2">
            {currentBook.genre.map(g => (
              <span key={g} className="px-3 py-1 bg-surface border border-border text-ink text-12 uppercase tracking-wider rounded-md font-medium">
                {g}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-surface p-6 rounded-lg border border-border">
          <div className="flex justify-between items-center mb-4">
            <span className="font-serif text-20 text-ink">We're on session {currentBook.currentSession} of {currentBook.totalSessions} — {Math.round(progress)}% through</span>
          </div>
          <ProgressBar value={progress} color="sage" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-surface rounded-lg p-8 shadow-sm border border-border">
            <h2 className="font-serif text-24 font-bold mb-6">Topic Assignments</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border text-12 text-muted uppercase tracking-wider">
                    <th className="pb-3 pr-4 font-medium">Member</th>
                    <th className="pb-3 pr-4 font-medium">Topic</th>
                    <th className="pb-3 pr-4 font-medium">Session</th>
                    <th className="pb-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="text-14">
                  {assignedTopics.map(m => (
                    <tr key={m.id} className="border-b border-border/50 last:border-0">
                      <td className="py-4 pr-4 font-medium">{m.name}</td>
                      <td className="py-4 pr-4 text-muted">{m.assignedTopic}</td>
                      <td className="py-4 pr-4">Session {m.assignedSession}</td>
                      <td className="py-4">
                        {(m.assignedSession || 0) < currentBook.currentSession ? (
                          <span className="text-sage bg-sage/10 px-2 py-1 rounded text-12 font-medium">Presented</span>
                        ) : (m.assignedSession || 0) === currentBook.currentSession ? (
                          <span className="text-gold bg-gold/10 px-2 py-1 rounded text-12 font-medium">Upcoming</span>
                        ) : (
                          <span className="text-muted bg-surface-elevated px-2 py-1 rounded text-12 font-medium">Scheduled</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-surface rounded-lg p-8 shadow-sm border border-dashed border-border flex flex-col items-center justify-center min-h-[300px] text-center">
            <FileVideo className="w-12 h-12 text-muted mb-4" />
            <h2 className="font-serif text-24 font-bold text-ink mb-2">Concept Map</h2>
            <p className="text-muted mb-6">A live Miro board embedding will go here.</p>
            <button className="px-6 py-2 bg-surface-elevated border border-border text-ink rounded-md font-medium hover:bg-border transition-colors">
              Open Board in Miro
            </button>
          </section>
        </div>

        <div className="lg:col-span-1">
          <section className="bg-surface rounded-lg p-6 shadow-sm border border-border sticky top-28">
            <h2 className="font-serif text-24 font-bold mb-6">Discussion Points</h2>
            <ul className="space-y-4">
              {[
                "How does the concept of 'WYSIATI' apply to our daily decision-making?",
                "Can you share an instance where you caught yourself using the availability heuristic?",
                "What strategies can we use to engage System 2 more frequently?",
                "How does the anchoring effect influence our perception of value?"
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-14 text-ink">
                  <Bookmark className="w-4 h-4 text-gold mt-1 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
